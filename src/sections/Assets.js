
import {useState} from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Assets = () => {

    const [istoggled1, setIsToggled1] = useState(false);
    const [istoggled2, setIsToggled2] = useState(false);
    const [istoggled3, setIsToggled3] = useState(false);

    return (
        <div className="asset-section">
           <button onClick={() => setIsToggled1(!istoggled1)}>Price<ExpandMoreIcon fontSize="small" /></button>
            {istoggled1 && (
                <div className="price">                   
                    <label for="all prices"><input type="radio" id="all prices" name="availability" value="all prices" />All Prices</label>                   
                    <label for="free"><input type="radio" id="free" name="availability" value="free" />Free</label>
                    <label for="paid"><input type="radio" id="paid" name="availability" value="paid" />Paid</label>                   
                    <label for="subscriptionOnly"><input type="radio" id="subscriptionOnly" name="availability" value="subscriptionOnly" />Subscription Only</label>
                </div>
            )}

            <button onClick={() => setIsToggled2(!istoggled2)}>Categories<ExpandMoreIcon fontSize="small" /></button>
            {istoggled2 && (
                <div className="categories">                   
                    <label for="allCategories"><input type="radio" id="allCategories" name="availability" value="allCategories" />All Categories</label>      
                    <label for="fonts"><input type="radio" id="fonts" name="availability" value="fonts" />Fonts</label>
                    <label for="template"><input type="radio" id="template" name="availability" value="template" />Templates</label>
                    <label for="vector"><input type="radio" id="vector" name="availability" value="vector" />Vector</label>
                </div>
            )}
            
            <button onClick={() => setIsToggled3(!istoggled3)}>File Extensions<ExpandMoreIcon fontSize="small" /></button>
            {istoggled3 && (
                <div className="fileExtensions">
                <input type="text" placeholder="Search File Extensions..." />
                <label for="pdf"><input type="checkbox" id="pdf" name="pdf" value="pdf" />PDF</label>
                <label for="jpg"><input type="checkbox" id="jpg" name="jpg" value="jpg" />JPG</label>           
                <label for="png"><input type="checkbox" id="png" name="png" value="png" />PNG</label>               
                <label for="psd"><input type="checkbox" id="psd" name="psd" value="psd" />PSD</label>              
                <label for="gif"><input type="checkbox" id="gif" name="gif" value="gif" />GIF</label>
                </div>
            )}
        </div>
    )
}

export default Assets