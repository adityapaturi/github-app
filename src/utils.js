export function getOrgProjects(url) {
    return fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/vnd.github.inertia-preview+json",
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "token d2d0ecbb462c2d0c5cddb12e95d11b03c2433f4e"
        },
    }).then(response => response.json());
}
