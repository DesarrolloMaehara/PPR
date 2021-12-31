package consultas_java;
import clase.bdconexion1;
import clase.fuentedato;

import java.sql.Connection;
import java.sql.ResultSet;
public class modelos  
{  
    public static   bdconexion1 conexion = new bdconexion1();
    public static   fuentedato fuente = new fuentedato();
    public static String combo_roles=""; 
    
 
  
    public static String cargar_roles()
    { try 
            {   combo_roles="";
                //Connection cn = conexion.crearConexion();
                fuente.setConexion(clase.controles.connectSesion);
                ResultSet rs = fuente.obtenerDato("select * from tab_mae_ppr_roles");
                while (rs.next()) 
                {
                    combo_roles=combo_roles+ "<option value='"+rs.getString("id")+"'>"+rs.getString("descripcion")+"</option>"  ;                 
                }                            
                rs.close();
              //  cn.close();
                return combo_roles;
             } catch (Exception e) 
            {
                String as=e.toString();
            } 
    return combo_roles;
        }

}    
    
 
 

 