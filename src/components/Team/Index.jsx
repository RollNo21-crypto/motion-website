import List from "../List"
import Button from "../Button"



function Team() {

  return (
    <div  data-color="white" className='team section font-[SansitaReg] py-12 xs:py-16 sm:py-20'>
      <div className="head1">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl text-center tracking-tight">
          Our Team
        </h1>
      </div>
      <div className="list mt-6 xs:mt-8 sm:mt-10 w-full px-4 xs:px-6 sm:px-8">
        {/* //single list */}
        <List />
        <div className='flex items-center justify-center py-12 xs:py-16 sm:py-20'>
          <Button bgColor="bg-[#f5f19c]" text="MEET THE ENTIRE TEAM" />
        </div>
      </div>
    </div>
  )
}

export default Team
