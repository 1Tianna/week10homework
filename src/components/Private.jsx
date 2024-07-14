import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { isAuthenticated } from '../../utils/auth';

const Private = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);

  return <div>Private Content</div>;
};

export default Private;
