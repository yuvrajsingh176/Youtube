
const commentsData = [
    {
        name: "akshay saini",
        text: "lorem ipsum",
        replies: [
            
        ]
    },
    {
        name: "akshay saini",
        text: "lorem ipsum",
        replies: [
            {
                name: "akshay saini",
                text: "lorem ipsum",
                replies: [
                    
                ]
            },
        ]
    },
    {
        name: "akshay saini",
        text: "lorem ipsum",
        replies: [
            {
                name: "akshay saini",
                text: "lorem ipsum",
                replies: [
                    {
                        name: "akshay saini",
                        text: "lorem ipsum",
                        replies: [
                            {
                                name: "akshay saini",
                                text: "lorem ipsum",
                                replies: [
                                    {
                                        name: "akshay saini",
                                        text: "lorem ipsum",
                                        replies: [
                                            {
                                                name: "akshay saini",
                                                text: "lorem ipsum",
                                                replies: [
                                                    
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "akshay saini",
        text: "lorem ipsum",
        replies: [
            {
                name: "akshay saini",
                text: "lorem ipsum",
                replies: [
                    {
                        name: "akshay saini",
                        text: "lorem ipsum",
                        replies: [
                            {
                                name: "akshay saini",
                                text: "lorem ipsum",
                                replies: [
                                    {
                                        name: "akshay saini",
                                        text: "lorem ipsum",
                                        replies: [
                                            {
                                                name: "akshay saini",
                                                text: "lorem ipsum",
                                                replies: [
                                                    {
                                                        name: "akshay saini",
                                                        text: "lorem ipsum",
                                                        replies: [
                                                            {
                                                                name: "akshay saini",
                                                                text: "lorem ipsum",
                                                                replies: [
                                                                    {
                                                                        name: "akshay saini",
                                                                        text: "lorem ipsum",
                                                                        replies: [
                                                                            {
                                                                                name: "akshay saini",
                                                                                text: "lorem ipsum",
                                                                                replies: [
                                                                                    
                                                                                ]
                                                                            },
                                                                        ]
                                                                    },
                                                                ]
                                                            },
                                                        ]
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
  
]

const Comment = ({data})=> {
    const { name, text, replies } = data;
    return (
        <div className="flex pt-2 shadow-sm ">
            <div className="p-2">
            <img className="w-12 h-12 " src="https://th.bing.com/th/id/OIP.HHVUf3TYqncgpJXyCMmxyAHaHa?rs=1&pid=ImgDetMain" alt="user image" />

            </div>
            <div className="px-3 bg-gray-300 w-full p-2 rounded-lg">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
                
            </div>
        </div>
    )
}
const CommentsList = ({comments}) => {
    return comments.map((comment, index) => (
        <div>
        
        <Comment key={index} data={comment} />
    <div className="pl-5 border border-l-black ml-5"> 
              <CommentsList comments={comment.replies}/>
                
            </div>
        </div>
            
    ))
            };

const CommentsContainer = () => {
    return (
        <div className="m-2 p-2">
            <h1>
            Comments
            </h1>
            <CommentsList comments={commentsData} />
         
            </div>
    )
}
export default CommentsContainer;