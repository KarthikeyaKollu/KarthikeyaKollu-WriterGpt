import React from 'react';
import ActionButton from './ActionButton';

import sendIcon from '../../../assets/send.svg';
import regenIcon from '../../../assets/regen.svg';
import insertIcon from '../../../assets/insert.svg';

interface ActionButtonsProps {
    showButtons: boolean;
    handleInsert: () => void;
    handleUserSubmit: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ showButtons, handleInsert, handleUserSubmit }) => {
    return (
        <section className="flex gap-5 items-start mt-5 font-medium whitespace-nowrap">
            {showButtons ? (
                <>
                    <ActionButton type="insert" text="Insert" onClick={handleInsert} iconSrc={insertIcon} />
                    <ActionButton type="regenerate" text="Regenerate" onClick={() => {}} iconSrc={regenIcon} />
                </>
            ) : (
                <ActionButton type="generate" text="Generate" onClick={handleUserSubmit} iconSrc={sendIcon} />
            )}
        </section>
    );
};

export default ActionButtons;
