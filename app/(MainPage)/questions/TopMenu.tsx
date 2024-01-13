import DropDown from "@/components/ui/dropdown";
import { ProjectContentProps } from "./ProjectContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useUserInfo from "@/customHook/useUserInfo";

const ProjectTopMenu = ({ handleOpen }: { handleOpen: () => void } ) => {

    const {userId} = useUserInfo();

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
        <div className="justify-start w-full f_row md:justify-between ">
            <p className='w-8 h-8 pt-1 pl-2 mb-5 text-white rounded-md ms-2 bg-c_tertiary dark:bg-c_primary lg:hidden ' onClick={handleOpen}><FontAwesomeIcon icon={faBars} /></p>
            <div className="flex flex-row mx-1">
                
                <DropDown list={sortBy} handler={setSort} />
            </div>

            <div className="flex flex-row mx-1 ms-5 md:ms-0 me-4">
              {userId && 
                <Link href='/questions/addQuestion' className='w-32 lg:me-1 LinkBtn bg-c_primary'>Add Question </Link>
               }
            </div>
        </div>
    );
};

export default ProjectTopMenu;