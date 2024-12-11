///*
// Identify the various classes, attributes, methods and the relationships between the classes for the below use case.
//A company wants to build an application to store the details of their meeting rooms. There are two types of meeting rooms - one with Zoom calling facility and the second without Zoom calling facility.
//
//All meeting rooms are identified using a unique identifier. The application should also maintain the information about the capacity of each meeting room and the floor in which it is located.
//For meeting rooms with Zoom calling facility, the application must also maintain related information like Zoom device id and Zoom account id.
//Employees can book meeting rooms by providing the following information - employee id, meeting date, meeting time, and duration of meeting.
//All meeting bookings are also stored by the application and employees can get meeting information by providing the date of the meeting.
// */
//package asgn;
//
//// public class asgn2_1 {
//
//// }
//
//// class MeetingRooms{
////     int id;
////     int capacity;
////     int floor;
////     boolean zoom;
////     String zoomDeviceId;
////     String zoomAccountId;
////     MeetingRooms(int id, int capacity, int floor, boolean zoom, String zoomDeviceId, String zoomAccountId){
////         this.id=id;
////         this.capacity=capacity;
////         this.floor=floor;
////         this.zoom=zoom;
////         this.zoomDeviceId=zoomDeviceId;
////         this.zoomAccountId=zoomAccountId;
////     }
////     public void display(){
////         System.out.println("id: "+id+" capacity: "+capacity+" floor: "+floor+" zoom: "+zoom+" zoomDeviceId: "+zoomDeviceId+" zoomAccountId: "+zoomAccountId);
////     }
////     public void bookMeetingRoom(int employeeId, String date, String time, int duration){
//
////         System.out.println("Meeting booked for employeeId: "+employeeId+" date: "+date+" time: "+time+" duration: "+duration);
////     }
////     public void getMeetingInfo(String date){
////         System.out.println("Meeting info for date: "+date);
////     }
////     public void cancelMeeting(String date){
////         System.out.println("Meeting cancelled for date: "+date);
////     }
////     public void displayMeetingInfo(String date){
////         System.out.println("Meeting info for date: "+date);
////     }
//
//// }
//
//
//import java.time.*;
//import java.util.*;
//
//abstract class MeetingRoom {
//    private String roomId;
//    private int capacity;
//    private int floor;
//
//    public MeetingRoom(String roomId, int capacity, int floor) {
//        this.roomId = roomId;
//        this.capacity = capacity;
//        this.floor = floor;
//    }
//
//    public abstract String getRoomDetails();
//
//    public boolean isAvailable(LocalDate date, LocalTime time, int duration) {
//        return true;
//    }
//
//    public String getRoomId() { return roomId; }
//    public int getCapacity() { return capacity; }
//    public int getFloor() { return floor; }
//}
//
//class StandardMeetingRoom extends MeetingRoom {
//    public StandardMeetingRoom(String roomId, int capacity, int floor) {
//        super(roomId, capacity, floor);
//    }
//
//    @Override
//    public String getRoomDetails() {
//        return String.format("Standard Meeting Room - ID: %s, Capacity: %d, Floor: %d",
//                getRoomId(), getCapacity(), getFloor());
//    }
//}
//
//class ZoomMeetingRoom extends MeetingRoom {
//    private String zoomDeviceId;
//    private String zoomAccountId;
//
//    public ZoomMeetingRoom(String roomId, int capacity, int floor, String zoomDeviceId, String zoomAccountId) {
//        super(roomId, capacity, floor);
//        this.zoomDeviceId = zoomDeviceId;
//        this.zoomAccountId = zoomAccountId;
//    }
//
//    @Override
//    public String getRoomDetails() {
//        return String.format("Zoom Meeting Room - ID: %s, Capacity: %d, Floor: %d, Device ID: %s",
//                getRoomId(), getCapacity(), getFloor(), zoomDeviceId);
//    }
//
//    public String getZoomDetails() {
//        return String.format("Zoom Device ID: %s, Account ID: %s", zoomDeviceId, zoomAccountId);
//    }
//}
//
//class Booking {
//    private String bookingId;
//    private String employeeId;
//    private MeetingRoom meetingRoom;
//    private LocalDate meetingDate;
//    private LocalTime meetingTime;
//    private int duration;
//
//    public Booking(String bookingId, String employeeId, MeetingRoom meetingRoom,
//                  LocalDate meetingDate, LocalTime meetingTime, int duration) {
//        this.bookingId = bookingId;
//        this.employeeId = employeeId;
//        this.meetingRoom = meetingRoom;
//        this.meetingDate = meetingDate;
//        this.meetingTime = meetingTime;
//        this.duration = duration;
//    }
//
//    public String getBookingDetails() {
//        return String.format("Booking ID: %s, Employee: %s, Room: %s, Date: %s, Time: %s, Duration: %d mins",
//                bookingId, employeeId, meetingRoom.getRoomId(), meetingDate, meetingTime, duration);
//    }
//
//    public LocalDate getMeetingDate() { return meetingDate; }
//}
//
//class BookingManager {
//    private List<MeetingRoom> meetingRooms;
//    private List<Booking> bookings;
//
//    public BookingManager() {
//        this.meetingRooms = new ArrayList<>();
//        this.bookings = new ArrayList<>();
//    }
//
//    public Booking bookRoom(String employeeId, LocalDate date, LocalTime time, int duration) {
//        MeetingRoom availableRoom = getAvailableRooms(date, time, duration)
//            .stream()
//            .findFirst()
//            .orElseThrow(() -> new RuntimeException("No rooms available"));
//
//        Booking booking = new Booking(
//            UUID.randomUUID().toString(),
//            employeeId,
//            availableRoom,
//            date,
//            time,
//            duration
//        );
//        bookings.add(booking);
//        return booking;
//    }
//
//    public List<Booking> getMeetingsByDate(LocalDate date) {
//        return bookings.stream()
//            .filter(booking -> booking.getMeetingDate().equals(date))
//            .toList();
//    }
//
//    public List<MeetingRoom> getAvailableRooms(LocalDate date, LocalTime time, int duration) {
//        return meetingRooms.stream()
//            .filter(room -> room.isAvailable(date, time, duration))
//            .toList();
//    }
//
//    public void addMeetingRoom(MeetingRoom room) {
//        meetingRooms.add(room);
//    }
//}
//
//public class asgn2_1 {
//    public static void main(String[] args) {
//        BookingManager manager = new BookingManager();
//
//
//        StandardMeetingRoom standardRoom = new StandardMeetingRoom("STD-101", 10, 1);
//        ZoomMeetingRoom zoomRoom = new ZoomMeetingRoom("ZOOM-201", 15, 2, "DEVICE-001", "ZOOM-ACC-001");
//
//
//        manager.addMeetingRoom(standardRoom);
//        manager.addMeetingRoom(zoomRoom);
//
//
//        Booking booking = manager.bookRoom("EMP001", LocalDate.now(), LocalTime.of(10, 0), 60);
//
//
//        System.out.println(booking.getBookingDetails());
//
//
//        System.out.println("\nToday's meetings:");
//        manager.getMeetingsByDate(LocalDate.now())
//            .forEach(b -> System.out.println(b.getBookingDetails()));
//    }
//}
