import { useRouter } from "next/router";
import Cookies from 'js-cookie';

// redux

const withAuth = (WrappedComponent,type) => {
  return (props) => {
    const Router = useRouter();
    const isLogin = Cookies.get('laxmi-auth') ;
    
    const PersistString = localStorage.getItem("persist:laxmi") 
    const parseObject1 = JSON.parse(PersistString, function (key, value) {
        if (key == "birth") {
            return new Date(value);
        } else {
            return value;
        }
    });
    const auth = JSON.parse(parseObject1?.auth || null, function (key, value) {
        if (key == "birth") {
            return new Date(value);
        } else {
            return value;
        }
    });
    if(type === 'auth'){
        if (auth?.isLogin || false) {
            Router.replace("/");
            return null;
        }
    
        return <WrappedComponent {...props} />;    
    }else{
        if (!auth.isLogin) {
            Router.replace("/login");
            return null;
        }
    
        return <WrappedComponent {...props} />;    
    }

  };
};


export default withAuth
