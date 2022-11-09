import { routes } from '@/controllers/routes';
import { networkService } from '@/networking';


 const getMovies = () => {
    return networkService.request({
      method:'GET',
      url: routes.movies.getAllMovies
    });
  }


  export { getMovies };
