type Props = {
    isPublished: boolean
    onClick: any
}

const PublishButton = (props: Props) => {
    return(
        <button onClick={() => props.onClick()}>
            公開状態： {props.isPublished.toString()}
        </button>
    )
}

export default PublishButton