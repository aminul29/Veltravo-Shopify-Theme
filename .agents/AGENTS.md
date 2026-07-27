# Workspace Rules & Guidelines

## Shopify Theme Design & Layout
1. **Unobscured Product Image Presentation**:
   - In product cards, promo tiles, and feature blocks, always present product images clearly without heavy dark text overlays obstructing the product subject.
   - Position product titles, descriptions, pricing tags, and call-to-action buttons in a dedicated content container **below** the product image.
   - Render product photography full-width edge-to-edge using `object-fit: cover` or clean contained aspect ratios (`aspect-ratio: 1/1` / `4/3`).

2. **Synchronized Product Availability & Cart Actions**:
   - Always derive both the stock status indicator (`In Stock` / `Out of Stock`) and the form action button (`Add to Cart` / `Sold Out`) from the exact same Liquid availability evaluation:
     ```liquid
     assign current_variant = product.selected_or_first_available_variant | default: product.variants.first
     assign is_available = product.available
     if current_variant != blank and current_variant.available == false
       assign is_available = false
     endif
     ```
   - Never hardcode static stock badges when button logic evaluates dynamic variant availability.

3. **Sold-Out vs. Promotional Badge Priority**:
   - Promotional badges like `SALE` or `NEW` must **always** check `product.available == true`.
   - If a product is sold out (`product.available == false`), display a dedicated `SOLD OUT` badge (or no promo tag). Never render a `SALE` badge on a sold-out item.
     ```liquid
     assign is_available = product.available
     assign show_sold_out_tag = false
     assign show_sale_tag = false

     if is_available == false
# Workspace Rules & Guidelines

## Shopify Theme Design & Layout
1. **Unobscured Product Image Presentation**:
   - In product cards, promo tiles, and feature blocks, always present product images clearly without heavy dark text overlays obstructing the product subject.
   - Position product titles, descriptions, pricing tags, and call-to-action buttons in a dedicated content container **below** the product image.
   - Render product photography full-width edge-to-edge using `object-fit: cover` or clean contained aspect ratios (`aspect-ratio: 1/1` / `4/3`).

2. **Synchronized Product Availability & Cart Actions**:
   - Always derive both the stock status indicator (`In Stock` / `Out of Stock`) and the form action button (`Add to Cart` / `Sold Out`) from the exact same Liquid availability evaluation:
     ```liquid
     assign current_variant = product.selected_or_first_available_variant | default: product.variants.first
     assign is_available = product.available
     if current_variant != blank and current_variant.available == false
       assign is_available = false
     endif
     ```
   - Never hardcode static stock badges when button logic evaluates dynamic variant availability.

3. **Sold-Out vs. Promotional Badge Priority**:
   - Promotional badges like `SALE` or `NEW` must **always** check `product.available == true`.
   - If a product is sold out (`product.available == false`), display a dedicated `SOLD OUT` badge (or no promo tag). Never render a `SALE` badge on a sold-out item.
     ```liquid
     assign is_available = product.available
     assign show_sold_out_tag = false
     assign show_sale_tag = false

     if is_available == false
       assign show_sold_out_tag = true
     elsif product.compare_at_price > product.price
       assign show_sale_tag = true
     endif
     ```

## Shopify Liquid Architecture & Tag Scope
1. **Section-Only Liquid Tags**:
   - `{% stylesheet %}`, `{% javascript %}`, and `{% schema %}` tags are strictly scoped to files inside the `sections/` directory.
   - When writing CSS or inline styles in non-section files (such as `templates/` or `snippets/`), **always** use standard HTML `<style>` tags instead of `{% stylesheet %}`.

## Git Workflow & Local Work Integrity
1. **Preserve Local Workspace Work**:
   - During active design and development sprints, the local workspace is the authoritative source of truth.
   - If `git push` fails due to remote branch divergence, **never** execute `git pull --rebase` or merge commands that risk introducing conflict markers into newly built theme files.
   - Prefer force-pushing local commits (`git push origin main --force-with-lease` / `git push origin main -f`) or consult the user before initiating any rebase operations.
