import useThemeColors from "@/utils/useThemeColors";

const EmailSVG = ({ dark = false, className = "" }) => {
  const colors = useThemeColors();
  const fill = dark ? colors.white.DEFAULT : colors.black.DEFAULT;

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask id="path-1-inside-1_1703_11267" fill="white">
        <path d="M24.7043 33.0601L19.2109 27.5667L20.3041 26.4736L24.7043 30.8739L33.4864 22.0918L34.5795 23.1834L24.7043 33.0601ZM19.3175 17.2037L31.1936 9.4839H7.44137L19.3175 17.2037ZM19.3175 18.9267L6.96583 10.8503V27.0618C6.96583 27.3387 7.05487 27.5662 7.23294 27.7443C7.41101 27.9223 7.639 28.0114 7.91691 28.0114H15.3032L16.8472 29.5553H7.91691C7.20566 29.5553 6.61227 29.3176 6.13673 28.842C5.66119 28.3665 5.4229 27.7726 5.42188 27.0603V10.435C5.42188 9.72373 5.66016 9.13033 6.13673 8.65479C6.61329 8.17925 7.20617 7.94097 7.91536 7.93994H30.7196C31.4298 7.93994 32.0227 8.17823 32.4982 8.65479C32.9738 9.13136 33.2121 9.72475 33.2131 10.435V18.0405L31.6691 19.5845V10.8503L19.3175 18.9267Z" />
      </mask>
      <path
        d="M24.7043 33.0601L19.2109 27.5667L20.3041 26.4736L24.7043 30.8739L33.4864 22.0918L34.5795 23.1834L24.7043 33.0601ZM19.3175 17.2037L31.1936 9.4839H7.44137L19.3175 17.2037ZM19.3175 18.9267L6.96583 10.8503V27.0618C6.96583 27.3387 7.05487 27.5662 7.23294 27.7443C7.41101 27.9223 7.639 28.0114 7.91691 28.0114H15.3032L16.8472 29.5553H7.91691C7.20566 29.5553 6.61227 29.3176 6.13673 28.842C5.66119 28.3665 5.4229 27.7726 5.42188 27.0603V10.435C5.42188 9.72373 5.66016 9.13033 6.13673 8.65479C6.61329 8.17925 7.20617 7.94097 7.91536 7.93994H30.7196C31.4298 7.93994 32.0227 8.17823 32.4982 8.65479C32.9738 9.13136 33.2121 9.72475 33.2131 10.435V18.0405L31.6691 19.5845V10.8503L19.3175 18.9267Z"
        fill="white"
      />
      <path
        d="M24.7043 33.0601L23.4826 34.2818L24.7044 35.5037L25.9262 34.2818L24.7043 33.0601ZM19.2109 27.5667L17.9892 26.345L16.7675 27.5667L17.9892 28.7885L19.2109 27.5667ZM20.3041 26.4736L21.5258 25.2519L20.3041 24.0301L19.0823 25.2519L20.3041 26.4736ZM24.7043 30.8739L23.4826 32.0956L24.7043 33.3173L25.9261 32.0956L24.7043 30.8739ZM33.4864 22.0918L34.7072 20.8692L33.4855 19.6492L32.2646 20.8701L33.4864 22.0918ZM34.5795 23.1834L35.8013 24.4051L37.0237 23.1825L35.8004 21.9608L34.5795 23.1834ZM19.3175 17.2037L18.3758 18.6523L19.3175 19.2644L20.2591 18.6523L19.3175 17.2037ZM31.1936 9.4839L32.1352 10.9325L37.0219 7.7561H31.1936V9.4839ZM7.44137 9.4839V7.7561H1.61307L6.49971 10.9325L7.44137 9.4839ZM19.3175 18.9267L18.3719 20.3728L19.3175 20.9911L20.263 20.3728L19.3175 18.9267ZM6.96583 10.8503L7.9114 9.4042L5.23803 7.65615V10.8503H6.96583ZM7.91691 28.0114V26.2836V28.0114ZM15.3032 28.0114L16.5249 26.7896L16.0189 26.2836H15.3032V28.0114ZM16.8472 29.5553V31.2831H21.0184L18.0689 28.3336L16.8472 29.5553ZM5.42188 27.0603H3.69407L3.69408 27.0628L5.42188 27.0603ZM7.91536 7.93994V6.21214L7.91286 6.21214L7.91536 7.93994ZM33.2131 10.435H34.9409L34.9409 10.4325L33.2131 10.435ZM33.2131 18.0405L34.4348 19.2622L34.9409 18.7562V18.0405H33.2131ZM31.6691 19.5845H29.9413V23.7557L32.8909 20.8062L31.6691 19.5845ZM31.6691 10.8503H33.3969V7.65616L30.7236 9.4042L31.6691 10.8503ZM25.9261 31.8384L20.4327 26.345L17.9892 28.7885L23.4826 34.2818L25.9261 31.8384ZM20.4327 28.7885L21.5258 27.6953L19.0823 25.2519L17.9892 26.345L20.4327 28.7885ZM19.0823 27.6953L23.4826 32.0956L25.9261 29.6521L21.5258 25.2519L19.0823 27.6953ZM25.9261 32.0956L34.7081 23.3136L32.2646 20.8701L23.4826 29.6521L25.9261 32.0956ZM32.2655 23.3144L33.3586 24.406L35.8004 21.9608L34.7072 20.8692L32.2655 23.3144ZM33.3577 21.9618L23.4825 31.8385L25.9262 34.2818L35.8013 24.4051L33.3577 21.9618ZM20.2591 18.6523L32.1352 10.9325L30.2519 8.03525L18.3758 15.755L20.2591 18.6523ZM31.1936 7.7561H7.44137V11.2117H31.1936V7.7561ZM6.49971 10.9325L18.3758 18.6523L20.2591 15.755L8.38303 8.03525L6.49971 10.9325ZM20.263 17.4806L7.9114 9.4042L6.02026 12.2964L18.3719 20.3728L20.263 17.4806ZM5.23803 10.8503V27.0618H8.69363V10.8503H5.23803ZM5.23803 27.0618C5.23803 27.7469 5.47532 28.4301 6.0112 28.966L8.45467 26.5225C8.52882 26.5967 8.5965 26.6953 8.64155 26.8104C8.68535 26.9223 8.69363 27.0133 8.69363 27.0618H5.23803ZM6.0112 28.966C6.54836 29.5032 7.23285 29.7392 7.91691 29.7392V26.2836C7.96411 26.2836 8.05442 26.2916 8.166 26.3352C8.2809 26.38 8.37988 26.4477 8.45467 26.5225L6.0112 28.966ZM7.91691 29.7392H15.3032V26.2836H7.91691V29.7392ZM14.0815 29.2331L15.6254 30.7771L18.0689 28.3336L16.5249 26.7896L14.0815 29.2331ZM16.8472 27.8275H7.91691V31.2831H16.8472V27.8275ZM7.91691 27.8275C7.63459 27.8275 7.48982 27.7516 7.35847 27.6203L4.91499 30.0638C5.73471 30.8835 6.77673 31.2831 7.91691 31.2831V27.8275ZM7.35847 27.6203C7.22696 27.4888 7.15008 27.3427 7.14967 27.0578L3.69408 27.0628C3.69572 28.2024 4.09541 29.2442 4.91499 30.0638L7.35847 27.6203ZM7.14967 27.0603V10.435H3.69408V27.0603H7.14967ZM7.14967 10.435C7.14967 10.1538 7.22524 10.0095 7.35714 9.87785L4.91631 7.43173C4.09508 8.25119 3.69408 9.29363 3.69408 10.435H7.14967ZM7.35714 9.87785C7.49172 9.74356 7.63831 9.66815 7.91787 9.66774L7.91286 6.21214C6.77404 6.2138 5.73487 6.61494 4.91631 7.43173L7.35714 9.87785ZM7.91536 9.66774H30.7196V6.21214H7.91536V9.66774ZM30.7196 9.66774C30.999 9.66774 31.143 9.74279 31.2752 9.87521L33.7213 7.43438C32.9024 6.61366 31.8607 6.21214 30.7196 6.21214V9.66774ZM31.2752 9.87521C31.4089 10.0093 31.4849 10.1561 31.4853 10.4375L34.9409 10.4325C34.9392 9.29339 34.5386 8.25345 33.7213 7.43438L31.2752 9.87521ZM31.4853 10.435V18.0405H34.9409V10.435H31.4853ZM31.9913 16.8188L30.4474 18.3627L32.8909 20.8062L34.4348 19.2622L31.9913 16.8188ZM33.3969 19.5845V10.8503H29.9413V19.5845H33.3969ZM30.7236 9.4042L18.3719 17.4806L20.263 20.3728L32.6147 12.2964L30.7236 9.4042Z"
        fill={fill}
        mask="url(#path-1-inside-1_1703_11267)"
      />
    </svg>
  );
};

export default EmailSVG;
