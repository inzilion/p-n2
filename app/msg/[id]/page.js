export default function Msg(props){
  let msg =''
  switch(props.params.id){
    case '200' : msg = '데이터가 성공적으로 입력되었습니다.';break;
    case '300' : msg = '데이터가 성공적으로 수정되었습니다.';break;
    case '400' : msg = '데이터가 입력이 실패하였습니다.';break;
  }

  return (
    <div>
      <h2>{msg}</h2>
    </div>
  )
}