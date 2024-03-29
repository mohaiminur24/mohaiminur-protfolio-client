import React from "react";

const MainFooter = () => {
  return (
    <div className="w-full bg-slate-100 px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-start md:items-end">
      <div>
        <h1 className="text-lg font-bold text-slate-400">
          Exploring endless possibilities together
        </h1>
        <h2 className="text-xs font-sans text-gray-400">
          © 2024 Mohaiminur Rahman Mukta. All Rights Reserved.
        </h2>
      </div>
      {/* social section */}
      <div className="flex flex-row gap-3 justify-center items-center mt-5 md:mt-0">
        <div
          className="cursor-pointer opacity-50 hover:opacity-100 tooltip"
          data-tip="Linkedin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0288D1"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            ></path>
          </svg>
        </div>
        <div
          className="cursor-pointer opacity-50 hover:opacity-100 tooltip"
          data-tip="Github"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
          >
            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
          </svg>
        </div>
        <div
          className="cursor-pointer opacity-50 hover:opacity-100 tooltip"
          data-tip="Stack Overflow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="26"
            height="26"
            viewBox="0 0 48 48"
          >
            <path fill="#607D8B" d="M9 28H12V42H9z"></path>
            <path fill="#607D8B" d="M9 39H35V42H9z"></path>
            <path fill="#607D8B" d="M32 28H35V42H32zM15 34H29V37H15z"></path>
            <path
              fill="#A68A6E"
              d="M14.88 29H28.880000000000003V32H14.88z"
              transform="rotate(6.142 21.88 30.5)"
            ></path>
            <path
              fill="#EF6C00"
              d="M29.452 11.646H43.451V14.647H29.452z"
              transform="rotate(81.234 36.453 13.148)"
            ></path>
            <path
              fill="#FF9800"
              d="M23.576 13.578H37.574V16.579H23.576z"
              transform="rotate(60.79 30.576 15.079)"
            ></path>
            <path
              fill="#D38B28"
              d="M18.395 18.275H32.393V21.276H18.395z"
              transform="rotate(34.765 25.396 19.777)"
            ></path>
            <path
              fill="#C09553"
              d="M15.977 23.499H29.976V26.5H15.977z"
              transform="rotate(19.785 22.978 25.003)"
            ></path>
          </svg>
        </div>
        <div
          className="cursor-pointer opacity-50 hover:opacity-100 tooltip"
          data-tip="YouTube"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 40 40"
          >
            <path
              fill="#f78f8f"
              fill-rule="evenodd"
              d="M20,38.5c-4.395-0.001-10.279-0.106-12.53-0.298 c-3.679-0.324-3.795-4.391-3.917-8.696c-0.016-0.533-0.03-1.062-0.053-1.58c0-2.354,0.233-5.083,0.608-7.1 c0.715-3.026,2.36-3.078,5.348-3.172c0.447-0.014,0.916-0.029,1.403-0.056c0.004,0,0.273-0.004,0.557-0.01 c1.171-0.027,3.913-0.089,8.482-0.089c0,0,0.177,0.001,0.211,0.001c4.602,0,7.313,0.062,8.475,0.088 c0.307,0.007,0.5,0.011,0.584,0.011c0.46,0.026,0.929,0.041,1.376,0.055c2.987,0.094,4.633,0.146,5.353,3.195 c0.37,1.993,0.604,4.722,0.604,7.098c-0.022,0.496-0.037,1.025-0.053,1.558c-0.122,4.305-0.238,8.372-3.918,8.696 C30.279,38.394,24.395,38.499,20,38.5L20,38.5z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#c74343"
              d="M19.886,18L19.936,18l0.001,0l0.076,0.001L20.063,18l0.044,0c4.56,0,7.296,0.062,8.465,0.089 c0.281,0.006,0.469,0.01,0.566,0.011c0.482,0.026,0.946,0.041,1.389,0.055c2.918,0.092,4.25,0.133,4.872,2.764 c0.37,1.99,0.6,4.684,0.601,6.986c-0.023,0.521-0.038,1.053-0.053,1.589c-0.137,4.787-0.452,7.945-3.46,8.21 C30.25,37.895,24.384,37.999,20,38c-4.384-0.001-10.251-0.105-12.485-0.296c-3.011-0.266-3.326-3.423-3.463-8.21 C4.037,28.958,4.022,28.425,4,27.948c0-2.346,0.23-5.039,0.591-6.983c0.631-2.677,1.963-2.719,4.882-2.81 c0.443-0.014,0.907-0.029,1.389-0.055c0.097-0.001,0.285-0.005,0.566-0.011C12.597,18.062,15.335,18,19.886,18 M20.102,17 c-0.036,0-0.067,0.001-0.102,0.001c-0.035,0-0.067-0.001-0.102-0.001c-5.772,0-8.671,0.1-9.066,0.1 c-3.711,0.204-6.286-0.3-7.214,3.635C3.205,22.953,3,25.78,3,27.948C3.205,32.646,2.796,38.291,7.427,38.7 C9.791,38.902,15.926,38.999,20,39c4.074-0.001,10.209-0.098,12.573-0.3c4.631-0.408,4.222-6.054,4.427-10.752 c0-2.168-0.205-4.994-0.617-7.212c-0.928-3.936-3.503-3.432-7.214-3.635C28.773,17.1,25.874,17,20.102,17L20.102,17z"
            ></path>
            <path
              fill="#fff"
              d="M19,35h-2l0-1.375C16.75,34,16.125,34.999,14.791,35C14.125,35,13,34.5,13,33v-9h2l0,8.625 c0,0.23,0.018,0.632,0.75,0.625c0.813-0.008,1.25-1,1.25-1L17,24h2V35z"
            ></path>
            <polygon
              fill="#fff"
              points="12,23 10,23 10,35 8,35 8,23 6,23 6,21 12,21"
            ></polygon>
            <path
              fill="#fff"
              d="M27,26.56c0-0.863-0.273-1.448-0.622-1.889C26.032,24.23,25.522,24,24.873,24 c-0.325,0-0.649,0.09-0.973,0.255c-0.325,0.162-0.67,0.445-0.9,0.805L23,21h-2v14h2c0,0,0-1.375,0-1.375 c0.386,0.451,0.949,1.386,2,1.375c1.5,0,2-1.375,2-2.5L27,26.56z M25,32.023C25,32.575,24.552,33,24,33s-0.991-0.212-1-0.5l0-5.94 c0.009-0.503,0.448-1,1-1s1,0.439,1,1.44V32.023z"
            ></path>
            <path
              fill="#fff"
              d="M34,30v-3.116C34,25.886,33.5,24,31,24c-2.375,0-2.997,1.98-2.997,2.884v4.708 c0,1.023,0.278,1.813,0.808,2.392c0.535,0.579,1.276,0.858,2.227,0.858c1.038,0,1.83-0.258,2.338-0.815 C33.912,33.494,34,32.685,34,31.592V31h-2v0.5c0,0.603-0.059,1.066-0.199,1.231C31.663,32.915,31.406,32.996,31,33 c-0.367,0.004-0.646-0.098-0.784-0.328C30.075,32.463,30,32.103,30,31.546V30H34z M30,27c0.009-0.537,0.448-1,1-1 c0.552,0,1,0.385,1,1v1h-2V27z"
            ></path>
            <polygon
              fill="#36404d"
              points="15,1 13,6.6 11,1 9,1 12,9.4 12,15 14,15 14,9.4 17,1"
            ></polygon>
            <path
              fill="#36404d"
              d="M28,4.5l0,7.75c0,0-0.437,0.992-1.25,1C26.018,13.257,26,12.855,26,12.625L26,4.5h-2l0,8.5 c0,1.5,1.125,2,1.791,2c1.334,0,1.959-1,2.209-1.375l0,1.25h2V4.5H28z"
            ></path>
            <path
              fill="#36404d"
              d="M19.75,15c-1.654,0-3-1.374-3-3.063v-4.5c0-1.688,1.346-3.063,3-3.063s3,1.374,3,3.063v4.5 C22.75,13.626,21.404,15,19.75,15z M19.75,6.25c-0.552,0-1,0.495-1,1.104v4.667c0,0.609,0.448,1.104,1,1.104s1-0.495,1-1.104V7.354 C20.75,6.745,20.302,6.25,19.75,6.25z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
