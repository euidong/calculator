import React from 'react';


function History ({ histories }) {
  return (
    <div className="history">
      <div className="history__title">History</div>
      <table className="history__table">
        { histories?.map((history) => <tr>{history}</tr>) }
      </table>
    </div>
  );
}

export default History;