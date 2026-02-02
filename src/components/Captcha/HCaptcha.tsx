
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Form({ onSucces , captchaRef}: any) {

  return (
    <form>
      <HCaptcha
        sitekey="234c3ffe-0a3c-4d0c-bb60-22d4a35a96bc"
        size="invisible"
        ref={captchaRef}

        onLoad={() => {
          // ✅ captcha fully ready here
          captchaRef.current.execute();
        }}

        onVerify={(token, ekey) => {
          console.log("hCaptcha token:", token);
          onSucces(token, ekey);
        }}
      />
    </form>
  );
}
