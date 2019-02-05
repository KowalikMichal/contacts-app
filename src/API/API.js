import axios from "axios";

class API{
  constructor(){
    this.baseUrl = 'https://randomuser.me/api/?results=50';
  }
  

  getRandomUsers = async () =>{
    const answer = await axios.get(this.baseUrl)
      .then(function(response) {
        return response.data
      })
      .catch(function(error) {
        console.log(error);
        return []
      });
    return answer;

  }
}

export default new API()