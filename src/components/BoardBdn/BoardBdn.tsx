import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Draggable, Droppable, DropResult, DroppableProvided, DraggableProvided } from "react-beautiful-dnd";
import { Avatar, Card, Typography, Divider } from 'antd';
import style from './BoardBdn.module.css';
import { getIssues } from "../../redux/issues/selector";
import { pickTitle, statusIssue, timeAgo } from '../../helpers'
import { actionUpdateIssues } from '../../redux/issues/action';
import { TIssues } from '../../redux/issues/types';

const { Meta } = Card;
const { Title } = Typography;

const BoardBdn = () => {
    const dispatch = useDispatch()
    const issues: TIssues = useSelector(getIssues);

    const handleDragAndDrop = async (results: DropResult) => {
        const { source, destination, type } = results;
        if (!destination) return;
        if (source.droppableId === destination.droppableId &&
            source.index === destination.index) return;
        if (type === "column") {
            const columnFromIndex = Number(source.droppableId)
            const itemFromIndex = source.index;
            const columnToIndex = Number(destination.droppableId)
            const itemToIndex = destination.index;
            dispatch(actionUpdateIssues({ columnFromIndex, itemFromIndex, columnToIndex, itemToIndex }))
            return
        }
    };

    return (
        <div className={style.layout__wrapper}>
            <div className={style.card}>
                <DragDropContext onDragEnd={(handleDragAndDrop)}>
                    {issues.map((arr, i) =>
                        <Droppable droppableId={String(i)} type="column" key={i}>
                            {(provided: DroppableProvided) => (
                                <div className={style.column} {...provided.droppableProps} ref={provided.innerRef}>
                                    <Title style={{ textAlign: 'center', color: 'white' }} level={3}>{pickTitle[i]}</Title>
                                    {arr.map((issue, index) => {
                                        const { id, number, title, comments, user: { login, avatar_url } } = issue
                                        const status = issue[statusIssue[i]]
                                        return (<Draggable
                                            draggableId={String(id)}
                                            index={index}
                                            key={id}
                                        >
                                            {(provided: DraggableProvided) => (
                                                <div
                                                    {...provided.dragHandleProps}
                                                    {...provided.draggableProps}
                                                    ref={provided.innerRef}>
                                                    <Card style={{ width: 300 }}>
                                                        <Meta
                                                            avatar={<Avatar size='large' src={avatar_url} />}
                                                            title={title}
                                                            description={<>
                                                                <p>{`#${number} ${statusIssue[i].slice(0, -3)} ${timeAgo(new Date(status))}`}</p>
                                                                <p>{`${login} | Comments: ${comments}`}</p>
                                                            </>}
                                                        />
                                                    </Card>
                                                    <Divider />
                                                </div>)}
                                        </Draggable>
                                        )
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>)}
                </DragDropContext>
            </div>
        </div>
    )
}


export default BoardBdn;