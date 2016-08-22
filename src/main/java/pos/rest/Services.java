package pos.rest;

/**
 * Created by Nikola on 8/9/2016.
 */
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import org.apache.commons.dbutils.DbUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.MapListHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.List;
import java.util.Map;

@Path("/{str}")
public class Services extends HttpServlet {

    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost/mydb";

    //  Database credentials
    static final String USER = "user";
    static final String PASS = "pass";
    //Gson gson = new GsonBuilder().create();

    static Connection conn = null;
    static Statement stmt = null;
    static String rsString = "";

    public static void makeConnection(){
         try {
            //STEP 2: Register JDBC driver
            Class.forName("com.mysql.jdbc.Driver");
            //STEP 3: Open a connection
            System.out.println("Connecting to database...");
            conn = DriverManager.getConnection(DB_URL, "user", "pass");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }//end init()

/*    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //System.out.println("Request: " + req.toString());

        //resp.setContentType("application/json");

       // PrintWriter out = resp.getWriter();
       // if(@PathParam("str") == "zaposleni")
       // out.print(getZaposleni());

    }
*/
    public static String resultSetToJson(Connection connection, String query) {
        List<Map<String, Object>> listOfMaps = null;
        try {
            QueryRunner queryRunner = new QueryRunner();
            listOfMaps = queryRunner.query(connection, query, new MapListHandler());
        } catch (SQLException se) {
            throw new RuntimeException("Couldn't query the database.", se);
        }
        finally {
            DbUtils.closeQuietly(connection);
        }
        return new Gson().toJson(listOfMaps);
    }

    public static String getZaposleni() {
        try{
            makeConnection();
            //STEP 4: Execute a query
            System.out.println("Creating statement...");
            stmt = conn.createStatement();
            String sql;
            sql = "SELECT idZaposleni, ime, prezime FROM Zaposleni";
            ResultSet rs = stmt.executeQuery(sql);

            //STEP 5: Extract data from result set
            while(rs.next()){
                //Retrieve by column name
                int id  = rs.getInt("idZaposleni");
                //int age = rs.getInt("age");
                String ime = rs.getString("ime");
                String prezime = rs.getString("prezime");

                //Display values
                System.out.print("ID: " + id);
                //System.out.print(", Age: " + age);
                System.out.print(", Ime: " + ime);
                System.out.println(", Prezime: " + prezime);
            }
            //STEP 6: Clean-up environment
            //System.out.println("SAD SAM OVDE \n\n");
            rsString = resultSetToJson(conn, sql);
            System.out.println("Vracam: \n\n" + rsString);
            //String json = DSL.using(conn).fetch(rs).formatJSON();
            rs.close();
            stmt.close();
            conn.close();
            return rsString;
        }catch(SQLException se){
            //Handle errors for JDBC
            System.out.println("SQLException!!!");
            se.printStackTrace();
        }catch(Exception e){
            //Handle errors for Class.forName
            System.out.println("Exception!!!");
            e.printStackTrace();
        }finally{
            //finally block used to close resources
            try{
                if(stmt!=null)
                    stmt.close();
            }catch(SQLException se2){
            }// nothing we can do
            try{
                if(conn!=null)
                    conn.close();
            }catch(SQLException se){
                System.out.println("SQLException broj 2!!!");
                se.printStackTrace();
            }//end finally try
        }//end try

        System.out.println("Goodbye!");
        return rsString;
    }//end getZaposleni()

// -------------------------------------------------------------------------------------------------
    public static String getArtikli() {

        try{

            makeConnection();
            //STEP 4: Execute a query
            System.out.println("Creating statement...");
            stmt = conn.createStatement();
            String sql;
            sql = "SELECT idArtikal, naziv, cena, slika, Kategorija_idKategorija FROM Artikal";
            ResultSet rs = stmt.executeQuery(sql);

            //STEP 5: Extract data from result set
            while(rs.next()){
                System.out.println(rs.toString());
                //Retrieve by column name
                /*int id  = rs.getInt("idArtikal");
                //int age = rs.getInt("age");
                String naziv = rs.getString("naziv");
                String prezime = rs.getString("prezime");

                //Display values
                System.out.print("ID: " + id);
                //System.out.print(", Age: " + age);
                System.out.print(", Ime: " + ime);
                System.out.println(", Prezime: " + prezime);
                */
            }
            //STEP 6: Clean-up environment
            //System.out.println("SAD SAM OVDE \n\n");
            rsString = resultSetToJson(conn, sql);
            System.out.println("Vracam: \n\n" + rsString);
            //String json = DSL.using(conn).fetch(rs).formatJSON();
            rs.close();
            stmt.close();
            conn.close();
            return rsString;
        }catch(SQLException se){
            //Handle errors for JDBC
            System.out.println("SQLException!!!");
            se.printStackTrace();
        }catch(Exception e){
            //Handle errors for Class.forName
            System.out.println("Exception!!!");
            e.printStackTrace();
        }finally{
            //finally block used to close resources
            try{
                if(stmt!=null)
                    stmt.close();
            }catch(SQLException se2){
            }// nothing we can do
            try{
                if(conn!=null)
                    conn.close();
            }catch(SQLException se){
                System.out.println("SQLException broj 2!!!");
                se.printStackTrace();
            }//end finally try
        }//end try

        System.out.println("Goodbye!");
        return rsString;
    }//end getArtikli()

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getMessage(@PathParam("str") String str) {
        if(str.compareToIgnoreCase("zaposleni") == 0) {
            return getZaposleni();
            //return "Ovo su zaposleni";
        }
        else if(str.compareToIgnoreCase("artikli") == 0) {
            return getArtikli();
            //return "Ovo su zaposleni";
        }
        else
            return "Hello REST " + str;
    }
}