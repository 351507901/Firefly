import * as FancyboxModule from "@fancyapps/ui";

type GalleryImage = {
	alt: string;
	element: HTMLImageElement;
	src: string;
};

export function registerDynamicGallery(): void {
	if (customElements.get("dynamic-gallery")) return;

	class DynamicGallery extends HTMLElement {
		private images: GalleryImage[] = [];

		connectedCallback() {
			if (this.dataset.ready) return;
			const source = this.dataset.sourceId
				? document.getElementById(this.dataset.sourceId)
				: null;
			if (!source) return;
			const elements = [...source.querySelectorAll<HTMLImageElement>("img")];
			if (elements.length === 0) return;
			this.images = elements.map((element) => ({
				alt: element.alt,
				element,
				src: element.currentSrc || element.src,
			}));
			this.buildGrid();
			this.dataset.ready = "true";
			this.hidden = false;
			document.dispatchEvent(new CustomEvent("dynamic-gallery:ready"));
		}

		private buildGrid() {
			const grid = this.querySelector<HTMLElement>("[data-gallery-grid]");
			if (!grid) return;
			grid.dataset.count = String(Math.min(this.images.length, 6));
			grid.dataset.layout = this.images.length === 1 ? "single" : "grid";
			this.images.slice(0, 6).forEach(({ element, alt }, index) => {
				const button = document.createElement("button");
				button.type = "button";
				button.className = "page-gallery-grid-item";
				button.setAttribute(
					"aria-label",
					(this.dataset.viewImage || "View image {index}").replace(
						"{index}",
						String(index + 1),
					),
				);
				button.addEventListener("click", () => this.openLightbox(index));
				const container =
					element.closest<HTMLElement>("center") ??
					element.closest<HTMLElement>("figure") ??
					element;
				element.alt = alt;
				button.append(element);
				if (index === 5 && this.images.length > 6) {
					const more = document.createElement("span");
					more.className = "page-gallery-more";
					more.textContent = `+${this.images.length - 6}`;
					button.append(more);
				}
				grid.append(button);
				if (container !== element) container.remove();
			});
			for (const { element } of this.images.slice(6)) {
				(
					element.closest<HTMLElement>("center") ??
					element.closest<HTMLElement>("figure") ??
					element
				).remove();
			}
		}

		private openLightbox(index: number) {
			const Fancybox = FancyboxModule.Fancybox;
			Fancybox.show(
				this.images.map((image) => ({
					src: image.src,
					alt: image.alt,
					type: "image",
				})),
				{ startIndex: index },
			);
		}

	}

	customElements.define("dynamic-gallery", DynamicGallery);
}
