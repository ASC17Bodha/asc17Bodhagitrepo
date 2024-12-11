@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
    @Autowired
    private AdminService adminService;
    
    @PostMapping("/register")
    public ResponseEntity<?> registerAdmin(@Valid @RequestBody Admin admin) {
        try {
            Admin registeredAdmin = adminService.registerAdmin(admin);
            return ResponseEntity.ok(registeredAdmin);
        } catch (Exception e) {
            return ResponseEntity
                .badRequest()
                .body(new ErrorResponse(e.getMessage()));
        }
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            Admin admin = adminService.validateLogin(
                loginRequest.getEmail(), 
                loginRequest.getPassword()
            );
            return ResponseEntity.ok(new LoginResponse("Login successful", admin));
        } catch (Exception e) {
            return ResponseEntity
                .badRequest()
                .body(new ErrorResponse(e.getMessage()));
        }
    }
}