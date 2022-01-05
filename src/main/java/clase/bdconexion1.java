package clase;
import java.sql.Connection;
import java.sql.DriverManager;
 
public class bdconexion1
{
     
    
    public bdconexion1() {
    }
    public Connection crearConexion()  throws Exception {
 
        String clase   = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
        String motorBD = "sqlserver";
        String usuario = "sa";
        String bd      = "maeharasys";//CAMBIAR BASE DE DATOS
       String servidor= "192.168.4.161";        
       String clave   = "B12345!";
        //String servidor= "192.168.6.109";        
        //String clave   = "AESPINOLA";
      
        Class.forName(clase);
        String cadenaConexion = "jdbc:"+motorBD+"://"+servidor+";databasename="+bd;
        Connection connection = DriverManager.getConnection(cadenaConexion, usuario, clave);
        return connection;
    }

    public void cerrarConexion(Connection connection)  throws Exception {
        connection.close();
    }

}