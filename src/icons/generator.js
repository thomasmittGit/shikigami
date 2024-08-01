/**
 * Generate icon.
 *
 * @param   parent  Parent element to append icon.
 * @param   url  Url to redirect (null if func is not null).
 * @param   func Onclick function for icon (null if url is not null).
 * @param   svg  SVG as string.
 * @param   styles  SVG and background colors.
 *          format ==>
 *      {
        '--lsi-color': 'hex_code',
        '--lsi-ref-color': 'hex_code',
        '--isi-color': 'css_filter',
        '--isi-hover-color': 'css_filter',
        '--position': 'css_position',
        'top: 'pixels' (optional),
        'right: 'pixels' (optional),
        'bottom: 'pixels' (optional),
        'left: 'pixels' (optional),
        }
 * @returns icon as HTML element.
 */
function generateIconSocial(parent, url, func, svg, styles) {
    var icon = $(svg);
    $(icon).addClass('icon_socials_icon');

    var wrapper;

    if (url != null) {
        wrapper = $(`<div class="wrapper_socials_icon">
            <a href="${url}" class="link_socials_icon">
                ${icon.prop('outerHTML')}
            </a>
        </div>`);
    }

    if (func != null) {
        wrapper = $(`<div class="wrapper_socials_icon">
            <span onclick="${func}" class="link_socials_icon">
                ${icon.prop('outerHTML')}
            </span>
        </div>`);
    }

    $(wrapper).css(styles);

    parent.append(wrapper);
}