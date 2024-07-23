export const compilerOptions = {
    "plugins": [
        {
            "name": "typescript-snapshots-plugin",
            "snapshotDir": "<rootDir>/__snapshots__",
            "snapshotCallIdentifiers": [
                "toMatchSnapshot",
                "myMatchSnapshot"
            ]
        }
    ],
}
