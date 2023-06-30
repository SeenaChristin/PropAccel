const Header =()=>{
   return(
    <div className="px-[175px] h-20 inline-flex justify-between items-center gap-[717px] 
    text-white text-sm font-bold absolute top-0 ">
     <div>Logo</div>
     <nav>
      <ul className="flex justify-start gap-28">
         <li>About</li>
         <li>Pricing</li>
         <li>Review</li>
      </ul>
     </nav>
    </div>
   )
}

export default Header;