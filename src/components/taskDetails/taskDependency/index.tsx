import React, { ChangeEvent, FC, useState } from 'react';
import { Textarea } from '..';
import { TaskDependencyProps } from '@/interfaces/taskDetails.type';
import DependencyList from '@/components/taskDetails/taskDependency/DependencyList';

const TaskDependency: FC<TaskDependencyProps> = ({
    taskDependencyIds,
    isEditing,
    updatedDependencies,
    handleChange,
}) => {
    const [editedDependencies, setEditedDependencies] =
        useState<string[]>(updatedDependencies);

    const handleDependenciesChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value } = event.target;
        const updatedDependencies = value
            .split(',')
            .map((taskId) => taskId.trim());
        setEditedDependencies(updatedDependencies);
        handleChange(event);
    };

    return (
        <>
            {isEditing && (
                <Textarea
                    name="dependsOn"
                    value={editedDependencies.join(',')}
                    onChange={handleDependenciesChange}
                />
            )}
            <DependencyList taskDependencyIds={taskDependencyIds} />
        </>
    );
};

export default TaskDependency;
