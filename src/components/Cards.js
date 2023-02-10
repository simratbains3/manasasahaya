import anonymous from '../icons/anonymous.jpg';
import empathy from '../icons/empathy.png';
import support from '../icons/support.png';

function Cards(){
    return(
        <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
    
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    
                <article className="overflow-hidden rounded-lg shadow-lg">
    
                    
                        <img alt="Placeholder" className="block h-auto w-full" src={empathy}></img>
                    
    
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <p className="text-black font-bold" >
                                Empathetic
                            </p>
                        </h1>
                        
                    </header>
    
                    
                </article>
    
            </div>
    
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    
                <article className="overflow-hidden rounded-lg shadow-lg">
    
                    
                        <img alt="Placeholder" className="block h-auto w-full" src={anonymous}></img>
                    
    
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <p className="text-black font-bold">
                                Anonymous
                            </p>
                        </h1>
                        
                    </header>
    
                    
    
                </article>
    
            </div>
    
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    
                <article className="overflow-hidden rounded-lg shadow-lg">
    
                    
                        <img alt="Placeholder" className="block h-auto w-full" src={support}></img>
                    
    
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <p className="text-black font-bold" >
                                Supportive
                            </p>
                        </h1>
                        
                    </header>
    
                    
    
                </article>
    
            </div>
            
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    
            </div>
    
        </div>
    </div>
    );

}

export default Cards;