const ActivityIconsBar = ({likes, comments, shares, proflink}) => {
	return (
		<>
			<div className="activity-icons">
				<div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png" />{likes}</div>
				<div><img src="https://i.postimg.cc/rmjMymWv/comments.png" />{comments}</div>
				<div><img src="https://i.postimg.cc/T2bBchpG/share.png" />{shares}</div>
			</div>
			<div className="post-porfile-icon">
				<img src={proflink}/><i className="fas fa-caret-down"></i>
			</div>
		</>
	)
}

export default ActivityIconsBar
