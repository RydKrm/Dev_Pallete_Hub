import DropDown from "@/components/ui/dropdown";
import { ProjectContentProps } from "./ProjectContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";



const ProjectTopMenu: React.FC<ProjectContentProps> = ({ handleOpen }) => {

    const type: string = 'fund'


    const setSort = (event: React.ChangeEvent<HTMLInputElement>) => {
        // dispatch({type:'SORT_BY',payload:e.target.value})
    }

    const sortBy = [
        { _id: 1, field: 'Upvotes' },
        { _id: 2, field: 'DownVotes' },
        { _id: 3, field: 'Most Comments' },
        { _id: 4, field: 'Least Comnents' }
    ]

    return (
        <div className="f_row justify-start md:justify-between w-full ">
            <p className='mb-5 ms-2 bg-c_tertiary dark:bg-c_primary text-white pt-1 pl-2 w-8 h-8 rounded-md lg:hidden ' onClick={handleOpen}><FontAwesomeIcon icon={faBars} /></p>
            <div className="flex flex-row mx-1">
                <p className='font-poppins me-4 font-light mt-2 hidden md:block'>By Status</p>
                <DropDown list={sortBy} handler={setSort} />
            </div>

            <div className="flex flex-row mx-1 ms-5 md:ms-0 me-4">
                <Button variant='submit' size='sm' className='w-32 lg:me-16'>Add Project</Button>
            </div>
        </div>
    );
};

export default ProjectTopMenu;