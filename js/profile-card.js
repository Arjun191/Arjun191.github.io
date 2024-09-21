window.addEventListener("DOMContentLoaded", async function () {
    async function get(url) {
        const resp = await fetch(url);
        return resp.json();
    }

    // Function to create LinkedIn card for Venkata Nagarjun
    document.querySelectorAll(".linkedin-card").forEach(async function (el) {
        // Simulate fetching user data (manually added since LinkedIn's API is private)
        const profile = {
            profile_image: "https://media.licdn.com/dms/image/C5603AQGd8LiPAzF5Kg/profile-displayphoto-shrink_800_800/0/1623864015946?e=1700092800&v=beta&t=gxWy-7Qkj5xOcmDi-cO1tXYDd-WP5bhKN71Rf1kA2hE", // URL to Venkata Nagarjun's LinkedIn profile image
            name: "Venkata Nagarjun",
            headline: "MS Robotics @ Carnegie Mellon University",
            link: "https://www.linkedin.com/in/venkata-nagarjun-pudureddiyur-manivannan-57190b19a/"
        };

        // Creating the LinkedIn card HTML
        el.innerHTML = `
            <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji; border-radius: 6px; line-height: 1.5; padding: 16px; font-size: 14px; color: #24292e; background-color: #adb8bd;">
            <div style="display: flex; align-items: center;">
                <img style="width: 48px; height: 48px; border-radius: 50%" src="images/profile_pic_edited.jpg" alt="Profile image"></img>
                <div style="display: flex; flex-direction: column; margin-left: 12px">
                <span style="font-weight: 500; color: #000000; font-size: 18px">
                    <a style="text-decoration: none; color: inherit;" target="_blank" href="${profile.link}">
                    ${profile.name}
                    </a>
                </span>
                <span style="font-weight: 400; color: #586069; font-size: 12px">
                    ${profile.headline}
                </span>
                </div>
            </div>
            <div style="margin-top: 12px; display: flex; justify-content: space-evenly; align-items: center; ">
                <div style="margin-top: -4px">
                // <span style="font-size: 10px; font-weight: 500; color: #586069;">
                //     LINKEDIN PROFILE
                // </span>
                <div style="font-weight: 400; color: #211F1F; font-size: 12px; margin-top: 2px; justify-content: space-evenly; align-items: center;">
                    <a href="${profile.link}" target="_blank" style="font-weight: 600; color: #0077b5; font-size: 14px;">
                    Visit LinkedIn
                    </a>
                </div>
                </div>
            </div>
            </div>
        `;
    });

    document.querySelectorAll(".github-card").forEach(async function (el) {
        const username = el.getAttribute("username");

        const response = await get(`https://api.github.com/users/${username}`);
        const { name, avatar_url, public_repos, followers, html_url, following } = response;

        el.innerHTML = `
            <div style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji; border-radius: 6px; line-height: 1.5; padding: 16px; font-size: 14px; color: #24292e; background-color: #adb8bd;">
                <div style="display: flex; align-items: center; margin-top: -4px">
                    <img style="width: 48px; height: 48px; border-radius: 50%" src="${avatar_url}" alt="Profile image"></img>
                    <div style="display: flex; flex-direction: column; margin-left: 12px">
                        <span style="font-weight: 500; color: #black; font-size: 18px">
                            <a style="text-decoration: none; color: inherit;" target="_blank" href="${html_url}">
                                ${name}
                            </a>
                        </span>
                        <span style="font-weight: 400; color: #586069; font-size: 12px">
                            @${html_url.replace('https://', '')}
                        </span>
                    </div>
                </div>

                <div style="margin-top: 12px; display: flex; justify-content: space-evenly; align-items: center; ">
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 10px; font-weight: 500; color: #586069;">
                            REPOSITORIES
                        </span>
                        <span style="font-weight: 600; color: #211F1F; font-size: 32px; line-height: 1">
                            ${public_repos}
                        </span>
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 10px; font-weight: 500; color: #586069;">
                            FOLLOWERS
                        </span>
                        <span style="font-weight: 600; color: #211F1F; font-size: 32px; line-height: 1">
                            ${followers}
                        </span>
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 10px; font-weight: 500; color: #586069;">
                            FOLLOWING
                        </span>
                        <span style="font-weight: 600; color: #211F1F; font-size: 32px; line-height: 1">
                            ${following}
                        </span>
                    </div>
                </div>
            </div>
        `;
    });
});