import line1 from '../../img/line1.png'
import line2 from '../../img/line2.png'
import line3 from '../../img/line3.png'

const Choose = ()=>{
    return(
        <div className=''>
            <div className="absolute -z-10">
                <img className=""src={line1}></img>
                <img className="mt-[-500px]" src={line2}></img>
                <img className="mt-[-550px]"src={line3}></img>
            </div>
            <div className='flex flex-col w-[455px] my-0 mx-auto '>
                <div className='text-center text-3xl font-bold '>Choose your plan
                <h3 className='text-sm font-normal mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</h3>
                <span className='bg-[#efefec] rounded-md px-1 inline-flex align-middle'>
                    <span className='text-sm font-normal mt-6 bg-[--light,#E1A6ff] rounded-md leading-3'>  monthly  </span>
                    <span  className='text-sm font-normal mt-6 mr-2 leading-3'>  yearly  </span>
                </span>
                </div>
                <div className='flex'>
                    <div>Basic</div>
                    <div>Premium</div>
                    <div>Basic</div>
                </div>
            </div>
        </div>
    )
};
export default Choose;