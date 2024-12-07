function MyBolgs(){
   var title = "xxx";
   var description = "yyy...";
   var  rating = 3;
   let enabled = true;
   const pi = 2.14;

   //alert("Title: "+title);
   console.log("Rating: "+rating);

   const getRating = () =>{
    return<span>&#11088;&#11088;&#11088;&#11088;&#11088;</span>
   }
   const getRating2 = (r) => {
    let msg = "";
    for(let i=0; i<r; i++){
      msg+= '\u2B50';
    }
    return <span>{msg}</span>;
   }
   return (
        <div className="m-3">
          <h1 className="text-lg font-bold">รีวิว สถานที่ท่องเที่ยว</h1>
          <p><strong>หัวข้อ:</strong> {title}</p>    
          <p><strong>รายระเอียด:</strong> {description}</p>
          <p><strong>ชื่นชอบ</strong>{getRating2(rating)}</p>
          <p><strong>อื่น ๆ</strong>..._</p>
          <h1 className="text-lg font-bold">Comments:</h1>
          <Comment
            avatar="/images/author_1.jpg"
            message="สวัสดีนักท่องเที่ยวทุกคน"
            author="Thawatchai"
            top={true}
            />
          <Comment
            avatar="/images/author_1.jpg"
            message="สวัสดีนักท่องเที่ยวทุกคน"
            author="Thawatchai"
            top={false}
          />  
        </div>
   );
}

function Comment({avatar, message, author,top}:
  {avatar:any, message:any, author:any}){
    return(
    <div>
      <GetTop top={top}/>
      <img
        src={avatar}
        title={author}
        width={50}
      />
      <br/>
      <p>{message}</p>
      <i>{author}</i><hr/><br />  
    </div>
    );
  
}
function GetTop({ top }){
  if(top)
    return '\u2764';
  return'';
}
export default MyBolgs;