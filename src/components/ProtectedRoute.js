import { useAuth } from "../context/authContext";

export function ProtectedRoute({ children }) {
  const {  loading } = useAuth();

  if (loading) return <h1>Cargando...</h1>;
 /* if(!user ) return (
    <div>ingresa tu usuario</div>
  )
 if (user){
 <div>
  tengo usuario
 </div>
 }


  return <>{children}</>;
}
*/}