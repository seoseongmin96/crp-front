// var MusicPlayer = React.createClass({
//     render: function() {
//       return (
//         <div>
//           <meta charSet="UTF-8" />
//           <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <title>mp3 Player</title>
//           <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
//           <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
//           <style dangerouslySetInnerHTML={{__html: "\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: \"Poppins\";\n      }\n      :root {\n        --pink: #ff74a4;\n        --violet: #9f6ea3;\n        --white: #fff;\n        --lightshadow: rgba(0, 0, 0, 0.15);\n        --lightblack: #515c6f;\n        --pinkshadow: #ffcbdd;\n        --darkwhite: #cecaca;\n      }\n      body {\n        height: 100vh;\n        background: linear-gradient(var(--pink) 0%, var(--violet) 100%);\n      }\n      .wrap__music {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        min-height: 100%;\n        user-select: none;\n      }\n      .music__inner {\n        width: 380px;\n        padding: 25px 30px;\n        overflow: hidden;\n        position: relative;\n        border-radius: 15px;\n        background: var(--white);\n        box-shadow: 0 6px 15px var(--lightshadow);\n      }\n      .music__top {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n      .music__top i {\n        font-size: 30px;\n        color: var(--lightblack);\n      }\n      .music__top h3 {\n        font-size: 18px;\n        color: var(--lightblack);\n        font-weight: 500;\n      }\n      .music__img {\n        width: 100%;\n        height: 256px;\n        overflow: hidden;\n        border-radius: 15px;\n        margin-top: 25px;\n        box-shadow: 0 6px 12px var(--lightshadow);\n      }\n      .music__img img {\n        width: 100%;\n        height: 100%;\n        vertical-align: top;\n        object-fit: contain;\n      }\n      .music__song {\n        text-align: center;\n        margin: 30px;\n      }\n      .music__song p {\n        color: var(--lightblack);\n      }\n      .music__song .name {\n        font-size: 21px;\n      }\n      .music__song .artist {\n        font-size: 18px;\n        opacity: 0.9;\n        line-height: 35px;\n        font-weight: 300;\n      }\n      .music__progress {\n        height: 6px;\n        width: 100%;\n        border-radius: 10px;\n        background: #f0f0f0;\n        cursor: pointer;\n      }\n      .music__progress .bar {\n        height: inherit;\n        width: 0%;\n        position: relative;\n        border-radius: inherit;\n        background: linear-gradient(90deg, var(--pink) 0%, var(--violet) 100%);\n      }\n      .music__progress .timer {\n        margin-top: 2px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        color: var(--lightblack);\n        font-size: 0.9em;\n        pointer-events: none;\n      }\n      .music__control {\n        margin-top: 40px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n      .music__control i {\n        font-size: 28px;\n        user-select: none;\n        background: linear-gradient(90deg, var(--pink) 0%, var(--violet) 100%);\n        background-clip: text;\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n      }\n      .music__control i:nth-child(2),\n      .music__control i:nth-child(4) {\n        font-size: 40px;\n      }\n      .music__control .play-pause {\n        width: 54px;\n        height: 54px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n        background: linear-gradient(var(--white) 0%, var(--darkwhite) 100%);\n        box-shadow: 0 0 0 2px var(--pink);\n        z-index: 1;\n      }\n      .music__control .play-pause::before {\n        content: \"\";\n        position: absolute;\n        width: 40px;\n        height: 40px;\n        border-radius: inherit;\n        background: linear-gradient(var(--pink) 0%, var(--violet) 100%);\n        z-index: -1;\n      }\n      .music__control .play-pause #control-play {\n        -webkit-text-fill-color: var(--white);\n        opacity: 0.8;\n      }\n      .music__list {\n        position: absolute;\n        background: var(--white);\n        width: 100%;\n        left: 0;\n        bottom: -400px;\n        z-index: 10;\n        border-radius: 15px;\n        padding: 15px 30px;\n        box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.1);\n        transition: all 0.15s ease-out;\n        opacity: 0;\n        pointer-events: none;\n      }\n      .music__list.show {\n        bottom: 0;\n        opacity: 1;\n        pointer-events: auto;\n      }\n      .music__list .title {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        color: var(--lightblack);\n        margin-bottom: 10px;\n      }\n      .title .queue {\n        vertical-align: -5px;\n      }\n      .music__list .list {\n        color: var(--lightblack);\n      }\n      .music__list .list > ul {\n        max-height: 260px;\n        margin: 10px 0;\n        overflow: auto;\n      }\n      .music__list .list > ul::-webkit-scrollbar {\n        width: 0;\n      }\n      .music__list .list > ul > li {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        border-bottom: 1px solid #e5e5e5;\n        padding-bottom: 5px;\n        margin-bottom: 5px;\n      }\n      .music__list .list > ul > li.playing {\n        color: var(--pinkshadow);\n      }\n      .music__list .list > ul > li > div em {\n        font-style: normal;\n      }\n      .music__list .list > ul > li > div p {\n        opacity: 0.8;\n      }\n    " }} />
//           <div>
//             <img src="https://ifh.cc/g/KtohFH.png" style={{width: '110px'}} alt="logo" />
//             <h1 style={{textAlign: 'center'}}>Enjoying The Music Player!</h1>
//           </div>
//           <div className="wrap__music">
//             <div className="music__inner">
//               <div className="music__top">
//                 <i className="material-icons">expand_more</i>
//                 <h3>Now Playing</h3>
//                 <i className="material-icons">more_horiz</i>
//               </div>
//               {/* // music__top */}
//               <div className="music__img">
//                 <img src="images/music-1.jpg" alt="이미지1" />
//               </div>
//               {/* // music__img */}
//               <div className="music__song">
//                 <p className="name" />
//                 <p className="artist" />
//               </div>
//               {/* // music__song */}
//               <div className="music__progress">
//                 <div className="bar">
//                   <audio id="main-audio" src />
//                 </div>
//                 <div className="timer">
//                   <span className="current">0:00</span>
//                   <span className="duration">0:00</span>
//                 </div>
//               </div>
//               {/* // music__progress */}
//               <div className="music__control">
//                 <i id="control-repeat" className="material-icons" title="전체 반복">repeat</i>
//                 <i id="control-prev" className="material-icons" title="이전곡">skip_previous</i>
//                 <div className="play-pause">
//                   <i id="control-play" className="material-icons" title="재생">play_arrow</i>
//                   {/* <i class="material-icons">pause</i> */}
//                 </div>
//                 <i id="control-next" className="material-icons" title="다음곡">skip_next</i>
//                 <i id="control-list" className="material-icons" title="재생목록">queue_music</i>
//                 {/* <i class="material-icons">repeat_one</i>
//                   <i class="material-icons">shuffle</i> */}
//               </div>
//               {/* // music__control */}
//               <div className="music__list">
//                 <div className="title">
//                   <div>
//                     <i className="material-icons queue">queue_music</i>
//                     <span>Music List</span>
//                   </div>
//                   <i className="material-icons close">close</i>
//                 </div>
//                 <div className="list">
//                   <ul>
//                     {/* Javascript */}
//                   </ul>
//                 </div>
//               </div>
//               {/* // music__list */}
//             </div>
//           </div>
//         </div>
//       );
//     }
//   });

  