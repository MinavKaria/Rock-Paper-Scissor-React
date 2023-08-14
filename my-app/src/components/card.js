import './card.css';
import Icon from './icon';
import paperimg from './paper.jpg'
import rockimg from './rock.jpg'
import scissorimg from './scissors.jpg'

export default function Card({name})
{ 
  let img;

    
    if(name==="Rock")
    {
      img=rockimg;
    }
    else if(name==="Paper")
    {
      img=paperimg;
    }
    else
    {
      img=scissorimg;
    }

    return(
        <div className="card1-container">

        <div className='card1'>

        
          <p className='text'><img src={img} className='img'></img></p>
        
        
            

        </div>

       
        </div>
        

    );
}