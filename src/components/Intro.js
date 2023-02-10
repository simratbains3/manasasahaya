function Intro() {
  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
  
      behavior: 'smooth'
    });
  };

    return(
        <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-96 card rounded-none place-items-center bg-[#f0b43c] rounded-b-lg">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-4xl font-bold">Need help?</h1>
      <p className="py-6 text-sm md:text-base text-justify">At Manasa Sahaya, our goal is to assist you with all your psychological needs. 
      In Sanskrit, "Manasa" translates to "mentally" and "Sahaya" means "to help." Our counseling services address a variety of issues including anxiety, 
      depression, relationships, motivation, and emotional challenges that impact your mental well-being. Every therapy session is customized to meet the unique 
      needs of the individual, to facilitate their healing and growth.</p>
      <button className="btn bg-black text-white" onClick={handleClick}>Get Started</button>
    </div>
  </div>
  </div> 
  
</div>
    );

}

export default Intro;