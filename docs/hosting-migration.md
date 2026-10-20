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

Render deployed commit `49a1d39` successfully. Its first build exposed an unused utility importing a Git-ignored Firebase config; the unused utility was removed and a build from a clean Git archive passed.

The user approved Render’s additional-domain charge of $0.25/month. The domain was added to the Render service, and the following Squarespace records were saved:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| A | @ | 216.24.57.1 | 1 hour |
| CNAME | www | lorenzo-brown-portfolio.onrender.com | 1 hour |

Public DNS at 1.1.1.1 returns these values. Render verified both domains and valid HTTPS was confirmed directly against Render’s assigned IP without disabling certificate verification:

- `https://lorenzobrown.dev/`: HTTP 200, redesigned Software Engineer page.
- Deployed stylesheet: HTTP 200 with `text/css`.
- `https://www.lorenzobrown.dev/`: HTTP 301 to `https://lorenzobrown.dev/`.
- Render preview: visually verified with the complete dark design.

Some resolvers still cached Firebase’s previous A record during verification, including Google DNS and the local browser. Until those caches expire, individual visitors may see the old site. Both previous website records had a one-hour TTL.

Firebase remains available for rollback, with its production deployment workflow set to manual.
