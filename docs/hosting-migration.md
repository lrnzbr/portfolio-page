# Render migration

## Render resources

- Blueprint: `exs-dbbfo15g1s2s738qluq0`
- Static site: `srv-dbbfo2lg1s2s738qm3gg`
- Preview: https://lorenzo-brown-portfolio.onrender.com
- Repository: https://github.com/lrnzbr/portfolio-page
- Branch: `main`
- Configuration: `render.yaml`

## DNS before migration

Provider: Squarespace. The following website records were observed before the cutover:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| A | @ | 199.36.158.100 | 1 hour |
| A | www | 199.36.158.100 | 1 hour |

Other DNS records, including domain verification and Domain Connect, are unrelated to this website migration and should be retained.

To roll back after a DNS cutover, restore the two website records above. Firebase’s last published release remains available; its production GitHub workflow is now manual.

## Current status

The Render Blueprint has been created. Its first build exposed an unused utility importing a Git-ignored Firebase config; the unused utility was removed for reproducible builds. Custom-domain cutover is pending verification of the Render deployment and approval of Render’s additional-domain charge ($0.25/month beyond the workspace’s two included domains).
