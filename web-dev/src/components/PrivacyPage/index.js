import React from "react"
import NavigationTopBar from "../NavigationTopBar/index.js";
import "./privacy.css"


const PrivacyScreen = () => {
    return (
        <>
            <div className="row bg-color">
                <div >
                    <NavigationTopBar />
                </div>
                <div className="wd-lower-profile wd-pad-siding">
                    <p className="fw-bold fs-4 pb-2">Privacy Policy</p>
                </div>
                <div className="pt-3 wd-pad-siding">
                    <p className="fw-bold wd-title-size text-white">
                        Subtitle 1: All of Your Data Are Belongs to Us
                    </p>
                    <p className="fw-bold fs-5 pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque rutrum sodales eleifend.
                        Aenean venenatis nunc eget convallis malesuada.
                        Donec luctus urna sit amet quam venenatis, sit amet feugiat sapien laoreet.
                        Proin id metus massa. Nam mattis consectetur rutrum.
                        Proin ut varius nunc.
                        Proin rhoncus consequat nulla, et gravida est dictum egestas.
                    </p>
                    <p className="fw-bold wd-title-size text-white">
                        Subtitle 2: No We Won't Pay You For It
                    </p>
                    <p className="fw-bold fs-5 pb-3">
                        Maecenas dignissim eros nisl, eu bibendum massa tempor tincidunt.
                        Sed posuere consectetur egestas.
                        Sed nec urna at massa congue congue vel sed metus.
                        Suspendisse dictum faucibus ipsum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean elementum metus a erat sollicitudin vehicula.
                        Nam vitae dignissim ipsum.
                    </p>
                    <p className="fw-bold wd-title-size text-white">
                        Subtitle 3: Step 3 PROFIT $$$
                    </p>
                    <p className="fw-bold fs-5 pb-3">
                        Nam maximus accumsan ex, at cursus justo dictum vel.
                        Fusce nibh dui, sollicitudin sed bibendum a, mollis quis urna.
                        Maecenas nec congue nisi, eget consequat ipsum.
                        Vestibulum vitae dictum dolor.
                        Duis malesuada eros nec libero convallis ornare.
                        Pellentesque semper porta sapien, nec laoreet ipsum varius bibendum.
                        Curabitur urna massa, vestibulum quis nisl non, pellentesque dictum est.
                        Praesent non dolor a dui rhoncus dignissim eu consectetur lorem.
                        Fusce condimentum metus felis, nec vestibulum est euismod nec.
                        Maecenas auctor tincidunt tempor. Cras id vehicula lacus.
                        In interdum vulputate elit ut condimentum.
                        Ut dapibus purus semper tempus laoreet.
                        In quis luctus augue.
                        Sed at placerat neque, eget finibus libero.
                    </p>
                    <p className="fw-bold wd-title-size text-white">
                        Subtitle 4: *Evil Laugh*
                    </p>
                    <p className="fw-bold fs-5 pb-3">
                        Nam sed turpis enim.
                        Donec semper ante ac eros lobortis gravida.
                        Aliquam porttitor ligula vel tincidunt commodo.
                        Phasellus a congue magna, non molestie libero.
                        Suspendisse potenti.
                        Ut egestas elit vitae imperdiet tempus.
                        Maecenas eget felis id est semper pulvinar.
                        Nunc ac blandit sem.
                        Nulla imperdiet blandit purus, at semper tortor lacinia eu.
                        Maecenas ipsum leo, euismod in arcu quis, ultrices consequat urna.
                        Maecenas lobortis ante et diam euismod, id semper mi malesuada.
                        In bibendum, quam vel lobortis dictum, enim risus dictum lorem, et blandit augue risus a nisl.
                        Nunc sem lorem, pellentesque vitae ex at, tempor elementum ex. Etiam maximus aliquam ornare.
                    </p>
                </div>
            </div>

            <div className="wd-add-height-to-scroll"></div>
        </>
    );

}


export default PrivacyScreen;