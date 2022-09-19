import {useState} from 'react';
import {BsHash} from 'react-icons/bs';
import {FaChevronDown, FaChevronRight, FaPlus} from "react-icons/fa";
import {Button, ButtonBase} from "@mui/material";

const topics = ['parent1', 'parent2'];
const questions = ['parent-children1', 'parent-children2', 'parent-children3'];
const random = ['random1', 'random2'];

const ChannelBar = () => {
    return (
        <div className='channel-bar shadow-lg'>
            <ChannelBlock/>
            <div className='channel-container'>
                <Dropdown header='Topics' selections={topics}/>
                <Dropdown header='Questions' selections={questions}/>
                <Dropdown header='Random' selections={random}/>
            </div>
        </div>
    );
};

const Dropdown = ({header, selections}) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className='dropdown'>
            <ButtonBase onClick={() => setExpanded(!expanded)} className='dropdown-header w-full'>
                <ChevronIcon expanded={expanded}/>
                <h5
                    className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
                >
                    {header}
                </h5>
                <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto'/>
            </ButtonBase>
            {expanded &&
            selections &&
            selections.map((selection) => <TopicSelection selection={selection}/>)}
        </div>
    );
};

const ChevronIcon = ({expanded}) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
    return expanded ? (
        <FaChevronDown size='14' className={chevClass}/>
    ) : (
        <FaChevronRight size='14' className={chevClass}/>
    );
};

const TopicSelection = ({selection}) => (
    <ButtonBase className = "w-full">
        <div className='dropdown-selection flex'>
            <BsHash size='24' className='text-gray-400'/>
            <h5 className='dropdown-selection-text'>{selection}</h5>
        </div>
    </ButtonBase>
);

const ChannelBlock = () => (
    <div className='channel-block'>
        <h5 className='channel-block-text'>Channels</h5>
    </div>
);

export default ChannelBar;
