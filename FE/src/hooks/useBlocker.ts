import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useBlocker() {
 
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      const unblock = history.block((location, action) => {
        const message = 'Bạn có chắc chắn muốn rời khỏi trang này?';
  
        return window.confirm(message); 
      });
  
      return () => {
        unblock();
      }
    }, [location]);
  
    return navigate;
  }
  return navigateWithConfirm;
}

