import { Header } from "./header";
import { Footer } from "./footer";
export function Content(){
 

    return( 
    <>
        <Header></Header>
        <div className="alfaCont">
            <div className="leftBox">
                <div className="leftBoxContent">
                    <div className="statistics">Statistics:</div>
                    <div class="statisticList ">
                    <div class="statBox tooltip">
                        <div class="right hideMob">
                            <p>Amount of holder that have their weirdos staked at the Underworld!</p>
                            <i></i>
                        </div>
                        <div class="quant" id="holders">
                            0
                        </div>
                       
                        <div>
                            Holders at the Underworld
                        </div>
                    </div>

                    <div class="statBox tooltip">
                        <div class="right hideMob">
                            <p>All the weirdos without bonus traits earn base $UWU rewards (1 every 24h)</p>
                            <i></i>
                        </div>
                        <div class="quant" id="trait1Total">
                            0
                        
                        </div>
                        
                        <div>
                        Weirdos without Bonus
                        </div>
                    </div>
                    <div class="statBox tooltip">
                        <div class="right hideMob">
                            <p>Weirdos with one bonus trait get +50% extra rewards (1.5 $UWU every 24h)</p>
                            <i></i>
                        </div>
                        <div class="quant" id="trait1">
                            0
                        </div>
                    
                        <div>
                        Weirdos with x1.5 Bonus
                        </div>
                    </div>
                    <div class="statBox tooltip">
                        <div class="right hideMob">
                            <p>Non-common weirdos with two bonus traits get +200% extra rewards (3 $UWU every 24h)</p>
                            <i></i>
                        </div>
                        <div class="quant" id="trait2">
                            0 
                        </div>
                     
                        <div>
                        Weirdos with x3 Bonus
                        </div>
                    </div>
                    <div class="statBox SBLast tooltip">
                        <div class="right hideMob">
                            <p>Rarest weirdos with three bonus traits get +900% extra rewards (10 $UWU every 24h)</p>
                            <i></i>
                        </div>
                        <div class="quant" id="trait3">
                            0
                            </div>
                        <div>
                        Weirdos with x10 Bonus
                        </div> 
                    </div>
                </div> 
                <div class="weirdTrio tooltip">
                    <img src="res/weirdos-05.png" alt=""></img>
                    <div class="bottom"> 
                        <p>Bonus traits of the week: <b>Stumble with Lolipop</b> face, <b>Pink Bathrobe</b> clothing (devils and skellys) and <b>Green Octopus </b>head. You can see the bonuses for having one or more of this traits at our <b>FAQ section</b>.</p>
                        <i></i>
                    </div>                
                </div>  
                </div>
            </div>

            <div className="separator"></div>
            <div className="rightBox"></div>

        </div> 
        <Footer></Footer>

    </>
    )
}