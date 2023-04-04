import java.sql.*;

public class PostgreSQLExample {
    
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost/mydatabase";
        String username = "myusername";
        String password = "mypassword";
        
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        
        try {
            // Connect to the database
            conn = DriverManager.getConnection(url, username, password);
            
            // Execute a SELECT query
            stmt = conn.createStatement();
            rs = stmt.executeQuery("SELECT * FROM mytable");
            
            // Process the results
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age);
            }
            
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
            
        } finally {
            // Close the resources
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
                
            } catch (SQLException e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
    }
}