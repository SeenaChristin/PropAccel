import smiling from '../../img/smiling.png'
import group from '../../img/group.png'
import groupbg from '../../img/Groupbg.png'
import mic from '../../img/mic.png'
import hp from '../../img/hp.png'

const SignUp = ()=>{
    return(
        <div className="ml-[175px]  mt-[174px] mb-[187px] mr-[115px]">
          <div className="flex">
            <div className="w-[580px] h-[371px] flex flex-col  text-white">
                <div className="h-32 text-5xl font-bold z-10">Learn how to launch a successful podcast</div>
                <div className="mt-6 text-base font-normal z-10 w-[433px]">Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s</div>
                    <button className="z-10 w-[210px]  mt-14 inline-flex h-16 px-14 py-5
                    bg-gradient-to-r from-[#4776E6] to-[#8E54E9] rounded-[10px]
                     ">Sign up Now</button>
            </div>
            <div className="ml-20 z-10 relative">
                <img className='z-10 realtive' src={smiling} ></img>
                <img className='z-20 mt-[-190px] ml-[-53px] relative' src={group}></img>
                <img className='-z-10  mt-[-320px]  relative' src={groupbg}></img>
                <img className='z-20  mt-[-72px]  ml-[450px] bg-white relative' src={mic}></img>
                <img className='z-20  mt-[-240px] ml-[510px] bg-white relative' src={hp}></img>
            </div>
          </div>
        </div>
    )
};

export default SignUp;