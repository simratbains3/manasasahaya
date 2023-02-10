import photo from '../icons/photo.png';


function Desc(){
    return(
        <div className="card bg-white shadow-xl p-3">
        <div className="avatar justify-center">
        <div className="lg:w-64 w-32 rounded-full border-8 border-accent">
          <img src={photo} alt="" />
        </div>
      </div>
        <div className="card-body">
          <h3 className="card-title justify-center text-sm md:text-xl p-1">Dr. Anju Mahal</h3>
          <p className='text-justify text-[10px] md:text-base'>She holds a PhD in Psychology degree from Dr B.R. Ambedkar University, Agra and was awarded a gold medal for her post-graduate studies in Psychology. 
          With two decades of experience in the realm of teaching and counseling psychology, she is a competent life-skills instructor and counselor for educators, parents, and students. 
          She holds lifetime membership with several NGOs including Mind Help Line by MDF, Karyashala, the Psychological Council of India, and Nuturelife. She has expertise in Psychometrics, 
          Psychotherapies, and offers both individual and group counseling.</p>
        
        </div>
      </div>
    );
}

export default Desc;