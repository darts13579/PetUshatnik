import * as React from "react";

const Footer: React.FC = () => {
    return <footer style={{bottom: 0}} className="footer text-center">
        <p>Powered with <a href="https://marketplace.visualstudio.com/items?itemName=NikolayMaev.ReactCoreBoilerplate">ReactCore boilerplate</a></p>
        <p>View on <a href="https://github.com/darts13579/PetUshatnik">GitHub</a></p>
        <p>Copyright (c) 2021 Bulat Abdullin</p>
    </footer>;
}

export default Footer;