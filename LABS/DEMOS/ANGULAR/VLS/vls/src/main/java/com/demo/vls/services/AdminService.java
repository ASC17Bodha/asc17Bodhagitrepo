@Service
@Transactional
@Slf4j
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public Admin registerAdmin(Admin admin) {
        if (adminRepository.existsByEmail(admin.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        return adminRepository.save(admin);
    }
    
    public Admin validateLogin(String email, String password) {
        Admin admin = adminRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("Admin not found"));
            
        if (admin.getLoginAttempts() >= 3 && 
            admin.getLockoutEndTime() != null && 
            admin.getLockoutEndTime().isAfter(LocalDateTime.now())) {
            throw new RuntimeException("Account is locked");
        }
        
        if (!passwordEncoder.matches(password, admin.getPassword())) {
            handleFailedLogin(admin);
            throw new RuntimeException("Invalid credentials");
        }
        
        resetLoginAttempts(admin);
        return admin;
    }
    
    private void handleFailedLogin(Admin admin) {
        admin.setLoginAttempts(admin.getLoginAttempts() + 1);
        admin.setLastLoginAttempt(LocalDateTime.now());
        
        if (admin.getLoginAttempts() >= 3) {
            admin.setLockoutEndTime(LocalDateTime.now().plusMinutes(30));
        }
        
        adminRepository.save(admin);
    }
    
    private void resetLoginAttempts(Admin admin) {
        admin.setLoginAttempts(0);
        admin.setLockoutEndTime(null);
        adminRepository.save(admin);
    }
}
