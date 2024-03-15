var ic=Object.defineProperty;var l=(sl,Fo)=>ic(sl,"name",{value:Fo,configurable:!0});(()=>{var sl={9149:(D,T,X)=>{"use strict";X.d(T,{Z:()=>g});var ee=X(3645),ne=X.n(ee),I=ne()(function(h){return h[1]});I.push([D.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

body a {
	text-decoration: none;
}

h3 {
	display: unset;
	font-size: unset;
	margin-block-start: unset;
	margin-block-end: unset;
	margin-inline-start: unset;
	margin-inline-end: unset;
	font-weight: unset;
}

body a:hover {
	text-decoration: underline;
}

button,
input[type='submit'] {
	color: var(--vscode-button-foreground);
	font-family: var(--vscode-font-family);
	border-radius: 2px;
	border: 1px solid transparent;
	padding: 4px 12px;
	font-size: 13px;
	line-height: 18px;
	white-space: nowrap;
	user-select: none;
}

button:not(.icon-button),
input[type='submit'] {
	background-color: var(--vscode-button-background);
}

input.select-left {
	border-radius: 2px 0 0 2px;
}

button.select-right {
	border-radius: 0 2px 2px 0;
}

button:focus,
input[type='submit']:focus {
	outline: 1px solid var(--vscode-focusBorder);
	outline-offset: 2px;
}

button:focus-within,
input[type='submit']:focus-within {
	border: 1px solid transparent;
	outline: 1px solid transparent;
}

button:hover:enabled,
button:focus:enabled,
input[type='submit']:focus:enabled,
input[type='submit']:hover:enabled {
	background-color: var(--vscode-button-hoverBackground);
	cursor: pointer;
}

button.secondary {
	background-color: var(--vscode-button-secondaryBackground);
	color: var(--vscode-button-secondaryForeground);
}

button.secondary:hover:enabled,
button.secondary:focus:enabled,
input[type='submit'].secondary:focus:enabled,
input[type='submit'].secondary:hover:enabled {
	background-color: var(--vscode-button-secondaryHoverBackground);
}

textarea,
input[type='text'] {
	display: block;
	box-sizing: border-box;
	padding: 8px;
	width: 100%;
	resize: vertical;
	font-size: 13px;
	border: 1px solid var(--vscode-dropdown-border);
	background-color: var(--vscode-input-background);
	color: var(--vscode-input-foreground);
	font-family: var(--vscode-font-family);
	border-radius: 2px;
}

textarea::placeholder,
input[type='text']::placeholder {
	color: var(--vscode-input-placeholderForeground);
}

select {
	display: block;
	box-sizing: border-box;
	padding: 4px 8px;
	border-radius: 2px;
	font-size: 13px;
	border: 1px solid var(--vscode-dropdown-border);
	background-color: var(--vscode-dropdown-background);
	color: var(--vscode-dropdown-foreground);
}

textarea:focus,
input[type='text']:focus,
input[type='checkbox']:focus,
select:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

input[type='checkbox'] {
	outline-offset: 1px;
}

.vscode-high-contrast input[type='checkbox'] {
	outline: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast input[type='checkbox']:focus {
	outline: 1px solid var(--vscode-contrastActiveBorder);
}

svg path {
	fill: var(--vscode-foreground);
}

body button:disabled,
input[type='submit']:disabled {
	opacity: 0.4;
}

body .hidden {
	display: none !important;
}

body img.avatar,
body span.avatar-icon svg {
	width: 20px;
	height: 20px;
	border-radius: 50%;
}

body img.avatar {
	vertical-align: middle;
}

.avatar-link {
	flex-shrink: 0;
}

.icon-button {
	display: flex;
	padding: 2px;
	background: transparent;
	border-radius: 4px;
	line-height: 0;
}

.icon-button:hover,
.section .icon-button:hover,
.section .icon-button:focus {
	background-color: var(--vscode-toolbar-hoverBackground);
}

.icon-button:focus,
.section .icon-button:focus {
	outline: 1px solid var(--vscode-focusBorder);
	outline-offset: unset;
}

.label .icon-button:hover,
.label .icon-button:focus {
	background-color: transparent;
}

.section-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.section-item .avatar-link {
	margin-right: 8px;
}

.section-item .avatar-container {
	flex-shrink: 0;
}

.section-item .login {
	width: 129px;
	flex-shrink: 0;
}

.section-item img.avatar {
	width: 20px;
	height: 20px;
}

.section-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3px;
}

.section-icon.changes svg path {
	fill: var(--vscode-list-errorForeground);
}

.section-icon.commented svg path,
.section-icon.requested svg path {
	fill: var(--vscode-list-warningForeground);
}

.section-icon.approved svg path {
	fill: var(--vscode-issues-open);
}

.reviewer-icons {
	display: flex;
	gap: 4px;
}

.push-right {
	margin-left: auto;
}

.avatar-with-author {
	display: flex;
	align-items: center;
}

.author-link {
	font-weight: 600;
	color: var(--vscode-editor-foreground);
}

.status-item button {
	margin-left: auto;
	margin-right: 0;
}

.automerge-section {
	display: flex;
}

#status-checks .automerge-section {
	align-items: center;
	padding: 16px;
	background: var(--vscode-editorHoverWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.automerge-section .merge-select-container {
	margin-left: 8px;
}

.automerge-checkbox-wrapper,
.automerge-checkbox-label {
	display: flex;
	align-items: center;
	margin-right: 4px;
}

.automerge-checkbox-label {
	min-width: 80px;
}

.merge-queue-title .merge-queue-pending {
	color: var(--vscode-list-warningForeground);
}

.merge-queue-title .merge-queue-blocked {
	color: var(--vscode-list-errorForeground);
}

.merge-queue-title {
	font-weight: bold;
	font-size: larger;
}

/** Theming */

.vscode-high-contrast button:not(.secondary):not(.icon-button) {
	background: var(--vscode-button-background);
}


.vscode-high-contrast input {
	outline: none;
	background: var(--vscode-input-background);
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast button:focus {
	border: 1px solid var(--vscode-contrastActiveBorder);
}

.vscode-high-contrast button:hover {
	border: 1px dotted var(--vscode-contrastActiveBorder);
}

::-webkit-scrollbar-corner {
	display: none;
}

.labels-list {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.label {
	display: flex;
	justify-content: normal;
	padding: 0 8px;
	border-radius: 20px;
	border-style: solid;
	border-width: 1px;
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	font-size: 11px;
	line-height: 18px;
	font-weight: 600;
}

/* split button */

.primary-split-button {
	display: flex;
	flex-grow: 1;
	min-width: 0;
}

button.split-left {
	border-radius: 2px 0 0 2px;
	flex-grow: 1;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.split {
	width: 1px;
	height: 100%;
	background-color: var(--vscode-button-background);
	opacity: 0.5;
}

button.split-right {
	border-radius: 0 2px 2px 0;
	cursor: pointer;
	width: 24px;
	height: 28px;
	position: relative;
}

button.split-right:disabled {
	cursor: default;
}

button.split-right .icon {
	pointer-events: none;
	position: absolute;
	top: 6px;
	right: 4px;
}

button.split-right .icon svg path {
	fill: unset;
}
button.input-box {
	display: block;
	height: 24px;
	margin-top: -4px;
	padding-top: 2px;
	padding-left: 8px;
	text-align: left;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: var(--vscode-input-foreground) !important;
	background-color: var(--vscode-input-background) !important;
}

button.input-box:active,
button.input-box:focus {
	color: var(--vscode-inputOption-activeForeground) !important;
	background-color: var(--vscode-inputOption-activeBackground) !important;
}

button.input-box:hover:not(:disabled) {
	background-color: var(--vscode-inputOption-hoverBackground) !important;
}

button.input-box:focus {
	border-color: var(--vscode-focusBorder) !important;
}`,""]);const g=I},7238:(D,T,X)=>{"use strict";X.d(T,{Z:()=>g});var ee=X(3645),ne=X.n(ee),I=ne()(function(h){return h[1]});I.push([D.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

#app {
	display: grid;
	grid-template-columns: 1fr minmax(200px, 300px);
	column-gap: 32px;
}

#title {
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row: 1;
}

#main {
	grid-column: 1;
	grid-row: 2;
	display: flex;
	flex-direction: column;
	gap: 16px;
}

#sidebar {
	display: flex;
	flex-direction: column;
	gap: 16px;
	grid-column: 2;
	grid-row: 2;
}

#project a {
	cursor: pointer;
}

a:focus,
input:focus,
select:focus,
textarea:focus,
.title-text:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

.title-text {
	margin-right: 5px;
}

.title {
	display: flex;
	align-items: flex-start;
	margin: 20px 0;
	padding-bottom: 24px;
	border-bottom: 1px solid var(--vscode-list-inactiveSelectionBackground);
}

.title .pr-number {
	margin-left: 5px;
}

.loading-indicator {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.comment-body li div {
	display: inline;
}

.comment-body li div.Box,
.comment-body li div.Box div {
	display: block;
}

.comment-body code,
.comment-body a,
span.lineContent {
	overflow-wrap: anywhere;
}

#title:empty {
	border: none;
}

h2 {
	margin: 0;
}

body hr {
	display: block;
	height: 1px;
	border: 0;
	border-top: 1px solid #555;
	margin: 0 !important;
	padding: 0;
}

body .comment-container .avatar-container {
	margin-right: 12px;
}

body .comment-container .avatar-container a {
	display: flex;
}

body .comment-container .avatar-container img.avatar,
body .comment-container .avatar-container .avatar-icon svg {
	margin-right: 0;
}

.vscode-light .avatar-icon {
	filter: invert(100%);
}

body a.avatar-link:focus {
	outline-offset: 2px;
}

body .comment-container.comment,
body .comment-container.review {
	background-color: var(--vscode-editor-background);
}

.review-comment-container {
	width: 100%;
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	position: relative;
}

body #main > .comment-container > .review-comment-container > .review-comment-header:not(:nth-last-child(2)) {
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

body .comment-container .review-comment-header {
	position: relative;
	display: flex;
	width: 100%;
	box-sizing: border-box;
	padding: 8px 16px;
	color: var(--vscode-foreground);
	align-items: center;
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.description-header {
	float: right;
	height: 32px;
}

.review-comment-header .comment-actions {
	margin-left: auto;
}

.review-comment-header .pending {
	color: inherit;
	font-style: italic;
}

.comment-actions button {
	background-color: transparent;
	padding: 0;
	line-height: normal;
	font-size: 11px;
}

.comment-actions button svg {
	margin-right: 0;
	height: 14px;
}

.status-check {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 16px;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.status-check-details {
	display: flex;
	align-items: center;
	gap: 8px;
}

#merge-on-github {
	margin-top: 10px;
}

.status-item {
	padding: 12px 16px;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.status-item:first-of-type {
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.status-item,
.form-actions,
.ready-for-review-text-wrapper {
	display: flex;
	gap: 8px;
	align-items: center;
}

.commit-association {
	display: flex;
	font-style: italic;
	flex-direction: row-reverse;
	padding-top: 7px;
}

.commit-association span {
	flex-direction: row;
}

.email {
	font-weight: bold;
}

button.input-box {
	float: right;
}

.status-item-detail-text {
	display: flex;
	gap: 8px;
}

.status-check-detail-text {
	margin-right: 8px;
}

.status-section p {
	margin: 0;
}

.merge-queue-container,
.ready-for-review-container {
	padding: 16px;
	background-color: var(--vscode-editorWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.ready-for-review-icon {
	width: 16px;
	height: 16px;
}

.ready-for-review-heading {
	font-weight: 600;
}

.ready-for-review-meta {
	font-size: 0.9;
}

#status-checks {
	border: 1px solid var(--vscode-editorHoverWidget-border);
	border-radius: 4px;
}

#status-checks .label {
	display: inline-flex;
	margin-right: 16px;
}

#status-checks a {
	cursor: pointer;
}

#status-checks summary {
	display: flex;
	align-items: center;
}

#status-checks-display-button {
	margin-left: auto;
}

#status-checks .avatar-link svg {
	width: 24px;
	margin-right: 0px;
	vertical-align: middle;
}

.status-check .avatar-link .avatar-icon {
	margin-right: 0px;
}

#status-checks .merge-select-container {
	display: flex;
	align-items: center;
	background-color: var(--vscode-editorWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

#status-checks .merge-select-container > * {
	margin-right: 5px;
}

#status-checks .merge-select-container > select {
	margin-left: 5px;
}

#status-checks .branch-status-container {
	display: inline-block;
}

#status-checks .branch-status-message {
	display: inline-block;
	line-height: 100%;
	padding: 16px;
}

body .comment-container .review-comment-header > span,
body .comment-container .review-comment-header > a,
body .commit .commit-message > a,
body .merged .merged-message > a {
	margin-right: 6px;
}

body .comment-container .review-comment-container .pending-label,
body .resolved-container .outdatedLabel {
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	font-size: 11px;
	font-weight: 600;
	border-radius: 20px;
	padding: 4px 8px;
	margin-left: 6px;
}

body .resolved-container .unresolvedLabel {
	font-style: italic;
	margin-left: 5px;
}

body .diff .diffPath {
	margin-right: 4px;
}

.comment-container form, #merge-comment-form {
	padding: 16px;
	background-color: var(--vscode-editorWidget-background);
}

body .comment-container .comment-body,
.review-body {
	padding: 16px;
	border-top: none;
}

body .comment-container .review-comment-container .review-comment-body {
	display: flex;
	flex-direction: column;
	gap: 16px;
	border: none;
}

body .comment-container .comment-body > p,
body .comment-container .comment-body > div > p,
.comment-container .review-body > p {
	margin-top: 0;
	line-height: 1.5em;
}

body .comment-container .comment-body > p:last-child,
body .comment-container .comment-body > div > p:last-child,
.comment-container .review-body > p:last-child {
	margin-bottom: 0;
}

body {
	margin: auto;
	width: 100%;
	max-width: 1280px;
	padding: 0 32px;
	box-sizing: border-box;
}

body .hidden-focusable {
	height: 0 !important;
	overflow: hidden;
}

.comment-actions button:hover:enabled,
.comment-actions button:focus:enabled {
	background-color: transparent;
}

body button.checkedOut {
	color: var(--vscode-foreground);
	opacity: 1 !important;
	background-color: transparent;
}

body button .icon {
	width: 16px;
	height: 16px;
}

.prIcon {
	display: flex;
	border-radius: 10px;
	margin-right: 5px;
	margin-top: 18px;
}

.overview-title h2 {
	font-size: 32px;
}

.overview-title textarea {
	min-height: 50px;
}

.title-container {
	width: 100%;
}

.subtitle {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 12px;
}

.subtitle .avatar,
.subtitle .avatar-icon svg {
	margin-right: 6px;
}

.subtitle .author {
	display: flex;
	align-items: center;
}

.merge-branches {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	flex-wrap: wrap;
}

.branch-tag {
	padding: 2px 4px;
	background: var(--vscode-editorInlayHint-background);
	color: var(--vscode-editorInlayHint-foreground);
	border-radius: 4px;
}

.subtitle .created-at {
	margin-left: auto;
	white-space: nowrap;
}

.button-group {
	display: flex;
	gap: 8px;
}

.small-button {
	display: flex;
	font-size: 11px;
	font-weight: 600;
	padding: 0 5px;
}

#status {
	box-sizing: border-box;
	line-height: 18px;
	color: var(--vscode-button-foreground);
	border-radius: 18px;
	padding: 4px 12px;
	margin-right: 10px;
	font-weight: 600;
	display: flex;
	gap: 4px;
}

#status svg path {
	fill: var(--vscode-button-foreground);
}

.vscode-high-contrast #status {
	border: 1px solid var(--vscode-contrastBorder);
	background-color: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
}

.vscode-high-contrast #status svg path {
	fill: var(--vscode-badge-foreground);
}

.status-badge-merged {
	background-color: var(--vscode-pullRequests-merged);
}

.status-badge-open {
	background-color: var(--vscode-pullRequests-open);
}

.status-badge-closed {
	background-color: var(--vscode-pullRequests-closed);
}

.status-badge-draft {
	background-color: var(--vscode-pullRequests-draft);
}

.section {
	padding-bottom: 24px;
	border-bottom: 1px solid var(--vscode-editorWidget-border);
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.section:last-of-type {
	padding-bottom: 0px;
	border-bottom: none;
}

.section-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
}

.section-header .section-title {
	font-weight: 600;
}

.section-placeholder {
	color: var(--vscode-descriptionForeground);
}

.assign-yourself:hover {
	cursor: pointer;
}

.section svg {
	width: 16px;
	height: 16px;
	display: block;
	margin-right: 0;
}

.commit svg {
	width: 16px;
	height: auto;
	margin-right: 8px;
	flex-shrink: 0;
}

.comment-container.commit {
	border: none;
	padding: 4px 16px;
}

.comment-container.commit,
.comment-container.merged {
	box-sizing: border-box;
}

.commit,
.review,
.merged {
	display: flex;
	width: 100%;
	border: none;
	color: var(--vscode-foreground);
}

.review {
	margin: 0px 8px;
	padding: 4px 0;
}

.commit .commit-message,
.merged .merged-message {
	display: flex;
	align-items: center;
	overflow: hidden;
	flex-grow: 1;
}

.commit .commit-message .avatar-container,
.merged .merged-message .avatar-container {
	margin-right: 4px;
	flex-shrink: 0;
}

.commit .avatar-container .avatar,
.commit .avatar-container .avatar-icon,
.commit .avatar-container .avatar-icon svg,
.merged .avatar-container .avatar,
.merged .avatar-container .avatar-icon,
.merged .avatar-container .avatar-icon svg {
	width: 18px;
	height: 18px;
}

.message-container {
	display: inline-grid;
}

.commit .commit-message .message,
.merged .merged-message .message {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.sha-with-timestamp {
	display: flex;
	align-items: center;
	gap: 8px;
}

.commit .sha {
	min-width: 50px;
	font-family: var(--vscode-editor-font-family);
	margin-bottom: -2px;
}

.merged .merged-message .message,
.merged .inline-sha {
	margin: 0 4px 0 0;
}

.merged svg {
	width: 14px;
	height: auto;
	margin-right: 8px;
	flex-shrink: 0;
}

.details {
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
}

#description .comment-container {
	padding-top: 0px;
}

.comment-container {
	position: relative;
	width: 100%;
	display: flex;
	margin: 0;
	align-items: center;
	border-radius: 4px;
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.comment-container[data-type='commit'] {
	padding: 8px 0;
	border: none;
}

.comment-container[data-type='commit'] + .comment-container[data-type='commit'] {
	border-top: none;
}

.comment-body .review-comment {
	box-sizing: border-box;
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
}

.resolve-comment-row {
	display: flex;
	align-items: center;
	padding: 16px;
	background-color: var(--vscode-editorHoverWidget-background);
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.review-comment-container .review-comment .review-comment-header {
	padding: 16px 16px 8px 16px;
	border: none;
	background: none;
}

.review-comment-container .review-comment .comment-body {
	border: none;
	padding: 0px 16px 8px 16px;
}

.review-comment-container .review-comment .comment-body:last-of-type {
	padding: 0px 16px 16px 16px;
}

.comment-body .line {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 8px;
}

body .comment-form {
	padding: 20px 0 10px;
}

.review-comment-container .comment-form {
	margin: 0 0 0 36px;
	padding: 10px 0;
}

.task-list-item {
	list-style-type: none;
}

#status-checks textarea {
	margin-top: 10px;
}

textarea {
	min-height: 100px;
	max-height: 500px;
}

.editing-form {
	padding: 5px 0;
	display: flex;
	flex-direction: column;
	min-width: 300px;
}

.editing-form .form-actions {
	display: flex;
	gap: 8px;
	justify-content: flex-end;
}

.comment-form .form-actions > button,
.comment-form .form-actions > input[type='submit'] {
	margin-right: 0;
	margin-left: 0;
}

.primary-split-button {
	flex-grow: unset;
}

.form-actions {
	display: flex;
	justify-content: flex-end;
	padding-top: 10px;
}

#rebase-actions {
	flex-direction: row-reverse;
}

.main-comment-form > .form-actions {
	margin-bottom: 10px;
}

.details .comment-body {
	padding: 19px 0;
}

blockquote {
	display: block;
	flex-direction: column;
	margin: 8px 0;
	padding: 8px 12px;
	border-left-width: 5px;
	border-left-style: solid;
}

blockquote p {
	margin: 8px 0;
}

blockquote p:first-child {
	margin-top: 0;
}

blockquote p:last-child {
	margin-bottom: 0;
}

.comment-body a:focus,
.comment-body input:focus,
.comment-body select:focus,
.comment-body textarea:focus {
	outline-offset: -1px;
}

.comment-body hr {
	border: 0;
	height: 2px;
	border-bottom: 2px solid;
}

.comment-body h1 {
	padding-bottom: 0.3em;
	line-height: 1.2;
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

.comment-body h1,
h2,
h3 {
	font-weight: normal;
}

.comment-body h1 code,
.comment-body h2 code,
.comment-body h3 code,
.comment-body h4 code,
.comment-body h5 code,
.comment-body h6 code {
	font-size: inherit;
	line-height: auto;
}

.comment-body table {
	border-collapse: collapse;
}

.comment-body table > thead > tr > th {
	text-align: left;
	border-bottom: 1px solid;
}

.comment-body table > thead > tr > th,
.comment-body table > thead > tr > td,
.comment-body table > tbody > tr > th,
.comment-body table > tbody > tr > td {
	padding: 5px 10px;
}

.comment-body table > tbody > tr + tr > td {
	border-top: 1px solid;
}

code {
	font-family: Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback';
}

.comment-body .snippet-clipboard-content {
	display: grid;
}

.comment-body video {
	width: 100%;
	border: 1px solid var(--vscode-editorWidget-border);
	border-radius: 4px;
}

.comment-body summary {
	margin-bottom: 8px;
}

.comment-body details summary::marker {
	display: flex;
}

.comment-body details summary svg {
	margin-left: 8px;
}

.comment-body body.wordWrap pre {
	white-space: pre-wrap;
}

.comment-body .mac code {
	font-size: 12px;
	line-height: 18px;
}

.comment-body pre:not(.hljs),
.comment-body pre.hljs code > div {
	padding: 16px;
	border-radius: 3px;
	overflow: auto;
}

.timestamp,
.timestamp:hover {
	color: inherit;
	white-space: nowrap;
}

.timestamp {
	overflow: hidden;
	text-overflow: ellipsis;
}

/** Theming */

.comment-body pre code {
	color: var(--vscode-editor-foreground);
}

.vscode-light .comment-body pre:not(.hljs),
.vscode-light .comment-body code > div {
	background-color: rgba(220, 220, 220, 0.4);
}

.vscode-dark .comment-body pre:not(.hljs),
.vscode-dark .comment-body code > div {
	background-color: rgba(10, 10, 10, 0.4);
}

.vscode-high-contrast .comment-body pre:not(.hljs),
.vscode-high-contrast .comment-body code>div {
	background-color: var(--vscode-editor-background);
	border: 1px solid var(--vscode-panel-border);
}

.vscode-high-contrast .comment-body h1 {
	border: 1px solid rgb(0, 0, 0);
}

.vscode-high-contrast .comment-container .review-comment-header,
.vscode-high-contrast #status-checks {
	background: none;
	border: 1px solid var(--vscode-panel-border);
}

.vscode-high-contrast .comment-container .comment-body,
.vscode-high-contrast .review-comment-container .review-body {
	border: 1px solid var(--vscode-panel-border);
}

.vscode-light .comment-body table > thead > tr > th {
	border-color: rgba(0, 0, 0, 0.69);
}

.vscode-dark .comment-body table > thead > tr > th {
	border-color: rgba(255, 255, 255, 0.69);
}

.vscode-light .comment-body h1,
.vscode-light .comment-body hr,
.vscode-light .comment-body table > tbody > tr + tr > td {
	border-color: rgba(0, 0, 0, 0.18);
}

.vscode-dark .comment-body h1,
.vscode-dark .comment-body hr,
.vscode-dark .comment-body table > tbody > tr + tr > td {
	border-color: rgba(255, 255, 255, 0.18);
}

.review-comment-body .diff-container {
	border-radius: 4px;
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.review-comment-body .diff-container .review-comment-container .comment-container {
	padding-top: 0;
}

.review-comment-body .diff-container .comment-container {
	border: none;
}

.review-comment-body .diff-container .review-comment-container .review-comment-header .avatar-container {
	margin-right: 4px;
}

.review-comment-body .diff-container .review-comment-container .review-comment-header .avatar {
	width: 18px;
	height: 18px;
}

.review-comment-body .diff-container .diff {
	border-top: 1px solid var(--vscode-editorWidget-border);
	overflow: scroll;
}

.resolved-container {
	padding: 6px 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.resolved-container .diffPath:hover {
	text-decoration: underline;
	color: var(--vscode-textLink-activeForeground);
	cursor: pointer;
}

.diff .diffLine {
	display: flex;
	font-size: 12px;
	line-height: 20px;
}

.win32 .diff .diffLine {
	font-family: Consolas, Inconsolata, 'Courier New', monospace;
}

.darwin .diff .diffLine {
	font-family: Monaco, Menlo, Inconsolata, 'Courier New', monospace;
}

.linux .diff .diffLine {
	font-family: 'Droid Sans Mono', Inconsolata, 'Courier New', monospace, 'Droid Sans Fallback';
}

.diff .diffLine.add {
	background-color: var(--vscode-diffEditor-insertedTextBackground);
}

.diff .diffLine.delete {
	background-color: var(--vscode-diffEditor-removedTextBackground);
}

.diff .diffLine .diffTypeSign {
	user-select: none;
	padding-right: 5px;
}

.diff .diffLine .lineNumber {
	width: 1%;
	min-width: 50px;
	padding-right: 10px;
	padding-left: 10px;
	font-size: 12px;
	line-height: 20px;
	text-align: right;
	white-space: nowrap;
	box-sizing: border-box;
	display: block;
	user-select: none;
	font-family: var(--vscode-editor-font-family);
}

.github-checkbox {
	pointer-events: none;
}

.github-checkbox input {
	color: rgb(84, 84, 84);
	opacity: 0.6;
}

/* High Contrast Mode */

.vscode-high-contrast a:focus {
	outline-color: var(--vscode-contrastActiveBorder);
}

.vscode-high-contrast .title {
	border-bottom: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast .diff .diffLine {
	background: none;
}

.vscode-high-contrast .resolved-container {
	background: none;
}

.vscode-high-contrast .diff-container {
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast .diff .diffLine.add {
	border: 1px dashed var(--vscode-diffEditor-insertedTextBorder);
}

.vscode-high-contrast .diff .diffLine.delete {
	border: 1px dashed var(--vscode-diffEditor-removedTextBorder);
}

@media (max-width: 925px) {
	#app {
		display: block;
	}

	#sidebar {
		display: grid;
		column-gap: 20px;
		grid-template-columns: 50% 50%;
		padding: 0;
		padding-bottom: 24px;
	}

	.section-content {
		display: flex;
		flex-wrap: wrap;
	}

	.section-item {
		display: flex;
	}

	body .hidden-focusable {
		height: initial;
		overflow: initial;
	}

	.section-header button {
		margin-left: 8px;
		display: flex;
	}

	.section-item .login {
		width: auto;
		margin-right: 4px;
	}

	/* Hides bottom borders on bottom two sections */
	.section:nth-last-child(-n + 2) {
		border-bottom: none;
	}
}

.icon {
	width: 16px;
	height: 16px;
	font-size: 16px;
	display: flex;
}

.action-bar {
	position: absolute;
	display: flex;
	justify-content: space-between;
	z-index: 100;
	top: 9px;
	right: 9px;
}

.flex-action-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	margin-left: 9px;
	min-width: 42px;
}

.action-bar > button,
.flex-action-bar > button {
	margin-left: 4px;
	margin-right: 4px;
}

.title-editing-form {
	flex-grow: 1;
}

.title-editing-form > .form-actions {
	margin-left: 0;
}

/* permalinks */
.comment-body .Box p {
	margin-block-start: 0px;
	margin-block-end: 0px;
}

.comment-body .Box {
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	border-color: var(--vscode-editorHoverWidget-border);
}

.comment-body .Box-header {
	background-color: var(--vscode-editorWidget-background);
	color: var(--vscode-disabledForeground);
	border-bottom-style: solid;
	border-bottom-width: 1px;
	padding: 8px 16px;
	border-bottom-color: var(--vscode-editorHoverWidget-border);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.comment-body .blob-num {
	word-wrap: break-word;
	box-sizing: border-box;
	border: 0 !important;
	padding-top: 0 !important;
	padding-bottom: 0 !important;
	min-width: 50px;
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
	color: var(--vscode-editorLineNumber-foreground);
	line-height: 20px;
	text-align: right;
	white-space: nowrap;
	vertical-align: top;
	cursor: pointer;
	user-select: none;
}

.comment-body .blob-num::before {
	content: attr(data-line-number);
}

.comment-body .blob-code-inner {
	tab-size: 8;
	border: 0 !important;
	padding-top: 0 !important;
	padding-bottom: 0 !important;
	line-height: 20px;
	vertical-align: top;
	display: table-cell;
	overflow: visible;
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
	word-wrap: anywhere;
	text-indent: 0;
	white-space: pre-wrap;
}

.comment-body .commit-tease-sha {
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
}

/* Suggestion */
.comment-body .blob-wrapper.data.file .d-table {
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	border-collapse: unset;
	border-color: var(--vscode-editorHoverWidget-border);
}

.comment-body .js-suggested-changes-blob {
	border-collapse: collapse;
}

.blob-code-deletion,
.blob-num-deletion {
	border-collapse: collapse;
	background-color: var(--vscode-diffEditor-removedLineBackground);
}

.blob-code-addition,
.blob-num-addition {
	border-collapse: collapse;
	background-color: var(--vscode-diffEditor-insertedLineBackground);
}

.blob-code-marker-addition::before {
	content: "+ ";
}

.blob-code-marker-deletion::before {
	content: "- ";
}`,""]);const g=I},3645:D=>{"use strict";D.exports=function(T){var X=[];return X.toString=l(function(){return this.map(function(ne){var I=T(ne);return ne[2]?"@media ".concat(ne[2]," {").concat(I,"}"):I}).join("")},"toString"),X.i=function(ee,ne,I){typeof ee=="string"&&(ee=[[null,ee,""]]);var g={};if(I)for(var h=0;h<this.length;h++){var H=this[h][0];H!=null&&(g[H]=!0)}for(var V=0;V<ee.length;V++){var U=[].concat(ee[V]);I&&g[U[0]]||(ne&&(U[2]?U[2]="".concat(ne," and ").concat(U[2]):U[2]=ne),X.push(U))}},X}},7484:function(D){(function(T,X){D.exports=X()})(this,function(){"use strict";var T="millisecond",X="second",ee="minute",ne="hour",I="day",g="week",h="month",H="quarter",V="year",U="date",s=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,oe=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,re={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},Re=l(function(z,M,A){var j=String(z);return!j||j.length>=M?z:""+Array(M+1-j.length).join(A)+z},"$"),Me={s:Re,z:function(z){var M=-z.utcOffset(),A=Math.abs(M),j=Math.floor(A/60),Z=A%60;return(M<=0?"+":"-")+Re(j,2,"0")+":"+Re(Z,2,"0")},m:l(function z(M,A){if(M.date()<A.date())return-z(A,M);var j=12*(A.year()-M.year())+(A.month()-M.month()),Z=M.clone().add(j,h),ue=A-Z<0,ie=M.clone().add(j+(ue?-1:1),h);return+(-(j+(A-Z)/(ue?Z-ie:ie-Z))||0)},"t"),a:function(z){return z<0?Math.ceil(z)||0:Math.floor(z)},p:function(z){return{M:h,y:V,w:g,d:I,D:U,h:ne,m:ee,s:X,ms:T,Q:H}[z]||String(z||"").toLowerCase().replace(/s$/,"")},u:function(z){return z===void 0}},$="en",Y={};Y[$]=re;var me=l(function(z){return z instanceof W},"m"),S=l(function(z,M,A){var j;if(!z)return $;if(typeof z=="string")Y[z]&&(j=z),M&&(Y[z]=M,j=z);else{var Z=z.name;Y[Z]=z,j=Z}return!A&&j&&($=j),j||!A&&$},"D"),E=l(function(z,M){if(me(z))return z.clone();var A=typeof M=="object"?M:{};return A.date=z,A.args=arguments,new W(A)},"v"),_=Me;_.l=S,_.i=me,_.w=function(z,M){return E(z,{locale:M.$L,utc:M.$u,x:M.$x,$offset:M.$offset})};var W=function(){function z(A){this.$L=S(A.locale,null,!0),this.parse(A)}l(z,"d");var M=z.prototype;return M.parse=function(A){this.$d=function(j){var Z=j.date,ue=j.utc;if(Z===null)return new Date(NaN);if(_.u(Z))return new Date;if(Z instanceof Date)return new Date(Z);if(typeof Z=="string"&&!/Z$/i.test(Z)){var ie=Z.match(s);if(ie){var se=ie[2]-1||0,pe=(ie[7]||"0").substring(0,3);return ue?new Date(Date.UTC(ie[1],se,ie[3]||1,ie[4]||0,ie[5]||0,ie[6]||0,pe)):new Date(ie[1],se,ie[3]||1,ie[4]||0,ie[5]||0,ie[6]||0,pe)}}return new Date(Z)}(A),this.$x=A.x||{},this.init()},M.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},M.$utils=function(){return _},M.isValid=function(){return this.$d.toString()!=="Invalid Date"},M.isSame=function(A,j){var Z=E(A);return this.startOf(j)<=Z&&Z<=this.endOf(j)},M.isAfter=function(A,j){return E(A)<this.startOf(j)},M.isBefore=function(A,j){return this.endOf(j)<E(A)},M.$g=function(A,j,Z){return _.u(A)?this[j]:this.set(Z,A)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(A,j){var Z=this,ue=!!_.u(j)||j,ie=_.p(A),se=l(function(rt,Ie){var F=_.w(Z.$u?Date.UTC(Z.$y,Ie,rt):new Date(Z.$y,Ie,rt),Z);return ue?F:F.endOf(I)},"$"),pe=l(function(rt,Ie){return _.w(Z.toDate()[rt].apply(Z.toDate("s"),(ue?[0,0,0,0]:[23,59,59,999]).slice(Ie)),Z)},"l"),_e=this.$W,Oe=this.$M,ze=this.$D,je="set"+(this.$u?"UTC":"");switch(ie){case V:return ue?se(1,0):se(31,11);case h:return ue?se(1,Oe):se(0,Oe+1);case g:var Te=this.$locale().weekStart||0,qe=(_e<Te?_e+7:_e)-Te;return se(ue?ze-qe:ze+(6-qe),Oe);case I:case U:return pe(je+"Hours",0);case ne:return pe(je+"Minutes",1);case ee:return pe(je+"Seconds",2);case X:return pe(je+"Milliseconds",3);default:return this.clone()}},M.endOf=function(A){return this.startOf(A,!1)},M.$set=function(A,j){var Z,ue=_.p(A),ie="set"+(this.$u?"UTC":""),se=(Z={},Z[I]=ie+"Date",Z[U]=ie+"Date",Z[h]=ie+"Month",Z[V]=ie+"FullYear",Z[ne]=ie+"Hours",Z[ee]=ie+"Minutes",Z[X]=ie+"Seconds",Z[T]=ie+"Milliseconds",Z)[ue],pe=ue===I?this.$D+(j-this.$W):j;if(ue===h||ue===V){var _e=this.clone().set(U,1);_e.$d[se](pe),_e.init(),this.$d=_e.set(U,Math.min(this.$D,_e.daysInMonth())).$d}else se&&this.$d[se](pe);return this.init(),this},M.set=function(A,j){return this.clone().$set(A,j)},M.get=function(A){return this[_.p(A)]()},M.add=function(A,j){var Z,ue=this;A=Number(A);var ie=_.p(j),se=l(function(Oe){var ze=E(ue);return _.w(ze.date(ze.date()+Math.round(Oe*A)),ue)},"d");if(ie===h)return this.set(h,this.$M+A);if(ie===V)return this.set(V,this.$y+A);if(ie===I)return se(1);if(ie===g)return se(7);var pe=(Z={},Z[ee]=6e4,Z[ne]=36e5,Z[X]=1e3,Z)[ie]||1,_e=this.$d.getTime()+A*pe;return _.w(_e,this)},M.subtract=function(A,j){return this.add(-1*A,j)},M.format=function(A){var j=this;if(!this.isValid())return"Invalid Date";var Z=A||"YYYY-MM-DDTHH:mm:ssZ",ue=_.z(this),ie=this.$locale(),se=this.$H,pe=this.$m,_e=this.$M,Oe=ie.weekdays,ze=ie.months,je=l(function(Ie,F,G,Q){return Ie&&(Ie[F]||Ie(j,Z))||G[F].substr(0,Q)},"h"),Te=l(function(Ie){return _.s(se%12||12,Ie,"0")},"d"),qe=ie.meridiem||function(Ie,F,G){var Q=Ie<12?"AM":"PM";return G?Q.toLowerCase():Q},rt={YY:String(this.$y).slice(-2),YYYY:this.$y,M:_e+1,MM:_.s(_e+1,2,"0"),MMM:je(ie.monthsShort,_e,ze,3),MMMM:je(ze,_e),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:je(ie.weekdaysMin,this.$W,Oe,2),ddd:je(ie.weekdaysShort,this.$W,Oe,3),dddd:Oe[this.$W],H:String(se),HH:_.s(se,2,"0"),h:Te(1),hh:Te(2),a:qe(se,pe,!0),A:qe(se,pe,!1),m:String(pe),mm:_.s(pe,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:ue};return Z.replace(oe,function(Ie,F){return F||rt[Ie]||ue.replace(":","")})},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(A,j,Z){var ue,ie=_.p(j),se=E(A),pe=6e4*(se.utcOffset()-this.utcOffset()),_e=this-se,Oe=_.m(this,se);return Oe=(ue={},ue[V]=Oe/12,ue[h]=Oe,ue[H]=Oe/3,ue[g]=(_e-pe)/6048e5,ue[I]=(_e-pe)/864e5,ue[ne]=_e/36e5,ue[ee]=_e/6e4,ue[X]=_e/1e3,ue)[ie]||_e,Z?Oe:_.a(Oe)},M.daysInMonth=function(){return this.endOf(h).$D},M.$locale=function(){return Y[this.$L]},M.locale=function(A,j){if(!A)return this.$L;var Z=this.clone(),ue=S(A,j,!0);return ue&&(Z.$L=ue),Z},M.clone=function(){return _.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},z}(),O=W.prototype;return E.prototype=O,[["$ms",T],["$s",X],["$m",ee],["$H",ne],["$W",I],["$M",h],["$y",V],["$D",U]].forEach(function(z){O[z[1]]=function(M){return this.$g(M,z[0],z[1])}}),E.extend=function(z,M){return z.$i||(z(M,W,E),z.$i=!0),E},E.locale=S,E.isDayjs=me,E.unix=function(z){return E(1e3*z)},E.en=Y[$],E.Ls=Y,E.p={},E})},4110:function(D){(function(T,X){D.exports=X()})(this,function(){"use strict";return function(T,X,ee){T=T||{};var ne=X.prototype,I={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function g(H,V,U,s){return ne.fromToBase(H,V,U,s)}l(g,"i"),ee.en.relativeTime=I,ne.fromToBase=function(H,V,U,s,oe){for(var re,Re,Me,$=U.$locale().relativeTime||I,Y=T.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],me=Y.length,S=0;S<me;S+=1){var E=Y[S];E.d&&(re=s?ee(H).diff(U,E.d,!0):U.diff(H,E.d,!0));var _=(T.rounding||Math.round)(Math.abs(re));if(Me=re>0,_<=E.r||!E.r){_<=1&&S>0&&(E=Y[S-1]);var W=$[E.l];oe&&(_=oe(""+_)),Re=typeof W=="string"?W.replace("%d",_):W(_,V,E.l,Me);break}}if(V)return Re;var O=Me?$.future:$.past;return typeof O=="function"?O(Re):O.replace("%s",Re)},ne.to=function(H,V){return g(H,V,this,!0)},ne.from=function(H,V){return g(H,V,this)};var h=l(function(H){return H.$u?ee.utc():ee()},"d");ne.toNow=function(H){return this.to(h(this),H)},ne.fromNow=function(H){return this.from(h(this),H)}}})},660:function(D){(function(T,X){D.exports=X()})(this,function(){"use strict";return function(T,X,ee){ee.updateLocale=function(ne,I){var g=ee.Ls[ne];if(g)return(I?Object.keys(I):[]).forEach(function(h){g[h]=I[h]}),g}}})},296:D=>{function T(X,ee,ne){var I,g,h,H,V;ee==null&&(ee=100);function U(){var oe=Date.now()-H;oe<ee&&oe>=0?I=setTimeout(U,ee-oe):(I=null,ne||(V=X.apply(h,g),h=g=null))}l(U,"later");var s=l(function(){h=this,g=arguments,H=Date.now();var oe=ne&&!I;return I||(I=setTimeout(U,ee)),oe&&(V=X.apply(h,g),h=g=null),V},"debounced");return s.clear=function(){I&&(clearTimeout(I),I=null)},s.flush=function(){I&&(V=X.apply(h,g),h=g=null,clearTimeout(I),I=null)},s}l(T,"debounce"),T.debounce=T,D.exports=T},7187:D=>{"use strict";var T=typeof Reflect=="object"?Reflect:null,X=T&&typeof T.apply=="function"?T.apply:l(function(E,_,W){return Function.prototype.apply.call(E,_,W)},"ReflectApply"),ee;T&&typeof T.ownKeys=="function"?ee=T.ownKeys:Object.getOwnPropertySymbols?ee=l(function(E){return Object.getOwnPropertyNames(E).concat(Object.getOwnPropertySymbols(E))},"ReflectOwnKeys"):ee=l(function(E){return Object.getOwnPropertyNames(E)},"ReflectOwnKeys");function ne(S){console&&console.warn&&console.warn(S)}l(ne,"ProcessEmitWarning");var I=Number.isNaN||l(function(E){return E!==E},"NumberIsNaN");function g(){g.init.call(this)}l(g,"EventEmitter"),D.exports=g,D.exports.once=me,g.EventEmitter=g,g.prototype._events=void 0,g.prototype._eventsCount=0,g.prototype._maxListeners=void 0;var h=10;function H(S){if(typeof S!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof S)}l(H,"checkListener"),Object.defineProperty(g,"defaultMaxListeners",{enumerable:!0,get:function(){return h},set:function(S){if(typeof S!="number"||S<0||I(S))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+S+".");h=S}}),g.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},g.prototype.setMaxListeners=l(function(E){if(typeof E!="number"||E<0||I(E))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+E+".");return this._maxListeners=E,this},"setMaxListeners");function V(S){return S._maxListeners===void 0?g.defaultMaxListeners:S._maxListeners}l(V,"_getMaxListeners"),g.prototype.getMaxListeners=l(function(){return V(this)},"getMaxListeners"),g.prototype.emit=l(function(E){for(var _=[],W=1;W<arguments.length;W++)_.push(arguments[W]);var O=E==="error",z=this._events;if(z!==void 0)O=O&&z.error===void 0;else if(!O)return!1;if(O){var M;if(_.length>0&&(M=_[0]),M instanceof Error)throw M;var A=new Error("Unhandled error."+(M?" ("+M.message+")":""));throw A.context=M,A}var j=z[E];if(j===void 0)return!1;if(typeof j=="function")X(j,this,_);else for(var Z=j.length,ue=Me(j,Z),W=0;W<Z;++W)X(ue[W],this,_);return!0},"emit");function U(S,E,_,W){var O,z,M;if(H(_),z=S._events,z===void 0?(z=S._events=Object.create(null),S._eventsCount=0):(z.newListener!==void 0&&(S.emit("newListener",E,_.listener?_.listener:_),z=S._events),M=z[E]),M===void 0)M=z[E]=_,++S._eventsCount;else if(typeof M=="function"?M=z[E]=W?[_,M]:[M,_]:W?M.unshift(_):M.push(_),O=V(S),O>0&&M.length>O&&!M.warned){M.warned=!0;var A=new Error("Possible EventEmitter memory leak detected. "+M.length+" "+String(E)+" listeners added. Use emitter.setMaxListeners() to increase limit");A.name="MaxListenersExceededWarning",A.emitter=S,A.type=E,A.count=M.length,ne(A)}return S}l(U,"_addListener"),g.prototype.addListener=l(function(E,_){return U(this,E,_,!1)},"addListener"),g.prototype.on=g.prototype.addListener,g.prototype.prependListener=l(function(E,_){return U(this,E,_,!0)},"prependListener");function s(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}l(s,"onceWrapper");function oe(S,E,_){var W={fired:!1,wrapFn:void 0,target:S,type:E,listener:_},O=s.bind(W);return O.listener=_,W.wrapFn=O,O}l(oe,"_onceWrap"),g.prototype.once=l(function(E,_){return H(_),this.on(E,oe(this,E,_)),this},"once"),g.prototype.prependOnceListener=l(function(E,_){return H(_),this.prependListener(E,oe(this,E,_)),this},"prependOnceListener"),g.prototype.removeListener=l(function(E,_){var W,O,z,M,A;if(H(_),O=this._events,O===void 0)return this;if(W=O[E],W===void 0)return this;if(W===_||W.listener===_)--this._eventsCount==0?this._events=Object.create(null):(delete O[E],O.removeListener&&this.emit("removeListener",E,W.listener||_));else if(typeof W!="function"){for(z=-1,M=W.length-1;M>=0;M--)if(W[M]===_||W[M].listener===_){A=W[M].listener,z=M;break}if(z<0)return this;z===0?W.shift():$(W,z),W.length===1&&(O[E]=W[0]),O.removeListener!==void 0&&this.emit("removeListener",E,A||_)}return this},"removeListener"),g.prototype.off=g.prototype.removeListener,g.prototype.removeAllListeners=l(function(E){var _,W,O;if(W=this._events,W===void 0)return this;if(W.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):W[E]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete W[E]),this;if(arguments.length===0){var z=Object.keys(W),M;for(O=0;O<z.length;++O)M=z[O],M!=="removeListener"&&this.removeAllListeners(M);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(_=W[E],typeof _=="function")this.removeListener(E,_);else if(_!==void 0)for(O=_.length-1;O>=0;O--)this.removeListener(E,_[O]);return this},"removeAllListeners");function re(S,E,_){var W=S._events;if(W===void 0)return[];var O=W[E];return O===void 0?[]:typeof O=="function"?_?[O.listener||O]:[O]:_?Y(O):Me(O,O.length)}l(re,"_listeners"),g.prototype.listeners=l(function(E){return re(this,E,!0)},"listeners"),g.prototype.rawListeners=l(function(E){return re(this,E,!1)},"rawListeners"),g.listenerCount=function(S,E){return typeof S.listenerCount=="function"?S.listenerCount(E):Re.call(S,E)},g.prototype.listenerCount=Re;function Re(S){var E=this._events;if(E!==void 0){var _=E[S];if(typeof _=="function")return 1;if(_!==void 0)return _.length}return 0}l(Re,"listenerCount"),g.prototype.eventNames=l(function(){return this._eventsCount>0?ee(this._events):[]},"eventNames");function Me(S,E){for(var _=new Array(E),W=0;W<E;++W)_[W]=S[W];return _}l(Me,"arrayClone");function $(S,E){for(;E+1<S.length;E++)S[E]=S[E+1];S.pop()}l($,"spliceOne");function Y(S){for(var E=new Array(S.length),_=0;_<E.length;++_)E[_]=S[_].listener||S[_];return E}l(Y,"unwrapListeners");function me(S,E){return new Promise(function(_,W){function O(){z!==void 0&&S.removeListener("error",z),_([].slice.call(arguments))}l(O,"eventListener");var z;E!=="error"&&(z=l(function(A){S.removeListener(E,O),W(A)},"errorListener"),S.once("error",z)),S.once(E,O)})}l(me,"once")},7418:D=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var T=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;function ne(g){if(g==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(g)}l(ne,"toObject");function I(){try{if(!Object.assign)return!1;var g=new String("abc");if(g[5]="de",Object.getOwnPropertyNames(g)[0]==="5")return!1;for(var h={},H=0;H<10;H++)h["_"+String.fromCharCode(H)]=H;var V=Object.getOwnPropertyNames(h).map(function(s){return h[s]});if(V.join("")!=="0123456789")return!1;var U={};return"abcdefghijklmnopqrst".split("").forEach(function(s){U[s]=s}),Object.keys(Object.assign({},U)).join("")==="abcdefghijklmnopqrst"}catch(s){return!1}}l(I,"shouldUseNative"),D.exports=I()?Object.assign:function(g,h){for(var H,V=ne(g),U,s=1;s<arguments.length;s++){H=Object(arguments[s]);for(var oe in H)X.call(H,oe)&&(V[oe]=H[oe]);if(T){U=T(H);for(var re=0;re<U.length;re++)ee.call(H,U[re])&&(V[U[re]]=H[U[re]])}}return V}},6470:D=>{"use strict";function T(I){if(typeof I!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(I))}l(T,"assertPath");function X(I,g){for(var h="",H=0,V=-1,U=0,s,oe=0;oe<=I.length;++oe){if(oe<I.length)s=I.charCodeAt(oe);else{if(s===47)break;s=47}if(s===47){if(!(V===oe-1||U===1))if(V!==oe-1&&U===2){if(h.length<2||H!==2||h.charCodeAt(h.length-1)!==46||h.charCodeAt(h.length-2)!==46){if(h.length>2){var re=h.lastIndexOf("/");if(re!==h.length-1){re===-1?(h="",H=0):(h=h.slice(0,re),H=h.length-1-h.lastIndexOf("/")),V=oe,U=0;continue}}else if(h.length===2||h.length===1){h="",H=0,V=oe,U=0;continue}}g&&(h.length>0?h+="/..":h="..",H=2)}else h.length>0?h+="/"+I.slice(V+1,oe):h=I.slice(V+1,oe),H=oe-V-1;V=oe,U=0}else s===46&&U!==-1?++U:U=-1}return h}l(X,"normalizeStringPosix");function ee(I,g){var h=g.dir||g.root,H=g.base||(g.name||"")+(g.ext||"");return h?h===g.root?h+H:h+I+H:H}l(ee,"_format");var ne={resolve:l(function(){for(var g="",h=!1,H,V=arguments.length-1;V>=-1&&!h;V--){var U;V>=0?U=arguments[V]:(H===void 0&&(H=process.cwd()),U=H),T(U),U.length!==0&&(g=U+"/"+g,h=U.charCodeAt(0)===47)}return g=X(g,!h),h?g.length>0?"/"+g:"/":g.length>0?g:"."},"resolve"),normalize:l(function(g){if(T(g),g.length===0)return".";var h=g.charCodeAt(0)===47,H=g.charCodeAt(g.length-1)===47;return g=X(g,!h),g.length===0&&!h&&(g="."),g.length>0&&H&&(g+="/"),h?"/"+g:g},"normalize"),isAbsolute:l(function(g){return T(g),g.length>0&&g.charCodeAt(0)===47},"isAbsolute"),join:l(function(){if(arguments.length===0)return".";for(var g,h=0;h<arguments.length;++h){var H=arguments[h];T(H),H.length>0&&(g===void 0?g=H:g+="/"+H)}return g===void 0?".":ne.normalize(g)},"join"),relative:l(function(g,h){if(T(g),T(h),g===h||(g=ne.resolve(g),h=ne.resolve(h),g===h))return"";for(var H=1;H<g.length&&g.charCodeAt(H)===47;++H);for(var V=g.length,U=V-H,s=1;s<h.length&&h.charCodeAt(s)===47;++s);for(var oe=h.length,re=oe-s,Re=U<re?U:re,Me=-1,$=0;$<=Re;++$){if($===Re){if(re>Re){if(h.charCodeAt(s+$)===47)return h.slice(s+$+1);if($===0)return h.slice(s+$)}else U>Re&&(g.charCodeAt(H+$)===47?Me=$:$===0&&(Me=0));break}var Y=g.charCodeAt(H+$),me=h.charCodeAt(s+$);if(Y!==me)break;Y===47&&(Me=$)}var S="";for($=H+Me+1;$<=V;++$)($===V||g.charCodeAt($)===47)&&(S.length===0?S+="..":S+="/..");return S.length>0?S+h.slice(s+Me):(s+=Me,h.charCodeAt(s)===47&&++s,h.slice(s))},"relative"),_makeLong:l(function(g){return g},"_makeLong"),dirname:l(function(g){if(T(g),g.length===0)return".";for(var h=g.charCodeAt(0),H=h===47,V=-1,U=!0,s=g.length-1;s>=1;--s)if(h=g.charCodeAt(s),h===47){if(!U){V=s;break}}else U=!1;return V===-1?H?"/":".":H&&V===1?"//":g.slice(0,V)},"dirname"),basename:l(function(g,h){if(h!==void 0&&typeof h!="string")throw new TypeError('"ext" argument must be a string');T(g);var H=0,V=-1,U=!0,s;if(h!==void 0&&h.length>0&&h.length<=g.length){if(h.length===g.length&&h===g)return"";var oe=h.length-1,re=-1;for(s=g.length-1;s>=0;--s){var Re=g.charCodeAt(s);if(Re===47){if(!U){H=s+1;break}}else re===-1&&(U=!1,re=s+1),oe>=0&&(Re===h.charCodeAt(oe)?--oe==-1&&(V=s):(oe=-1,V=re))}return H===V?V=re:V===-1&&(V=g.length),g.slice(H,V)}else{for(s=g.length-1;s>=0;--s)if(g.charCodeAt(s)===47){if(!U){H=s+1;break}}else V===-1&&(U=!1,V=s+1);return V===-1?"":g.slice(H,V)}},"basename"),extname:l(function(g){T(g);for(var h=-1,H=0,V=-1,U=!0,s=0,oe=g.length-1;oe>=0;--oe){var re=g.charCodeAt(oe);if(re===47){if(!U){H=oe+1;break}continue}V===-1&&(U=!1,V=oe+1),re===46?h===-1?h=oe:s!==1&&(s=1):h!==-1&&(s=-1)}return h===-1||V===-1||s===0||s===1&&h===V-1&&h===H+1?"":g.slice(h,V)},"extname"),format:l(function(g){if(g===null||typeof g!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof g);return ee("/",g)},"format"),parse:l(function(g){T(g);var h={root:"",dir:"",base:"",ext:"",name:""};if(g.length===0)return h;var H=g.charCodeAt(0),V=H===47,U;V?(h.root="/",U=1):U=0;for(var s=-1,oe=0,re=-1,Re=!0,Me=g.length-1,$=0;Me>=U;--Me){if(H=g.charCodeAt(Me),H===47){if(!Re){oe=Me+1;break}continue}re===-1&&(Re=!1,re=Me+1),H===46?s===-1?s=Me:$!==1&&($=1):s!==-1&&($=-1)}return s===-1||re===-1||$===0||$===1&&s===re-1&&s===oe+1?re!==-1&&(oe===0&&V?h.base=h.name=g.slice(1,re):h.base=h.name=g.slice(oe,re)):(oe===0&&V?(h.name=g.slice(1,s),h.base=g.slice(1,re)):(h.name=g.slice(oe,s),h.base=g.slice(oe,re)),h.ext=g.slice(s,re)),oe>0?h.dir=g.slice(0,oe-1):V&&(h.dir="/"),h},"parse"),sep:"/",delimiter:":",win32:null,posix:null};ne.posix=ne,D.exports=ne},4448:(D,T,X)=>{"use strict";var ee;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne=X(7294),I=X(7418),g=X(3840);function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(l(h,"u"),!ne)throw Error(h(227));function H(e,t,n,r,i,u,d,p,k){var b=Array.prototype.slice.call(arguments,3);try{t.apply(n,b)}catch(J){this.onError(J)}}l(H,"ba");var V=!1,U=null,s=!1,oe=null,re={onError:function(e){V=!0,U=e}};function Re(e,t,n,r,i,u,d,p,k){V=!1,U=null,H.apply(re,arguments)}l(Re,"ja");function Me(e,t,n,r,i,u,d,p,k){if(Re.apply(this,arguments),V){if(V){var b=U;V=!1,U=null}else throw Error(h(198));s||(s=!0,oe=b)}}l(Me,"ka");var $=null,Y=null,me=null;function S(e,t,n){var r=e.type||"unknown-event";e.currentTarget=me(n),Me(r,t,void 0,e),e.currentTarget=null}l(S,"oa");var E=null,_={};function W(){if(E)for(var e in _){var t=_[e],n=E.indexOf(e);if(!(-1<n))throw Error(h(96,e));if(!z[n]){if(!t.extractEvents)throw Error(h(97,e));z[n]=t,n=t.eventTypes;for(var r in n){var i=void 0,u=n[r],d=t,p=r;if(M.hasOwnProperty(p))throw Error(h(99,p));M[p]=u;var k=u.phasedRegistrationNames;if(k){for(i in k)k.hasOwnProperty(i)&&O(k[i],d,p);i=!0}else u.registrationName?(O(u.registrationName,d,p),i=!0):i=!1;if(!i)throw Error(h(98,r,e))}}}}l(W,"ra");function O(e,t,n){if(A[e])throw Error(h(100,e));A[e]=t,j[e]=t.eventTypes[n].dependencies}l(O,"ua");var z=[],M={},A={},j={};function Z(e){var t=!1,n;for(n in e)if(e.hasOwnProperty(n)){var r=e[n];if(!_.hasOwnProperty(n)||_[n]!==r){if(_[n])throw Error(h(102,n));_[n]=r,t=!0}}t&&W()}l(Z,"xa");var ue=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ie=null,se=null,pe=null;function _e(e){if(e=Y(e)){if(typeof ie!="function")throw Error(h(280));var t=e.stateNode;t&&(t=$(t),ie(e.stateNode,e.type,t))}}l(_e,"Ca");function Oe(e){se?pe?pe.push(e):pe=[e]:se=e}l(Oe,"Da");function ze(){if(se){var e=se,t=pe;if(pe=se=null,_e(e),t)for(e=0;e<t.length;e++)_e(t[e])}}l(ze,"Ea");function je(e,t){return e(t)}l(je,"Fa");function Te(e,t,n,r,i){return e(t,n,r,i)}l(Te,"Ga");function qe(){}l(qe,"Ha");var rt=je,Ie=!1,F=!1;function G(){(se!==null||pe!==null)&&(qe(),ze())}l(G,"La");function Q(e,t,n){if(F)return e(t,n);F=!0;try{return rt(e,t,n)}finally{F=!1,G()}}l(Q,"Ma");var y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R=Object.prototype.hasOwnProperty,de={},we={};function ye(e){return R.call(we,e)?!0:R.call(de,e)?!1:y.test(e)?we[e]=!0:(de[e]=!0,!1)}l(ye,"Ra");function Ae(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}l(Ae,"Sa");function ot(e,t,n,r){if(t===null||typeof t=="undefined"||Ae(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}l(ot,"Ta");function Ce(e,t,n,r,i,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u}l(Ce,"v");var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Ce(e,0,!1,e,null,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Ce(t,1,!1,e[1],null,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Ce(e,2,!1,e,null,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Ce(e,3,!0,e,null,!1)}),["capture","download"].forEach(function(e){Ne[e]=new Ce(e,4,!1,e,null,!1)}),["cols","rows","size","span"].forEach(function(e){Ne[e]=new Ce(e,6,!1,e,null,!1)}),["rowSpan","start"].forEach(function(e){Ne[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1)});var dt=/[\-:]([a-z])/g;function Rn(e){return e[1].toUpperCase()}l(Rn,"Va"),"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dt,Rn);Ne[t]=new Ce(t,1,!1,e,null,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dt,Rn);Ne[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dt,Rn);Ne[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)}),["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1)}),Ne.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach(function(e){Ne[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0)});var Et=ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Et.hasOwnProperty("ReactCurrentDispatcher")||(Et.ReactCurrentDispatcher={current:null}),Et.hasOwnProperty("ReactCurrentBatchConfig")||(Et.ReactCurrentBatchConfig={suspense:null});function Vr(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null,u=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");u||(ot(t,n,i,r)&&(n=null),r||i===null?ye(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}l(Vr,"Xa");var al=/^(.*)[\\\/]/,st=typeof Symbol=="function"&&Symbol.for,cr=st?Symbol.for("react.element"):60103,dn=st?Symbol.for("react.portal"):60106,Pt=st?Symbol.for("react.fragment"):60107,zr=st?Symbol.for("react.strict_mode"):60108,zt=st?Symbol.for("react.profiler"):60114,Rt=st?Symbol.for("react.provider"):60109,Vo=st?Symbol.for("react.context"):60110,Vs=st?Symbol.for("react.concurrent_mode"):60111,zo=st?Symbol.for("react.forward_ref"):60112,$r=st?Symbol.for("react.suspense"):60113,$o=st?Symbol.for("react.suspense_list"):60120,jo=st?Symbol.for("react.memo"):60115,ul=st?Symbol.for("react.lazy"):60116,cl=st?Symbol.for("react.block"):60121,dl=typeof Symbol=="function"&&Symbol.iterator;function dr(e){return e===null||typeof e!="object"?null:(e=dl&&e[dl]||e["@@iterator"],typeof e=="function"?e:null)}l(dr,"nb");function zs(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}l(zs,"ob");function Ot(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pt:return"Fragment";case dn:return"Portal";case zt:return"Profiler";case zr:return"StrictMode";case $r:return"Suspense";case $o:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vo:return"Context.Consumer";case Rt:return"Context.Provider";case zo:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case jo:return Ot(e.type);case cl:return Ot(e.render);case ul:if(e=e._status===1?e._result:null)return Ot(e)}return null}l(Ot,"pb");function it(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,i=e._debugSource,u=Ot(e.type);n=null,r&&(n=Ot(r.type)),r=u,u="",i?u=" (at "+i.fileName.replace(al,"")+":"+i.lineNumber+")":n&&(u=" (created by "+n+")"),n=`
    in `+(r||"Unknown")+u}t+=n,e=e.return}while(e);return t}l(it,"qb");function $t(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}l($t,"rb");function fl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}l(fl,"sb");function ml(e){var t=fl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){r=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}l(ml,"tb");function en(e){e._valueTracker||(e._valueTracker=ml(e))}l(en,"xb");function Bo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}l(Bo,"yb");function jr(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}l(jr,"zb");function Uo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}l(Uo,"Ab");function Wo(e,t){t=t.checked,t!=null&&Vr(e,"checked",t,!1)}l(Wo,"Bb");function Br(e,t){Wo(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zo(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}l(Br,"Cb");function Be(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}l(Be,"Eb");function Zo(e,t,n){(t!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}l(Zo,"Db");function pl(e){var t="";return ne.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}l(pl,"Fb");function Ur(e,t){return e=I({children:void 0},t),(t=pl(t.children))&&(e.children=t),e}l(Ur,"Gb");function fn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}l(fn,"Hb");function qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}l(qo,"Ib");function hl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}l(hl,"Jb");function vl(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}l(vl,"Kb");function Qo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}l(Qo,"Lb");var gl={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Wr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}l(Wr,"Nb");function fr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}l(fr,"Ob");var mr,Ko=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==gl.svg||"innerHTML"in e)e.innerHTML=t;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}l(pr,"Rb");function Zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}l(Zr,"Sb");var On={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},hr={},vr={};ue&&(vr=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Dn(e){if(hr[e])return hr[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vr)return hr[e]=t[n];return e}l(Dn,"Wb");var qr=Dn("animationend"),Yo=Dn("animationiteration"),Qr=Dn("animationstart"),Xo=Dn("transitionend"),mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kr=new(typeof WeakMap=="function"?WeakMap:Map);function In(e){var t=Kr.get(e);return t===void 0&&(t=new Map,Kr.set(e,t)),t}l(In,"cc");function jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.effectTag&1026)!=0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}l(jt,"dc");function gr(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}l(gr,"ec");function Yr(e){if(jt(e)!==e)throw Error(h(188))}l(Yr,"fc");function Go(e){var t=e.alternate;if(!t){if(t=jt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var u=i.alternate;if(u===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===n)return Yr(i),e;if(u===r)return Yr(i),t;u=u.sibling}throw Error(h(188))}if(n.return!==r.return)n=i,r=u;else{for(var d=!1,p=i.child;p;){if(p===n){d=!0,n=i,r=u;break}if(p===r){d=!0,r=i,n=u;break}p=p.sibling}if(!d){for(p=u.child;p;){if(p===n){d=!0,n=u,r=i;break}if(p===r){d=!0,r=u,n=i;break}p=p.sibling}if(!d)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}l(Go,"gc");function Xr(e){if(e=Go(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}l(Xr,"hc");function tn(e,t){if(t==null)throw Error(h(30));return e==null?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}l(tn,"ic");function An(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}l(An,"jc");var pn=null;function Jo(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)S(e,t[r],n[r]);else t&&S(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}l(Jo,"lc");function Gr(e){if(e!==null&&(pn=tn(pn,e)),e=pn,pn=null,e){if(An(e,Jo),pn)throw Error(h(95));if(s)throw e=oe,s=!1,oe=null,e}}l(Gr,"mc");function nn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}l(nn,"nc");function rn(e){if(!ue)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}l(rn,"oc");var Jr=[];function Hn(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>Jr.length&&Jr.push(e)}l(Hn,"qc");function yl(e,t,n,r){if(Jr.length){var i=Jr.pop();return i.topLevelType=e,i.eventSystemFlags=r,i.nativeEvent=t,i.targetInst=n,i}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}l(yl,"rc");function eo(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(r.tag===3)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=r.tag!==3?null:r.stateNode.containerInfo}if(!r)break;t=n.tag,t!==5&&t!==6||e.ancestors.push(n),n=qn(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var i=nn(e.nativeEvent);r=e.topLevelType;var u=e.nativeEvent,d=e.eventSystemFlags;n===0&&(d|=64);for(var p=null,k=0;k<z.length;k++){var b=z[k];b&&(b=b.extractEvents(r,t,u,i,d))&&(p=tn(p,b))}Gr(p)}}l(eo,"sc");function kt(e,t,n){if(!n.has(e)){switch(e){case"scroll":Wn(t,"scroll",!0);break;case"focus":case"blur":Wn(t,"focus",!0),Wn(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":rn(e)&&Wn(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:mn.indexOf(e)===-1&&Fe(e,t)}n.set(e,null)}}l(kt,"uc");var Bt,to,Fn,Vn=!1,bt=[],Ut=null,Dt=null,Wt=null,zn=new Map,$n=new Map,Zt=[],yr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),$s="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function wl(e,t){var n=In(t);yr.forEach(function(r){kt(r,t,n)}),$s.forEach(function(r){kt(r,t,n)})}l(wl,"Jc");function no(e,t,n,r,i){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|32,nativeEvent:i,container:r}}l(no,"Kc");function ei(e,t){switch(e){case"focus":case"blur":Ut=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}l(ei,"Lc");function jn(e,t,n,r,i,u){return e===null||e.nativeEvent!==u?(e=no(t,n,r,i,u),t!==null&&(t=Qn(t),t!==null&&to(t)),e):(e.eventSystemFlags|=r,e)}l(jn,"Mc");function Cl(e,t,n,r,i){switch(t){case"focus":return Ut=jn(Ut,e,t,n,r,i),!0;case"dragenter":return Dt=jn(Dt,e,t,n,r,i),!0;case"mouseover":return Wt=jn(Wt,e,t,n,r,i),!0;case"pointerover":var u=i.pointerId;return zn.set(u,jn(zn.get(u)||null,e,t,n,r,i)),!0;case"gotpointercapture":return u=i.pointerId,$n.set(u,jn($n.get(u)||null,e,t,n,r,i)),!0}return!1}l(Cl,"Oc");function xl(e){var t=qn(e.target);if(t!==null){var n=jt(t);if(n!==null){if(t=n.tag,t===13){if(t=gr(n),t!==null){e.blockedOn=t,g.unstable_runWithPriority(e.priority,function(){Fn(n)});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}l(xl,"Pc");function wr(e){if(e.blockedOn!==null)return!1;var t=ao(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(t!==null){var n=Qn(t);return n!==null&&to(n),e.blockedOn=t,!1}return!0}l(wr,"Qc");function ro(e,t,n){wr(e)&&n.delete(t)}l(ro,"Sc");function El(){for(Vn=!1;0<bt.length;){var e=bt[0];if(e.blockedOn!==null){e=Qn(e.blockedOn),e!==null&&Bt(e);break}var t=ao(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);t!==null?e.blockedOn=t:bt.shift()}Ut!==null&&wr(Ut)&&(Ut=null),Dt!==null&&wr(Dt)&&(Dt=null),Wt!==null&&wr(Wt)&&(Wt=null),zn.forEach(ro),$n.forEach(ro)}l(El,"Tc");function Bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Vn||(Vn=!0,g.unstable_scheduleCallback(g.unstable_NormalPriority,El)))}l(Bn,"Uc");function ti(e){function t(i){return Bn(i,e)}if(l(t,"b"),0<bt.length){Bn(bt[0],e);for(var n=1;n<bt.length;n++){var r=bt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&Bn(Ut,e),Dt!==null&&Bn(Dt,e),Wt!==null&&Bn(Wt,e),zn.forEach(t),$n.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)xl(n),n.blockedOn===null&&Zt.shift()}l(ti,"Vc");var ni={},Un=new Map,oo=new Map,kl=["abort","abort",qr,"animationEnd",Yo,"animationIteration",Qr,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Xo,"transitionEnd","waiting","waiting"];function io(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1],u="on"+(i[0].toUpperCase()+i.slice(1));u={phasedRegistrationNames:{bubbled:u,captured:u+"Capture"},dependencies:[r],eventPriority:t},oo.set(r,t),Un.set(r,u),ni[i]=u}}l(io,"ad"),io("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),io("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),io(kl,2);for(var ri="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),lo=0;lo<ri.length;lo++)oo.set(ri[lo],0);var Xe=g.unstable_UserBlockingPriority,so=g.unstable_runWithPriority,Cr=!0;function Fe(e,t){Wn(t,e,!1)}l(Fe,"F");function Wn(e,t,n){var r=oo.get(t);switch(r===void 0?2:r){case 0:r=bl.bind(null,t,1,e);break;case 1:r=oi.bind(null,t,1,e);break;default:r=xr.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}l(Wn,"vc");function bl(e,t,n,r){Ie||qe();var i=xr,u=Ie;Ie=!0;try{Te(i,e,t,n,r)}finally{(Ie=u)||G()}}l(bl,"gd");function oi(e,t,n,r){so(Xe,xr.bind(null,e,t,n,r))}l(oi,"hd");function xr(e,t,n,r){if(Cr)if(0<bt.length&&-1<yr.indexOf(e))e=no(null,e,t,n,r),bt.push(e);else{var i=ao(e,t,n,r);if(i===null)ei(e,r);else if(-1<yr.indexOf(e))e=no(i,e,t,n,r),bt.push(e);else if(!Cl(i,e,t,n,r)){ei(e,r),e=yl(e,r,null,t);try{Q(eo,e)}finally{Hn(e)}}}}l(xr,"id");function ao(e,t,n,r){if(n=nn(r),n=qn(n),n!==null){var i=jt(n);if(i===null)n=null;else{var u=i.tag;if(u===13){if(n=gr(i),n!==null)return n;n=null}else if(u===3){if(i.stateNode.hydrate)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}e=yl(e,r,n,t);try{Q(eo,e)}finally{Hn(e)}return null}l(ao,"Rc");var Zn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_l=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(e){_l.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zn[t]=Zn[e]})});function ii(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zn.hasOwnProperty(e)&&Zn[e]?(""+t).trim():t+"px"}l(ii,"ld");function li(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ii(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}l(li,"md");var Ll=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uo(e,t){if(t){if(Ll[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e,""));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62,""))}}l(uo,"od");function co(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}l(co,"pd");var Tl=gl.html;function It(e,t){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=In(e);t=j[t];for(var r=0;r<t.length;r++)kt(t[r],e,n)}l(It,"rd");function Er(){}l(Er,"sd");function fo(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}l(fo,"td");function si(e){for(;e&&e.firstChild;)e=e.firstChild;return e}l(si,"ud");function ai(e,t){var n=si(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=si(n)}}l(ai,"vd");function Sl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}l(Sl,"wd");function ui(){for(var e=window,t=fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch(r){n=!1}if(n)e=t.contentWindow;else break;t=fo(e.document)}return t}l(ui,"xd");function mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}l(mo,"yd");var ci="$",di="/$",po="$?",hn="$!",kr=null,ho=null;function fi(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}l(fi,"Fd");function br(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}l(br,"Gd");var vo=typeof setTimeout=="function"?setTimeout:void 0,Ml=typeof clearTimeout=="function"?clearTimeout:void 0;function vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}l(vn,"Jd");function Nl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===ci||n===hn||n===po){if(t===0)return e;t--}else n===di&&t++}e=e.previousSibling}return null}l(Nl,"Kd");var go=Math.random().toString(36).slice(2),qt="__reactInternalInstance$"+go,_r="__reactEventHandlers$"+go,gn="__reactContainere$"+go;function qn(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gn]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nl(e);e!==null;){if(n=e[qt])return n;e=Nl(e)}return t}e=n,n=e.parentNode}return null}l(qn,"tc");function Qn(e){return e=e[qt]||e[gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}l(Qn,"Nc");function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}l(on,"Pd");function yo(e){return e[_r]||null}l(yo,"Qd");function gt(e){do e=e.return;while(e&&e.tag!==5);return e||null}l(gt,"Rd");function Lr(e,t){var n=e.stateNode;if(!n)return null;var r=$(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}l(Lr,"Sd");function mi(e,t,n){(t=Lr(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=tn(n._dispatchListeners,t),n._dispatchInstances=tn(n._dispatchInstances,e))}l(mi,"Td");function pi(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=gt(t);for(t=n.length;0<t--;)mi(n[t],"captured",e);for(t=0;t<n.length;t++)mi(n[t],"bubbled",e)}}l(pi,"Ud");function Tr(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=Lr(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=tn(n._dispatchListeners,t),n._dispatchInstances=tn(n._dispatchInstances,e))}l(Tr,"Vd");function Pl(e){e&&e.dispatchConfig.registrationName&&Tr(e._targetInst,null,e)}l(Pl,"Wd");function yn(e){An(e,pi)}l(yn,"Xd");var At=null,wo=null,Co=null;function hi(){if(Co)return Co;var e,t=wo,n=t.length,r,i="value"in At?At.value:At.textContent,u=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===i[u-r];r++);return Co=i.slice(e,1<r?1-r:void 0)}l(hi,"ae");function xo(){return!0}l(xo,"be");function Sr(){return!1}l(Sr,"ce");function ft(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var i in e)e.hasOwnProperty(i)&&((t=e[i])?this[i]=t(n):i==="target"?this.target=r:this[i]=n[i]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?xo:Sr,this.isPropagationStopped=Sr,this}l(ft,"G"),I(ft.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){this.isPersistent=xo},isPersistent:Sr,destructor:function(){var e=this.constructor.Interface,t;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Sr,this._dispatchInstances=this._dispatchListeners=null}}),ft.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},ft.extend=function(e){function t(){}l(t,"b");function n(){return r.apply(this,arguments)}l(n,"c");var r=this;t.prototype=r.prototype;var i=new t;return I(i,n.prototype),n.prototype=i,n.prototype.constructor=n,n.Interface=I({},r.Interface,e),n.extend=r.extend,Eo(n),n},Eo(ft);function Rl(e,t,n,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,e,t,n,r),i}return new this(e,t,n,r)}l(Rl,"ee");function Ol(e){if(!(e instanceof this))throw Error(h(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}l(Ol,"fe");function Eo(e){e.eventPool=[],e.getPooled=Rl,e.release=Ol}l(Eo,"de");var Dl=ft.extend({data:null}),Il=ft.extend({data:null}),js=[9,13,27,32],ko=ue&&"CompositionEvent"in window,Kn=null;ue&&"documentMode"in document&&(Kn=document.documentMode);var Al=ue&&"TextEvent"in window&&!Kn,vi=ue&&(!ko||Kn&&8<Kn&&11>=Kn),gi=String.fromCharCode(32),Ht={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},yi=!1;function wi(e,t){switch(e){case"keyup":return js.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}l(wi,"qe");function Ci(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}l(Ci,"re");var wn=!1;function Hl(e,t){switch(e){case"compositionend":return Ci(t);case"keypress":return t.which!==32?null:(yi=!0,gi);case"textInput":return e=t.data,e===gi&&yi?null:e;default:return null}}l(Hl,"te");function Fl(e,t){if(wn)return e==="compositionend"||!ko&&wi(e,t)?(e=hi(),Co=wo=At=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vi&&t.locale!=="ko"?null:t.data;default:return null}}l(Fl,"ue");var Vl={eventTypes:Ht,extractEvents:function(e,t,n,r){var i;if(ko)e:{switch(e){case"compositionstart":var u=Ht.compositionStart;break e;case"compositionend":u=Ht.compositionEnd;break e;case"compositionupdate":u=Ht.compositionUpdate;break e}u=void 0}else wn?wi(e,n)&&(u=Ht.compositionEnd):e==="keydown"&&n.keyCode===229&&(u=Ht.compositionStart);return u?(vi&&n.locale!=="ko"&&(wn||u!==Ht.compositionStart?u===Ht.compositionEnd&&wn&&(i=hi()):(At=r,wo="value"in At?At.value:At.textContent,wn=!0)),u=Dl.getPooled(u,t,n,r),i?u.data=i:(i=Ci(n),i!==null&&(u.data=i)),yn(u),i=u):i=null,(e=Al?Hl(e,n):Fl(e,n))?(t=Il.getPooled(Ht.beforeInput,t,n,r),t.data=e,yn(t)):t=null,i===null?t:t===null?i:[i,t]}},zl={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zl[e.type]:t==="textarea"}l(o,"xe");var a={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function f(e,t,n){return e=ft.getPooled(a.change,e,t,n),e.type="change",Oe(n),yn(e),e}l(f,"ze");var c=null,m=null;function v(e){Gr(e)}l(v,"Ce");function C(e){var t=on(e);if(Bo(t))return e}l(C,"De");function P(e,t){if(e==="change")return t}l(P,"Ee");var N=!1;ue&&(N=rn("input")&&(!document.documentMode||9<document.documentMode));function q(){c&&(c.detachEvent("onpropertychange",te),m=c=null)}l(q,"Ge");function te(e){if(e.propertyName==="value"&&C(m))if(e=f(m,e,nn(e)),Ie)Gr(e);else{Ie=!0;try{je(v,e)}finally{Ie=!1,G()}}}l(te,"He");function ce(e,t,n){e==="focus"?(q(),c=t,m=n,c.attachEvent("onpropertychange",te)):e==="blur"&&q()}l(ce,"Ie");function xe(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return C(m)}l(xe,"Je");function Je(e,t){if(e==="click")return C(t)}l(Je,"Ke");function Ke(e,t){if(e==="input"||e==="change")return C(t)}l(Ke,"Le");var He={eventTypes:a,_isInputEventSupported:N,extractEvents:function(e,t,n,r){var i=t?on(t):window,u=i.nodeName&&i.nodeName.toLowerCase();if(u==="select"||u==="input"&&i.type==="file")var d=P;else if(o(i))if(N)d=Ke;else{d=xe;var p=ce}else(u=i.nodeName)&&u.toLowerCase()==="input"&&(i.type==="checkbox"||i.type==="radio")&&(d=Je);if(d&&(d=d(e,t)))return f(d,n,r);p&&p(e,i,t),e==="blur"&&(e=i._wrapperState)&&e.controlled&&i.type==="number"&&Zo(i,"number",i.value)}},Ee=ft.extend({view:null,detail:null}),Le={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ye(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Le[e])?!!t[e]:!1}l(Ye,"Pe");function Ve(){return Ye}l(Ve,"Qe");var _t=0,mt=0,ln=!1,Cn=!1,Lt=Ee.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Ve,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=_t;return _t=e.screenX,ln?e.type==="mousemove"?e.screenX-t:0:(ln=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=mt;return mt=e.screenY,Cn?e.type==="mousemove"?e.screenY-t:0:(Cn=!0,0)}}),Ue=Lt.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),et={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Yn={eventTypes:et,extractEvents:function(e,t,n,r,i){var u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout";if(u&&(i&32)==0&&(n.relatedTarget||n.fromElement)||!d&&!u)return null;if(u=r.window===r?r:(u=r.ownerDocument)?u.defaultView||u.parentWindow:window,d){if(d=t,t=(t=n.relatedTarget||n.toElement)?qn(t):null,t!==null){var p=jt(t);(t!==p||t.tag!==5&&t.tag!==6)&&(t=null)}}else d=null;if(d===t)return null;if(e==="mouseout"||e==="mouseover")var k=Lt,b=et.mouseLeave,J=et.mouseEnter,le="mouse";else(e==="pointerout"||e==="pointerover")&&(k=Ue,b=et.pointerLeave,J=et.pointerEnter,le="pointer");if(e=d==null?u:on(d),u=t==null?u:on(t),b=k.getPooled(b,d,n,r),b.type=le+"leave",b.target=e,b.relatedTarget=u,n=k.getPooled(J,t,n,r),n.type=le+"enter",n.target=u,n.relatedTarget=e,r=d,le=t,r&&le)e:{for(k=r,J=le,d=0,e=k;e;e=gt(e))d++;for(e=0,t=J;t;t=gt(t))e++;for(;0<d-e;)k=gt(k),d--;for(;0<e-d;)J=gt(J),e--;for(;d--;){if(k===J||k===J.alternate)break e;k=gt(k),J=gt(J)}k=null}else k=null;for(J=k,k=[];r&&r!==J&&(d=r.alternate,!(d!==null&&d===J));)k.push(r),r=gt(r);for(r=[];le&&le!==J&&(d=le.alternate,!(d!==null&&d===J));)r.push(le),le=gt(le);for(le=0;le<k.length;le++)Tr(k[le],"bubbled",b);for(le=r.length;0<le--;)Tr(r[le],"captured",n);return(i&64)==0?[b]:[b,n]}};function $l(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}l($l,"Ze");var Xn=typeof Object.is=="function"?Object.is:$l,fu=Object.prototype.hasOwnProperty;function bo(e,t){if(Xn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!fu.call(t,n[r])||!Xn(e[n[r]],t[n[r]]))return!1;return!0}l(bo,"bf");var mu=ue&&"documentMode"in document&&11>=document.documentMode,Bs={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Mr=null,jl=null,_o=null,Bl=!1;function Us(e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;return Bl||Mr==null||Mr!==fo(n)?null:(n=Mr,"selectionStart"in n&&mo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),_o&&bo(_o,n)?null:(_o=n,e=ft.getPooled(Bs.select,jl,e,t),e.type="select",e.target=Mr,yn(e),e))}l(Us,"jf");var pu={eventTypes:Bs,extractEvents:function(e,t,n,r,i,u){if(i=u||(r.window===r?r.document:r.nodeType===9?r:r.ownerDocument),!(u=!i)){e:{i=In(i),u=j.onSelect;for(var d=0;d<u.length;d++)if(!i.has(u[d])){i=!1;break e}i=!0}u=!i}if(u)return null;switch(i=t?on(t):window,e){case"focus":(o(i)||i.contentEditable==="true")&&(Mr=i,jl=t,_o=null);break;case"blur":_o=jl=Mr=null;break;case"mousedown":Bl=!0;break;case"contextmenu":case"mouseup":case"dragend":return Bl=!1,Us(n,r);case"selectionchange":if(mu)break;case"keydown":case"keyup":return Us(n,r)}return null}},hu=ft.extend({animationName:null,elapsedTime:null,pseudoElement:null}),vu=ft.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gu=Ee.extend({relatedTarget:null});function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}l(xi,"of");var yu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cu=Ee.extend({key:function(e){if(e.key){var t=yu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wu[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Ve,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xu=Lt.extend({dataTransfer:null}),Eu=Ee.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Ve}),ku=ft.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),bu=Lt.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),_u={eventTypes:ni,extractEvents:function(e,t,n,r){var i=Un.get(e);if(!i)return null;switch(e){case"keypress":if(xi(n)===0)return null;case"keydown":case"keyup":e=Cu;break;case"blur":case"focus":e=gu;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=Lt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=xu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=Eu;break;case qr:case Yo:case Qr:e=hu;break;case Xo:e=ku;break;case"scroll":e=Ee;break;case"wheel":e=bu;break;case"copy":case"cut":case"paste":e=vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Ue;break;default:e=ft}return t=e.getPooled(i,t,n,r),yn(t),t}};if(E)throw Error(h(101));E=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),W();var Lu=Qn;$=yo,Y=Lu,me=on,Z({SimpleEventPlugin:_u,EnterLeaveEventPlugin:Yn,ChangeEventPlugin:He,SelectEventPlugin:pu,BeforeInputEventPlugin:Vl});var Ul=[],Nr=-1;function $e(e){0>Nr||(e.current=Ul[Nr],Ul[Nr]=null,Nr--)}l($e,"H");function Qe(e,t){Nr++,Ul[Nr]=e.current,e.current=t}l(Qe,"I");var xn={},at={current:xn},pt={current:!1},Gn=xn;function Pr(e,t){var n=e.type.contextTypes;if(!n)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},u;for(u in n)i[u]=t[u];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}l(Pr,"Cf");function ht(e){return e=e.childContextTypes,e!=null}l(ht,"L");function Ei(){$e(pt),$e(at)}l(Ei,"Df");function Ws(e,t,n){if(at.current!==xn)throw Error(h(168));Qe(at,t),Qe(pt,n)}l(Ws,"Ef");function Zs(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(h(108,Ot(t)||"Unknown",i));return I({},n,{},r)}l(Zs,"Ff");function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Gn=at.current,Qe(at,e),Qe(pt,pt.current),!0}l(ki,"Gf");function qs(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=Zs(e,t,Gn),r.__reactInternalMemoizedMergedChildContext=e,$e(pt),$e(at),Qe(at,e)):$e(pt),Qe(pt,n)}l(qs,"Hf");var Tu=g.unstable_runWithPriority,Wl=g.unstable_scheduleCallback,Qs=g.unstable_cancelCallback,Ks=g.unstable_requestPaint,Zl=g.unstable_now,Su=g.unstable_getCurrentPriorityLevel,bi=g.unstable_ImmediatePriority,Ys=g.unstable_UserBlockingPriority,Xs=g.unstable_NormalPriority,Gs=g.unstable_LowPriority,Js=g.unstable_IdlePriority,ea={},Mu=g.unstable_shouldYield,Nu=Ks!==void 0?Ks:function(){},sn=null,_i=null,ql=!1,ta=Zl(),Tt=1e4>ta?Zl:function(){return Zl()-ta};function Li(){switch(Su()){case bi:return 99;case Ys:return 98;case Xs:return 97;case Gs:return 96;case Js:return 95;default:throw Error(h(332))}}l(Li,"ag");function na(e){switch(e){case 99:return bi;case 98:return Ys;case 97:return Xs;case 96:return Gs;case 95:return Js;default:throw Error(h(332))}}l(na,"bg");function En(e,t){return e=na(e),Tu(e,t)}l(En,"cg");function ra(e,t,n){return e=na(e),Wl(e,t,n)}l(ra,"dg");function oa(e){return sn===null?(sn=[e],_i=Wl(bi,ia)):sn.push(e),ea}l(oa,"eg");function Qt(){if(_i!==null){var e=_i;_i=null,Qs(e)}ia()}l(Qt,"gg");function ia(){if(!ql&&sn!==null){ql=!0;var e=0;try{var t=sn;En(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),sn=null}catch(n){throw sn!==null&&(sn=sn.slice(e+1)),Wl(bi,Qt),n}finally{ql=!1}}}l(ia,"fg");function Ti(e,t,n){return n/=10,1073741821-(((1073741821-e+t/10)/n|0)+1)*n}l(Ti,"hg");function Ft(e,t){if(e&&e.defaultProps){t=I({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}l(Ft,"ig");var Si={current:null},Mi=null,Rr=null,Ni=null;function Ql(){Ni=Rr=Mi=null}l(Ql,"ng");function Kl(e){var t=Si.current;$e(Si),e.type._context._currentValue=t}l(Kl,"og");function la(e,t){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t);else if(n!==null&&n.childExpirationTime<t)n.childExpirationTime=t;else break;e=e.return}}l(la,"pg");function Or(e,t){Mi=e,Ni=Rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=t&&(Yt=!0),e.firstContext=null)}l(Or,"qg");function St(e,t){if(Ni!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Ni=e,t=1073741823),t={context:e,observedBits:t,next:null},Rr===null){if(Mi===null)throw Error(h(308));Rr=t,Mi.dependencies={expirationTime:0,firstContext:t,responders:null}}else Rr=Rr.next=t;return e._currentValue}l(St,"sg");var kn=!1;function Yl(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}l(Yl,"ug");function Xl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}l(Xl,"vg");function bn(e,t){return e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null},e.next=e}l(bn,"wg");function _n(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}l(_n,"xg");function sa(e,t){var n=e.alternate;n!==null&&Xl(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}l(sa,"yg");function Lo(e,t,n,r){var i=e.updateQueue;kn=!1;var u=i.baseQueue,d=i.shared.pending;if(d!==null){if(u!==null){var p=u.next;u.next=d.next,d.next=p}u=d,i.shared.pending=null,p=e.alternate,p!==null&&(p=p.updateQueue,p!==null&&(p.baseQueue=d))}if(u!==null){p=u.next;var k=i.baseState,b=0,J=null,le=null,Se=null;if(p!==null){var De=p;do{if(d=De.expirationTime,d<r){var Nt={expirationTime:De.expirationTime,suspenseConfig:De.suspenseConfig,tag:De.tag,payload:De.payload,callback:De.callback,next:null};Se===null?(le=Se=Nt,J=k):Se=Se.next=Nt,d>b&&(b=d)}else{Se!==null&&(Se=Se.next={expirationTime:1073741823,suspenseConfig:De.suspenseConfig,tag:De.tag,payload:De.payload,callback:De.callback,next:null}),ru(d,De.suspenseConfig);e:{var lt=e,x=De;switch(d=t,Nt=n,x.tag){case 1:if(lt=x.payload,typeof lt=="function"){k=lt.call(Nt,k,d);break e}k=lt;break e;case 3:lt.effectTag=lt.effectTag&-4097|64;case 0:if(lt=x.payload,d=typeof lt=="function"?lt.call(Nt,k,d):lt,d==null)break e;k=I({},k,d);break e;case 2:kn=!0}}De.callback!==null&&(e.effectTag|=32,d=i.effects,d===null?i.effects=[De]:d.push(De))}if(De=De.next,De===null||De===p){if(d=i.shared.pending,d===null)break;De=u.next=d.next,d.next=p,i.baseQueue=u=d,i.shared.pending=null}}while(1)}Se===null?J=k:Se.next=le,i.baseState=J,i.baseQueue=Se,rl(b),e.expirationTime=b,e.memoizedState=k}}l(Lo,"zg");function aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=i,i=n,typeof r!="function")throw Error(h(191,r));r.call(i)}}}l(aa,"Cg");var To=Et.ReactCurrentBatchConfig,ua=new ne.Component().refs;function Pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:I({},t,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}l(Pi,"Fg");var Ri={isMounted:function(e){return(e=e._reactInternalFiber)?jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Gt(),i=To.suspense;r=or(r,e,i),i=bn(r,i),i.payload=t,n!=null&&(i.callback=n),_n(e,i),Mn(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Gt(),i=To.suspense;r=or(r,e,i),i=bn(r,i),i.tag=1,i.payload=t,n!=null&&(i.callback=n),_n(e,i),Mn(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Gt(),r=To.suspense;n=or(n,e,r),r=bn(n,r),r.tag=2,t!=null&&(r.callback=t),_n(e,r),Mn(e,n)}};function ca(e,t,n,r,i,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,d):t.prototype&&t.prototype.isPureReactComponent?!bo(n,r)||!bo(i,u):!0}l(ca,"Kg");function da(e,t,n){var r=!1,i=xn,u=t.contextType;return typeof u=="object"&&u!==null?u=St(u):(i=ht(t)?Gn:at.current,r=t.contextTypes,u=(r=r!=null)?Pr(e,i):xn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ri,e.stateNode=t,t._reactInternalFiber=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=u),t}l(da,"Lg");function fa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ri.enqueueReplaceState(t,t.state,null)}l(fa,"Mg");function Gl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ua,Yl(e);var u=t.contextType;typeof u=="object"&&u!==null?i.context=St(u):(u=ht(t)?Gn:at.current,i.context=Pr(e,u)),Lo(e,n,i,r),i.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Pi(e,t,u,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ri.enqueueReplaceState(i,i.state,null),Lo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.effectTag|=4)}l(Gl,"Ng");var Oi=Array.isArray;function So(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=l(function(u){var d=r.refs;d===ua&&(d=r.refs={}),u===null?delete d[i]:d[i]=u},"b"),t._stringRef=i,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}l(So,"Pg");function Di(e,t){if(e.type!=="textarea")throw Error(h(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}l(Di,"Qg");function ma(e){function t(x,w){if(e){var L=x.lastEffect;L!==null?(L.nextEffect=w,x.lastEffect=w):x.firstEffect=x.lastEffect=w,w.nextEffect=null,w.effectTag=8}}l(t,"b");function n(x,w){if(!e)return null;for(;w!==null;)t(x,w),w=w.sibling;return null}l(n,"c");function r(x,w){for(x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}l(r,"d");function i(x,w){return x=ar(x,w),x.index=0,x.sibling=null,x}l(i,"e");function u(x,w,L){return x.index=L,e?(L=x.alternate,L!==null?(L=L.index,L<w?(x.effectTag=2,w):L):(x.effectTag=2,w)):w}l(u,"f");function d(x){return e&&x.alternate===null&&(x.effectTag=2),x}l(d,"g");function p(x,w,L,B){return w===null||w.tag!==6?(w=Os(L,x.mode,B),w.return=x,w):(w=i(w,L),w.return=x,w)}l(p,"h");function k(x,w,L,B){return w!==null&&w.elementType===L.type?(B=i(w,L.props),B.ref=So(x,w,L),B.return=x,B):(B=ol(L.type,L.key,L.props,null,x.mode,B),B.ref=So(x,w,L),B.return=x,B)}l(k,"k");function b(x,w,L,B){return w===null||w.tag!==4||w.stateNode.containerInfo!==L.containerInfo||w.stateNode.implementation!==L.implementation?(w=Ds(L,x.mode,B),w.return=x,w):(w=i(w,L.children||[]),w.return=x,w)}l(b,"l");function J(x,w,L,B,K){return w===null||w.tag!==7?(w=Nn(L,x.mode,B,K),w.return=x,w):(w=i(w,L),w.return=x,w)}l(J,"m");function le(x,w,L){if(typeof w=="string"||typeof w=="number")return w=Os(""+w,x.mode,L),w.return=x,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case cr:return L=ol(w.type,w.key,w.props,null,x.mode,L),L.ref=So(x,null,w),L.return=x,L;case dn:return w=Ds(w,x.mode,L),w.return=x,w}if(Oi(w)||dr(w))return w=Nn(w,x.mode,L,null),w.return=x,w;Di(x,w)}return null}l(le,"p");function Se(x,w,L,B){var K=w!==null?w.key:null;if(typeof L=="string"||typeof L=="number")return K!==null?null:p(x,w,""+L,B);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case cr:return L.key===K?L.type===Pt?J(x,w,L.props.children,B,K):k(x,w,L,B):null;case dn:return L.key===K?b(x,w,L,B):null}if(Oi(L)||dr(L))return K!==null?null:J(x,w,L,B,null);Di(x,L)}return null}l(Se,"x");function De(x,w,L,B,K){if(typeof B=="string"||typeof B=="number")return x=x.get(L)||null,p(w,x,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case cr:return x=x.get(B.key===null?L:B.key)||null,B.type===Pt?J(w,x,B.props.children,K,B.key):k(w,x,B,K);case dn:return x=x.get(B.key===null?L:B.key)||null,b(w,x,B,K)}if(Oi(B)||dr(B))return x=x.get(L)||null,J(w,x,B,K,null);Di(w,B)}return null}l(De,"z");function Nt(x,w,L,B){for(var K=null,ae=null,ve=w,Pe=w=0,We=null;ve!==null&&Pe<L.length;Pe++){ve.index>Pe?(We=ve,ve=null):We=ve.sibling;var be=Se(x,ve,L[Pe],B);if(be===null){ve===null&&(ve=We);break}e&&ve&&be.alternate===null&&t(x,ve),w=u(be,w,Pe),ae===null?K=be:ae.sibling=be,ae=be,ve=We}if(Pe===L.length)return n(x,ve),K;if(ve===null){for(;Pe<L.length;Pe++)ve=le(x,L[Pe],B),ve!==null&&(w=u(ve,w,Pe),ae===null?K=ve:ae.sibling=ve,ae=ve);return K}for(ve=r(x,ve);Pe<L.length;Pe++)We=De(ve,x,Pe,L[Pe],B),We!==null&&(e&&We.alternate!==null&&ve.delete(We.key===null?Pe:We.key),w=u(We,w,Pe),ae===null?K=We:ae.sibling=We,ae=We);return e&&ve.forEach(function(Pn){return t(x,Pn)}),K}l(Nt,"ca");function lt(x,w,L,B){var K=dr(L);if(typeof K!="function")throw Error(h(150));if(L=K.call(L),L==null)throw Error(h(151));for(var ae=K=null,ve=w,Pe=w=0,We=null,be=L.next();ve!==null&&!be.done;Pe++,be=L.next()){ve.index>Pe?(We=ve,ve=null):We=ve.sibling;var Pn=Se(x,ve,be.value,B);if(Pn===null){ve===null&&(ve=We);break}e&&ve&&Pn.alternate===null&&t(x,ve),w=u(Pn,w,Pe),ae===null?K=Pn:ae.sibling=Pn,ae=Pn,ve=We}if(be.done)return n(x,ve),K;if(ve===null){for(;!be.done;Pe++,be=L.next())be=le(x,be.value,B),be!==null&&(w=u(be,w,Pe),ae===null?K=be:ae.sibling=be,ae=be);return K}for(ve=r(x,ve);!be.done;Pe++,be=L.next())be=De(ve,x,Pe,be.value,B),be!==null&&(e&&be.alternate!==null&&ve.delete(be.key===null?Pe:be.key),w=u(be,w,Pe),ae===null?K=be:ae.sibling=be,ae=be);return e&&ve.forEach(function(oc){return t(x,oc)}),K}return l(lt,"D"),function(x,w,L,B){var K=typeof L=="object"&&L!==null&&L.type===Pt&&L.key===null;K&&(L=L.props.children);var ae=typeof L=="object"&&L!==null;if(ae)switch(L.$$typeof){case cr:e:{for(ae=L.key,K=w;K!==null;){if(K.key===ae){switch(K.tag){case 7:if(L.type===Pt){n(x,K.sibling),w=i(K,L.props.children),w.return=x,x=w;break e}break;default:if(K.elementType===L.type){n(x,K.sibling),w=i(K,L.props),w.ref=So(x,K,L),w.return=x,x=w;break e}}n(x,K);break}else t(x,K);K=K.sibling}L.type===Pt?(w=Nn(L.props.children,x.mode,B,L.key),w.return=x,x=w):(B=ol(L.type,L.key,L.props,null,x.mode,B),B.ref=So(x,w,L),B.return=x,x=B)}return d(x);case dn:e:{for(K=L.key;w!==null;){if(w.key===K)if(w.tag===4&&w.stateNode.containerInfo===L.containerInfo&&w.stateNode.implementation===L.implementation){n(x,w.sibling),w=i(w,L.children||[]),w.return=x,x=w;break e}else{n(x,w);break}else t(x,w);w=w.sibling}w=Ds(L,x.mode,B),w.return=x,x=w}return d(x)}if(typeof L=="string"||typeof L=="number")return L=""+L,w!==null&&w.tag===6?(n(x,w.sibling),w=i(w,L),w.return=x,x=w):(n(x,w),w=Os(L,x.mode,B),w.return=x,x=w),d(x);if(Oi(L))return Nt(x,w,L,B);if(dr(L))return lt(x,w,L,B);if(ae&&Di(x,L),typeof L=="undefined"&&!K)switch(x.tag){case 1:case 0:throw x=x.type,Error(h(152,x.displayName||x.name||"Component"))}return n(x,w)}}l(ma,"Rg");var Dr=ma(!0),Jl=ma(!1),Mo={},Kt={current:Mo},No={current:Mo},Po={current:Mo};function Jn(e){if(e===Mo)throw Error(h(174));return e}l(Jn,"ch");function es(e,t){switch(Qe(Po,t),Qe(No,e),Qe(Kt,Mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fr(t,e)}$e(Kt),Qe(Kt,t)}l(es,"dh");function Ir(){$e(Kt),$e(No),$e(Po)}l(Ir,"eh");function pa(e){Jn(Po.current);var t=Jn(Kt.current),n=fr(t,e.type);t!==n&&(Qe(No,e),Qe(Kt,n))}l(pa,"fh");function ts(e){No.current===e&&($e(Kt),$e(No))}l(ts,"gh");var Ze={current:0};function Ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===po||n.data===hn))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.effectTag&64)!=0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}l(Ii,"hh");function ns(e,t){return{responder:e,props:t}}l(ns,"ih");var Ai=Et.ReactCurrentDispatcher,Mt=Et.ReactCurrentBatchConfig,Ln=0,Ge=null,ut=null,ct=null,Hi=!1;function yt(){throw Error(h(321))}l(yt,"Q");function rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xn(e[n],t[n]))return!1;return!0}l(rs,"nh");function os(e,t,n,r,i,u){if(Ln=u,Ge=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,Ai.current=e===null||e.memoizedState===null?Pu:Ru,e=n(r,i),t.expirationTime===Ln){u=0;do{if(t.expirationTime=0,!(25>u))throw Error(h(301));u+=1,ct=ut=null,t.updateQueue=null,Ai.current=Ou,e=n(r,i)}while(t.expirationTime===Ln)}if(Ai.current=ji,t=ut!==null&&ut.next!==null,Ln=0,ct=ut=Ge=null,Hi=!1,t)throw Error(h(300));return e}l(os,"oh");function Ar(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Ge.memoizedState=ct=e:ct=ct.next=e,ct}l(Ar,"th");function Hr(){if(ut===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=ut.next;var t=ct===null?Ge.memoizedState:ct.next;if(t!==null)ct=t,ut=e;else{if(e===null)throw Error(h(310));ut=e,e={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},ct===null?Ge.memoizedState=ct=e:ct=ct.next=e}return ct}l(Hr,"uh");function er(e,t){return typeof t=="function"?t(e):t}l(er,"vh");function Fi(e){var t=Hr(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=ut,i=r.baseQueue,u=n.pending;if(u!==null){if(i!==null){var d=i.next;i.next=u.next,u.next=d}r.baseQueue=i=u,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var p=d=u=null,k=i;do{var b=k.expirationTime;if(b<Ln){var J={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};p===null?(d=p=J,u=r):p=p.next=J,b>Ge.expirationTime&&(Ge.expirationTime=b,rl(b))}else p!==null&&(p=p.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),ru(b,k.suspenseConfig),r=k.eagerReducer===e?k.eagerState:e(r,k.action);k=k.next}while(k!==null&&k!==i);p===null?u=r:p.next=d,Xn(r,t.memoizedState)||(Yt=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=p,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}l(Fi,"wh");function Vi(e){var t=Hr(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,u=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do u=e(u,d.action),d=d.next;while(d!==i);Xn(u,t.memoizedState)||(Yt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}l(Vi,"xh");function is(e){var t=Ar();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},e=e.dispatch=Ea.bind(null,Ge,e),[t.memoizedState,e]}l(is,"yh");function ls(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}l(ls,"Ah");function ha(){return Hr().memoizedState}l(ha,"Bh");function ss(e,t,n,r){var i=Ar();Ge.effectTag|=e,i.memoizedState=ls(1|t,n,void 0,r===void 0?null:r)}l(ss,"Ch");function as(e,t,n,r){var i=Hr();r=r===void 0?null:r;var u=void 0;if(ut!==null){var d=ut.memoizedState;if(u=d.destroy,r!==null&&rs(r,d.deps)){ls(t,n,u,r);return}}Ge.effectTag|=e,i.memoizedState=ls(1|t,n,u,r)}l(as,"Dh");function va(e,t){return ss(516,4,e,t)}l(va,"Eh");function zi(e,t){return as(516,4,e,t)}l(zi,"Fh");function ga(e,t){return as(4,2,e,t)}l(ga,"Gh");function ya(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}l(ya,"Hh");function wa(e,t,n){return n=n!=null?n.concat([e]):null,as(4,2,ya.bind(null,t,e),n)}l(wa,"Ih");function us(){}l(us,"Jh");function Ca(e,t){return Ar().memoizedState=[e,t===void 0?null:t],e}l(Ca,"Kh");function $i(e,t){var n=Hr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}l($i,"Lh");function xa(e,t){var n=Hr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}l(xa,"Mh");function cs(e,t,n){var r=Li();En(98>r?98:r,function(){e(!0)}),En(97<r?97:r,function(){var i=Mt.suspense;Mt.suspense=t===void 0?null:t;try{e(!1),n()}finally{Mt.suspense=i}})}l(cs,"Nh");function Ea(e,t,n){var r=Gt(),i=To.suspense;r=or(r,e,i),i={expirationTime:r,suspenseConfig:i,action:n,eagerReducer:null,eagerState:null,next:null};var u=t.pending;if(u===null?i.next=i:(i.next=u.next,u.next=i),t.pending=i,u=e.alternate,e===Ge||u!==null&&u===Ge)Hi=!0,i.expirationTime=Ln,Ge.expirationTime=Ln;else{if(e.expirationTime===0&&(u===null||u.expirationTime===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,p=u(d,n);if(i.eagerReducer=u,i.eagerState=p,Xn(p,d))return}catch(k){}finally{}Mn(e,r)}}l(Ea,"zh");var ji={readContext:St,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useResponder:yt,useDeferredValue:yt,useTransition:yt},Pu={readContext:St,useCallback:Ca,useContext:St,useEffect:va,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ss(4,2,ya.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4,2,e,t)},useMemo:function(e,t){var n=Ar();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ar();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Ea.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=Ar();return e={current:e},t.memoizedState=e},useState:is,useDebugValue:us,useResponder:ns,useDeferredValue:function(e,t){var n=is(e),r=n[0],i=n[1];return va(function(){var u=Mt.suspense;Mt.suspense=t===void 0?null:t;try{i(e)}finally{Mt.suspense=u}},[e,t]),r},useTransition:function(e){var t=is(!1),n=t[0];return t=t[1],[Ca(cs.bind(null,t,e),[t,e]),n]}},Ru={readContext:St,useCallback:$i,useContext:St,useEffect:zi,useImperativeHandle:wa,useLayoutEffect:ga,useMemo:xa,useReducer:Fi,useRef:ha,useState:function(){return Fi(er)},useDebugValue:us,useResponder:ns,useDeferredValue:function(e,t){var n=Fi(er),r=n[0],i=n[1];return zi(function(){var u=Mt.suspense;Mt.suspense=t===void 0?null:t;try{i(e)}finally{Mt.suspense=u}},[e,t]),r},useTransition:function(e){var t=Fi(er),n=t[0];return t=t[1],[$i(cs.bind(null,t,e),[t,e]),n]}},Ou={readContext:St,useCallback:$i,useContext:St,useEffect:zi,useImperativeHandle:wa,useLayoutEffect:ga,useMemo:xa,useReducer:Vi,useRef:ha,useState:function(){return Vi(er)},useDebugValue:us,useResponder:ns,useDeferredValue:function(e,t){var n=Vi(er),r=n[0],i=n[1];return zi(function(){var u=Mt.suspense;Mt.suspense=t===void 0?null:t;try{i(e)}finally{Mt.suspense=u}},[e,t]),r},useTransition:function(e){var t=Vi(er),n=t[0];return t=t[1],[$i(cs.bind(null,t,e),[t,e]),n]}},an=null,Tn=null,tr=!1;function ka(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}l(ka,"Rh");function ba(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}l(ba,"Th");function ds(e){if(tr){var t=Tn;if(t){var n=t;if(!ba(e,t)){if(t=vn(n.nextSibling),!t||!ba(e,t)){e.effectTag=e.effectTag&-1025|2,tr=!1,an=e;return}ka(an,n)}an=e,Tn=vn(t.firstChild)}else e.effectTag=e.effectTag&-1025|2,tr=!1,an=e}}l(ds,"Uh");function _a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;an=e}l(_a,"Vh");function Bi(e){if(e!==an)return!1;if(!tr)return _a(e),tr=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!br(t,e.memoizedProps))for(t=Tn;t;)ka(e,t),t=vn(t.nextSibling);if(_a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===di){if(t===0){Tn=vn(e.nextSibling);break e}t--}else n!==ci&&n!==hn&&n!==po||t++}e=e.nextSibling}Tn=null}}else Tn=an?vn(e.stateNode.nextSibling):null;return!0}l(Bi,"Wh");function fs(){Tn=an=null,tr=!1}l(fs,"Xh");var Du=Et.ReactCurrentOwner,Yt=!1;function wt(e,t,n,r){t.child=e===null?Jl(t,null,n,r):Dr(t,e.child,n,r)}l(wt,"R");function La(e,t,n,r,i){n=n.render;var u=t.ref;return Or(t,i),r=os(e,t,n,r,u,i),e!==null&&!Yt?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),un(e,t,i)):(t.effectTag|=1,wt(e,t,r,i),t.child)}l(La,"Zh");function Ta(e,t,n,r,i,u){if(e===null){var d=n.type;return typeof d=="function"&&!Rs(d)&&d.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=d,Sa(e,t,d,r,i,u)):(e=ol(n.type,null,r,null,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}return d=e.child,i<u&&(i=d.memoizedProps,n=n.compare,n=n!==null?n:bo,n(i,r)&&e.ref===t.ref)?un(e,t,u):(t.effectTag|=1,e=ar(d,r),e.ref=t.ref,e.return=t,t.child=e)}l(Ta,"ai");function Sa(e,t,n,r,i,u){return e!==null&&bo(e.memoizedProps,r)&&e.ref===t.ref&&(Yt=!1,i<u)?(t.expirationTime=e.expirationTime,un(e,t,u)):ms(e,t,n,r,u)}l(Sa,"ci");function Ma(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.effectTag|=128)}l(Ma,"ei");function ms(e,t,n,r,i){var u=ht(n)?Gn:at.current;return u=Pr(t,u),Or(t,i),n=os(e,t,n,r,u,i),e!==null&&!Yt?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),un(e,t,i)):(t.effectTag|=1,wt(e,t,n,i),t.child)}l(ms,"di");function Na(e,t,n,r,i){if(ht(n)){var u=!0;ki(t)}else u=!1;if(Or(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),da(t,n,r),Gl(t,n,r,i),r=!0;else if(e===null){var d=t.stateNode,p=t.memoizedProps;d.props=p;var k=d.context,b=n.contextType;typeof b=="object"&&b!==null?b=St(b):(b=ht(n)?Gn:at.current,b=Pr(t,b));var J=n.getDerivedStateFromProps,le=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function";le||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==r||k!==b)&&fa(t,d,r,b),kn=!1;var Se=t.memoizedState;d.state=Se,Lo(t,r,d,i),k=t.memoizedState,p!==r||Se!==k||pt.current||kn?(typeof J=="function"&&(Pi(t,n,J,r),k=t.memoizedState),(p=kn||ca(t,n,p,r,Se,k,b))?(le||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.effectTag|=4)):(typeof d.componentDidMount=="function"&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=k),d.props=r,d.state=k,d.context=b,r=p):(typeof d.componentDidMount=="function"&&(t.effectTag|=4),r=!1)}else d=t.stateNode,Xl(e,t),p=t.memoizedProps,d.props=t.type===t.elementType?p:Ft(t.type,p),k=d.context,b=n.contextType,typeof b=="object"&&b!==null?b=St(b):(b=ht(n)?Gn:at.current,b=Pr(t,b)),J=n.getDerivedStateFromProps,(le=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==r||k!==b)&&fa(t,d,r,b),kn=!1,k=t.memoizedState,d.state=k,Lo(t,r,d,i),Se=t.memoizedState,p!==r||k!==Se||pt.current||kn?(typeof J=="function"&&(Pi(t,n,J,r),Se=t.memoizedState),(J=kn||ca(t,n,p,r,k,Se,b))?(le||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,Se,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,Se,b)),typeof d.componentDidUpdate=="function"&&(t.effectTag|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.effectTag|=256)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.effectTag|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=Se),d.props=r,d.state=Se,d.context=b,r=J):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.effectTag|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.effectTag|=256),r=!1);return ps(e,t,n,r,u,i)}l(Na,"fi");function ps(e,t,n,r,i,u){Ma(e,t);var d=(t.effectTag&64)!=0;if(!r&&!d)return i&&qs(t,n,!1),un(e,t,u);r=t.stateNode,Du.current=t;var p=d&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.effectTag|=1,e!==null&&d?(t.child=Dr(t,e.child,null,u),t.child=Dr(t,null,p,u)):wt(e,t,p,u),t.memoizedState=r.state,i&&qs(t,n,!0),t.child}l(ps,"gi");function Pa(e){var t=e.stateNode;t.pendingContext?Ws(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ws(e,t.context,!1),es(e,t.containerInfo)}l(Pa,"hi");var hs={dehydrated:null,retryTime:0};function Ra(e,t,n){var r=t.mode,i=t.pendingProps,u=Ze.current,d=!1,p;if((p=(t.effectTag&64)!=0)||(p=(u&2)!=0&&(e===null||e.memoizedState!==null)),p?(d=!0,t.effectTag&=-65):e!==null&&e.memoizedState===null||i.fallback===void 0||i.unstable_avoidThisFallback===!0||(u|=1),Qe(Ze,u&1),e===null){if(i.fallback!==void 0&&ds(t),d){if(d=i.fallback,i=Nn(null,r,0,null),i.return=t,(t.mode&2)==0)for(e=t.memoizedState!==null?t.child.child:t.child,i.child=e;e!==null;)e.return=i,e=e.sibling;return n=Nn(d,r,n,null),n.return=t,i.sibling=n,t.memoizedState=hs,t.child=i,n}return r=i.children,t.memoizedState=null,t.child=Jl(t,null,r,n)}if(e.memoizedState!==null){if(e=e.child,r=e.sibling,d){if(i=i.fallback,n=ar(e,e.pendingProps),n.return=t,(t.mode&2)==0&&(d=t.memoizedState!==null?t.child.child:t.child,d!==e.child))for(n.child=d;d!==null;)d.return=n,d=d.sibling;return r=ar(r,i),r.return=t,n.sibling=r,n.childExpirationTime=0,t.memoizedState=hs,t.child=n,r}return n=Dr(t,e.child,i.children,n),t.memoizedState=null,t.child=n}if(e=e.child,d){if(d=i.fallback,i=Nn(null,r,0,null),i.return=t,i.child=e,e!==null&&(e.return=i),(t.mode&2)==0)for(e=t.memoizedState!==null?t.child.child:t.child,i.child=e;e!==null;)e.return=i,e=e.sibling;return n=Nn(d,r,n,null),n.return=t,i.sibling=n,n.effectTag|=2,i.childExpirationTime=0,t.memoizedState=hs,t.child=i,n}return t.memoizedState=null,t.child=Dr(t,e,i.children,n)}l(Ra,"ji");function Oa(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t),la(e.return,t)}l(Oa,"ki");function vs(e,t,n,r,i,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:i,lastEffect:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=r,d.tail=n,d.tailExpiration=0,d.tailMode=i,d.lastEffect=u)}l(vs,"li");function Da(e,t,n){var r=t.pendingProps,i=r.revealOrder,u=r.tail;if(wt(e,t,r.children,n),r=Ze.current,(r&2)!=0)r=r&1|2,t.effectTag|=64;else{if(e!==null&&(e.effectTag&64)!=0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oa(e,n);else if(e.tag===19)Oa(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Qe(Ze,r),(t.mode&2)==0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ii(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vs(t,!1,i,n,u,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vs(t,!0,n,null,u,t.lastEffect);break;case"together":vs(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}l(Da,"mi");function un(e,t,n){e!==null&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(r!==0&&rl(r),t.childExpirationTime<n)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=ar(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ar(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}l(un,"$h");var Ia,gs,Aa,Ha;Ia=l(function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},"ni"),gs=l(function(){},"oi"),Aa=l(function(e,t,n,r,i){var u=e.memoizedProps;if(u!==r){var d=t.stateNode;switch(Jn(Kt.current),e=null,n){case"input":u=jr(d,u),r=jr(d,r),e=[];break;case"option":u=Ur(d,u),r=Ur(d,r),e=[];break;case"select":u=I({},u,{value:void 0}),r=I({},r,{value:void 0}),e=[];break;case"textarea":u=qo(d,u),r=qo(d,r),e=[];break;default:typeof u.onClick!="function"&&typeof r.onClick=="function"&&(d.onclick=Er)}uo(n,r);var p,k;n=null;for(p in u)if(!r.hasOwnProperty(p)&&u.hasOwnProperty(p)&&u[p]!=null)if(p==="style")for(k in d=u[p],d)d.hasOwnProperty(k)&&(n||(n={}),n[k]="");else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(A.hasOwnProperty(p)?e||(e=[]):(e=e||[]).push(p,null));for(p in r){var b=r[p];if(d=u!=null?u[p]:void 0,r.hasOwnProperty(p)&&b!==d&&(b!=null||d!=null))if(p==="style")if(d){for(k in d)!d.hasOwnProperty(k)||b&&b.hasOwnProperty(k)||(n||(n={}),n[k]="");for(k in b)b.hasOwnProperty(k)&&d[k]!==b[k]&&(n||(n={}),n[k]=b[k])}else n||(e||(e=[]),e.push(p,n)),n=b;else p==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,d=d?d.__html:void 0,b!=null&&d!==b&&(e=e||[]).push(p,b)):p==="children"?d===b||typeof b!="string"&&typeof b!="number"||(e=e||[]).push(p,""+b):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(A.hasOwnProperty(p)?(b!=null&&It(i,p),e||d===b||(e=[])):(e=e||[]).push(p,b))}n&&(e=e||[]).push("style",n),i=e,(t.updateQueue=i)&&(t.effectTag|=4)}},"pi"),Ha=l(function(e,t,n,r){n!==r&&(t.effectTag|=4)},"qi");function Ui(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}l(Ui,"ri");function Iu(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return ht(t.type)&&Ei(),null;case 3:return Ir(),$e(pt),$e(at),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!Bi(t)||(t.effectTag|=4),gs(t),null;case 5:ts(t),n=Jn(Po.current);var i=t.type;if(e!==null&&t.stateNode!=null)Aa(e,t,i,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(t.stateNode===null)throw Error(h(166));return null}if(e=Jn(Kt.current),Bi(t)){r=t.stateNode,i=t.type;var u=t.memoizedProps;switch(r[qt]=t,r[_r]=u,i){case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(e=0;e<mn.length;e++)Fe(mn[e],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"form":Fe("reset",r),Fe("submit",r);break;case"details":Fe("toggle",r);break;case"input":Uo(r,u),Fe("invalid",r),It(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!u.multiple},Fe("invalid",r),It(n,"onChange");break;case"textarea":hl(r,u),Fe("invalid",r),It(n,"onChange")}uo(i,u),e=null;for(var d in u)if(u.hasOwnProperty(d)){var p=u[d];d==="children"?typeof p=="string"?r.textContent!==p&&(e=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(e=["children",""+p]):A.hasOwnProperty(d)&&p!=null&&It(n,d)}switch(i){case"input":en(r),Be(r,u,!0);break;case"textarea":en(r),Qo(r);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(r.onclick=Er)}n=e,t.updateQueue=n,n!==null&&(t.effectTag|=4)}else{switch(d=n.nodeType===9?n:n.ownerDocument,e===Tl&&(e=Wr(i)),e===Tl?i==="script"?(e=d.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(i,{is:r.is}):(e=d.createElement(i),i==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,i),e[qt]=t,e[_r]=r,Ia(e,t,!1,!1),t.stateNode=e,d=co(i,r),i){case"iframe":case"object":case"embed":Fe("load",e),p=r;break;case"video":case"audio":for(p=0;p<mn.length;p++)Fe(mn[p],e);p=r;break;case"source":Fe("error",e),p=r;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),p=r;break;case"form":Fe("reset",e),Fe("submit",e),p=r;break;case"details":Fe("toggle",e),p=r;break;case"input":Uo(e,r),p=jr(e,r),Fe("invalid",e),It(n,"onChange");break;case"option":p=Ur(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},p=I({},r,{value:void 0}),Fe("invalid",e),It(n,"onChange");break;case"textarea":hl(e,r),p=qo(e,r),Fe("invalid",e),It(n,"onChange");break;default:p=r}uo(i,p);var k=p;for(u in k)if(k.hasOwnProperty(u)){var b=k[u];u==="style"?li(e,b):u==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Ko(e,b)):u==="children"?typeof b=="string"?(i!=="textarea"||b!=="")&&pr(e,b):typeof b=="number"&&pr(e,""+b):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(A.hasOwnProperty(u)?b!=null&&It(n,u):b!=null&&Vr(e,u,b,d))}switch(i){case"input":en(e),Be(e,r,!1);break;case"textarea":en(e),Qo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,n=r.value,n!=null?fn(e,!!r.multiple,n,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof p.onClick=="function"&&(e.onclick=Er)}fi(i,r)&&(t.effectTag|=4)}t.ref!==null&&(t.effectTag|=128)}return null;case 6:if(e&&t.stateNode!=null)Ha(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));n=Jn(Po.current),Jn(Kt.current),Bi(t)?(n=t.stateNode,r=t.memoizedProps,n[qt]=t,n.nodeValue!==r&&(t.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),n[qt]=t,t.stateNode=n)}return null;case 13:return $e(Ze),r=t.memoizedState,(t.effectTag&64)!=0?(t.expirationTime=n,t):(n=r!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&Bi(t):(i=e.memoizedState,r=i!==null,n||i===null||(i=e.child.sibling,i!==null&&(u=t.firstEffect,u!==null?(t.firstEffect=i,i.nextEffect=u):(t.firstEffect=t.lastEffect=i,i.nextEffect=null),i.effectTag=8))),n&&!r&&(t.mode&2)!=0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(Ze.current&1)!=0?nt===nr&&(nt=qi):((nt===nr||nt===qi)&&(nt=Qi),Oo!==0&&Ct!==null&&(ur(Ct,vt),uu(Ct,Oo)))),(n||r)&&(t.effectTag|=4),null);case 4:return Ir(),gs(t),null;case 10:return Kl(t),null;case 17:return ht(t.type)&&Ei(),null;case 19:if($e(Ze),r=t.memoizedState,r===null)return null;if(i=(t.effectTag&64)!=0,u=r.rendering,u===null){if(i)Ui(r,!1);else if(nt!==nr||e!==null&&(e.effectTag&64)!=0)for(u=t.child;u!==null;){if(e=Ii(u),e!==null){for(t.effectTag|=64,Ui(r,!1),i=e.updateQueue,i!==null&&(t.updateQueue=i,t.effectTag|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;r!==null;)i=r,u=n,i.effectTag&=2,i.nextEffect=null,i.firstEffect=null,i.lastEffect=null,e=i.alternate,e===null?(i.childExpirationTime=0,i.expirationTime=u,i.child=null,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null):(i.childExpirationTime=e.childExpirationTime,i.expirationTime=e.expirationTime,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,u=e.dependencies,i.dependencies=u===null?null:{expirationTime:u.expirationTime,firstContext:u.firstContext,responders:u.responders}),r=r.sibling;return Qe(Ze,Ze.current&1|2),t.child}u=u.sibling}}else{if(!i)if(e=Ii(u),e!==null){if(t.effectTag|=64,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.effectTag|=4),Ui(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Tt()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,i=!0,Ui(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(u.sibling=t.child,t.child=u):(n=r.last,n!==null?n.sibling=u:t.child=u,r.last=u)}return r.tail!==null?(r.tailExpiration===0&&(r.tailExpiration=Tt()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Tt(),n.sibling=null,t=Ze.current,Qe(Ze,i?t&1|2:t&1),n):null}throw Error(h(156,t.tag))}l(Iu,"si");function Au(e){switch(e.tag){case 1:ht(e.type)&&Ei();var t=e.effectTag;return t&4096?(e.effectTag=t&-4097|64,e):null;case 3:if(Ir(),$e(pt),$e(at),t=e.effectTag,(t&64)!=0)throw Error(h(285));return e.effectTag=t&-4097|64,e;case 5:return ts(e),null;case 13:return $e(Ze),t=e.effectTag,t&4096?(e.effectTag=t&-4097|64,e):null;case 19:return $e(Ze),null;case 4:return Ir(),null;case 10:return Kl(e),null;default:return null}}l(Au,"zi");function ys(e,t){return{value:e,source:t,stack:it(t)}}l(ys,"Ai");var Hu=typeof WeakSet=="function"?WeakSet:Set;function ws(e,t){var n=t.source,r=t.stack;r===null&&n!==null&&(r=it(n)),n!==null&&Ot(n.type),t=t.value,e!==null&&e.tag===1&&Ot(e.type);try{console.error(t)}catch(i){setTimeout(function(){throw i})}}l(ws,"Ci");function Fu(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(n){sr(e,n)}}l(Fu,"Di");function Fa(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){sr(e,n)}else t.current=null}l(Fa,"Fi");function Vu(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.effectTag&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Ft(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(h(163))}l(Vu,"Gi");function Va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&r()}n=n.next}while(n!==t)}}l(Va,"Hi");function za(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}l(za,"Ii");function zu(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:za(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(t===null)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Ft(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}t=n.updateQueue,t!==null&&aa(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}aa(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.effectTag&4&&fi(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&ti(n))));return;case 19:case 17:case 20:case 21:return}throw Error(h(163))}l(zu,"Ji");function $a(e,t,n){switch(typeof Ps=="function"&&Ps(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e.next;En(97<n?97:n,function(){var i=r;do{var u=i.destroy;if(u!==void 0){var d=t;try{u()}catch(p){sr(d,p)}}i=i.next}while(i!==r)})}break;case 1:Fa(t),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Fu(t,n);break;case 5:Fa(t);break;case 4:Wa(e,t,n)}}l($a,"Ki");function ja(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,t!==null&&ja(t)}l(ja,"Ni");function Ba(e){return e.tag===5||e.tag===3||e.tag===4}l(Ba,"Oi");function Ua(e){e:{for(var t=e.return;t!==null;){if(Ba(t)){var n=t;break e}t=t.return}throw Error(h(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(h(161))}n.effectTag&16&&(pr(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Ba(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}r?Cs(e,n,t):xs(e,n,t)}l(Ua,"Pi");function Cs(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Er));else if(r!==4&&(e=e.child,e!==null))for(Cs(e,t,n),e=e.sibling;e!==null;)Cs(e,t,n),e=e.sibling}l(Cs,"Qi");function xs(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xs(e,t,n),e=e.sibling;e!==null;)xs(e,t,n),e=e.sibling}l(xs,"Ri");function Wa(e,t,n){for(var r=t,i=!1,u,d;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(h(160));switch(u=i.stateNode,i.tag){case 5:d=!1;break e;case 3:u=u.containerInfo,d=!0;break e;case 4:u=u.containerInfo,d=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var p=e,k=r,b=n,J=k;;)if($a(p,J,b),J.child!==null&&J.tag!==4)J.child.return=J,J=J.child;else{if(J===k)break e;for(;J.sibling===null;){if(J.return===null||J.return===k)break e;J=J.return}J.sibling.return=J.return,J=J.sibling}d?(p=u,k=r.stateNode,p.nodeType===8?p.parentNode.removeChild(k):p.removeChild(k)):u.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){u=r.stateNode.containerInfo,d=!0,r.child.return=r,r=r.child;continue}}else if($a(e,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}l(Wa,"Mi");function Es(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:Va(3,t);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var r=t.memoizedProps,i=e!==null?e.memoizedProps:r;e=t.type;var u=t.updateQueue;if(t.updateQueue=null,u!==null){for(n[_r]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Wo(n,r),co(e,i),t=co(e,r),i=0;i<u.length;i+=2){var d=u[i],p=u[i+1];d==="style"?li(n,p):d==="dangerouslySetInnerHTML"?Ko(n,p):d==="children"?pr(n,p):Vr(n,d,p,t)}switch(e){case"input":Br(n,r);break;case"textarea":vl(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,e=r.value,e!=null?fn(n,!!r.multiple,e,!1):t!==!!r.multiple&&(r.defaultValue!=null?fn(n,!!r.multiple,r.defaultValue,!0):fn(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(h(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:t=t.stateNode,t.hydrate&&(t.hydrate=!1,ti(t.containerInfo));return;case 12:return;case 13:if(n=t,t.memoizedState===null?r=!1:(r=!0,n=t.child,_s=Tt()),n!==null)e:for(e=n;;){if(e.tag===5)u=e.stateNode,r?(u=u.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(u=e.stateNode,i=e.memoizedProps.style,i=i!=null&&i.hasOwnProperty("display")?i.display:null,u.style.display=ii("display",i));else if(e.tag===6)e.stateNode.nodeValue=r?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){u=e.child.sibling,u.return=e,e=u;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}Za(t);return;case 19:Za(t);return;case 17:return}throw Error(h(163))}l(Es,"Si");function Za(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hu),t.forEach(function(r){var i=Yu.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}l(Za,"Ui");var $u=typeof WeakMap=="function"?WeakMap:Map;function qa(e,t,n){n=bn(n,null),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gi||(Gi=!0,Ls=r),ws(e,t)},n}l(qa,"Xi");function Qa(e,t,n){n=bn(n,null),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return ws(e,t),r(i)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this),ws(e,t));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}l(Qa,"$i");var ju=Math.ceil,Wi=Et.ReactCurrentDispatcher,Ka=Et.ReactCurrentOwner,tt=0,ks=8,Vt=16,Xt=32,nr=0,Zi=1,Ya=2,qi=3,Qi=4,bs=5,ge=tt,Ct=null,ke=null,vt=0,nt=nr,Ki=null,cn=1073741823,Ro=1073741823,Yi=null,Oo=0,Xi=!1,_s=0,Xa=500,fe=null,Gi=!1,Ls=null,Sn=null,Ji=!1,Do=null,Io=90,rr=null,Ao=0,Ts=null,el=0;function Gt(){return(ge&(Vt|Xt))!==tt?1073741821-(Tt()/10|0):el!==0?el:el=1073741821-(Tt()/10|0)}l(Gt,"Gg");function or(e,t,n){if(t=t.mode,(t&2)==0)return 1073741823;var r=Li();if((t&4)==0)return r===99?1073741823:1073741822;if((ge&Vt)!==tt)return vt;if(n!==null)e=Ti(e,n.timeoutMs|0||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=Ti(e,150,100);break;case 97:case 96:e=Ti(e,5e3,250);break;case 95:e=2;break;default:throw Error(h(326))}return Ct!==null&&e===vt&&--e,e}l(or,"Hg");function Mn(e,t){if(50<Ao)throw Ao=0,Ts=null,Error(h(185));if(e=tl(e,t),e!==null){var n=Li();t===1073741823?(ge&ks)!==tt&&(ge&(Vt|Xt))===tt?Ss(e):(xt(e),ge===tt&&Qt()):xt(e),(ge&4)===tt||n!==98&&n!==99||(rr===null?rr=new Map([[e,t]]):(n=rr.get(e),(n===void 0||n>t)&&rr.set(e,t)))}}l(Mn,"Ig");function tl(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,i=null;if(r===null&&e.tag===3)i=e.stateNode;else for(;r!==null;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t),r.return===null&&r.tag===3){i=r.stateNode;break}r=r.return}return i!==null&&(Ct===i&&(rl(t),nt===Qi&&ur(i,vt)),uu(i,t)),i}l(tl,"xj");function nl(e){var t=e.lastExpiredTime;if(t!==0||(t=e.firstPendingTime,!au(e,t)))return t;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&t!==e?0:e}l(nl,"zj");function xt(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=oa(Ss.bind(null,e));else{var t=nl(e),n=e.callbackNode;if(t===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Gt();if(t===1073741823?r=99:t===1||t===2?r=95:(r=10*(1073741821-t)-10*(1073741821-r),r=0>=r?99:250>=r?98:5250>=r?97:95),n!==null){var i=e.callbackPriority;if(e.callbackExpirationTime===t&&i>=r)return;n!==ea&&Qs(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=t===1073741823?oa(Ss.bind(null,e)):ra(r,Ga.bind(null,e),{timeout:10*(1073741821-t)-Tt()}),e.callbackNode=t}}}l(xt,"Z");function Ga(e,t){if(el=0,t)return t=Gt(),Is(e,t),xt(e),null;var n=nl(e);if(n!==0){if(t=e.callbackNode,(ge&(Vt|Xt))!==tt)throw Error(h(327));if(Fr(),e===Ct&&n===vt||ir(e,n),ke!==null){var r=ge;ge|=Vt;var i=nu();do try{Wu();break}catch(p){tu(e,p)}while(1);if(Ql(),ge=r,Wi.current=i,nt===Zi)throw t=Ki,ir(e,n),ur(e,n),xt(e),t;if(ke===null)switch(i=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=nt,Ct=null,r){case nr:case Zi:throw Error(h(345));case Ya:Is(e,2<n?2:n);break;case qi:if(ur(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=Ms(i)),cn===1073741823&&(i=_s+Xa-Tt(),10<i)){if(Xi){var u=e.lastPingedTime;if(u===0||u>=n){e.lastPingedTime=n,ir(e,n);break}}if(u=nl(e),u!==0&&u!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=vo(lr.bind(null,e),i);break}lr(e);break;case Qi:if(ur(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=Ms(i)),Xi&&(i=e.lastPingedTime,i===0||i>=n)){e.lastPingedTime=n,ir(e,n);break}if(i=nl(e),i!==0&&i!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}if(Ro!==1073741823?r=10*(1073741821-Ro)-Tt():cn===1073741823?r=0:(r=10*(1073741821-cn)-5e3,i=Tt(),n=10*(1073741821-n)-i,r=i-r,0>r&&(r=0),r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ju(r/1960))-r,n<r&&(r=n)),10<r){e.timeoutHandle=vo(lr.bind(null,e),r);break}lr(e);break;case bs:if(cn!==1073741823&&Yi!==null){u=cn;var d=Yi;if(r=d.busyMinDurationMs|0,0>=r?r=0:(i=d.busyDelayMs|0,u=Tt()-(10*(1073741821-u)-(d.timeoutMs|0||5e3)),r=u<=i?0:i+r-u),10<r){ur(e,n),e.timeoutHandle=vo(lr.bind(null,e),r);break}}lr(e);break;default:throw Error(h(329))}if(xt(e),e.callbackNode===t)return Ga.bind(null,e)}}return null}l(Ga,"Bj");function Ss(e){var t=e.lastExpiredTime;if(t=t!==0?t:1073741823,(ge&(Vt|Xt))!==tt)throw Error(h(327));if(Fr(),e===Ct&&t===vt||ir(e,t),ke!==null){var n=ge;ge|=Vt;var r=nu();do try{Uu();break}catch(i){tu(e,i)}while(1);if(Ql(),ge=n,Wi.current=r,nt===Zi)throw n=Ki,ir(e,t),ur(e,t),xt(e),n;if(ke!==null)throw Error(h(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,Ct=null,lr(e),xt(e)}return null}l(Ss,"yj");function Bu(){if(rr!==null){var e=rr;rr=null,e.forEach(function(t,n){Is(n,t),xt(n)}),Qt()}}l(Bu,"Lj");function Ja(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===tt&&Qt()}}l(Ja,"Mj");function eu(e,t){var n=ge;ge&=-2,ge|=ks;try{return e(t)}finally{ge=n,ge===tt&&Qt()}}l(eu,"Nj");function ir(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ml(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ei();break;case 3:Ir(),$e(pt),$e(at);break;case 5:ts(r);break;case 4:Ir();break;case 13:$e(Ze);break;case 19:$e(Ze);break;case 10:Kl(r)}n=n.return}Ct=e,ke=ar(e.current,null),vt=t,nt=nr,Ki=null,Ro=cn=1073741823,Yi=null,Oo=0,Xi=!1}l(ir,"Ej");function tu(e,t){do{try{if(Ql(),Ai.current=ji,Hi)for(var n=Ge.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}if(Ln=0,ct=ut=Ge=null,Hi=!1,ke===null||ke.return===null)return nt=Zi,Ki=t,ke=null;e:{var i=e,u=ke.return,d=ke,p=t;if(t=vt,d.effectTag|=2048,d.firstEffect=d.lastEffect=null,p!==null&&typeof p=="object"&&typeof p.then=="function"){var k=p;if((d.mode&2)==0){var b=d.alternate;b?(d.updateQueue=b.updateQueue,d.memoizedState=b.memoizedState,d.expirationTime=b.expirationTime):(d.updateQueue=null,d.memoizedState=null)}var J=(Ze.current&1)!=0,le=u;do{var Se;if(Se=le.tag===13){var De=le.memoizedState;if(De!==null)Se=De.dehydrated!==null;else{var Nt=le.memoizedProps;Se=Nt.fallback===void 0?!1:Nt.unstable_avoidThisFallback!==!0?!0:!J}}if(Se){var lt=le.updateQueue;if(lt===null){var x=new Set;x.add(k),le.updateQueue=x}else lt.add(k);if((le.mode&2)==0){if(le.effectTag|=64,d.effectTag&=-2981,d.tag===1)if(d.alternate===null)d.tag=17;else{var w=bn(1073741823,null);w.tag=2,_n(d,w)}d.expirationTime=1073741823;break e}p=void 0,d=t;var L=i.pingCache;if(L===null?(L=i.pingCache=new $u,p=new Set,L.set(k,p)):(p=L.get(k),p===void 0&&(p=new Set,L.set(k,p))),!p.has(d)){p.add(d);var B=Ku.bind(null,i,k,d);k.then(B,B)}le.effectTag|=4096,le.expirationTime=t;break e}le=le.return}while(le!==null);p=Error((Ot(d.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+it(d))}nt!==bs&&(nt=Ya),p=ys(p,d),le=u;do{switch(le.tag){case 3:k=p,le.effectTag|=4096,le.expirationTime=t;var K=qa(le,k,t);sa(le,K);break e;case 1:k=p;var ae=le.type,ve=le.stateNode;if((le.effectTag&64)==0&&(typeof ae.getDerivedStateFromError=="function"||ve!==null&&typeof ve.componentDidCatch=="function"&&(Sn===null||!Sn.has(ve)))){le.effectTag|=4096,le.expirationTime=t;var Pe=Qa(le,k,t);sa(le,Pe);break e}}le=le.return}while(le!==null)}ke=iu(ke)}catch(We){t=We;continue}break}while(1)}l(tu,"Hj");function nu(){var e=Wi.current;return Wi.current=ji,e===null?ji:e}l(nu,"Fj");function ru(e,t){e<cn&&2<e&&(cn=e),t!==null&&e<Ro&&2<e&&(Ro=e,Yi=t)}l(ru,"Ag");function rl(e){e>Oo&&(Oo=e)}l(rl,"Bg");function Uu(){for(;ke!==null;)ke=ou(ke)}l(Uu,"Kj");function Wu(){for(;ke!==null&&!Mu();)ke=ou(ke)}l(Wu,"Gj");function ou(e){var t=su(e.alternate,e,vt);return e.memoizedProps=e.pendingProps,t===null&&(t=iu(e)),Ka.current=null,t}l(ou,"Qj");function iu(e){ke=e;do{var t=ke.alternate;if(e=ke.return,(ke.effectTag&2048)==0){if(t=Iu(t,ke,vt),vt===1||ke.childExpirationTime!==1){for(var n=0,r=ke.child;r!==null;){var i=r.expirationTime,u=r.childExpirationTime;i>n&&(n=i),u>n&&(n=u),r=r.sibling}ke.childExpirationTime=n}if(t!==null)return t;e!==null&&(e.effectTag&2048)==0&&(e.firstEffect===null&&(e.firstEffect=ke.firstEffect),ke.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=ke.firstEffect),e.lastEffect=ke.lastEffect),1<ke.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=ke:e.firstEffect=ke,e.lastEffect=ke))}else{if(t=Au(ke),t!==null)return t.effectTag&=2047,t;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(t=ke.sibling,t!==null)return t;ke=e}while(ke!==null);return nt===nr&&(nt=bs),null}l(iu,"Pj");function Ms(e){var t=e.expirationTime;return e=e.childExpirationTime,t>e?t:e}l(Ms,"Ij");function lr(e){var t=Li();return En(99,Zu.bind(null,e,t)),null}l(lr,"Jj");function Zu(e,t){do Fr();while(Do!==null);if((ge&(Vt|Xt))!==tt)throw Error(h(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var i=Ms(n);if(e.firstPendingTime=i,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===Ct&&(ke=Ct=null,vt=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,i!==null){var u=ge;ge|=Xt,Ka.current=null,kr=Cr;var d=ui();if(mo(d)){if("selectionStart"in d)var p={start:d.selectionStart,end:d.selectionEnd};else e:{p=(p=d.ownerDocument)&&p.defaultView||window;var k=p.getSelection&&p.getSelection();if(k&&k.rangeCount!==0){p=k.anchorNode;var b=k.anchorOffset,J=k.focusNode;k=k.focusOffset;try{p.nodeType,J.nodeType}catch(be){p=null;break e}var le=0,Se=-1,De=-1,Nt=0,lt=0,x=d,w=null;t:for(;;){for(var L;x!==p||b!==0&&x.nodeType!==3||(Se=le+b),x!==J||k!==0&&x.nodeType!==3||(De=le+k),x.nodeType===3&&(le+=x.nodeValue.length),(L=x.firstChild)!==null;)w=x,x=L;for(;;){if(x===d)break t;if(w===p&&++Nt===b&&(Se=le),w===J&&++lt===k&&(De=le),(L=x.nextSibling)!==null)break;x=w,w=x.parentNode}x=L}p=Se===-1||De===-1?null:{start:Se,end:De}}else p=null}p=p||{start:0,end:0}}else p=null;ho={activeElementDetached:null,focusedElem:d,selectionRange:p},Cr=!1,fe=i;do try{qu()}catch(be){if(fe===null)throw Error(h(330));sr(fe,be),fe=fe.nextEffect}while(fe!==null);fe=i;do try{for(d=e,p=t;fe!==null;){var B=fe.effectTag;if(B&16&&pr(fe.stateNode,""),B&128){var K=fe.alternate;if(K!==null){var ae=K.ref;ae!==null&&(typeof ae=="function"?ae(null):ae.current=null)}}switch(B&1038){case 2:Ua(fe),fe.effectTag&=-3;break;case 6:Ua(fe),fe.effectTag&=-3,Es(fe.alternate,fe);break;case 1024:fe.effectTag&=-1025;break;case 1028:fe.effectTag&=-1025,Es(fe.alternate,fe);break;case 4:Es(fe.alternate,fe);break;case 8:b=fe,Wa(d,b,p),ja(b)}fe=fe.nextEffect}}catch(be){if(fe===null)throw Error(h(330));sr(fe,be),fe=fe.nextEffect}while(fe!==null);if(ae=ho,K=ui(),B=ae.focusedElem,p=ae.selectionRange,K!==B&&B&&B.ownerDocument&&Sl(B.ownerDocument.documentElement,B)){for(p!==null&&mo(B)&&(K=p.start,ae=p.end,ae===void 0&&(ae=K),"selectionStart"in B?(B.selectionStart=K,B.selectionEnd=Math.min(ae,B.value.length)):(ae=(K=B.ownerDocument||document)&&K.defaultView||window,ae.getSelection&&(ae=ae.getSelection(),b=B.textContent.length,d=Math.min(p.start,b),p=p.end===void 0?d:Math.min(p.end,b),!ae.extend&&d>p&&(b=p,p=d,d=b),b=ai(B,d),J=ai(B,p),b&&J&&(ae.rangeCount!==1||ae.anchorNode!==b.node||ae.anchorOffset!==b.offset||ae.focusNode!==J.node||ae.focusOffset!==J.offset)&&(K=K.createRange(),K.setStart(b.node,b.offset),ae.removeAllRanges(),d>p?(ae.addRange(K),ae.extend(J.node,J.offset)):(K.setEnd(J.node,J.offset),ae.addRange(K)))))),K=[],ae=B;ae=ae.parentNode;)ae.nodeType===1&&K.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof B.focus=="function"&&B.focus(),B=0;B<K.length;B++)ae=K[B],ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}Cr=!!kr,ho=kr=null,e.current=n,fe=i;do try{for(B=e;fe!==null;){var ve=fe.effectTag;if(ve&36&&zu(B,fe.alternate,fe),ve&128){K=void 0;var Pe=fe.ref;if(Pe!==null){var We=fe.stateNode;switch(fe.tag){case 5:K=We;break;default:K=We}typeof Pe=="function"?Pe(K):Pe.current=K}}fe=fe.nextEffect}}catch(be){if(fe===null)throw Error(h(330));sr(fe,be),fe=fe.nextEffect}while(fe!==null);fe=null,Nu(),ge=u}else e.current=n;if(Ji)Ji=!1,Do=e,Io=t;else for(fe=i;fe!==null;)t=fe.nextEffect,fe.nextEffect=null,fe=t;if(t=e.firstPendingTime,t===0&&(Sn=null),t===1073741823?e===Ts?Ao++:(Ao=0,Ts=e):Ao=0,typeof Ns=="function"&&Ns(n.stateNode,r),xt(e),Gi)throw Gi=!1,e=Ls,Ls=null,e;return(ge&ks)!==tt||Qt(),null}l(Zu,"Sj");function qu(){for(;fe!==null;){var e=fe.effectTag;(e&256)!=0&&Vu(fe.alternate,fe),(e&512)==0||Ji||(Ji=!0,ra(97,function(){return Fr(),null})),fe=fe.nextEffect}}l(qu,"Tj");function Fr(){if(Io!==90){var e=97<Io?97:Io;return Io=90,En(e,Qu)}}l(Fr,"Dj");function Qu(){if(Do===null)return!1;var e=Do;if(Do=null,(ge&(Vt|Xt))!==tt)throw Error(h(331));var t=ge;for(ge|=Xt,e=e.current.firstEffect;e!==null;){try{var n=e;if((n.effectTag&512)!=0)switch(n.tag){case 0:case 11:case 15:case 22:Va(5,n),za(5,n)}}catch(r){if(e===null)throw Error(h(330));sr(e,r)}n=e.nextEffect,e.nextEffect=null,e=n}return ge=t,Qt(),!0}l(Qu,"Vj");function lu(e,t,n){t=ys(n,t),t=qa(e,t,1073741823),_n(e,t),e=tl(e,1073741823),e!==null&&xt(e)}l(lu,"Wj");function sr(e,t){if(e.tag===3)lu(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){lu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=ys(t,e),e=Qa(n,e,1073741823),_n(n,e),n=tl(n,1073741823),n!==null&&xt(n);break}}n=n.return}}l(sr,"Ei");function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),Ct===e&&vt===n?nt===Qi||nt===qi&&cn===1073741823&&Tt()-_s<Xa?ir(e,vt):Xi=!0:au(e,n)&&(t=e.lastPingedTime,t!==0&&t<n||(e.lastPingedTime=n,xt(e)))}l(Ku,"Oj");function Yu(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=Gt(),t=or(t,e,null)),e=tl(e,t),e!==null&&xt(e)}l(Yu,"Vi");var su;su=l(function(e,t,n){var r=t.expirationTime;if(e!==null){var i=t.pendingProps;if(e.memoizedProps!==i||pt.current)Yt=!0;else{if(r<n){switch(Yt=!1,t.tag){case 3:Pa(t),fs();break;case 5:if(pa(t),t.mode&4&&n!==1&&i.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:ht(t.type)&&ki(t);break;case 4:es(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,i=t.type._context,Qe(Si,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return r=t.child.childExpirationTime,r!==0&&r>=n?Ra(e,t,n):(Qe(Ze,Ze.current&1),t=un(e,t,n),t!==null?t.sibling:null);Qe(Ze,Ze.current&1);break;case 19:if(r=t.childExpirationTime>=n,(e.effectTag&64)!=0){if(r)return Da(e,t,n);t.effectTag|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null),Qe(Ze,Ze.current),!r)return null}return un(e,t,n)}Yt=!1}}else Yt=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,i=Pr(t,at.current),Or(t,n),i=os(null,t,r,e,i,n),t.effectTag|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,ht(r)){var u=!0;ki(t)}else u=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yl(t);var d=r.getDerivedStateFromProps;typeof d=="function"&&Pi(t,r,d,e),i.updater=Ri,t.stateNode=i,i._reactInternalFiber=t,Gl(t,r,e,n),t=ps(null,t,r,!0,u,n)}else t.tag=0,wt(null,t,i,n),t=t.child;return t;case 16:e:{if(i=t.elementType,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,zs(i),i._status!==1)throw i._result;switch(i=i._result,t.type=i,u=t.tag=Ju(i),e=Ft(i,e),u){case 0:t=ms(null,t,i,e,n);break e;case 1:t=Na(null,t,i,e,n);break e;case 11:t=La(null,t,i,e,n);break e;case 14:t=Ta(null,t,i,Ft(i.type,e),r,n);break e}throw Error(h(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),ms(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),Na(e,t,r,i,n);case 3:if(Pa(t),r=t.updateQueue,e===null||r===null)throw Error(h(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,Xl(e,t),Lo(t,r,null,n),r=t.memoizedState.element,r===i)fs(),t=un(e,t,n);else{if((i=t.stateNode.hydrate)&&(Tn=vn(t.stateNode.containerInfo.firstChild),an=t,i=tr=!0),i)for(n=Jl(t,null,r,n),t.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else wt(e,t,r,n),fs();t=t.child}return t;case 5:return pa(t),e===null&&ds(t),r=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,d=i.children,br(r,i)?d=null:u!==null&&br(r,u)&&(t.effectTag|=16),Ma(e,t),t.mode&4&&n!==1&&i.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(wt(e,t,d,n),t=t.child),t;case 6:return e===null&&ds(t),null;case 13:return Ra(e,t,n);case 4:return es(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):wt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),La(e,t,r,i,n);case 7:return wt(e,t,t.pendingProps,n),t.child;case 8:return wt(e,t,t.pendingProps.children,n),t.child;case 12:return wt(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,d=t.memoizedProps,u=i.value;var p=t.type._context;if(Qe(Si,p._currentValue),p._currentValue=u,d!==null)if(p=d.value,u=Xn(p,u)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(p,u):1073741823)|0,u===0){if(d.children===i.children&&!pt.current){t=un(e,t,n);break e}}else for(p=t.child,p!==null&&(p.return=t);p!==null;){var k=p.dependencies;if(k!==null){d=p.child;for(var b=k.firstContext;b!==null;){if(b.context===r&&(b.observedBits&u)!=0){p.tag===1&&(b=bn(n,null),b.tag=2,_n(p,b)),p.expirationTime<n&&(p.expirationTime=n),b=p.alternate,b!==null&&b.expirationTime<n&&(b.expirationTime=n),la(p.return,n),k.expirationTime<n&&(k.expirationTime=n);break}b=b.next}}else d=p.tag===10&&p.type===t.type?null:p.child;if(d!==null)d.return=p;else for(d=p;d!==null;){if(d===t){d=null;break}if(p=d.sibling,p!==null){p.return=d.return,d=p;break}d=d.return}p=d}wt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,u=t.pendingProps,r=u.children,Or(t,n),i=St(i,u.unstable_observedBits),r=r(i),t.effectTag|=1,wt(e,t,r,n),t.child;case 14:return i=t.type,u=Ft(i,t.pendingProps),u=Ft(i.type,u),Ta(e,t,i,u,r,n);case 15:return Sa(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,ht(r)?(e=!0,ki(t)):e=!1,Or(t,n),da(t,r,i),Gl(t,r,i,n),ps(null,t,r,!0,e,n);case 19:return Da(e,t,n)}throw Error(h(156,t.tag))},"Rj");var Ns=null,Ps=null;function Xu(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Ns=l(function(r){try{t.onCommitFiberRoot(n,r,void 0,(r.current.effectTag&64)==64)}catch(i){}},"Uj"),Ps=l(function(r){try{t.onCommitFiberUnmount(n,r)}catch(i){}},"Li")}catch(r){}return!0}l(Xu,"Yj");function Gu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}l(Gu,"Zj");function Jt(e,t,n,r){return new Gu(e,t,n,r)}l(Jt,"Sh");function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}l(Rs,"bi");function Ju(e){if(typeof e=="function")return Rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zo)return 11;if(e===jo)return 14}return 2}l(Ju,"Xj");function ar(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}l(ar,"Sg");function ol(e,t,n,r,i,u){var d=2;if(r=e,typeof e=="function")Rs(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Pt:return Nn(n.children,i,u,t);case Vs:d=8,i|=7;break;case zr:d=8,i|=1;break;case zt:return e=Jt(12,n,t,i|8),e.elementType=zt,e.type=zt,e.expirationTime=u,e;case $r:return e=Jt(13,n,t,i),e.type=$r,e.elementType=$r,e.expirationTime=u,e;case $o:return e=Jt(19,n,t,i),e.elementType=$o,e.expirationTime=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rt:d=10;break e;case Vo:d=9;break e;case zo:d=11;break e;case jo:d=14;break e;case ul:d=16,r=null;break e;case cl:d=22;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=Jt(d,n,t,i),t.elementType=e,t.type=r,t.expirationTime=u,t}l(ol,"Ug");function Nn(e,t,n,r){return e=Jt(7,e,r,t),e.expirationTime=n,e}l(Nn,"Wg");function Os(e,t,n){return e=Jt(6,e,null,t),e.expirationTime=n,e}l(Os,"Tg");function Ds(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}l(Ds,"Vg");function ec(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}l(ec,"ak");function au(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=t&&e<=t}l(au,"Aj");function ur(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||n===0)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}l(ur,"xi");function uu(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;n!==0&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}l(uu,"yi");function Is(e,t){var n=e.lastExpiredTime;(n===0||n>t)&&(e.lastExpiredTime=t)}l(Is,"Cj");function il(e,t,n,r){var i=t.current,u=Gt(),d=To.suspense;u=or(u,i,d);e:if(n){n=n._reactInternalFiber;t:{if(jt(n)!==n||n.tag!==1)throw Error(h(170));var p=n;do{switch(p.tag){case 3:p=p.stateNode.context;break t;case 1:if(ht(p.type)){p=p.stateNode.__reactInternalMemoizedMergedChildContext;break t}}p=p.return}while(p!==null);throw Error(h(171))}if(n.tag===1){var k=n.type;if(ht(k)){n=Zs(n,k,p);break e}}n=p}else n=xn;return t.context===null?t.context=n:t.pendingContext=n,t=bn(u,d),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),_n(i,t),Mn(i,u),u}l(il,"bk");function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}l(As,"ck");function cu(e,t){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<t&&(e.retryTime=t)}l(cu,"dk");function Hs(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}l(Hs,"ek");function Fs(e,t,n){n=n!=null&&n.hydrate===!0;var r=new ec(e,t,n),i=Jt(3,null,null,t===2?7:t===1?3:0);r.current=i,i.stateNode=r,Yl(i),e[gn]=r.current,n&&t!==0&&wl(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=r}l(Fs,"fk"),Fs.prototype.render=function(e){il(e,this._internalRoot,null,null)},Fs.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;il(null,e,null,function(){t[gn]=null})};function Ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}l(Ho,"gk");function tc(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Fs(e,0,t?{hydrate:!0}:void 0)}l(tc,"hk");function ll(e,t,n,r,i){var u=n._reactRootContainer;if(u){var d=u._internalRoot;if(typeof i=="function"){var p=i;i=l(function(){var b=As(d);p.call(b)},"e")}il(t,d,e,i)}else{if(u=n._reactRootContainer=tc(n,r),d=u._internalRoot,typeof i=="function"){var k=i;i=l(function(){var b=As(d);k.call(b)},"e")}eu(function(){il(t,d,e,i)})}return As(d)}l(ll,"ik");function nc(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}l(nc,"jk"),Bt=l(function(e){if(e.tag===13){var t=Ti(Gt(),150,100);Mn(e,t),Hs(e,t)}},"wc"),to=l(function(e){e.tag===13&&(Mn(e,3),Hs(e,3))},"xc"),Fn=l(function(e){if(e.tag===13){var t=Gt();t=or(t,e,null),Mn(e,t),Hs(e,t)}},"yc"),ie=l(function(e,t,n){switch(t){case"input":if(Br(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=yo(r);if(!i)throw Error(h(90));Bo(r),Br(r,i)}}}break;case"textarea":vl(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}},"za"),je=Ja,Te=l(function(e,t,n,r,i){var u=ge;ge|=4;try{return En(98,e.bind(null,t,n,r,i))}finally{ge=u,ge===tt&&Qt()}},"Ga"),qe=l(function(){(ge&(1|Vt|Xt))===tt&&(Bu(),Fr())},"Ha"),rt=l(function(e,t){var n=ge;ge|=2;try{return e(t)}finally{ge=n,ge===tt&&Qt()}},"Ia");function du(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ho(t))throw Error(h(200));return nc(e,t,null,n)}l(du,"kk");var rc={Events:[Qn,on,yo,Z,M,yn,function(e){An(e,Pl)},Oe,ze,xr,Gr,Fr,{current:!1}]};(function(e){var t=e.findFiberByHostInstance;return Xu(I({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Xr(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return t?t(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:qn,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"}),ee=rc,ee=du,ee=l(function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternalFiber;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):Error(h(268,Object.keys(e)));return e=Xr(t),e=e===null?null:e.stateNode,e},"__webpack_unused_export__"),ee=l(function(e,t){if((ge&(Vt|Xt))!==tt)throw Error(h(187));var n=ge;ge|=1;try{return En(99,e.bind(null,t))}finally{ge=n,Qt()}},"__webpack_unused_export__"),ee=l(function(e,t,n){if(!Ho(t))throw Error(h(200));return ll(null,e,t,!0,n)},"__webpack_unused_export__"),T.render=function(e,t,n){if(!Ho(t))throw Error(h(200));return ll(null,e,t,!1,n)},ee=l(function(e){if(!Ho(e))throw Error(h(40));return e._reactRootContainer?(eu(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[gn]=null})}),!0):!1},"__webpack_unused_export__"),ee=Ja,ee=l(function(e,t){return du(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},"__webpack_unused_export__"),ee=l(function(e,t,n,r){if(!Ho(n))throw Error(h(200));if(e==null||e._reactInternalFiber===void 0)throw Error(h(38));return ll(e,t,n,!1,r)},"__webpack_unused_export__"),ee="16.14.0"},3935:(D,T,X)=>{"use strict";function ee(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ee)}catch(ne){console.error(ne)}}l(ee,"checkDCE"),ee(),D.exports=X(4448)},2408:(D,T,X)=>{"use strict";/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee=X(7418),ne=typeof Symbol=="function"&&Symbol.for,I=ne?Symbol.for("react.element"):60103,g=ne?Symbol.for("react.portal"):60106,h=ne?Symbol.for("react.fragment"):60107,H=ne?Symbol.for("react.strict_mode"):60108,V=ne?Symbol.for("react.profiler"):60114,U=ne?Symbol.for("react.provider"):60109,s=ne?Symbol.for("react.context"):60110,oe=ne?Symbol.for("react.forward_ref"):60112,re=ne?Symbol.for("react.suspense"):60113,Re=ne?Symbol.for("react.memo"):60115,Me=ne?Symbol.for("react.lazy"):60116,$=typeof Symbol=="function"&&Symbol.iterator;function Y(y){for(var R="https://reactjs.org/docs/error-decoder.html?invariant="+y,de=1;de<arguments.length;de++)R+="&args[]="+encodeURIComponent(arguments[de]);return"Minified React error #"+y+"; visit "+R+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}l(Y,"C");var me={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function E(y,R,de){this.props=y,this.context=R,this.refs=S,this.updater=de||me}l(E,"F"),E.prototype.isReactComponent={},E.prototype.setState=function(y,R){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error(Y(85));this.updater.enqueueSetState(this,y,R,"setState")},E.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function _(){}l(_,"G"),_.prototype=E.prototype;function W(y,R,de){this.props=y,this.context=R,this.refs=S,this.updater=de||me}l(W,"H");var O=W.prototype=new _;O.constructor=W,ee(O,E.prototype),O.isPureReactComponent=!0;var z={current:null},M=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};function j(y,R,de){var we,ye={},Ae=null,ot=null;if(R!=null)for(we in R.ref!==void 0&&(ot=R.ref),R.key!==void 0&&(Ae=""+R.key),R)M.call(R,we)&&!A.hasOwnProperty(we)&&(ye[we]=R[we]);var Ce=arguments.length-2;if(Ce===1)ye.children=de;else if(1<Ce){for(var Ne=Array(Ce),dt=0;dt<Ce;dt++)Ne[dt]=arguments[dt+2];ye.children=Ne}if(y&&y.defaultProps)for(we in Ce=y.defaultProps,Ce)ye[we]===void 0&&(ye[we]=Ce[we]);return{$$typeof:I,type:y,key:Ae,ref:ot,props:ye,_owner:z.current}}l(j,"M");function Z(y,R){return{$$typeof:I,type:y.type,key:R,ref:y.ref,props:y.props,_owner:y._owner}}l(Z,"N");function ue(y){return typeof y=="object"&&y!==null&&y.$$typeof===I}l(ue,"O");function ie(y){var R={"=":"=0",":":"=2"};return"$"+(""+y).replace(/[=:]/g,function(de){return R[de]})}l(ie,"escape");var se=/\/+/g,pe=[];function _e(y,R,de,we){if(pe.length){var ye=pe.pop();return ye.result=y,ye.keyPrefix=R,ye.func=de,ye.context=we,ye.count=0,ye}return{result:y,keyPrefix:R,func:de,context:we,count:0}}l(_e,"R");function Oe(y){y.result=null,y.keyPrefix=null,y.func=null,y.context=null,y.count=0,10>pe.length&&pe.push(y)}l(Oe,"S");function ze(y,R,de,we){var ye=typeof y;(ye==="undefined"||ye==="boolean")&&(y=null);var Ae=!1;if(y===null)Ae=!0;else switch(ye){case"string":case"number":Ae=!0;break;case"object":switch(y.$$typeof){case I:case g:Ae=!0}}if(Ae)return de(we,y,R===""?"."+Te(y,0):R),1;if(Ae=0,R=R===""?".":R+":",Array.isArray(y))for(var ot=0;ot<y.length;ot++){ye=y[ot];var Ce=R+Te(ye,ot);Ae+=ze(ye,Ce,de,we)}else if(y===null||typeof y!="object"?Ce=null:(Ce=$&&y[$]||y["@@iterator"],Ce=typeof Ce=="function"?Ce:null),typeof Ce=="function")for(y=Ce.call(y),ot=0;!(ye=y.next()).done;)ye=ye.value,Ce=R+Te(ye,ot++),Ae+=ze(ye,Ce,de,we);else if(ye==="object")throw de=""+y,Error(Y(31,de==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":de,""));return Ae}l(ze,"T");function je(y,R,de){return y==null?0:ze(y,"",R,de)}l(je,"V");function Te(y,R){return typeof y=="object"&&y!==null&&y.key!=null?ie(y.key):R.toString(36)}l(Te,"U");function qe(y,R){y.func.call(y.context,R,y.count++)}l(qe,"W");function rt(y,R,de){var we=y.result,ye=y.keyPrefix;y=y.func.call(y.context,R,y.count++),Array.isArray(y)?Ie(y,we,de,function(Ae){return Ae}):y!=null&&(ue(y)&&(y=Z(y,ye+(!y.key||R&&R.key===y.key?"":(""+y.key).replace(se,"$&/")+"/")+de)),we.push(y))}l(rt,"aa");function Ie(y,R,de,we,ye){var Ae="";de!=null&&(Ae=(""+de).replace(se,"$&/")+"/"),R=_e(R,Ae,we,ye),je(y,rt,R),Oe(R)}l(Ie,"X");var F={current:null};function G(){var y=F.current;if(y===null)throw Error(Y(321));return y}l(G,"Z");var Q={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:z,IsSomeRendererActing:{current:!1},assign:ee};T.Children={map:function(y,R,de){if(y==null)return y;var we=[];return Ie(y,we,null,R,de),we},forEach:function(y,R,de){if(y==null)return y;R=_e(null,null,R,de),je(y,qe,R),Oe(R)},count:function(y){return je(y,function(){return null},null)},toArray:function(y){var R=[];return Ie(y,R,null,function(de){return de}),R},only:function(y){if(!ue(y))throw Error(Y(143));return y}},T.Component=E,T.Fragment=h,T.Profiler=V,T.PureComponent=W,T.StrictMode=H,T.Suspense=re,T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,T.cloneElement=function(y,R,de){if(y==null)throw Error(Y(267,y));var we=ee({},y.props),ye=y.key,Ae=y.ref,ot=y._owner;if(R!=null){if(R.ref!==void 0&&(Ae=R.ref,ot=z.current),R.key!==void 0&&(ye=""+R.key),y.type&&y.type.defaultProps)var Ce=y.type.defaultProps;for(Ne in R)M.call(R,Ne)&&!A.hasOwnProperty(Ne)&&(we[Ne]=R[Ne]===void 0&&Ce!==void 0?Ce[Ne]:R[Ne])}var Ne=arguments.length-2;if(Ne===1)we.children=de;else if(1<Ne){Ce=Array(Ne);for(var dt=0;dt<Ne;dt++)Ce[dt]=arguments[dt+2];we.children=Ce}return{$$typeof:I,type:y.type,key:ye,ref:Ae,props:we,_owner:ot}},T.createContext=function(y,R){return R===void 0&&(R=null),y={$$typeof:s,_calculateChangedBits:R,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider={$$typeof:U,_context:y},y.Consumer=y},T.createElement=j,T.createFactory=function(y){var R=j.bind(null,y);return R.type=y,R},T.createRef=function(){return{current:null}},T.forwardRef=function(y){return{$$typeof:oe,render:y}},T.isValidElement=ue,T.lazy=function(y){return{$$typeof:Me,_ctor:y,_status:-1,_result:null}},T.memo=function(y,R){return{$$typeof:Re,type:y,compare:R===void 0?null:R}},T.useCallback=function(y,R){return G().useCallback(y,R)},T.useContext=function(y,R){return G().useContext(y,R)},T.useDebugValue=function(){},T.useEffect=function(y,R){return G().useEffect(y,R)},T.useImperativeHandle=function(y,R,de){return G().useImperativeHandle(y,R,de)},T.useLayoutEffect=function(y,R){return G().useLayoutEffect(y,R)},T.useMemo=function(y,R){return G().useMemo(y,R)},T.useReducer=function(y,R,de){return G().useReducer(y,R,de)},T.useRef=function(y){return G().useRef(y)},T.useState=function(y){return G().useState(y)},T.version="16.14.0"},7294:(D,T,X)=>{"use strict";D.exports=X(2408)},53:(D,T)=>{"use strict";/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X,ee,ne,I,g;if(typeof window=="undefined"||typeof MessageChannel!="function"){var h=null,H=null,V=l(function(){if(h!==null)try{var F=T.unstable_now();h(!0,F),h=null}catch(G){throw setTimeout(V,0),G}},"t"),U=Date.now();T.unstable_now=function(){return Date.now()-U},X=l(function(F){h!==null?setTimeout(X,0,F):(h=F,setTimeout(V,0))},"f"),ee=l(function(F,G){H=setTimeout(F,G)},"g"),ne=l(function(){clearTimeout(H)},"h"),I=l(function(){return!1},"k"),g=T.unstable_forceFrameRate=function(){}}else{var s=window.performance,oe=window.Date,re=window.setTimeout,Re=window.clearTimeout;if(typeof console!="undefined"){var Me=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof Me!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof s=="object"&&typeof s.now=="function")T.unstable_now=function(){return s.now()};else{var $=oe.now();T.unstable_now=function(){return oe.now()-$}}var Y=!1,me=null,S=-1,E=5,_=0;I=l(function(){return T.unstable_now()>=_},"k"),g=l(function(){},"l"),T.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):E=0<F?Math.floor(1e3/F):5};var W=new MessageChannel,O=W.port2;W.port1.onmessage=function(){if(me!==null){var F=T.unstable_now();_=F+E;try{me(!0,F)?O.postMessage(null):(Y=!1,me=null)}catch(G){throw O.postMessage(null),G}}else Y=!1},X=l(function(F){me=F,Y||(Y=!0,O.postMessage(null))},"f"),ee=l(function(F,G){S=re(function(){F(T.unstable_now())},G)},"g"),ne=l(function(){Re(S),S=-1},"h")}function z(F,G){var Q=F.length;F.push(G);e:for(;;){var y=Q-1>>>1,R=F[y];if(R!==void 0&&0<j(R,G))F[y]=G,F[Q]=R,Q=y;else break e}}l(z,"J");function M(F){return F=F[0],F===void 0?null:F}l(M,"L");function A(F){var G=F[0];if(G!==void 0){var Q=F.pop();if(Q!==G){F[0]=Q;e:for(var y=0,R=F.length;y<R;){var de=2*(y+1)-1,we=F[de],ye=de+1,Ae=F[ye];if(we!==void 0&&0>j(we,Q))Ae!==void 0&&0>j(Ae,we)?(F[y]=Ae,F[ye]=Q,y=ye):(F[y]=we,F[de]=Q,y=de);else if(Ae!==void 0&&0>j(Ae,Q))F[y]=Ae,F[ye]=Q,y=ye;else break e}}return G}return null}l(A,"M");function j(F,G){var Q=F.sortIndex-G.sortIndex;return Q!==0?Q:F.id-G.id}l(j,"K");var Z=[],ue=[],ie=1,se=null,pe=3,_e=!1,Oe=!1,ze=!1;function je(F){for(var G=M(ue);G!==null;){if(G.callback===null)A(ue);else if(G.startTime<=F)A(ue),G.sortIndex=G.expirationTime,z(Z,G);else break;G=M(ue)}}l(je,"V");function Te(F){if(ze=!1,je(F),!Oe)if(M(Z)!==null)Oe=!0,X(qe);else{var G=M(ue);G!==null&&ee(Te,G.startTime-F)}}l(Te,"W");function qe(F,G){Oe=!1,ze&&(ze=!1,ne()),_e=!0;var Q=pe;try{for(je(G),se=M(Z);se!==null&&(!(se.expirationTime>G)||F&&!I());){var y=se.callback;if(y!==null){se.callback=null,pe=se.priorityLevel;var R=y(se.expirationTime<=G);G=T.unstable_now(),typeof R=="function"?se.callback=R:se===M(Z)&&A(Z),je(G)}else A(Z);se=M(Z)}if(se!==null)var de=!0;else{var we=M(ue);we!==null&&ee(Te,we.startTime-G),de=!1}return de}finally{se=null,pe=Q,_e=!1}}l(qe,"X");function rt(F){switch(F){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}l(rt,"Y");var Ie=g;T.unstable_IdlePriority=5,T.unstable_ImmediatePriority=1,T.unstable_LowPriority=4,T.unstable_NormalPriority=3,T.unstable_Profiling=null,T.unstable_UserBlockingPriority=2,T.unstable_cancelCallback=function(F){F.callback=null},T.unstable_continueExecution=function(){Oe||_e||(Oe=!0,X(qe))},T.unstable_getCurrentPriorityLevel=function(){return pe},T.unstable_getFirstCallbackNode=function(){return M(Z)},T.unstable_next=function(F){switch(pe){case 1:case 2:case 3:var G=3;break;default:G=pe}var Q=pe;pe=G;try{return F()}finally{pe=Q}},T.unstable_pauseExecution=function(){},T.unstable_requestPaint=Ie,T.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=pe;pe=F;try{return G()}finally{pe=Q}},T.unstable_scheduleCallback=function(F,G,Q){var y=T.unstable_now();if(typeof Q=="object"&&Q!==null){var R=Q.delay;R=typeof R=="number"&&0<R?y+R:y,Q=typeof Q.timeout=="number"?Q.timeout:rt(F)}else Q=rt(F),R=y;return Q=R+Q,F={id:ie++,callback:G,priorityLevel:F,startTime:R,expirationTime:Q,sortIndex:-1},R>y?(F.sortIndex=R,z(ue,F),M(Z)===null&&F===M(ue)&&(ze?ne():ze=!0,ee(Te,R-y))):(F.sortIndex=Q,z(Z,F),Oe||_e||(Oe=!0,X(qe))),F},T.unstable_shouldYield=function(){var F=T.unstable_now();je(F);var G=M(Z);return G!==se&&se!==null&&G!==null&&G.callback!==null&&G.startTime<=F&&G.expirationTime<se.expirationTime||I()},T.unstable_wrapCallback=function(F){var G=pe;return function(){var Q=pe;pe=G;try{return F.apply(this,arguments)}finally{pe=Q}}}},3840:(D,T,X)=>{"use strict";D.exports=X(53)},3379:(D,T,X)=>{"use strict";var ee=l(function(){var Y;return l(function(){return typeof Y=="undefined"&&(Y=Boolean(window&&document&&document.all&&!window.atob)),Y},"memorize")},"isOldIE")(),ne=l(function(){var Y={};return l(function(S){if(typeof Y[S]=="undefined"){var E=document.querySelector(S);if(window.HTMLIFrameElement&&E instanceof window.HTMLIFrameElement)try{E=E.contentDocument.head}catch(_){E=null}Y[S]=E}return Y[S]},"memorize")},"getTarget")(),I=[];function g($){for(var Y=-1,me=0;me<I.length;me++)if(I[me].identifier===$){Y=me;break}return Y}l(g,"getIndexByIdentifier");function h($,Y){for(var me={},S=[],E=0;E<$.length;E++){var _=$[E],W=Y.base?_[0]+Y.base:_[0],O=me[W]||0,z="".concat(W," ").concat(O);me[W]=O+1;var M=g(z),A={css:_[1],media:_[2],sourceMap:_[3]};M!==-1?(I[M].references++,I[M].updater(A)):I.push({identifier:z,updater:Me(A,Y),references:1}),S.push(z)}return S}l(h,"modulesToDom");function H($){var Y=document.createElement("style"),me=$.attributes||{};if(typeof me.nonce=="undefined"){var S=X.nc;S&&(me.nonce=S)}if(Object.keys(me).forEach(function(_){Y.setAttribute(_,me[_])}),typeof $.insert=="function")$.insert(Y);else{var E=ne($.insert||"head");if(!E)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");E.appendChild(Y)}return Y}l(H,"insertStyleElement");function V($){if($.parentNode===null)return!1;$.parentNode.removeChild($)}l(V,"removeStyleElement");var U=l(function(){var Y=[];return l(function(S,E){return Y[S]=E,Y.filter(Boolean).join(`
`)},"replace")},"replaceText")();function s($,Y,me,S){var E=me?"":S.media?"@media ".concat(S.media," {").concat(S.css,"}"):S.css;if($.styleSheet)$.styleSheet.cssText=U(Y,E);else{var _=document.createTextNode(E),W=$.childNodes;W[Y]&&$.removeChild(W[Y]),W.length?$.insertBefore(_,W[Y]):$.appendChild(_)}}l(s,"applyToSingletonTag");function oe($,Y,me){var S=me.css,E=me.media,_=me.sourceMap;if(E?$.setAttribute("media",E):$.removeAttribute("media"),_&&typeof btoa!="undefined"&&(S+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(_))))," */")),$.styleSheet)$.styleSheet.cssText=S;else{for(;$.firstChild;)$.removeChild($.firstChild);$.appendChild(document.createTextNode(S))}}l(oe,"applyToTag");var re=null,Re=0;function Me($,Y){var me,S,E;if(Y.singleton){var _=Re++;me=re||(re=H(Y)),S=s.bind(null,me,_,!1),E=s.bind(null,me,_,!0)}else me=H(Y),S=oe.bind(null,me,Y),E=l(function(){V(me)},"remove");return S($),l(function(O){if(O){if(O.css===$.css&&O.media===$.media&&O.sourceMap===$.sourceMap)return;S($=O)}else E()},"updateStyle")}l(Me,"addStyle"),D.exports=function($,Y){Y=Y||{},!Y.singleton&&typeof Y.singleton!="boolean"&&(Y.singleton=ee()),$=$||[];var me=h($,Y);return l(function(E){if(E=E||[],Object.prototype.toString.call(E)==="[object Array]"){for(var _=0;_<me.length;_++){var W=me[_],O=g(W);I[O].references--}for(var z=h(E,Y),M=0;M<me.length;M++){var A=me[M],j=g(A);I[j].references===0&&(I[j].updater(),I.splice(j,1))}me=z}},"update")}},1828:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.12 13.9725L15 12.5L9.37924 2H7.61921L1.99847 12.5L2.87849 13.9725H14.12ZM2.87849 12.9725L8.49922 2.47249L14.12 12.9725H2.87849ZM7.98949 6H8.98799V10H7.98949V6ZM7.98949 11H8.98799V12H7.98949V11Z" fill="#C5C5C5"></path></svg>'},6305:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_818_123307)"><path d="M16 7.99201C16 3.58042 12.416 0 8 0C3.584 0 0 3.58042 0 7.99201C0 10.4216 1.104 12.6114 2.832 14.0819C2.848 14.0979 2.864 14.0979 2.864 14.1139C3.008 14.2258 3.152 14.3377 3.312 14.4496C3.392 14.4975 3.456 14.5614 3.536 14.6254C4.816 15.4885 6.352 16 8.016 16C9.68 16 11.216 15.4885 12.496 14.6254C12.576 14.5774 12.64 14.5135 12.72 14.4655C12.864 14.3536 13.024 14.2418 13.168 14.1299C13.184 14.1139 13.2 14.1139 13.2 14.0979C14.896 12.6114 16 10.4216 16 7.99201ZM8 14.993C6.496 14.993 5.12 14.5135 3.984 13.7143C4 13.5864 4.032 13.4585 4.064 13.3307C4.16 12.979 4.304 12.6434 4.48 12.3397C4.656 12.036 4.864 11.7642 5.12 11.5245C5.36 11.2847 5.648 11.0609 5.936 10.8851C6.24 10.7093 6.56 10.5814 6.912 10.4855C7.264 10.3896 7.632 10.3417 8 10.3417C8.592 10.3417 9.136 10.4535 9.632 10.6613C10.128 10.8691 10.56 11.1568 10.928 11.5085C11.296 11.8761 11.584 12.3077 11.792 12.8032C11.904 13.0909 11.984 13.3946 12.032 13.7143C10.88 14.5135 9.504 14.993 8 14.993ZM5.552 7.59241C5.408 7.27273 5.344 6.92108 5.344 6.56943C5.344 6.21778 5.408 5.86613 5.552 5.54645C5.696 5.22677 5.888 4.93906 6.128 4.6993C6.368 4.45954 6.656 4.26773 6.976 4.12388C7.296 3.98002 7.648 3.91608 8 3.91608C8.368 3.91608 8.704 3.98002 9.024 4.12388C9.344 4.26773 9.632 4.45954 9.872 4.6993C10.112 4.93906 10.304 5.22677 10.448 5.54645C10.592 5.86613 10.656 6.21778 10.656 6.56943C10.656 6.93706 10.592 7.27273 10.448 7.59241C10.304 7.91209 10.112 8.1998 9.872 8.43956C9.632 8.67932 9.344 8.87113 9.024 9.01499C8.384 9.28671 7.6 9.28671 6.96 9.01499C6.64 8.87113 6.352 8.67932 6.112 8.43956C5.872 8.1998 5.68 7.91209 5.552 7.59241ZM12.976 12.8991C12.976 12.8671 12.96 12.8511 12.96 12.8192C12.8 12.3237 12.576 11.8442 12.272 11.4126C11.968 10.981 11.616 10.5974 11.184 10.2777C10.864 10.038 10.512 9.83017 10.144 9.67033C10.32 9.55844 10.48 9.41459 10.608 9.28671C10.848 9.04695 11.056 8.79121 11.232 8.5035C11.408 8.21578 11.536 7.91209 11.632 7.57642C11.728 7.24076 11.76 6.90509 11.76 6.56943C11.76 6.04196 11.664 5.54645 11.472 5.0989C11.28 4.65135 11.008 4.25175 10.656 3.9001C10.32 3.56444 9.904 3.29271 9.456 3.1009C9.008 2.90909 8.512 2.81319 7.984 2.81319C7.456 2.81319 6.96 2.90909 6.512 3.1009C6.064 3.29271 5.648 3.56444 5.312 3.91608C4.976 4.25175 4.704 4.66733 4.512 5.11489C4.32 5.56244 4.224 6.05794 4.224 6.58541C4.224 6.93706 4.272 7.27273 4.368 7.59241C4.464 7.92807 4.592 8.23177 4.768 8.51948C4.928 8.80719 5.152 9.06294 5.392 9.3027C5.536 9.44655 5.696 9.57443 5.872 9.68631C5.488 9.86214 5.136 10.0699 4.832 10.3097C4.416 10.6294 4.048 11.013 3.744 11.4286C3.44 11.8601 3.216 12.3237 3.056 12.8352C3.04 12.8671 3.04 12.8991 3.04 12.9151C1.776 11.6364 0.992 9.91009 0.992 7.99201C0.992 4.13986 4.144 0.991009 8 0.991009C11.856 0.991009 15.008 4.13986 15.008 7.99201C15.008 9.91009 14.224 11.6364 12.976 12.8991Z" fill="#C5C5C5"></path></g><defs><clipPath id="clip0_818_123307"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>'},8060:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" fill="#C5C5C5"></path></svg>'},3274:D=>{D.exports='<svg viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.97612 10.0719L12.3334 5.7146L12.9521 6.33332L8.28548 11L7.66676 11L3.0001 6.33332L3.61882 5.7146L7.97612 10.0719Z" fill="#C5C5C5"></path></svg>'},7943:D=>{D.exports='<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.97612 10.0719L12.3334 5.7146L12.9521 6.33332L8.28548 11L7.66676 11L3.0001 6.33332L3.61882 5.7146L7.97612 10.0719Z"></path></svg>'},4933:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 8.70711L11.6464 12.3536L12.3535 11.6464L8.70708 8L12.3535 4.35355L11.6464 3.64645L7.99998 7.29289L4.35353 3.64645L3.64642 4.35355L7.29287 8L3.64642 11.6464L4.35353 12.3536L7.99998 8.70711Z" fill="#C5C5C5"></path></svg>'},2651:D=>{D.exports='<svg viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path></svg>'},832:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52 0H8.48V4.05333C9.47556 4.16 10.3111 4.58667 10.9867 5.33333C11.6622 6.08 12 6.96889 12 8C12 9.03111 11.6622 9.92 10.9867 10.6667C10.3111 11.4133 9.47556 11.84 8.48 11.9467V16H7.52V11.9467C6.52444 11.84 5.68889 11.4133 5.01333 10.6667C4.33778 9.92 4 9.03111 4 8C4 6.96889 4.33778 6.08 5.01333 5.33333C5.68889 4.58667 6.52444 4.16 7.52 4.05333V0ZM8 10.6133C8.71111 10.6133 9.31556 10.3644 9.81333 9.86667C10.3467 9.33333 10.6133 8.71111 10.6133 8C10.6133 7.28889 10.3467 6.68444 9.81333 6.18667C9.31556 5.65333 8.71111 5.38667 8 5.38667C7.28889 5.38667 6.66667 5.65333 6.13333 6.18667C5.63556 6.68444 5.38667 7.28889 5.38667 8C5.38667 8.71111 5.63556 9.33333 6.13333 9.86667C6.66667 10.3644 7.28889 10.6133 8 10.6133Z" fill="#A0A0A0"></path></svg>'},2776:D=>{D.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg>'},2190:D=>{D.exports='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:evenodd;fill:#FFFFFF;fill-opacity:1;" d="M 14 0 C 6.265625 0 0 6.265625 0 14 C 0 20.195312 4.007812 25.425781 9.574219 27.285156 C 10.273438 27.402344 10.535156 26.984375 10.535156 26.617188 C 10.535156 26.285156 10.515625 25.183594 10.515625 24.011719 C 7 24.660156 6.089844 23.152344 5.808594 22.363281 C 5.652344 21.960938 4.972656 20.722656 4.375 20.386719 C 3.886719 20.125 3.183594 19.476562 4.359375 19.460938 C 5.460938 19.441406 6.246094 20.476562 6.511719 20.894531 C 7.769531 23.011719 9.785156 22.417969 10.585938 22.050781 C 10.710938 21.140625 11.078125 20.527344 11.480469 20.175781 C 8.363281 19.828125 5.109375 18.621094 5.109375 13.265625 C 5.109375 11.742188 5.652344 10.484375 6.546875 9.503906 C 6.402344 9.152344 5.914062 7.714844 6.683594 5.792969 C 6.683594 5.792969 7.859375 5.425781 10.535156 7.226562 C 11.652344 6.914062 12.847656 6.753906 14.035156 6.753906 C 15.226562 6.753906 16.414062 6.914062 17.535156 7.226562 C 20.210938 5.410156 21.386719 5.792969 21.386719 5.792969 C 22.152344 7.714844 21.664062 9.152344 21.523438 9.503906 C 22.417969 10.484375 22.960938 11.726562 22.960938 13.265625 C 22.960938 18.636719 19.6875 19.828125 16.574219 20.175781 C 17.078125 20.613281 17.515625 21.453125 17.515625 22.765625 C 17.515625 24.640625 17.5 26.144531 17.5 26.617188 C 17.5 26.984375 17.761719 27.421875 18.460938 27.285156 C 24.160156 25.359375 27.996094 20.015625 28 14 C 28 6.265625 21.734375 0 14 0 Z M 14 0 "></path></g></svg>'},3879:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" fill="#cccccc"></path></svg>'},1343:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4C8.35556 4 8.71111 4.05333 9.06667 4.16C9.74222 4.33778 10.3289 4.67556 10.8267 5.17333C11.3244 5.67111 11.6622 6.25778 11.84 6.93333C11.9467 7.28889 12 7.64444 12 8C12 8.35556 11.9467 8.71111 11.84 9.06667C11.6622 9.74222 11.3244 10.3289 10.8267 10.8267C10.3289 11.3244 9.74222 11.6622 9.06667 11.84C8.71111 11.9467 8.35556 12 8 12C7.64444 12 7.28889 11.9467 6.93333 11.84C6.25778 11.6622 5.67111 11.3244 5.17333 10.8267C4.67556 10.3289 4.33778 9.74222 4.16 9.06667C4.05333 8.71111 4 8.35556 4 8C4 7.64444 4.03556 7.30667 4.10667 6.98667C4.21333 6.63111 4.35556 6.29333 4.53333 5.97333C4.88889 5.36889 5.36889 4.88889 5.97333 4.53333C6.29333 4.35556 6.61333 4.23111 6.93333 4.16C7.28889 4.05333 7.64444 4 8 4Z" fill="#CCCCCC"></path></svg>'},4364:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.40706 15L1 13.5929L3.35721 9.46781L3.52339 9.25025L11.7736 1L13.2321 1L15 2.76791V4.22636L6.74975 12.4766L6.53219 12.6428L2.40706 15ZM2.40706 13.5929L6.02053 11.7474L14.2708 3.49714L12.5029 1.72923L4.25262 9.97947L2.40706 13.5929Z" fill="#C5C5C5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.64642 12.3536L3.64642 10.3536L4.35353 9.64645L6.35353 11.6464L5.64642 12.3536Z" fill="#C5C5C5"></path></svg>'},5720:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.1 4.4L8.6 2H7.4L6.9 4.4L6.2 4.7L4.2 3.4L3.3 4.2L4.6 6.2L4.4 6.9L2 7.4V8.6L4.4 9.1L4.7 9.9L3.4 11.9L4.2 12.7L6.2 11.4L7 11.7L7.4 14H8.6L9.1 11.6L9.9 11.3L11.9 12.6L12.7 11.8L11.4 9.8L11.7 9L14 8.6V7.4L11.6 6.9L11.3 6.1L12.6 4.1L11.8 3.3L9.8 4.6L9.1 4.4ZM9.4 1L9.9 3.4L12 2.1L14 4.1L12.6 6.2L15 6.6V9.4L12.6 9.9L14 12L12 14L9.9 12.6L9.4 15H6.6L6.1 12.6L4 13.9L2 11.9L3.4 9.8L1 9.4V6.6L3.4 6.1L2.1 4L4.1 2L6.2 3.4L6.6 1H9.4ZM10 8C10 9.1 9.1 10 8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8ZM8 9C8.6 9 9 8.6 9 8C9 7.4 8.6 7 8 7C7.4 7 7 7.4 7 8C7 8.6 7.4 9 8 9Z" fill="#C5C5C5"></path></svg>'},9553:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.00012 13H7.00012L7.00012 7.00001L13.0001 7.00001V6.00001L7.00012 6.00001L7.00012 3H6.00012L6.00012 6.00001L3.00012 6.00001V7.00001H6.00012L6.00012 13Z" fill="#C5C5C5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.50012 2H13.5001L14.0001 2.5V13.5L13.5001 14H2.50012L2.00012 13.5V2.5L2.50012 2ZM3.00012 13H13.0001V3H3.00012V13Z" fill="#C5C5C5"></path></svg>'},1608:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2002 2H8.01724L7.66424 2.146L1.00024 8.81V9.517L6.18324 14.7H6.89024L9.10531 12.4853C9.65832 12.7768 10.2677 12.9502 10.8945 12.9923C11.659 13.0437 12.424 12.8981 13.1162 12.5694C13.8085 12.2407 14.4048 11.74 14.8483 11.1151C15.2918 10.4902 15.5676 9.76192 15.6492 9H15.6493C15.6759 8.83446 15.6929 8.66751 15.7003 8.5C15.6989 7.30693 15.2244 6.16311 14.3808 5.31948C14.1712 5.10988 13.9431 4.92307 13.7002 4.76064V2.5L13.2002 2ZM12.7002 4.25881C12.223 4.08965 11.7162 4.00057 11.2003 4C11.0676 4 10.9405 4.05268 10.8467 4.14645C10.7529 4.24021 10.7003 4.36739 10.7003 4.5C10.7003 4.63261 10.7529 4.75979 10.8467 4.85355C10.9405 4.94732 11.0676 5 11.2003 5C11.7241 5 12.2358 5.11743 12.7002 5.33771V7.476L8.77506 11.4005C8.75767 11.4095 8.74079 11.4194 8.72449 11.4304C8.6685 11.468 8.6207 11.5166 8.58397 11.5731C8.57475 11.5874 8.56627 11.602 8.55856 11.617L6.53624 13.639L2.06124 9.163L8.22424 3H12.7002V4.25881ZM13.7002 6.0505C14.3409 6.70435 14.7003 7.58365 14.7003 8.5C14.6955 8.66769 14.6784 8.8348 14.6493 9H14.6492C14.5675 9.58097 14.3406 10.1319 13.9894 10.6019C13.6383 11.0719 13.1743 11.4457 12.6403 11.6888C12.1063 11.9319 11.5197 12.0363 10.9346 11.9925C10.5622 11.9646 10.1982 11.8772 9.85588 11.7348L13.5542 8.037L13.7002 7.683V6.0505Z" fill="#C5C5C5"></path></svg>'},6589:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.99008 1C4.5965 1 4.21175 1.11671 3.8845 1.33538C3.55724 1.55404 3.30218 1.86484 3.15156 2.22846C3.00094 2.59208 2.96153 2.99221 3.03832 3.37823C3.1151 3.76425 3.30463 4.11884 3.58294 4.39714C3.83589 4.65009 4.15185 4.8297 4.49715 4.91798L4.49099 10.8286C4.40192 10.8517 4.31421 10.881 4.22852 10.9165C3.8649 11.0671 3.5541 11.3222 3.33544 11.6494C3.11677 11.9767 3.00006 12.3614 3.00006 12.755C3.00006 13.2828 3.20972 13.7889 3.58292 14.1621C3.95612 14.5353 4.46228 14.745 4.99006 14.745C5.38365 14.745 5.76839 14.6283 6.09565 14.4096C6.4229 14.191 6.67796 13.8802 6.82858 13.5165C6.9792 13.1529 7.01861 12.7528 6.94182 12.3668C6.86504 11.9807 6.67551 11.6262 6.3972 11.3479C6.14426 11.0949 5.8283 10.9153 5.48299 10.827V9.745H5.48915V8.80133C6.50043 10.3332 8.19531 11.374 10.1393 11.4893C10.2388 11.7413 10.3893 11.9714 10.5825 12.1648C10.8608 12.4432 11.2154 12.6328 11.6014 12.7097C11.9875 12.7866 12.3877 12.7472 12.7513 12.5966C13.115 12.446 13.4259 12.191 13.6446 11.8637C13.8633 11.5364 13.98 11.1516 13.98 10.758C13.98 10.2304 13.7705 9.72439 13.3975 9.35122C13.0245 8.97805 12.5186 8.76827 11.991 8.76801C11.5974 8.76781 11.2126 8.88435 10.8852 9.10289C10.5578 9.32144 10.3026 9.63216 10.1518 9.99577C10.0875 10.1509 10.0434 10.3127 10.0199 10.4772C7.48375 10.2356 5.48915 8.09947 5.48915 5.5C5.48915 5.33125 5.47282 5.16445 5.48915 5V4.9164C5.57823 4.89333 5.66594 4.86401 5.75162 4.82852C6.11525 4.6779 6.42604 4.42284 6.64471 4.09558C6.86337 3.76833 6.98008 3.38358 6.98008 2.99C6.98008 2.46222 6.77042 1.95605 6.39722 1.58286C6.02403 1.20966 5.51786 1 4.99008 1ZM4.99008 2C5.18593 1.9998 5.37743 2.0577 5.54037 2.16636C5.70331 2.27502 5.83035 2.42957 5.90544 2.61045C5.98052 2.79133 6.00027 2.99042 5.96218 3.18253C5.9241 3.37463 5.82989 3.55113 5.69147 3.68968C5.55306 3.82824 5.37666 3.92262 5.18459 3.9609C4.99252 3.99918 4.79341 3.97964 4.61246 3.90474C4.4315 3.82983 4.27682 3.70294 4.168 3.54012C4.05917 3.37729 4.00108 3.18585 4.00108 2.99C4.00135 2.72769 4.1056 2.47618 4.29098 2.29061C4.47637 2.10503 4.72777 2.00053 4.99008 2ZM4.99006 13.745C4.79422 13.7452 4.60271 13.6873 4.43977 13.5786C4.27684 13.47 4.14979 13.3154 4.07471 13.1345C3.99962 12.9537 3.97988 12.7546 4.01796 12.5625C4.05605 12.3704 4.15026 12.1939 4.28867 12.0553C4.42709 11.9168 4.60349 11.8224 4.79555 11.7841C4.98762 11.7458 5.18673 11.7654 5.36769 11.8403C5.54864 11.9152 5.70332 12.0421 5.81215 12.2049C5.92097 12.3677 5.97906 12.5591 5.97906 12.755C5.9788 13.0173 5.87455 13.2688 5.68916 13.4544C5.50377 13.64 5.25237 13.7445 4.99006 13.745ZM11.991 9.76801C12.1868 9.76801 12.3782 9.82607 12.541 9.93485C12.7038 10.0436 12.8307 10.1983 12.9057 10.3791C12.9806 10.56 13.0002 10.7591 12.962 10.9511C12.9238 11.1432 12.8295 11.3196 12.6911 11.458C12.5526 11.5965 12.3762 11.6908 12.1842 11.729C11.9921 11.7672 11.7931 11.7476 11.6122 11.6726C11.4313 11.5977 11.2767 11.4708 11.1679 11.308C11.0591 11.1452 11.001 10.9538 11.001 10.758C11.0013 10.4955 11.1057 10.2439 11.2913 10.0583C11.4769 9.87266 11.7285 9.76827 11.991 9.76801Z" fill="#C5C5C5"></path></svg>'},1144:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5002 4.64639L8.35388 2.5H7.64677L5.50034 4.64639L6.20744 5.35349L7.3003 4.26066V5.27972H7.28082V5.73617L7.30568 5.73717C7.30768 5.84794 7.30968 5.95412 7.31169 6.05572C7.31538 6.24322 7.33201 6.43462 7.36158 6.62994C7.39114 6.82525 7.42994 7.02056 7.47799 7.21587C7.52603 7.41119 7.59255 7.62017 7.67755 7.84283C7.83276 8.22173 8.02124 8.56548 8.24297 8.87408C8.4647 9.18267 8.70307 9.47173 8.95806 9.74127C9.21306 10.0108 9.46621 10.2764 9.71751 10.5381C9.9688 10.7999 10.1961 11.0792 10.3993 11.376C10.6026 11.6729 10.767 11.9971 10.8927 12.3487C11.0183 12.7002 11.0812 13.1045 11.0812 13.5616V14.4463H12.5003V13.5616C12.4929 13.042 12.4375 12.5792 12.334 12.1729C12.2305 11.7667 12.0882 11.3995 11.9071 11.0713C11.7261 10.7432 11.5246 10.4444 11.3029 10.1749C11.0812 9.90533 10.8502 9.64752 10.61 9.40142C10.3698 9.15533 10.1388 8.90923 9.91707 8.66314C9.69533 8.41705 9.49392 8.15533 9.31284 7.87798C9.13176 7.60064 8.98763 7.29595 8.88046 6.96392C8.77329 6.63189 8.7197 6.25494 8.7197 5.83306V5.27972H8.71901V4.27935L9.79314 5.3535L10.5002 4.64639ZM7.04245 9.74127C7.15517 9.62213 7.26463 9.49917 7.37085 9.3724C7.12665 9.01878 6.92109 8.63423 6.75218 8.22189L6.74317 8.19952C6.70951 8.11134 6.67794 8.02386 6.6486 7.93713C6.47774 8.19261 6.28936 8.43461 6.08345 8.66314C5.86172 8.90923 5.63074 9.15533 5.39053 9.40142C5.15032 9.64752 4.91935 9.90533 4.69761 10.1749C4.47588 10.4444 4.27447 10.7432 4.09338 11.0713C3.9123 11.3995 3.77002 11.7667 3.66654 12.1729C3.56307 12.5792 3.50764 13.042 3.50024 13.5616V14.4463H4.91935V13.5616C4.91935 13.1045 4.98217 12.7002 5.10782 12.3487C5.23347 11.9971 5.39792 11.6729 5.60118 11.376C5.80444 11.0792 6.03171 10.7999 6.28301 10.5381C6.53431 10.2764 6.78746 10.0108 7.04245 9.74127Z" fill="#424242"></path></svg>'},1922:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99976 1H6.99976V3H1.49976L0.999756 3.5V7.5L1.49976 8H6.99976V15H7.99976V8H12.4898L12.8298 7.87L15.0098 5.87V5.13L12.8298 3.13L12.4998 3H7.99976V1ZM12.2898 7H1.99976V4H12.2898L13.9198 5.5L12.2898 7ZM4.99976 5H9.99976V6H4.99976V5Z" fill="#C5C5C5"></path></svg>'},3476:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7V8H8V14H7V8H1V7H7V1H8V7H14Z" fill="#C5C5C5"></path></svg>'},5143:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.616 4.928a2.487 2.487 0 0 1-1.119.922c-.148.06-.458.138-.458.138v5.008a2.51 2.51 0 0 1 1.579 1.062c.273.412.419.895.419 1.388.008.343-.057.684-.19 1A2.485 2.485 0 0 1 3.5 15.984a2.482 2.482 0 0 1-1.388-.419A2.487 2.487 0 0 1 1.05 13c.095-.486.331-.932.68-1.283.349-.343.79-.579 1.269-.68V5.949a2.6 2.6 0 0 1-1.269-.68 2.503 2.503 0 0 1-.68-1.283 2.487 2.487 0 0 1 1.06-2.565A2.49 2.49 0 0 1 3.5 1a2.504 2.504 0 0 1 1.807.729 2.493 2.493 0 0 1 .729 1.81c.002.494-.144.978-.42 1.389zm-.756 7.861a1.5 1.5 0 0 0-.552-.579 1.45 1.45 0 0 0-.77-.21 1.495 1.495 0 0 0-1.47 1.79 1.493 1.493 0 0 0 1.18 1.179c.288.058.586.03.86-.08.276-.117.512-.312.68-.56.15-.226.235-.49.249-.76a1.51 1.51 0 0 0-.177-.78zM2.708 4.741c.247.161.536.25.83.25.271 0 .538-.075.77-.211a1.514 1.514 0 0 0 .729-1.359 1.513 1.513 0 0 0-.25-.76 1.551 1.551 0 0 0-.68-.56 1.49 1.49 0 0 0-.86-.08 1.494 1.494 0 0 0-1.179 1.18c-.058.288-.03.586.08.86.117.276.312.512.56.68zm10.329 6.296c.48.097.922.335 1.269.68.466.47.729 1.107.725 1.766.002.493-.144.977-.42 1.388a2.499 2.499 0 0 1-4.532-.899 2.5 2.5 0 0 1 1.067-2.565c.267-.183.571-.308.889-.37V5.489a1.5 1.5 0 0 0-1.5-1.499H8.687l1.269 1.27-.71.709L7.117 3.84v-.7l2.13-2.13.71.711-1.269 1.27h1.85a2.484 2.484 0 0 1 2.312 1.541c.125.302.189.628.187.957v5.548zm.557 3.509a1.493 1.493 0 0 0 .191-1.89 1.552 1.552 0 0 0-.68-.559 1.49 1.49 0 0 0-.86-.08 1.493 1.493 0 0 0-1.179 1.18 1.49 1.49 0 0 0 .08.86 1.496 1.496 0 0 0 2.448.49z"></path></svg>'},7602:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.38893 12.9906L6.11891 11.7205L6.78893 11.0206L8.91893 13.1506V13.8505L6.78893 15.9805L6.07893 15.2706L7.34892 14.0006H5.49892C5.17024 14.0019 4.84458 13.9381 4.54067 13.8129C4.23675 13.6878 3.96061 13.5037 3.7282 13.2713C3.49579 13.0389 3.31171 12.7627 3.18654 12.4588C3.06137 12.1549 2.99759 11.8292 2.99892 11.5006V5.95052C2.5198 5.84851 2.07944 5.61279 1.72893 5.27059C1.3808 4.91884 1.14393 4.47238 1.0479 3.98689C0.951867 3.50141 1.00092 2.9984 1.18892 2.54061C1.37867 2.08436 1.69938 1.69458 2.11052 1.42049C2.52166 1.14639 3.00479 1.00024 3.49892 1.00057C3.84188 0.993194 4.18256 1.05787 4.49892 1.19051C4.80197 1.31518 5.07732 1.49871 5.30904 1.73042C5.54075 1.96214 5.72425 2.23755 5.84892 2.54061C5.98157 2.85696 6.0463 3.19765 6.03893 3.54061C6.03926 4.03474 5.89316 4.51789 5.61906 4.92903C5.34497 5.34017 4.95516 5.6608 4.49892 5.85054C4.35057 5.91224 4.19649 5.95915 4.03893 5.99056V11.4906C4.03893 11.8884 4.19695 12.2699 4.47826 12.5512C4.75956 12.8325 5.1411 12.9906 5.53893 12.9906H7.38893ZM2.70894 4.74056C2.95497 4.90376 3.24368 4.99072 3.53893 4.99056C3.81026 4.99066 4.07654 4.91718 4.3094 4.77791C4.54227 4.63864 4.73301 4.43877 4.86128 4.19966C4.98956 3.96056 5.05057 3.69116 5.03783 3.42012C5.02508 3.14908 4.93907 2.88661 4.78893 2.6606C4.62119 2.4121 4.38499 2.21751 4.10893 2.10054C3.83645 1.98955 3.53719 1.96176 3.24892 2.02059C2.95693 2.07705 2.68852 2.2196 2.47823 2.42989C2.26793 2.64018 2.12539 2.90853 2.06892 3.20052C2.0101 3.4888 2.03792 3.78802 2.14891 4.0605C2.26588 4.33656 2.46043 4.57282 2.70894 4.74056ZM13.0389 11.0406C13.5196 11.1384 13.9612 11.3747 14.309 11.7206C14.7766 12.191 15.039 12.8273 15.0389 13.4906C15.0393 13.9847 14.8932 14.4679 14.6191 14.879C14.345 15.2902 13.9552 15.6109 13.499 15.8007C13.0416 15.9915 12.5378 16.0421 12.0516 15.946C11.5654 15.85 11.1187 15.6117 10.7683 15.2612C10.4179 14.9108 10.1795 14.4641 10.0835 13.9779C9.98746 13.4917 10.0381 12.988 10.2289 12.5306C10.4218 12.0768 10.7412 11.688 11.1489 11.4106C11.4177 11.2286 11.7204 11.1028 12.0389 11.0406V5.4906C12.0389 5.09278 11.8809 4.71124 11.5996 4.42993C11.3183 4.14863 10.9368 3.9906 10.5389 3.9906H8.68896L9.95892 5.26062L9.24896 5.97058L7.11893 3.84058V3.14063L9.24896 1.01062L9.95892 1.72058L8.68896 2.9906H10.5389C10.8676 2.98928 11.1933 3.05305 11.4972 3.17822C11.8011 3.30339 12.0772 3.48744 12.3096 3.71985C12.542 3.95226 12.7262 4.22844 12.8513 4.53235C12.9765 4.83626 13.0403 5.16193 13.0389 5.4906V11.0406ZM12.6879 14.9829C13.0324 14.9483 13.3542 14.7956 13.5989 14.5507C13.8439 14.306 13.9966 13.984 14.0313 13.6395C14.0659 13.295 13.9803 12.9492 13.7889 12.6606C13.6212 12.4121 13.385 12.2176 13.1089 12.1006C12.8365 11.9896 12.5372 11.9618 12.249 12.0206C11.957 12.0771 11.6886 12.2196 11.4783 12.4299C11.268 12.6402 11.1254 12.9086 11.069 13.2006C11.0101 13.4888 11.0379 13.7881 11.1489 14.0605C11.2659 14.3366 11.4604 14.5729 11.7089 14.7406C11.9975 14.9319 12.3434 15.0175 12.6879 14.9829Z" fill="#C5C5C5"></path></svg>'},6307:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.61594 4.92769C5.34304 5.33899 4.95319 5.66062 4.49705 5.8497C4.34891 5.91013 4.03897 5.9881 4.03897 5.9881V10.9958C4.19686 11.027 4.35086 11.0738 4.499 11.1362C4.95513 11.3272 5.34304 11.6469 5.61789 12.0582C5.89079 12.4695 6.03699 12.9529 6.03699 13.4461C6.04478 13.7891 5.98046 14.1303 5.84791 14.446C5.72315 14.7482 5.53992 15.023 5.30796 15.255C5.07794 15.487 4.80114 15.6702 4.499 15.7949C4.18322 15.9275 3.84209 15.9918 3.49902 15.984C3.00585 15.986 2.52243 15.8398 2.11113 15.5649C1.69983 15.292 1.3782 14.9022 1.18912 14.446C1.00198 13.988 0.953253 13.485 1.04877 12.9997C1.14428 12.5143 1.38015 12.0679 1.72907 11.717C2.07799 11.374 2.51853 11.1381 2.99805 11.0367V5.94911C2.52048 5.8458 2.07994 5.61189 1.72907 5.26881C1.38015 4.91794 1.14428 4.47155 1.04877 3.98618C0.951304 3.50081 1.00004 2.99789 1.18912 2.53981C1.3782 2.08368 1.69983 1.69382 2.11113 1.42092C2.52048 1.14607 3.0039 0.999877 3.49902 0.999877C3.84014 0.99403 4.18127 1.05836 4.49705 1.18896C4.79919 1.31371 5.07404 1.49695 5.30601 1.72891C5.53797 1.96087 5.7212 2.23767 5.84596 2.53981C5.97851 2.8556 6.04284 3.19672 6.03504 3.5398C6.03699 4.03296 5.89079 4.51639 5.61594 4.92769ZM4.85962 12.7892C4.73097 12.5494 4.53994 12.3486 4.30797 12.2102C4.07601 12.0699 3.80896 11.9958 3.538 11.9997C3.24171 11.9997 2.95322 12.0855 2.70761 12.2492C2.46005 12.4168 2.26512 12.6527 2.14816 12.9295C2.03706 13.2024 2.00977 13.5006 2.06824 13.7891C2.12477 14.0796 2.26707 14.3486 2.47759 14.5591C2.68812 14.7696 2.95517 14.9119 3.24756 14.9685C3.53606 15.0269 3.8343 14.9996 4.1072 14.8885C4.38399 14.7716 4.61986 14.5766 4.7875 14.3291C4.93759 14.103 5.02336 13.8398 5.037 13.5689C5.0487 13.2979 4.98827 13.0289 4.85962 12.7892ZM2.70761 4.74056C2.95517 4.90235 3.24366 4.99006 3.538 4.99006C3.80896 4.99006 4.07601 4.91599 4.30797 4.77954C4.53994 4.63919 4.73097 4.44037 4.85962 4.2006C4.98827 3.96084 5.05065 3.69184 5.037 3.42089C5.02336 3.14994 4.93759 2.88679 4.7875 2.66067C4.61986 2.41311 4.38399 2.21818 4.1072 2.10122C3.8343 1.99011 3.53606 1.96282 3.24756 2.0213C2.95712 2.07783 2.68812 2.22013 2.47759 2.43065C2.26707 2.64118 2.12477 2.90823 2.06824 3.20062C2.00977 3.48911 2.03706 3.78735 2.14816 4.06025C2.26512 4.33705 2.46005 4.57292 2.70761 4.74056ZM13.0368 11.0368C13.5164 11.1342 13.9588 11.372 14.3058 11.7171C14.7717 12.1868 15.0348 12.8243 15.0309 13.4831C15.0329 13.9763 14.8867 14.4597 14.6119 14.871C14.339 15.2823 13.9491 15.6039 13.493 15.793C13.0368 15.984 12.532 16.0347 12.0466 15.9392C11.5612 15.8437 11.1148 15.6059 10.764 15.255C10.415 14.9041 10.1753 14.4578 10.0798 13.9724C9.98425 13.487 10.0349 12.9841 10.226 12.526C10.4189 12.0738 10.7386 11.6839 11.146 11.4071C11.4131 11.2239 11.7172 11.0991 12.0349 11.0368V7.4891H13.0368V11.0368ZM13.5943 14.5455C13.8399 14.3018 13.992 13.9802 14.0271 13.6352C14.0622 13.2921 13.9764 12.9451 13.7854 12.6566C13.6177 12.4091 13.3819 12.2141 13.1051 12.0972C12.8322 11.9861 12.5339 11.9588 12.2454 12.0173C11.955 12.0738 11.686 12.2161 11.4755 12.4266C11.2649 12.6371 11.1226 12.9042 11.0661 13.1966C11.0076 13.4851 11.0349 13.7833 11.146 14.0562C11.263 14.333 11.4579 14.5689 11.7055 14.7365C11.994 14.9275 12.339 15.0133 12.684 14.9782C13.0271 14.9431 13.3507 14.7911 13.5943 14.5455Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6876 3.40036L10 5.088L10.7071 5.7951L12.3947 4.10747L14.0824 5.7951L14.7895 5.088L13.1019 3.40036L14.7895 1.71272L14.0824 1.00562L12.3947 2.69325L10.7071 1.00562L10 1.71272L11.6876 3.40036Z"></path></svg>'},2225:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4.49705 5.8497C4.95319 5.66062 5.34304 5.33899 5.61594 4.92769C5.89079 4.51639 6.03699 4.03296 6.03504 3.5398C6.04284 3.19672 5.97851 2.8556 5.84596 2.53981C5.7212 2.23767 5.53797 1.96087 5.30601 1.72891C5.07404 1.49695 4.79919 1.31371 4.49705 1.18896C4.18127 1.05836 3.84014 0.99403 3.49902 0.999877C3.0039 0.999877 2.52048 1.14607 2.11113 1.42092C1.69983 1.69382 1.3782 2.08368 1.18912 2.53981C1.00004 2.99789 0.951304 3.50081 1.04877 3.98618C1.14428 4.47155 1.38015 4.91794 1.72907 5.26881C2.07994 5.61189 2.52048 5.8458 2.99805 5.94911V11.0367C2.51853 11.1381 2.07799 11.374 1.72907 11.717C1.38015 12.0679 1.14428 12.5143 1.04877 12.9997C0.953253 13.485 1.00198 13.988 1.18912 14.446C1.3782 14.9022 1.69983 15.292 2.11113 15.5649C2.52243 15.8398 3.00585 15.986 3.49902 15.984C3.84209 15.9918 4.18322 15.9275 4.499 15.7949C4.80114 15.6702 5.07794 15.487 5.30796 15.255C5.53992 15.023 5.72315 14.7482 5.84791 14.446C5.98046 14.1303 6.04478 13.7891 6.03699 13.4461C6.03699 12.9529 5.89079 12.4695 5.61789 12.0582C5.34304 11.6469 4.95513 11.3272 4.499 11.1362C4.35086 11.0738 4.19686 11.027 4.03897 10.9958V5.9881C4.03897 5.9881 4.34891 5.91013 4.49705 5.8497ZM4.30797 12.2102C4.53994 12.3486 4.73097 12.5494 4.85962 12.7892C4.98827 13.0289 5.0487 13.2979 5.037 13.5689C5.02336 13.8398 4.93759 14.103 4.7875 14.3291C4.61986 14.5766 4.38399 14.7716 4.1072 14.8885C3.8343 14.9996 3.53606 15.0269 3.24756 14.9685C2.95517 14.9119 2.68812 14.7696 2.47759 14.5591C2.26707 14.3486 2.12477 14.0796 2.06824 13.7891C2.00977 13.5006 2.03706 13.2024 2.14816 12.9295C2.26512 12.6527 2.46005 12.4168 2.70761 12.2492C2.95322 12.0855 3.24171 11.9997 3.538 11.9997C3.80896 11.9958 4.07601 12.0699 4.30797 12.2102ZM3.538 4.99006C3.24366 4.99006 2.95517 4.90235 2.70761 4.74056C2.46005 4.57292 2.26512 4.33705 2.14816 4.06025C2.03706 3.78735 2.00977 3.48911 2.06824 3.20062C2.12477 2.90823 2.26707 2.64118 2.47759 2.43065C2.68812 2.22013 2.95712 2.07783 3.24756 2.0213C3.53606 1.96282 3.8343 1.99011 4.1072 2.10122C4.38399 2.21818 4.61986 2.41311 4.7875 2.66067C4.93759 2.88679 5.02336 3.14994 5.037 3.42089C5.05065 3.69184 4.98827 3.96084 4.85962 4.2006C4.73097 4.44037 4.53994 4.63919 4.30797 4.77954C4.07601 4.91599 3.80896 4.99006 3.538 4.99006Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0543 13.5C15.0543 14.8807 13.935 16 12.5543 16C11.1736 16 10.0543 14.8807 10.0543 13.5C10.0543 12.1193 11.1736 11 12.5543 11C13.935 11 15.0543 12.1193 15.0543 13.5ZM12.5543 15C13.3827 15 14.0543 14.3284 14.0543 13.5C14.0543 12.6716 13.3827 12 12.5543 12C11.7258 12 11.0543 12.6716 11.0543 13.5C11.0543 14.3284 11.7258 15 12.5543 15Z"></path><circle cx="12.5543" cy="7.75073" r="1"></circle><circle cx="12.5543" cy="3.50146" r="1"></circle></svg>'},5140:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.14648 6.3065L6.16649 2.2865L6.87359 2.2865L10.8936 6.3065L10.1865 7.0136L6.97998 3.8071L6.97998 5.69005C6.97998 8.50321 7.58488 10.295 8.70856 11.3953C9.83407 12.4974 11.5857 13.0101 14.13 13.0101L14.48 13.0101L14.48 14.0101L14.13 14.0101C11.4843 14.0101 9.4109 13.4827 8.00891 12.1098C6.60509 10.7351 5.97998 8.61689 5.97998 5.69005L5.97998 3.88722L2.85359 7.01361L2.14648 6.3065Z" fill="#C5C5C5"></path></svg>'},4534:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7099 1.29L13.7099 4.29L13.9999 5V14L12.9999 15H3.99994L2.99994 14V2L3.99994 1H9.99994L10.7099 1.29ZM3.99994 14H12.9999V5L9.99994 2H3.99994V14ZM8 6H6V7H8V9H9V7H11V6H9V4H8V6ZM6 11H11V12H6V11Z"></path></svg>'},4962:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.54883 10.0781C8.00911 10.2604 8.42839 10.502 8.80664 10.8027C9.1849 11.1035 9.50846 11.4521 9.77734 11.8486C10.0462 12.2451 10.2536 12.6712 10.3994 13.127C10.5452 13.5827 10.6204 14.0612 10.625 14.5625V15H9.75V14.5625C9.75 14.0202 9.64746 13.5098 9.44238 13.0312C9.2373 12.5527 8.95475 12.1357 8.59473 11.7803C8.2347 11.4248 7.81771 11.1445 7.34375 10.9395C6.86979 10.7344 6.35938 10.6296 5.8125 10.625C5.27018 10.625 4.75977 10.7275 4.28125 10.9326C3.80273 11.1377 3.38574 11.4202 3.03027 11.7803C2.6748 12.1403 2.39453 12.5573 2.18945 13.0312C1.98438 13.5052 1.87956 14.0156 1.875 14.5625V15H1V14.5625C1 14.0658 1.07292 13.5872 1.21875 13.127C1.36458 12.6667 1.57422 12.2406 1.84766 11.8486C2.12109 11.4567 2.44466 11.1104 2.81836 10.8096C3.19206 10.5088 3.61133 10.265 4.07617 10.0781C3.87109 9.93685 3.68652 9.77279 3.52246 9.58594C3.3584 9.39909 3.2194 9.19857 3.10547 8.98438C2.99154 8.77018 2.90495 8.54232 2.8457 8.30078C2.78646 8.05924 2.75456 7.81315 2.75 7.5625C2.75 7.13867 2.82975 6.74219 2.98926 6.37305C3.14876 6.00391 3.36751 5.68034 3.64551 5.40234C3.9235 5.12435 4.24707 4.9056 4.61621 4.74609C4.98535 4.58659 5.38411 4.50456 5.8125 4.5C6.23633 4.5 6.63281 4.57975 7.00195 4.73926C7.37109 4.89876 7.69466 5.11751 7.97266 5.39551C8.25065 5.6735 8.4694 5.99707 8.62891 6.36621C8.78841 6.73535 8.87044 7.13411 8.875 7.5625C8.875 7.81315 8.84538 8.05697 8.78613 8.29395C8.72689 8.53092 8.63802 8.75879 8.51953 8.97754C8.40104 9.19629 8.26204 9.39909 8.10254 9.58594C7.94303 9.77279 7.75846 9.93685 7.54883 10.0781ZM5.8125 9.75C6.11328 9.75 6.39583 9.69303 6.66016 9.5791C6.92448 9.46517 7.15462 9.31022 7.35059 9.11426C7.54655 8.91829 7.70378 8.68587 7.82227 8.41699C7.94076 8.14811 8 7.86328 8 7.5625C8 7.26172 7.94303 6.97917 7.8291 6.71484C7.71517 6.45052 7.55794 6.22038 7.35742 6.02441C7.1569 5.82845 6.92448 5.67122 6.66016 5.55273C6.39583 5.43424 6.11328 5.375 5.8125 5.375C5.51172 5.375 5.22917 5.43197 4.96484 5.5459C4.70052 5.65983 4.4681 5.81706 4.26758 6.01758C4.06706 6.2181 3.90983 6.45052 3.7959 6.71484C3.68197 6.97917 3.625 7.26172 3.625 7.5625C3.625 7.86328 3.68197 8.14583 3.7959 8.41016C3.90983 8.67448 4.06478 8.9069 4.26074 9.10742C4.45671 9.30794 4.68913 9.46517 4.95801 9.5791C5.22689 9.69303 5.51172 9.75 5.8125 9.75ZM15 1V8H13.25L10.625 10.625V8H9.75V7.125H11.5V8.5127L12.8877 7.125H14.125V1.875H5.375V3.44727C5.22917 3.46549 5.08333 3.48828 4.9375 3.51562C4.79167 3.54297 4.64583 3.58398 4.5 3.63867V1H15Z" fill="#C5C5C5"></path></svg>'},4982:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.12 4.37333L8.58667 1.97333H7.41333L6.88 4.37333L6.18667 4.69333L4.21333 3.41333L3.30667 4.21333L4.58667 6.18667L4.42667 6.88L2.02667 7.41333V8.58667L4.42667 9.12L4.69333 9.92L3.41333 11.8933L4.21333 12.6933L6.18667 11.4133L6.98667 11.68L7.41333 13.9733H8.58667L9.12 11.5733L9.92 11.3067L11.8933 12.5867L12.6933 11.7867L11.4133 9.81333L11.68 9.01333L14.0267 8.58667V7.41333L11.6267 6.88L11.3067 6.08L12.5867 4.10667L11.7867 3.30667L9.81333 4.58667L9.12 4.37333ZM9.38667 1.01333L9.92 3.41333L12 2.08L14.0267 4.10667L12.5867 6.18667L14.9867 6.61333V9.38667L12.5867 9.92L14.0267 12L12 13.9733L9.92 12.5867L9.38667 14.9867H6.61333L6.08 12.5867L4 13.92L2.02667 11.8933L3.41333 9.81333L1.01333 9.38667V6.61333L3.41333 6.08L2.08 4L4.10667 1.97333L6.18667 3.41333L6.61333 1.01333H9.38667ZM10.0267 8C10.0267 8.53333 9.81333 8.99556 9.38667 9.38667C8.99556 9.77778 8.53333 9.97333 8 9.97333C7.46667 9.97333 7.00444 9.77778 6.61333 9.38667C6.22222 8.99556 6.02667 8.53333 6.02667 8C6.02667 7.46667 6.22222 7.00444 6.61333 6.61333C7.00444 6.18667 7.46667 5.97333 8 5.97333C8.53333 5.97333 8.99556 6.18667 9.38667 6.61333C9.81333 7.00444 10.0267 7.46667 10.0267 8ZM8 9.01333C8.28444 9.01333 8.51556 8.92444 8.69333 8.74667C8.90667 8.53333 9.01333 8.28444 9.01333 8C9.01333 7.71556 8.90667 7.48444 8.69333 7.30667C8.51556 7.09333 8.28444 6.98667 8 6.98667C7.71556 6.98667 7.46667 7.09333 7.25333 7.30667C7.07556 7.48444 6.98667 7.71556 6.98667 8C6.98667 8.28444 7.07556 8.53333 7.25333 8.74667C7.46667 8.92444 7.71556 9.01333 8 9.01333Z" fill="#CCCCCC"></path></svg>'},6781:D=>{D.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.28 7.78a.75.75 0 00-1.06-1.06l-9.5 9.5a.75.75 0 101.06 1.06l9.5-9.5z"></path><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg>'},6105:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M5.39804 10.8069C5.57428 10.9312 5.78476 10.9977 6.00043 10.9973C6.21633 10.9975 6.42686 10.93 6.60243 10.8043C6.77993 10.6739 6.91464 10.4936 6.98943 10.2863L7.43643 8.91335C7.55086 8.56906 7.74391 8.25615 8.00028 7.99943C8.25665 7.74272 8.56929 7.54924 8.91343 7.43435L10.3044 6.98335C10.4564 6.92899 10.5936 6.84019 10.7055 6.7239C10.8174 6.60762 10.9008 6.467 10.9492 6.31308C10.9977 6.15916 11.0098 5.99611 10.9847 5.83672C10.9596 5.67732 10.8979 5.52591 10.8044 5.39435C10.6703 5.20842 10.4794 5.07118 10.2604 5.00335L8.88543 4.55635C8.54091 4.44212 8.22777 4.24915 7.97087 3.99277C7.71396 3.73638 7.52035 3.42363 7.40543 3.07935L6.95343 1.69135C6.88113 1.48904 6.74761 1.31428 6.57143 1.19135C6.43877 1.09762 6.28607 1.03614 6.12548 1.01179C5.96489 0.987448 5.80083 1.00091 5.64636 1.05111C5.49188 1.1013 5.35125 1.18685 5.23564 1.30095C5.12004 1.41505 5.03265 1.55454 4.98043 1.70835L4.52343 3.10835C4.40884 3.44317 4.21967 3.74758 3.97022 3.9986C3.72076 4.24962 3.41753 4.44067 3.08343 4.55735L1.69243 5.00535C1.54065 5.05974 1.40352 5.14852 1.29177 5.26474C1.18001 5.38095 1.09666 5.52145 1.04824 5.67523C0.999819 5.82902 0.987639 5.99192 1.01265 6.1512C1.03767 6.31048 1.0992 6.46181 1.19243 6.59335C1.32027 6.7728 1.50105 6.90777 1.70943 6.97935L3.08343 7.42435C3.52354 7.57083 3.90999 7.84518 4.19343 8.21235C4.35585 8.42298 4.4813 8.65968 4.56443 8.91235L5.01643 10.3033C5.08846 10.5066 5.22179 10.6826 5.39804 10.8069ZM5.48343 3.39235L6.01043 2.01535L6.44943 3.39235C6.61312 3.8855 6.88991 4.33351 7.25767 4.70058C7.62544 5.06765 8.07397 5.34359 8.56743 5.50635L9.97343 6.03535L8.59143 6.48335C8.09866 6.64764 7.65095 6.92451 7.28382 7.29198C6.9167 7.65945 6.64026 8.10742 6.47643 8.60035L5.95343 9.97835L5.50443 8.59935C5.34335 8.10608 5.06943 7.65718 4.70443 7.28835C4.3356 6.92031 3.88653 6.64272 3.39243 6.47735L2.01443 5.95535L3.40043 5.50535C3.88672 5.33672 4.32775 5.05855 4.68943 4.69235C5.04901 4.32464 5.32049 3.88016 5.48343 3.39235ZM11.5353 14.8494C11.6713 14.9456 11.8337 14.9973 12.0003 14.9974C12.1654 14.9974 12.3264 14.9464 12.4613 14.8514C12.6008 14.7529 12.7058 14.6129 12.7613 14.4514L13.0093 13.6894C13.0625 13.5309 13.1515 13.3869 13.2693 13.2684C13.3867 13.1498 13.5307 13.0611 13.6893 13.0094L14.4613 12.7574C14.619 12.7029 14.7557 12.6004 14.8523 12.4644C14.9257 12.3614 14.9736 12.2424 14.9921 12.1173C15.0106 11.9922 14.9992 11.8645 14.9588 11.7447C14.9184 11.6249 14.8501 11.5163 14.7597 11.428C14.6692 11.3396 14.5591 11.2739 14.4383 11.2364L13.6743 10.9874C13.5162 10.9348 13.3724 10.8462 13.2544 10.7285C13.1364 10.6109 13.0473 10.4674 12.9943 10.3094L12.7423 9.53638C12.6886 9.37853 12.586 9.24191 12.4493 9.14638C12.3473 9.07343 12.2295 9.02549 12.1056 9.00642C11.9816 8.98736 11.8549 8.99772 11.7357 9.03665C11.6164 9.07558 11.508 9.142 11.4192 9.23054C11.3304 9.31909 11.2636 9.42727 11.2243 9.54638L10.9773 10.3084C10.925 10.466 10.8375 10.6097 10.7213 10.7284C10.6066 10.8449 10.4667 10.9335 10.3123 10.9874L9.53931 11.2394C9.38025 11.2933 9.2422 11.3959 9.1447 11.5326C9.04721 11.6694 8.99522 11.8333 8.99611 12.0013C8.99699 12.1692 9.0507 12.3326 9.14963 12.4683C9.24856 12.604 9.38769 12.7051 9.54731 12.7574L10.3103 13.0044C10.4692 13.0578 10.6136 13.1471 10.7323 13.2654C10.8505 13.3836 10.939 13.5283 10.9903 13.6874L11.2433 14.4614C11.2981 14.6178 11.4001 14.7534 11.5353 14.8494ZM10.6223 12.0564L10.4433 11.9974L10.6273 11.9334C10.9291 11.8284 11.2027 11.6556 11.4273 11.4284C11.6537 11.1994 11.8248 10.9216 11.9273 10.6164L11.9853 10.4384L12.0443 10.6194C12.1463 10.9261 12.3185 11.2047 12.5471 11.4332C12.7757 11.6617 13.0545 11.8336 13.3613 11.9354L13.5563 11.9984L13.3763 12.0574C13.0689 12.1596 12.7898 12.3322 12.5611 12.5616C12.3324 12.791 12.1606 13.0707 12.0593 13.3784L12.0003 13.5594L11.9423 13.3784C11.8409 13.0702 11.6687 12.7901 11.4394 12.5605C11.2102 12.3309 10.9303 12.1583 10.6223 12.0564Z"></path></svg>'},6898:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 1.99976L14 2.99976V12.9998L13 13.9998H3L2 12.9998L2 2.99976L3 1.99976H13ZM12.7461 3.25057L3.25469 3.25057L3.25469 12.7504H12.7461V3.25057Z"></path></svg>'},7580:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.006 8.267L.78 9.5 0 8.73l2.09-2.07.76.01 2.09 2.12-.76.76-1.167-1.18a5 5 0 0 0 9.4 1.983l.813.597a6 6 0 0 1-11.22-2.683zm10.99-.466L11.76 6.55l-.76.76 2.09 2.11.76.01 2.09-2.07-.75-.76-1.194 1.18a6 6 0 0 0-11.11-2.92l.81.594a5 5 0 0 1 9.3 2.346z"></path></svg>'}},Fo={};function he(D){var T=Fo[D];if(T!==void 0)return T.exports;var X=Fo[D]={id:D,exports:{}};return sl[D].call(X.exports,X,X.exports,he),X.exports}l(he,"__webpack_require__"),(()=>{he.n=D=>{var T=D&&D.__esModule?()=>D.default:()=>D;return he.d(T,{a:T}),T}})(),(()=>{he.d=(D,T)=>{for(var X in T)he.o(T,X)&&!he.o(D,X)&&Object.defineProperty(D,X,{enumerable:!0,get:T[X]})}})(),(()=>{he.o=(D,T)=>Object.prototype.hasOwnProperty.call(D,T)})(),(()=>{he.nc=void 0})();var lc={};(()=>{"use strict";var D=he(3379),T=he.n(D),X=he(9149),ee={};ee.insert="head",ee.singleton=!1;var ne=T()(X.Z,ee);const I=X.Z.locals||{};var g=he(7238),h={};h.insert="head",h.singleton=!1;var H=T()(g.Z,h);const V=g.Z.locals||{};var U=he(296),s=he(7294),oe=he(3935),re;(function(o){o[o.Committed=0]="Committed",o[o.Mentioned=1]="Mentioned",o[o.Subscribed=2]="Subscribed",o[o.Commented=3]="Commented",o[o.Reviewed=4]="Reviewed",o[o.NewCommitsSinceReview=5]="NewCommitsSinceReview",o[o.Labeled=6]="Labeled",o[o.Milestoned=7]="Milestoned",o[o.Assigned=8]="Assigned",o[o.HeadRefDeleted=9]="HeadRefDeleted",o[o.Merged=10]="Merged",o[o.Other=11]="Other"})(re||(re={}));var Re=Object.defineProperty,Me=l((o,a,f)=>(typeof a!="symbol"&&(a+=""),a in o?Re(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f),"__publicField");const $=acquireVsCodeApi();class Y{constructor(a){Me(this,"_commandHandler"),Me(this,"lastSentReq"),Me(this,"pendingReplies"),this._commandHandler=a,this.lastSentReq=0,this.pendingReplies=Object.create(null),window.addEventListener("message",this.handleMessage.bind(this))}registerCommandHandler(a){this._commandHandler=a}async postMessage(a){const f=String(++this.lastSentReq);return new Promise((c,m)=>{this.pendingReplies[f]={resolve:c,reject:m},a=Object.assign(a,{req:f}),$.postMessage(a)})}handleMessage(a){const f=a.data;if(f.seq){const c=this.pendingReplies[f.seq];if(c){f.err?c.reject(f.err):c.resolve(f.res);return}}this._commandHandler&&this._commandHandler(f.res)}}l(Y,"MessageHandler");function me(o){return new Y(o)}l(me,"getMessageHandler");function S(){return $.getState()}l(S,"getState");function E(o){const a=S();a&&a.number&&a.number===o.number&&(o.pendingCommentText=a.pendingCommentText),o&&$.setState(o)}l(E,"setState");function _(o){const a=$.getState();$.setState(Object.assign(a,o))}l(_,"updateState");var W=Object.defineProperty,O=l((o,a,f)=>(typeof a!="symbol"&&(a+=""),a in o?W(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f),"context_publicField");const z=l(class{constructor(o=S(),a=null,f=null){this.pr=o,this.onchange=a,this._handler=f,O(this,"setTitle",async c=>{const m=await this.postMessage({command:"pr.edit-title",args:{text:c}});this.updatePR({titleHTML:m.titleHTML})}),O(this,"setDescription",c=>this.postMessage({command:"pr.edit-description",args:{text:c}})),O(this,"checkout",()=>this.postMessage({command:"pr.checkout"})),O(this,"copyPrLink",()=>this.postMessage({command:"pr.copy-prlink"})),O(this,"copyVscodeDevLink",()=>this.postMessage({command:"pr.copy-vscodedevlink"})),O(this,"exitReviewMode",async()=>{if(!!this.pr)return this.postMessage({command:"pr.checkout-default-branch",args:this.pr.repositoryDefaultBranch})}),O(this,"gotoChangesSinceReview",()=>this.postMessage({command:"pr.gotoChangesSinceReview"})),O(this,"refresh",()=>this.postMessage({command:"pr.refresh"})),O(this,"checkMergeability",()=>this.postMessage({command:"pr.checkMergeability"})),O(this,"changeEmail",async c=>{const m=await this.postMessage({command:"pr.change-email",args:c});this.updatePR({emailForCommit:m})}),O(this,"merge",c=>this.postMessage({command:"pr.merge",args:c})),O(this,"openOnGitHub",()=>this.postMessage({command:"pr.openOnGitHub"})),O(this,"deleteBranch",()=>this.postMessage({command:"pr.deleteBranch"})),O(this,"readyForReview",()=>this.postMessage({command:"pr.readyForReview"})),O(this,"addReviewers",()=>this.postMessage({command:"pr.change-reviewers"})),O(this,"changeProjects",()=>this.postMessage({command:"pr.change-projects"})),O(this,"removeProject",c=>this.postMessage({command:"pr.remove-project",args:c})),O(this,"addMilestone",()=>this.postMessage({command:"pr.add-milestone"})),O(this,"removeMilestone",()=>this.postMessage({command:"pr.remove-milestone"})),O(this,"addAssignees",()=>this.postMessage({command:"pr.change-assignees"})),O(this,"addAssigneeYourself",()=>this.postMessage({command:"pr.add-assignee-yourself"})),O(this,"addLabels",()=>this.postMessage({command:"pr.add-labels"})),O(this,"create",()=>this.postMessage({command:"pr.open-create"})),O(this,"deleteComment",async c=>{await this.postMessage({command:"pr.delete-comment",args:c});const{pr:m}=this,{id:v,pullRequestReviewId:C}=c;if(!C){this.updatePR({events:m.events.filter(q=>q.id!==v)});return}const P=m.events.findIndex(q=>q.id===C);if(P===-1){console.error("Could not find review:",C);return}const N=m.events[P];if(!N.comments){console.error("No comments to delete for review:",C,N);return}this.pr.events.splice(P,1,{...N,comments:N.comments.filter(q=>q.id!==v)}),this.updatePR(this.pr)}),O(this,"editComment",c=>this.postMessage({command:"pr.edit-comment",args:c})),O(this,"updateDraft",(c,m)=>{const C=S().pendingCommentDrafts||Object.create(null);m!==C[c]&&(C[c]=m,this.updatePR({pendingCommentDrafts:C}))}),O(this,"requestChanges",async c=>this.appendReview(await this.postMessage({command:"pr.request-changes",args:c}))),O(this,"approve",async c=>this.appendReview(await this.postMessage({command:"pr.approve",args:c}))),O(this,"submit",async c=>this.appendReview(await this.postMessage({command:"pr.submit",args:c}))),O(this,"close",async c=>{try{const v=(await this.postMessage({command:"pr.close",args:c})).value;v.event=re.Commented,this.updatePR({events:[...this.pr.events,v],pendingCommentText:""})}catch(m){}}),O(this,"removeLabel",async c=>{await this.postMessage({command:"pr.remove-label",args:c});const m=this.pr.labels.filter(v=>v.name!==c);this.updatePR({labels:m})}),O(this,"applyPatch",async c=>{this.postMessage({command:"pr.apply-patch",args:{comment:c}})}),O(this,"reRequestReview",async c=>{const{reviewers:m}=await this.postMessage({command:"pr.re-request-review",args:c}),v=this.pr;v.reviewers=m,this.updatePR(v)}),O(this,"updateBranch",async()=>this.postMessage({command:"pr.update-branch"})),O(this,"dequeue",async()=>{const c=await this.postMessage({command:"pr.dequeue"}),m=this.pr;c&&(m.mergeQueueEntry=void 0),this.updatePR(m)}),O(this,"enqueue",async()=>{const c=await this.postMessage({command:"pr.enqueue"}),m=this.pr;c.mergeQueueEntry&&(m.mergeQueueEntry=c.mergeQueueEntry),this.updatePR(m)}),O(this,"openDiff",c=>this.postMessage({command:"pr.open-diff",args:{comment:c}})),O(this,"toggleResolveComment",(c,m,v)=>{this.postMessage({command:"pr.resolve-comment-thread",args:{threadId:c,toResolve:v,thread:m}}).then(C=>{C?this.updatePR({events:C}):this.refresh()})}),O(this,"setPR",c=>(this.pr=c,E(this.pr),this.onchange&&this.onchange(this.pr),this)),O(this,"updatePR",c=>(_(c),this.pr={...this.pr,...c},this.onchange&&this.onchange(this.pr),this)),O(this,"handleMessage",c=>{switch(c.command){case"pr.initialize":return this.setPR(c.pullrequest);case"update-state":return this.updatePR({state:c.state});case"pr.update-checkout-status":return this.updatePR({isCurrentlyCheckedOut:c.isCurrentlyCheckedOut});case"pr.deleteBranch":const m={};return c.branchTypes&&c.branchTypes.map(C=>{C==="local"?m.isLocalHeadDeleted=!0:(C==="remote"||C==="upstream")&&(m.isRemoteHeadDeleted=!0)}),this.updatePR(m);case"pr.enable-exit":return this.updatePR({isCurrentlyCheckedOut:!0});case"set-scroll":window.scrollTo(c.scrollPosition.x,c.scrollPosition.y);return;case"pr.scrollToPendingReview":const v=document.getElementById("pending-review");v&&v.scrollIntoView();return;case"pr.submitting-review":return this.updatePR({busy:!0,lastReviewType:c.lastReviewType});case"pr.append-review":return this.appendReview(c)}}),f||(this._handler=me(this.handleMessage))}appendReview({review:o,reviewers:a}){const f=this.pr;if(f.busy=!1,!o||!a){this.updatePR(f);return}f.events.filter(m=>m.event!==re.Reviewed||m.state.toLowerCase()!=="pending").forEach(m=>{m.event===re.Reviewed&&m.comments.forEach(v=>v.isDraft=!1)}),f.reviewers=a,f.events=[...f.events.filter(m=>m.event===re.Reviewed?m.state!=="PENDING":m),o],f.currentUserReviewState=o.state,f.pendingCommentText="",f.pendingReviewType=void 0,this.updatePR(f)}async updateAutoMerge({autoMerge:o,autoMergeMethod:a}){const f=await this.postMessage({command:"pr.update-automerge",args:{autoMerge:o,autoMergeMethod:a}}),c=this.pr;c.autoMerge=f.autoMerge,c.autoMergeMethod=f.autoMergeMethod,this.updatePR(c)}postMessage(o){var a,f;return(f=(a=this._handler)==null?void 0:a.postMessage(o))!=null?f:Promise.resolve(void 0)}},"_PRContext");let M=z;O(M,"instance",new z);const j=(0,s.createContext)(M.instance);var Z;(function(o){o[o.Query=0]="Query",o[o.All=1]="All",o[o.LocalPullRequest=2]="LocalPullRequest"})(Z||(Z={}));var ue;(function(o){o.Approve="APPROVE",o.RequestChanges="REQUEST_CHANGES",o.Comment="COMMENT"})(ue||(ue={}));var ie;(function(o){o[o.Open=0]="Open",o[o.Merged=1]="Merged",o[o.Closed=2]="Closed"})(ie||(ie={}));var se;(function(o){o[o.Mergeable=0]="Mergeable",o[o.NotMergeable=1]="NotMergeable",o[o.Conflict=2]="Conflict",o[o.Unknown=3]="Unknown",o[o.Behind=4]="Behind"})(se||(se={}));var pe;(function(o){o[o.AwaitingChecks=0]="AwaitingChecks",o[o.Locked=1]="Locked",o[o.Mergeable=2]="Mergeable",o[o.Queued=3]="Queued",o[o.Unmergeable=4]="Unmergeable"})(pe||(pe={}));function _e(o){return ze(o)?o.id:o.login}l(_e,"reviewerId");function Oe(o){var a;return ze(o)?(a=o.name)!=null?a:o.slug:o.login}l(Oe,"reviewerLabel");function ze(o){return"org"in o}l(ze,"isTeam");function je(o){return"isAuthor"in o&&"isCommenter"in o}l(je,"isSuggestedReviewer");var Te;(function(o){o.Success="success",o.Failure="failure",o.Neutral="neutral",o.Pending="pending",o.Unknown="unknown"})(Te||(Te={}));var qe;(function(o){o.Comment="comment",o.Approve="approve",o.RequestChanges="requestChanges"})(qe||(qe={}));function rt(o){var a,f;const c=(a=o.submittedAt)!=null?a:o.createdAt,m=c&&Date.now()-new Date(c).getTime()<1e3*60,v=(f=o.state)!=null?f:o.event===re.Commented?"COMMENTED":void 0;let C="";if(m)switch(v){case"APPROVED":C="Pull request approved";break;case"CHANGES_REQUESTED":C="Changes requested on pull request";break;case"COMMENTED":C="Commented on pull request";break}return C}l(rt,"ariaAnnouncementForReview");var Ie=he(7187);const F=new Ie.EventEmitter;function G(o){const[a,f]=(0,s.useState)(o);return(0,s.useEffect)(()=>{a!==o&&f(o)},[o]),[a,f]}l(G,"useStateProp");const Q=l(({className:o="",src:a,title:f})=>s.createElement("span",{className:`icon ${o}`,title:f,dangerouslySetInnerHTML:{__html:a}}),"Icon"),y=null,R=s.createElement(Q,{src:he(1828)}),de=s.createElement(Q,{src:he(8060)}),we=s.createElement(Q,{src:he(6781)}),ye=s.createElement(Q,{src:he(3274)}),Ae=s.createElement(Q,{src:he(7943)}),ot=s.createElement(Q,{src:he(2651)}),Ce=s.createElement(Q,{src:he(832)}),Ne=s.createElement(Q,{src:he(2776)}),dt=s.createElement(Q,{src:he(3879)}),Rn=s.createElement(Q,{src:he(6589)}),Et=s.createElement(Q,{src:he(1144)}),Vr=s.createElement(Q,{src:he(6307)}),al=s.createElement(Q,{src:he(5143)}),st=s.createElement(Q,{src:he(2225)}),cr=s.createElement(Q,{src:he(4364)}),dn=s.createElement(Q,{src:he(3476)}),Pt=s.createElement(Q,{src:he(1343)}),zr=s.createElement(Q,{src:he(4534)}),zt=s.createElement(Q,{src:he(4982)}),Rt=s.createElement(Q,{src:he(4933)}),Vo=s.createElement(Q,{src:he(7580)}),Vs=s.createElement(Q,{src:he(7602)}),zo=s.createElement(Q,{src:he(5140)}),$r=s.createElement(Q,{src:he(5720)}),$o=s.createElement(Q,{src:he(6305)}),jo=s.createElement(Q,{src:he(4962)}),ul=s.createElement(Q,{src:he(1608)}),cl=s.createElement(Q,{src:he(1922)}),dl=s.createElement(Q,{src:he(9553)}),dr=s.createElement(Q,{src:he(6105)}),zs=s.createElement(Q,{src:he(6898)}),Ot=l(({optionsContext:o,defaultOptionLabel:a,defaultOptionValue:f,defaultAction:c,optionsTitle:m,disabled:v,hasSingleAction:C})=>{const[P,N]=(0,s.useState)(!1),q=l(te=>{te.target instanceof HTMLElement&&te.target.classList.contains("split-right")||N(!1)},"onHideAction");return(0,s.useEffect)(()=>{const te=l(ce=>q(ce),"onClickOrKey");P?(document.addEventListener("click",te),document.addEventListener("keydown",te)):(document.removeEventListener("click",te),document.removeEventListener("keydown",te))},[P,N]),s.createElement("div",{className:"primary-split-button"},s.createElement("button",{className:"split-left",disabled:v,onClick:c,value:f(),title:a()},a()),s.createElement("div",{className:"split"}),C?null:s.createElement("button",{className:"split-right",title:m,disabled:v,"aria-expanded":P,onClick:te=>{te.preventDefault();const ce=te.target.getBoundingClientRect(),xe=ce.left,Je=ce.bottom;te.target.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,clientX:xe,clientY:Je})),te.stopPropagation()},onMouseDown:()=>N(!0),onKeyDown:te=>{(te.key==="Enter"||te.key===" ")&&N(!0)},"data-vscode-context":o()},Ae))},"contextDropdown_ContextDropdown"),it=String.fromCharCode(160),$t=l(({children:o})=>{const a=s.Children.count(o);return s.createElement(s.Fragment,{children:s.Children.map(o,(f,c)=>typeof f=="string"?`${c>0?it:""}${f}${c<a-1&&typeof o[c+1]!="string"?it:""}`:f)})},"Spaced");var fl=he(6470),ml=he(7484),en=he.n(ml),Bo=he(4110),jr=he.n(Bo),Uo=he(660),Wo=he.n(Uo),Br=Object.defineProperty,Be=l((o,a,f)=>(typeof a!="symbol"&&(a+=""),a in o?Br(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f),"utils_publicField");en().extend(jr(),{thresholds:[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:6,d:"day"},{l:"w",r:7},{l:"ww",r:3,d:"week"},{l:"M",r:4},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}]}),en().extend(Wo()),en().updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}});function Zo(o,a){const f=Object.create(null);return o.filter(c=>{const m=a(c);return f[m]?!1:(f[m]=!0,!0)})}l(Zo,"uniqBy");function pl(o){return o.forEach(a=>a.dispose()),[]}l(pl,"dispose");function Ur(o){return{dispose:o}}l(Ur,"toDisposable");function fn(o){return Ur(()=>pl(o))}l(fn,"combinedDisposable");function qo(...o){return(a,f=null,c)=>{const m=fn(o.map(v=>v(C=>a.call(f,C))));return c&&c.push(m),m}}l(qo,"anyEvent");function hl(o,a){return(f,c=null,m)=>o(v=>a(v)&&f.call(c,v),null,m)}l(hl,"filterEvent");function vl(o){return(a,f=null,c)=>{const m=o(v=>(m.dispose(),a.call(f,v)),null,c);return m}}l(vl,"onceEvent");function Qo(o){return/^[a-zA-Z]:\\/.test(o)}l(Qo,"isWindowsPath");function gl(o,a){return o===a?!0:(o.charAt(o.length-1)!==sep&&(o+=sep),Qo(o)&&(o=o.toLowerCase(),a=a.toLowerCase()),a.startsWith(o))}l(gl,"isDescendant");function Wr(o,a){return o.reduce((f,c)=>{const m=a(c);return f[m]=[...f[m]||[],c],f},Object.create(null))}l(Wr,"groupBy");class fr extends Error{constructor(a){super(`Unreachable case: ${a}`)}}l(fr,"UnreachableCaseError");function mr(o){return!!o.errors}l(mr,"isHookError");function Ko(o){let a=!0;if(!!o.errors&&Array.isArray(o.errors)){for(const f of o.errors)if(!f.field||!f.value||!f.code){a=!1;break}}else a=!1;return a}l(Ko,"hasFieldErrors");function pr(o){if(!(o instanceof Error))return typeof o=="string"?o:o.gitErrorCode?`${o.message}. Please check git output for more details`:o.stderr?`${o.stderr}. Please check git output for more details`:"Error";let a=o.message,f;if(o.message==="Validation Failed"&&Ko(o))f=o.errors.map(c=>`Value "${c.value}" cannot be set for field ${c.field} (code: ${c.code})`).join(", ");else{if(o.message.startsWith("Validation Failed:"))return o.message;if(mr(o)&&o.errors)return o.errors.map(c=>typeof c=="string"?c:c.message).join(", ")}return f&&(a=`${a}: ${f}`),a}l(pr,"formatError");async function Zr(o){return new Promise(a=>{const f=o(c=>{f.dispose(),a(c)})})}l(Zr,"asPromise");async function On(o,a){return Promise.race([o,new Promise(f=>{setTimeout(()=>f(void 0),a)})])}l(On,"promiseWithTimeout");function hr(o){const a=en()(o),f=Date.now();return a.diff(f,"month"),a.diff(f,"month")<1?a.fromNow():a.diff(f,"year")<1?`on ${a.format("MMM D")}`:`on ${a.format("MMM D, YYYY")}`}l(hr,"dateFromNow");function vr(o,a,f=!1){o.startsWith("#")&&(o=o.substring(1));const c=qr(o);if(a){const m=Yo(c.r,c.g,c.b),v=.6,C=.18,P=.3,N=(c.r*.2126+c.g*.7152+c.b*.0722)/255,q=Math.max(0,Math.min((N-v)*-1e3,1)),te=(v-N)*100*q,ce=qr(Qr(m.h,m.s,m.l+te)),xe=`#${Qr(m.h,m.s,m.l+te)}`,Je=f?`#${Dn({...c,a:C})}`:`rgba(${c.r},${c.g},${c.b},${C})`,Ke=f?`#${Dn({...ce,a:P})}`:`rgba(${ce.r},${ce.g},${ce.b},${P})`;return{textColor:xe,backgroundColor:Je,borderColor:Ke}}else return{textColor:`#${Xo(c)}`,backgroundColor:`#${o}`,borderColor:`#${o}`}}l(vr,"utils_gitHubLabelColor");const Dn=l(o=>{const a=[o.r,o.g,o.b];return o.a&&a.push(Math.floor(o.a*255)),a.map(f=>f.toString(16).padStart(2,"0")).join("")},"rgbToHex");function qr(o){const a=/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:{r:0,g:0,b:0}}l(qr,"hexToRgb");function Yo(o,a,f){o/=255,a/=255,f/=255;let c=Math.min(o,a,f),m=Math.max(o,a,f),v=m-c,C=0,P=0,N=0;return v==0?C=0:m==o?C=(a-f)/v%6:m==a?C=(f-o)/v+2:C=(o-a)/v+4,C=Math.round(C*60),C<0&&(C+=360),N=(m+c)/2,P=v==0?0:v/(1-Math.abs(2*N-1)),P=+(P*100).toFixed(1),N=+(N*100).toFixed(1),{h:C,s:P,l:N}}l(Yo,"rgbToHsl");function Qr(o,a,f){const c=f/100,m=a*Math.min(c,1-c)/100,v=l(C=>{const P=(C+o/30)%12,N=c-m*Math.max(Math.min(P-3,9-P,1),-1);return Math.round(255*N).toString(16).padStart(2,"0")},"f");return`${v(0)}${v(8)}${v(4)}`}l(Qr,"hslToHex");function Xo(o){return(.299*o.r+.587*o.g+.114*o.b)/255>.5?"000000":"ffffff"}l(Xo,"contrastColor");var mn;(function(o){o[o.Period=46]="Period",o[o.Slash=47]="Slash",o[o.A=65]="A",o[o.Z=90]="Z",o[o.Backslash=92]="Backslash",o[o.a=97]="a",o[o.z=122]="z"})(mn||(mn={}));function Kr(o,a){return o<a?-1:o>a?1:0}l(Kr,"compare");function In(o,a,f=0,c=o.length,m=0,v=a.length){for(;f<c&&m<v;f++,m++){const N=o.charCodeAt(f),q=a.charCodeAt(m);if(N<q)return-1;if(N>q)return 1}const C=c-f,P=v-m;return C<P?-1:C>P?1:0}l(In,"compareSubstring");function jt(o,a){return gr(o,a,0,o.length,0,a.length)}l(jt,"compareIgnoreCase");function gr(o,a,f=0,c=o.length,m=0,v=a.length){for(;f<c&&m<v;f++,m++){let N=o.charCodeAt(f),q=a.charCodeAt(m);if(N===q)continue;const te=N-q;if(!(te===32&&Go(q))&&!(te===-32&&Go(N)))return Yr(N)&&Yr(q)?te:In(o.toLowerCase(),a.toLowerCase(),f,c,m,v)}const C=c-f,P=v-m;return C<P?-1:C>P?1:0}l(gr,"compareSubstringIgnoreCase");function Yr(o){return o>=97&&o<=122}l(Yr,"isLowerAsciiLetter");function Go(o){return o>=65&&o<=90}l(Go,"isUpperAsciiLetter");class Xr{constructor(){Be(this,"_value",""),Be(this,"_pos",0)}reset(a){return this._value=a,this._pos=0,this}next(){return this._pos+=1,this}hasNext(){return this._pos<this._value.length-1}cmp(a){const f=a.charCodeAt(0),c=this._value.charCodeAt(this._pos);return f-c}value(){return this._value[this._pos]}}l(Xr,"StringIterator");class tn{constructor(a=!0){this._caseSensitive=a,Be(this,"_value"),Be(this,"_from"),Be(this,"_to")}reset(a){return this._value=a,this._from=0,this._to=0,this.next()}hasNext(){return this._to<this._value.length}next(){this._from=this._to;let a=!0;for(;this._to<this._value.length;this._to++)if(this._value.charCodeAt(this._to)===46)if(a)this._from++;else break;else a=!1;return this}cmp(a){return this._caseSensitive?In(a,this._value,0,a.length,this._from,this._to):gr(a,this._value,0,a.length,this._from,this._to)}value(){return this._value.substring(this._from,this._to)}}l(tn,"ConfigKeysIterator");class An{constructor(a=!0,f=!0){this._splitOnBackslash=a,this._caseSensitive=f,Be(this,"_value"),Be(this,"_from"),Be(this,"_to")}reset(a){return this._value=a.replace(/\\$|\/$/,""),this._from=0,this._to=0,this.next()}hasNext(){return this._to<this._value.length}next(){this._from=this._to;let a=!0;for(;this._to<this._value.length;this._to++){const f=this._value.charCodeAt(this._to);if(f===47||this._splitOnBackslash&&f===92)if(a)this._from++;else break;else a=!1}return this}cmp(a){return this._caseSensitive?In(a,this._value,0,a.length,this._from,this._to):gr(a,this._value,0,a.length,this._from,this._to)}value(){return this._value.substring(this._from,this._to)}}l(An,"PathIterator");var pn;(function(o){o[o.Scheme=1]="Scheme",o[o.Authority=2]="Authority",o[o.Path=3]="Path",o[o.Query=4]="Query",o[o.Fragment=5]="Fragment"})(pn||(pn={}));class Jo{constructor(a){this._ignorePathCasing=a,Be(this,"_pathIterator"),Be(this,"_value"),Be(this,"_states",[]),Be(this,"_stateIdx",0)}reset(a){return this._value=a,this._states=[],this._value.scheme&&this._states.push(1),this._value.authority&&this._states.push(2),this._value.path&&(this._pathIterator=new An(!1,!this._ignorePathCasing(a)),this._pathIterator.reset(a.path),this._pathIterator.value()&&this._states.push(3)),this._value.query&&this._states.push(4),this._value.fragment&&this._states.push(5),this._stateIdx=0,this}next(){return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()?this._pathIterator.next():this._stateIdx+=1,this}hasNext(){return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()||this._stateIdx<this._states.length-1}cmp(a){if(this._states[this._stateIdx]===1)return jt(a,this._value.scheme);if(this._states[this._stateIdx]===2)return jt(a,this._value.authority);if(this._states[this._stateIdx]===3)return this._pathIterator.cmp(a);if(this._states[this._stateIdx]===4)return Kr(a,this._value.query);if(this._states[this._stateIdx]===5)return Kr(a,this._value.fragment);throw new Error}value(){if(this._states[this._stateIdx]===1)return this._value.scheme;if(this._states[this._stateIdx]===2)return this._value.authority;if(this._states[this._stateIdx]===3)return this._pathIterator.value();if(this._states[this._stateIdx]===4)return this._value.query;if(this._states[this._stateIdx]===5)return this._value.fragment;throw new Error}}l(Jo,"UriIterator");function Gr(o){const f=o.extensionUri.path,c=f.lastIndexOf(".");return c===-1?!1:f.substr(c+1).length>1}l(Gr,"isPreRelease");class nn{constructor(){Be(this,"segment"),Be(this,"value"),Be(this,"key"),Be(this,"left"),Be(this,"mid"),Be(this,"right")}isEmpty(){return!this.left&&!this.mid&&!this.right&&!this.value}}l(nn,"TernarySearchTreeNode");class rn{constructor(a){Be(this,"_iter"),Be(this,"_root"),this._iter=a}static forUris(a=()=>!1){return new rn(new Jo(a))}static forPaths(){return new rn(new An)}static forStrings(){return new rn(new Xr)}static forConfigKeys(){return new rn(new tn)}clear(){this._root=void 0}set(a,f){const c=this._iter.reset(a);let m;for(this._root||(this._root=new nn,this._root.segment=c.value()),m=this._root;;){const C=c.cmp(m.segment);if(C>0)m.left||(m.left=new nn,m.left.segment=c.value()),m=m.left;else if(C<0)m.right||(m.right=new nn,m.right.segment=c.value()),m=m.right;else if(c.hasNext())c.next(),m.mid||(m.mid=new nn,m.mid.segment=c.value()),m=m.mid;else break}const v=m.value;return m.value=f,m.key=a,v}get(a){var f;return(f=this._getNode(a))==null?void 0:f.value}_getNode(a){const f=this._iter.reset(a);let c=this._root;for(;c;){const m=f.cmp(c.segment);if(m>0)c=c.left;else if(m<0)c=c.right;else if(f.hasNext())f.next(),c=c.mid;else break}return c}has(a){const f=this._getNode(a);return!((f==null?void 0:f.value)===void 0&&(f==null?void 0:f.mid)===void 0)}delete(a){return this._delete(a,!1)}deleteSuperstr(a){return this._delete(a,!0)}_delete(a,f){const c=this._iter.reset(a),m=[];let v=this._root;for(;v;){const C=c.cmp(v.segment);if(C>0)m.push([1,v]),v=v.left;else if(C<0)m.push([-1,v]),v=v.right;else if(c.hasNext())c.next(),m.push([0,v]),v=v.mid;else{for(f?(v.left=void 0,v.mid=void 0,v.right=void 0):v.value=void 0;m.length>0&&v.isEmpty();){let[P,N]=m.pop();switch(P){case 1:N.left=void 0;break;case 0:N.mid=void 0;break;case-1:N.right=void 0;break}v=N}break}}}findSubstr(a){const f=this._iter.reset(a);let c=this._root,m;for(;c;){const v=f.cmp(c.segment);if(v>0)c=c.left;else if(v<0)c=c.right;else if(f.hasNext())f.next(),m=c.value||m,c=c.mid;else break}return c&&c.value||m}findSuperstr(a){const f=this._iter.reset(a);let c=this._root;for(;c;){const m=f.cmp(c.segment);if(m>0)c=c.left;else if(m<0)c=c.right;else if(f.hasNext())f.next(),c=c.mid;else return c.mid?this._entries(c.mid):void 0}}forEach(a){for(const[f,c]of this)a(c,f)}*[Symbol.iterator](){yield*this._entries(this._root)}*_entries(a){a&&(yield*this._entries(a.left),a.value&&(yield[a.key,a.value]),yield*this._entries(a.mid),yield*this._entries(a.right))}}l(rn,"TernarySearchTree");async function Jr(o,a,f){const c=[];o.replace(a,(C,...P)=>{const N=f(C,...P);return c.push(N),""});const m=await Promise.all(c);let v=0;return o.replace(a,()=>m[v++])}l(Jr,"stringReplaceAsync");const Hn=l(({date:o,href:a})=>{const f=typeof o=="string"?new Date(o).toLocaleString():o.toLocaleString();return a?s.createElement("a",{href:a,className:"timestamp",title:f},hr(o)):s.createElement("div",{className:"timestamp",title:f},hr(o))},"Timestamp"),yl=null,eo=l(({for:o})=>s.createElement(s.Fragment,null,o.avatarUrl?s.createElement("img",{className:"avatar",src:o.avatarUrl,alt:"",role:"presentation"}):s.createElement(Q,{className:"avatar-icon",src:he(2190)})),"InnerAvatar"),kt=l(({for:o,link:a=!0})=>a?s.createElement("a",{className:"avatar-link",href:o.url,title:o.url},s.createElement(eo,{for:o})):s.createElement(eo,{for:o}),"Avatar"),Bt=l(({for:o,text:a=Oe(o)})=>s.createElement("a",{className:"author-link",href:o.url,title:o.url},a),"AuthorLink"),to=l(({authorAssociation:o},a=f=>`(${f.toLowerCase()})`)=>o.toLowerCase()==="user"?a("you"):o&&o!=="NONE"?a(o):null,"association");function Fn(o){const{isPRDescription:a,children:f,comment:c,headerInEditMode:m}=o,{bodyHTML:v,body:C}=c,P="id"in c?c.id:-1,N="canEdit"in c?c.canEdit:!1,q="canDelete"in c?c.canDelete:!1,te=c.pullRequestReviewId,[ce,xe]=G(C),[Je,Ke]=G(v),{deleteComment:He,editComment:Ee,setDescription:Le,pr:Ye}=(0,s.useContext)(j),Ve=Ye.pendingCommentDrafts&&Ye.pendingCommentDrafts[P],[_t,mt]=(0,s.useState)(!!Ve),[ln,Cn]=(0,s.useState)(!1);if(_t)return s.cloneElement(m?s.createElement(Dt,{for:c}):s.createElement(s.Fragment,null),{},[s.createElement(Wt,{id:P,key:`editComment${P}`,body:Ve||ce,onCancel:()=>{Ye.pendingCommentDrafts&&delete Ye.pendingCommentDrafts[P],mt(!1)},onSave:async Ue=>{try{const et=a?await Le(Ue):await Ee({comment:c,text:Ue});Ke(et.bodyHTML),xe(Ue)}finally{mt(!1)}}})]);const Lt=c.event===re.Commented||c.event===re.Reviewed?rt(c):void 0;return s.createElement(Dt,{for:c,onMouseEnter:()=>Cn(!0),onMouseLeave:()=>Cn(!1),onFocus:()=>Cn(!0)},Lt?s.createElement("div",{role:"alert","aria-label":Lt}):null,s.createElement("div",{className:"action-bar comment-actions",style:{display:ln?"flex":"none"}},s.createElement("button",{title:"Quote reply",className:"icon-button",onClick:()=>F.emit("quoteReply",ce)},ot),N?s.createElement("button",{title:"Edit comment",className:"icon-button",onClick:()=>mt(!0)},cr):null,q?s.createElement("button",{title:"Delete comment",className:"icon-button",onClick:()=>He({id:P,pullRequestReviewId:te})},dt):null),s.createElement(zn,{comment:c,bodyHTML:Je,body:ce,canApplyPatch:Ye.isCurrentlyCheckedOut,allowEmpty:!!o.allowEmpty}),f)}l(Fn,"CommentView");function Vn(o){return o.authorAssociation!==void 0}l(Vn,"isReviewEvent");const bt={PENDING:"will review",COMMENTED:"reviewed",CHANGES_REQUESTED:"requested changes",APPROVED:"approved"},Ut=l(o=>bt[o]||"reviewed","reviewDescriptor");function Dt({for:o,onFocus:a,onMouseEnter:f,onMouseLeave:c,children:m}){var v;const C="htmlUrl"in o?o.htmlUrl:o.url,P=(v=o.isDraft)!=null?v:Vn(o)&&o.state.toLocaleUpperCase()==="PENDING",N="user"in o?o.user:o.author,q="createdAt"in o?o.createdAt:o.submittedAt;return s.createElement("div",{className:"comment-container comment review-comment",onFocus:a,onMouseEnter:f,onMouseLeave:c},s.createElement("div",{className:"review-comment-container"},s.createElement("h3",{className:"review-comment-header"},s.createElement($t,null,s.createElement(kt,{for:N}),s.createElement(Bt,{for:N}),Vn(o)?to(o):null,q?s.createElement(s.Fragment,null,Vn(o)?Ut(o.state):"commented",it,s.createElement(Hn,{href:C,date:q})):s.createElement("em",null,"pending"),P?s.createElement(s.Fragment,null,s.createElement("span",{className:"pending-label"},"Pending")):null)),m))}l(Dt,"CommentBox");function Wt({id:o,body:a,onCancel:f,onSave:c}){const{updateDraft:m}=(0,s.useContext)(j),v=(0,s.useRef)({body:a,dirty:!1}),C=(0,s.useRef)();(0,s.useEffect)(()=>{const ce=setInterval(()=>{v.current.dirty&&(m(o,v.current.body),v.current.dirty=!1)},500);return()=>clearInterval(ce)},[v]);const P=(0,s.useCallback)(async()=>{const{markdown:ce,submitButton:xe}=C.current;xe.disabled=!0;try{await c(ce.value)}finally{xe.disabled=!1}},[C,c]),N=(0,s.useCallback)(ce=>{ce.preventDefault(),P()},[P]),q=(0,s.useCallback)(ce=>{(ce.metaKey||ce.ctrlKey)&&ce.key==="Enter"&&(ce.preventDefault(),P())},[P]),te=(0,s.useCallback)(ce=>{v.current.body=ce.target.value,v.current.dirty=!0},[v]);return s.createElement("form",{ref:C,onSubmit:N},s.createElement("textarea",{name:"markdown",defaultValue:a,onKeyDown:q,onInput:te}),s.createElement("div",{className:"form-actions"},s.createElement("button",{className:"secondary",onClick:f},"Cancel"),s.createElement("button",{type:"submit",name:"submitButton"},"Save")))}l(Wt,"EditComment");const zn=l(({comment:o,bodyHTML:a,body:f,canApplyPatch:c,allowEmpty:m})=>{var v,C;if(!f&&!a)return m?null:s.createElement("div",{className:"comment-body"},s.createElement("em",null,"No description provided."));const{applyPatch:P}=(0,s.useContext)(j),N=s.createElement("div",{dangerouslySetInnerHTML:{__html:a!=null?a:""}}),te=((C=(v=f||a)==null?void 0:v.indexOf("```diff"))!=null?C:-1)>-1&&c&&o?s.createElement("button",{onClick:()=>P(o)},"Apply Patch"):s.createElement(s.Fragment,null);return s.createElement("div",{className:"comment-body"},N,te)},"CommentBody");function $n({pendingCommentText:o,state:a,hasWritePermission:f,isIssue:c,isAuthor:m,isDraft:v,continueOnGitHub:C,currentUserReviewState:P,lastReviewType:N,busy:q}){const{updatePR:te,requestChanges:ce,approve:xe,close:Je,openOnGitHub:Ke,submit:He}=(0,s.useContext)(j),[Ee,Le]=(0,s.useState)(!1),Ye=(0,s.useRef)(),Ve=(0,s.useRef)();F.addListener("quoteReply",Ue=>{var et,Yn;const $l=Ue.replace(/\n\n/g,`

> `);te({pendingCommentText:`> ${$l} 

`}),(et=Ve.current)==null||et.scrollIntoView(),(Yn=Ve.current)==null||Yn.focus()});const _t=(0,s.useCallback)(Ue=>{var et,Yn;(Ue.metaKey||Ue.ctrlKey)&&Ue.key==="Enter"&&He((Yn=(et=Ve.current)==null?void 0:et.value)!=null?Yn:"")},[He]),mt=l(Ue=>{Ue.preventDefault();const{value:et}=Ve.current;Je(et)},"closeButton");let ln=N!=null?N:P==="APPROVED"?"approve":P==="CHANGES_REQUESTED"?"requestChanges":"comment";async function Cn(){const{value:Ue}=Ve.current;if(C&&ln!==qe.Comment){await Ke();return}switch(Le(!0),ln){case qe.RequestChanges:await ce(Ue);break;case qe.Approve:await xe(Ue);break;default:await He(Ue)}Le(!1)}l(Cn,"submitAction");const Lt=m||v?{comment:"Comment"}:C?{comment:"Comment",approve:"Approve on github.com",requestChanges:"Request changes on github.com"}:Zt;return s.createElement("form",{id:"comment-form",ref:Ye,className:"comment-form main-comment-form",onSubmit:()=>{var Ue,et;return He((et=(Ue=Ve.current)==null?void 0:Ue.value)!=null?et:"")}},s.createElement("textarea",{id:"comment-textarea",name:"body",ref:Ve,onInput:({target:Ue})=>te({pendingCommentText:Ue.value}),onKeyDown:_t,value:o,placeholder:"Leave a comment"}),s.createElement("div",{className:"form-actions"},(f||m)&&!c?s.createElement("button",{id:"close",className:"secondary",disabled:Ee||a!==ie.Open,onClick:mt,"data-command":"close"},"Close Pull Request"):null,s.createElement(Ot,{optionsContext:()=>yr(Lt,o),defaultAction:Cn,defaultOptionLabel:()=>Lt[ln],defaultOptionValue:()=>ln,optionsTitle:"Submit pull request review",disabled:Ee||q,hasSingleAction:Object.keys(Lt).length===1})))}l($n,"AddComment");const Zt={comment:"Comment",approve:"Approve",requestChanges:"Request Changes"},yr=l((o,a)=>{const f={preventDefaultContextMenuItems:!0,"github:reviewCommentMenu":!0};return o.approve&&(o.approve===Zt.approve?f["github:reviewCommentApprove"]=!0:f["github:reviewCommentApproveOnDotCom"]=!0),o.comment&&(f["github:reviewCommentComment"]=!0),o.requestChanges&&(o.requestChanges===Zt.requestChanges?f["github:reviewCommentRequestChanges"]=!0:f["github:reviewCommentRequestChangesOnDotCom"]=!0),f.body=a!=null?a:"",JSON.stringify(f)},"makeCommentMenuContext"),$s=l(o=>{var a,f;const{updatePR:c,requestChanges:m,approve:v,submit:C,openOnGitHub:P}=useContext(PullRequestContext),[N,q]=useState(!1),te=useRef();let ce=(a=o.lastReviewType)!=null?a:o.currentUserReviewState==="APPROVED"?"approve":o.currentUserReviewState==="CHANGES_REQUESTED"?"requestChanges":"comment";async function xe(){const{value:Ee}=te.current;if(o.continueOnGitHub&&ce!==ReviewType.Comment){await P();return}switch(q(!0),ce){case ReviewType.RequestChanges:await m(Ee);break;case ReviewType.Approve:await v(Ee);break;default:await C(Ee)}q(!1)}l(xe,"submitAction");const Je=l(Ee=>{c({pendingCommentText:Ee.target.value})},"onChangeTextarea"),Ke=useCallback(Ee=>{(Ee.metaKey||Ee.ctrlKey)&&Ee.key==="Enter"&&(Ee.preventDefault(),xe())},[xe]),He=o.isAuthor||o.isDraft?{comment:"Comment"}:o.continueOnGitHub?{comment:"Comment",approve:"Approve on github.com",requestChanges:"Request changes on github.com"}:Zt;return React.createElement("span",{className:"comment-form"},React.createElement("textarea",{id:"comment-textarea",name:"body",placeholder:"Leave a comment",ref:te,value:(f=o.pendingCommentText)!=null?f:"",onChange:Je,onKeyDown:Ke,disabled:N||o.busy}),React.createElement("div",{className:"comment-button"},React.createElement(ContextDropdown,{optionsContext:()=>yr(He,o.pendingCommentText),defaultAction:xe,defaultOptionLabel:()=>He[ce],defaultOptionValue:()=>ce,optionsTitle:"Submit pull request review",disabled:N||o.busy,hasSingleAction:Object.keys(He).length===1})))},"AddCommentSimple");function wl({canEdit:o,state:a,head:f,base:c,title:m,titleHTML:v,number:C,url:P,author:N,isCurrentlyCheckedOut:q,isDraft:te,isIssue:ce,repositoryDefaultBranch:xe}){const[Je,Ke]=G(m),[He,Ee]=(0,s.useState)(!1);return s.createElement(s.Fragment,null,s.createElement(no,{title:Je,titleHTML:v,number:C,url:P,inEditMode:He,setEditMode:Ee,setCurrentTitle:Ke}),s.createElement(jn,{state:a,head:f,base:c,author:N,isIssue:ce,isDraft:te}),s.createElement(ei,{isCurrentlyCheckedOut:q,isIssue:ce,canEdit:o,repositoryDefaultBranch:xe,setEditMode:Ee}))}l(wl,"Header");function no({title:o,titleHTML:a,number:f,url:c,inEditMode:m,setEditMode:v,setCurrentTitle:C}){const{setTitle:P}=(0,s.useContext)(j);return m?s.createElement("form",{className:"editing-form title-editing-form",onSubmit:async ce=>{ce.preventDefault();try{const xe=ce.target[0].value;await P(xe),C(xe)}finally{v(!1)}}},s.createElement("input",{type:"text",style:{width:"100%"},defaultValue:o}),s.createElement("div",{className:"form-actions"},s.createElement("button",{type:"button",className:"secondary",onClick:()=>v(!1)},"Cancel"),s.createElement("button",{type:"submit"},"Update"))):s.createElement("div",{className:"overview-title"},s.createElement("h2",null,s.createElement("span",{dangerouslySetInnerHTML:{__html:a}})," ",s.createElement("a",{href:c,title:c},"#",f)))}l(no,"Title");function ei({isCurrentlyCheckedOut:o,canEdit:a,isIssue:f,repositoryDefaultBranch:c,setEditMode:m}){const{refresh:v,copyPrLink:C,copyVscodeDevLink:P}=(0,s.useContext)(j);return s.createElement("div",{className:"button-group"},s.createElement(Cl,{isCurrentlyCheckedOut:o,isIssue:f,repositoryDefaultBranch:c}),s.createElement("button",{title:"Refresh with the latest data from GitHub",onClick:v,className:"secondary small-button"},"Refresh"),a&&s.createElement(s.Fragment,null,s.createElement("button",{title:"Rename",onClick:m,className:"secondary small-button"},"Rename"),s.createElement("button",{title:"Copy GitHub pull request link",onClick:C,className:"secondary small-button"},"Copy Link"),s.createElement("button",{title:"Copy vscode.dev link for viewing this pull request in VS Code for the Web",onClick:P,className:"secondary small-button"},"Copy vscode.dev Link")))}l(ei,"ButtonGroup");function jn({state:o,isDraft:a,isIssue:f,author:c,base:m,head:v}){const{text:C,color:P,icon:N}=xl(o,a);return s.createElement("div",{className:"subtitle"},s.createElement("div",{id:"status",className:`status-badge-${P}`},s.createElement("span",{className:"icon"},f?null:N),s.createElement("span",null,C)),s.createElement("div",{className:"author"},f?null:s.createElement(kt,{for:c}),f?null:s.createElement("div",{className:"merge-branches"},s.createElement(Bt,{for:c})," ",wr(o)," into"," ",s.createElement("code",{className:"branch-tag"},m)," from ",s.createElement("code",{className:"branch-tag"},v))))}l(jn,"Subtitle");const Cl=l(({isCurrentlyCheckedOut:o,isIssue:a,repositoryDefaultBranch:f})=>{const{exitReviewMode:c,checkout:m}=(0,s.useContext)(j),[v,C]=(0,s.useState)(!1),P=l(async N=>{try{switch(C(!0),N){case"checkout":await m();break;case"exitReviewMode":await c();break;default:throw new Error(`Can't find action ${N}`)}}finally{C(!1)}},"onClick");return o?s.createElement(s.Fragment,null,s.createElement("button",{"aria-live":"polite",className:"checkedOut small-button",disabled:!0},de,it," Checked Out"),s.createElement("button",{"aria-live":"polite",title:"Switch to a different branch than this pull request branch",disabled:v,className:"small-button",onClick:()=>P("exitReviewMode")},"Checkout '",f,"'")):a?null:s.createElement("button",{"aria-live":"polite",title:"Checkout a local copy of this pull request branch to verify or edit changes",disabled:v,className:"small-button",onClick:()=>P("checkout")},"Checkout")},"CheckoutButtons");function xl(o,a){return o===ie.Merged?{text:"Merged",color:"merged",icon:Rn}:o===ie.Open?a?{text:"Draft",color:"draft",icon:st}:{text:"Open",color:"open",icon:al}:{text:"Closed",color:"closed",icon:Vr}}l(xl,"getStatus");function wr(o){return o===ie.Merged?"merged changes":"wants to merge changes"}l(wr,"getActionText");function ro(o){const{reviewer:a,state:f}=o.reviewState,{reRequestReview:c}=(0,s.useContext)(j),m=o.event?rt(o.event):void 0;return s.createElement("div",{className:"section-item reviewer"},s.createElement("div",{className:"avatar-with-author"},s.createElement(kt,{for:a}),s.createElement(Bt,{for:a})),s.createElement("div",{className:"reviewer-icons"},f!=="REQUESTED"?s.createElement("button",{className:"icon-button",title:"Re-request review",onClick:()=>c(o.reviewState.reviewer.id)},Vo,"\uFE0F"):null,El[f],m?s.createElement("div",{role:"alert","aria-label":m}):null))}l(ro,"Reviewer");const El={REQUESTED:(0,s.cloneElement)(Pt,{className:"section-icon requested",title:"Awaiting requested review"}),COMMENTED:(0,s.cloneElement)(ot,{className:"section-icon commented",Root:"div",title:"Left review comments"}),APPROVED:(0,s.cloneElement)(de,{className:"section-icon approved",title:"Approved these changes"}),CHANGES_REQUESTED:(0,s.cloneElement)(zr,{className:"section-icon changes",title:"Requested changes"})},Bn=l(({busy:o,baseHasMergeQueue:a})=>o?s.createElement("label",{htmlFor:"automerge-checkbox",className:"automerge-checkbox-label"},"Setting..."):s.createElement("label",{htmlFor:"automerge-checkbox",className:"automerge-checkbox-label"},a?"Merge when ready":"Auto-merge"),"AutoMergeLabel"),ti=l(({updateState:o,baseHasMergeQueue:a,allowAutoMerge:f,defaultMergeMethod:c,mergeMethodsAvailability:m,autoMerge:v,isDraft:C})=>{if(!f&&!v||!m||!c)return null;const P=s.useRef(),[N,q]=s.useState(!1),te=l(()=>{var ce,xe;return(xe=(ce=P.current)==null?void 0:ce.value)!=null?xe:"merge"},"selectedMethod");return s.createElement("div",{className:"automerge-section"},s.createElement("div",{className:"automerge-checkbox-wrapper"},s.createElement("input",{id:"automerge-checkbox",type:"checkbox",name:"automerge",checked:v,disabled:!f||C||N,onChange:async()=>{q(!0),await o({autoMerge:!v,autoMergeMethod:te()}),q(!1)}})),s.createElement(Bn,{busy:N,baseHasMergeQueue:a}),a?null:s.createElement("div",{className:"merge-select-container"},s.createElement(kr,{ref:P,defaultMergeMethod:c,mergeMethodsAvailability:m,onChange:async()=>{q(!0),await o({autoMergeMethod:te()}),q(!1)},disabled:N})))},"AutoMerge"),ni=l(({mergeQueueEntry:o})=>{const a=s.useContext(j);let f,c;switch(o.state){case pe.Mergeable:case pe.AwaitingChecks:case pe.Queued:{c=s.createElement("span",{className:"merge-queue-pending"},"Queued to merge..."),o.position===1?f=s.createElement("span",null,"This pull request is at the head of the ",s.createElement("a",{href:o.url},"merge queue"),"."):f=s.createElement("span",null,"This pull request is in the ",s.createElement("a",{href:o.url},"merge queue"),".");break}case pe.Locked:{c=s.createElement("span",{className:"merge-queue-blocked"},"Merging is blocked"),f=s.createElement("span",null,"The base branch does not allow updates");break}case pe.Unmergeable:{c=s.createElement("span",{className:"merge-queue-blocked"},"Merging is blocked"),f=s.createElement("span",null,"There are conflicts with the base branch.");break}}return s.createElement("div",{className:"merge-queue-container"},s.createElement("div",{className:"merge-queue"},s.createElement("div",{className:"merge-queue-icon"}),s.createElement("div",{className:"merge-queue-title"},c),f),s.createElement("div",{className:"button-container"},s.createElement("button",{onClick:a.dequeue},"Remove from queue")))},"QueuedToMerge");var Un,oo=new Uint8Array(16);function kl(){if(!Un&&(Un=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Un))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Un(oo)}l(kl,"rng");const io=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ri(o){return typeof o=="string"&&io.test(o)}l(ri,"validate");const lo=ri;for(var Xe=[],so=0;so<256;++so)Xe.push((so+256).toString(16).substr(1));function Cr(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,f=(Xe[o[a+0]]+Xe[o[a+1]]+Xe[o[a+2]]+Xe[o[a+3]]+"-"+Xe[o[a+4]]+Xe[o[a+5]]+"-"+Xe[o[a+6]]+Xe[o[a+7]]+"-"+Xe[o[a+8]]+Xe[o[a+9]]+"-"+Xe[o[a+10]]+Xe[o[a+11]]+Xe[o[a+12]]+Xe[o[a+13]]+Xe[o[a+14]]+Xe[o[a+15]]).toLowerCase();if(!lo(f))throw TypeError("Stringified UUID is invalid");return f}l(Cr,"stringify");const Fe=Cr;function Wn(o,a,f){o=o||{};var c=o.random||(o.rng||kl)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,a){f=f||0;for(var m=0;m<16;++m)a[f+m]=c[m];return a}return Fe(c)}l(Wn,"v4");const bl=Wn;var oi;(function(o){o[o.esc=27]="esc",o[o.down=40]="down",o[o.up=38]="up"})(oi||(oi={}));const xr=l(({options:o,defaultOption:a,disabled:f,submitAction:c,changeAction:m})=>{const[v,C]=(0,s.useState)(a),[P,N]=(0,s.useState)(!1),q=bl(),te=`expandOptions${q}`,ce=l(()=>{N(!P)},"onClick"),xe=l(He=>{C(He.target.value),N(!1);const Ee=document.getElementById(`confirm-button${q}`);Ee==null||Ee.focus(),m&&m(He.target.value)},"onMethodChange"),Je=l(He=>{if(P){const Ee=document.activeElement;switch(He.keyCode){case 27:N(!1);const Le=document.getElementById(te);Le==null||Le.focus();break;case 40:if(!(Ee==null?void 0:Ee.id)||Ee.id===te){const Ye=document.getElementById(`${q}option0`);Ye==null||Ye.focus()}else{const Ye=new RegExp(`${q}option([0-9])`),Ve=Ee.id.match(Ye);if(Ve==null?void 0:Ve.length){const _t=parseInt(Ve[1]);if(_t<Object.entries(o).length-1){const mt=document.getElementById(`${q}option${_t+1}`);mt==null||mt.focus()}}}break;case 38:if(!(Ee==null?void 0:Ee.id)||Ee.id===te){const Ye=Object.entries(o).length-1,Ve=document.getElementById(`${q}option${Ye}`);Ve==null||Ve.focus()}else{const Ye=new RegExp(`${q}option([0-9])`),Ve=Ee.id.match(Ye);if(Ve==null?void 0:Ve.length){const _t=parseInt(Ve[1]);if(_t>0){const mt=document.getElementById(`${q}option${_t-1}`);mt==null||mt.focus()}}}break}}},"onKeyDown"),Ke=Object.entries(o).length===1?"hidden":P?"open":"";return s.createElement("div",{className:"select-container",onKeyDown:Je},s.createElement("div",{className:"select-control"},s.createElement(ao,{dropdownId:q,className:Object.keys(o).length>1?"select-left":"",options:o,selected:v,submitAction:c,disabled:!!f}),s.createElement("div",{className:"split"}),s.createElement("button",{id:te,className:"select-right "+Ke,"aria-label":"Expand button options",onClick:ce},ye)),s.createElement("div",{className:P?"options-select":"hidden"},Object.entries(o).map(([He,Ee],Le)=>s.createElement("button",{id:`${q}option${Le}`,key:He,value:He,onClick:xe},Ee))))},"Dropdown");function ao({dropdownId:o,className:a,options:f,selected:c,disabled:m,submitAction:v}){const[C,P]=(0,s.useState)(!1),N=l(async q=>{q.preventDefault();try{P(!0),await v(c)}finally{P(!1)}},"onSubmit");return s.createElement("form",{onSubmit:N},s.createElement("input",{disabled:C||m,type:"submit",className:a,id:`confirm-button${o}`,value:f[c]}))}l(ao,"Confirm");const Zn=l(({pr:o,isSimple:a})=>o.state===ie.Merged?s.createElement("div",{className:"branch-status-message"},s.createElement("div",{className:"branch-status-icon"},a?Rn:null)," ","Pull request successfully merged."):o.state===ie.Closed?s.createElement("div",{className:"branch-status-message"},"This pull request is closed."):null,"PRStatusMessage"),_l=l(({pr:o})=>o.state===ie.Open?null:s.createElement(mo,{...o}),"DeleteOption"),ii=l(({pr:o})=>{var a;const{state:f,status:c}=o,[m,v]=(0,s.useReducer)(C=>!C,(a=c==null?void 0:c.statuses.some(C=>C.state===Te.Failure))!=null?a:!1);return(0,s.useEffect)(()=>{var C;((C=c==null?void 0:c.statuses.some(P=>P.state===Te.Failure))!=null?C:!1)?m||v():m&&v()},c==null?void 0:c.statuses),f===ie.Open&&(c==null?void 0:c.statuses.length)?s.createElement(s.Fragment,null,s.createElement("div",{className:"status-section"},s.createElement("div",{className:"status-item"},s.createElement(br,{state:c.state}),s.createElement("p",{className:"status-item-detail-text"},fi(c.statuses)),s.createElement("button",{id:"status-checks-display-button",className:"secondary small-button",onClick:v},m?"Hide":"Show")),m?s.createElement(ho,{statuses:c.statuses}):null)):null},"StatusChecks"),li=l(({pr:o})=>{const{state:a,reviewRequirement:f}=o;return!f||a!==ie.Open?null:s.createElement(s.Fragment,null,s.createElement("div",{className:"status-section"},s.createElement("div",{className:"status-item"},s.createElement(vo,{state:f.state}),s.createElement("p",{className:"status-item-detail-text"},Ml(f)))))},"RequiredReviewers"),Ll=l(({pr:o,isSimple:a})=>{if(!a||o.state!==ie.Open||o.reviewers.length===0)return null;const f=[],c=new Set(o.reviewers);let m=o.events.length-1;for(;m>=0&&c.size>0;){const v=o.events[m];if(v.event===re.Reviewed){for(const C of c)if(v.user.id===C.reviewer.id){f.push({event:v,reviewState:C}),c.delete(C);break}}m--}return s.createElement("div",{className:"section"}," ",f.map(v=>s.createElement(ro,{key:_e(v.reviewState.reviewer),...v})))},"InlineReviewers"),uo=l(({pr:o,isSimple:a})=>o.isIssue?null:s.createElement("div",{id:"status-checks"},s.createElement(s.Fragment,null,s.createElement(Zn,{pr:o,isSimple:a}),s.createElement(li,{pr:o}),s.createElement(ii,{pr:o}),s.createElement(Ll,{pr:o,isSimple:a}),s.createElement(co,{pr:o,isSimple:a}),s.createElement(_l,{pr:o}))),"StatusChecksSection"),co=l(({pr:o,isSimple:a})=>{const{create:f,checkMergeability:c}=(0,s.useContext)(j);if(a&&o.state!==ie.Open){const P="Create New Pull Request...";return s.createElement("div",{className:"branch-status-container"},s.createElement("form",null,s.createElement("button",{type:"submit",onClick:f},P)))}else if(o.state!==ie.Open)return null;const{mergeable:m}=o,[v,C]=(0,s.useState)(m);return m!==v&&m!==se.Unknown&&C(m),(0,s.useEffect)(()=>{const P=setInterval(async()=>{if(v===se.Unknown){const N=await c();C(N)}},3e3);return()=>clearInterval(P)},[v]),s.createElement("div",null,s.createElement(It,{mergeable:v,isSimple:a,isCurrentlyCheckedOut:o.isCurrentlyCheckedOut,canUpdateBranch:o.canUpdateBranch}),s.createElement(Er,{mergeable:v,isSimple:a,isCurrentlyCheckedOut:o.isCurrentlyCheckedOut,canUpdateBranch:o.canUpdateBranch}),s.createElement(ai,{pr:{...o,mergeable:v},isSimple:a}))},"MergeStatusAndActions"),Tl=null,It=l(({mergeable:o,isSimple:a,isCurrentlyCheckedOut:f,canUpdateBranch:c})=>{const{updateBranch:m}=(0,s.useContext)(j),[v,C]=(0,s.useState)(!1),P=l(()=>{C(!0),m().finally(()=>C(!1))},"onClick");let N=Pt,q="Checking if this branch can be merged...",te=null;return o===se.Mergeable?(N=de,q="This branch has no conflicts with the base branch."):o===se.Conflict?(N=Rt,q="This branch has conflicts that must be resolved.",te="Resolve conflicts"):o===se.NotMergeable?(N=Rt,q="Branch protection policy must be fulfilled before merging."):o===se.Behind&&(N=Rt,q="This branch is out-of-date with the base branch.",te="Update with merge commit"),a&&(N=null),s.createElement("div",{className:"status-item status-section"},N,s.createElement("p",null,q),te&&!a&&c&&f?s.createElement("button",{className:"secondary",onClick:P,disabled:v},te):null)},"MergeStatus"),Er=l(({mergeable:o,isSimple:a,isCurrentlyCheckedOut:f,canUpdateBranch:c})=>{const{updateBranch:m}=(0,s.useContext)(j),[v,C]=(0,s.useState)(!1),P=l(()=>{C(!0),m().finally(()=>C(!1))},"update");return!c||!f||a||o===se.Behind||o===se.Conflict||o===se.Unknown?null:s.createElement("div",{className:"status-item status-section"},R,s.createElement("p",null,"This branch is out-of-date with the base branch."),s.createElement("button",{className:"secondary",onClick:P,disabled:v},"Update with merge commit"))},"OfferToUpdate"),fo=l(({isSimple:o})=>{const[a,f]=(0,s.useState)(!1),{readyForReview:c,updatePR:m}=(0,s.useContext)(j),v=(0,s.useCallback)(async()=>{try{f(!0);const C=await c();m(C)}finally{f(!1)}},[f,c,m]);return s.createElement("div",{className:"ready-for-review-container"},s.createElement("div",{className:"ready-for-review-text-wrapper"},s.createElement("div",{className:"ready-for-review-icon"},o?null:R),s.createElement("div",null,s.createElement("div",{className:"ready-for-review-heading"},"This pull request is still a work in progress."),s.createElement("div",{className:"ready-for-review-meta"},"Draft pull requests cannot be merged."))),s.createElement("div",{className:"button-container"},s.createElement("button",{disabled:a,onClick:v},"Ready for review")))},"ReadyForReview"),si=l(o=>{const a=(0,s.useContext)(j),f=(0,s.useRef)(),[c,m]=(0,s.useState)(null);return o.mergeQueueMethod?s.createElement("div",null,s.createElement("div",{id:"merge-comment-form"},s.createElement("button",{onClick:()=>a.enqueue()},"Add to Merge Queue"))):c?s.createElement(ci,{pr:o,method:c,cancel:()=>m(null)}):s.createElement("div",{className:"automerge-section wrapper"},s.createElement("button",{onClick:()=>m(f.current.value)},"Merge Pull Request"),it,"using method",it,s.createElement(kr,{ref:f,...o}))},"Merge"),ai=l(({pr:o,isSimple:a})=>{var f;const{hasWritePermission:c,canEdit:m,isDraft:v,mergeable:C}=o;if(v)return m?s.createElement(fo,{isSimple:a}):null;if(C===se.Mergeable&&c&&!o.mergeQueueEntry)return a?s.createElement(ui,{...o}):s.createElement(si,{...o});if(c&&!o.mergeQueueEntry){const P=(0,s.useContext)(j);return s.createElement(ti,{updateState:N=>P.updateAutoMerge(N),...o,baseHasMergeQueue:!!o.mergeQueueMethod,defaultMergeMethod:(f=o.autoMergeMethod)!=null?f:o.defaultMergeMethod})}else if(o.mergeQueueEntry)return s.createElement(ni,{mergeQueueEntry:o.mergeQueueEntry});return null},"PrActions"),Sl=l(()=>{const{openOnGitHub:o}=useContext(PullRequestContext);return React.createElement("button",{id:"merge-on-github",type:"submit",onClick:()=>o()},"Merge on github.com")},"MergeOnGitHub"),ui=l(o=>{const{merge:a,updatePR:f}=(0,s.useContext)(j);async function c(v){const{state:C}=await a({title:"",description:"",method:v});f({state:C})}l(c,"submitAction");const m=Object.keys(hn).filter(v=>o.mergeMethodsAvailability[v]).reduce((v,C)=>(v[C]=hn[C],v),{});return s.createElement(xr,{options:m,defaultOption:o.defaultMergeMethod,submitAction:c})},"MergeSimple"),mo=l(o=>{const{deleteBranch:a}=(0,s.useContext)(j),[f,c]=(0,s.useState)(!1);return o.isRemoteHeadDeleted!==!1&&o.isLocalHeadDeleted!==!1?s.createElement("div",null):s.createElement("div",{className:"branch-status-container"},s.createElement("form",{onSubmit:async m=>{m.preventDefault();try{c(!0);const v=await a();v&&v.cancelled&&c(!1)}finally{c(!1)}}},s.createElement("button",{disabled:f,className:"secondary",type:"submit"},"Delete branch...")))},"DeleteBranch");function ci({pr:o,method:a,cancel:f}){const{merge:c,updatePR:m,changeEmail:v}=(0,s.useContext)(j),[C,P]=(0,s.useState)(!1),N=o.emailForCommit;return s.createElement("div",null,s.createElement("form",{id:"merge-comment-form",onSubmit:async q=>{q.preventDefault();try{P(!0);const{title:te,description:ce}=q.target,{state:xe}=await c({title:te==null?void 0:te.value,description:ce==null?void 0:ce.value,method:a,email:N});m({state:xe})}finally{P(!1)}}},a==="rebase"?null:s.createElement("input",{type:"text",name:"title",defaultValue:di(a,o)}),a==="rebase"?null:s.createElement("textarea",{name:"description",defaultValue:po(a,o)}),a==="rebase"||!N?null:s.createElement("div",{className:"commit-association"},s.createElement("span",null,"Commit will be associated with ",s.createElement("button",{className:"input-box",title:"Change email","aria-label":"Change email",disabled:C,onClick:()=>{P(!0),v(N).finally(()=>P(!1))}},N))),s.createElement("div",{className:"form-actions",id:a==="rebase"?"rebase-actions":""},s.createElement("button",{className:"secondary",onClick:f},"Cancel"),s.createElement("button",{disabled:C,type:"submit",id:"confirm-merge"},a==="rebase"?"Confirm ":"",hn[a]))))}l(ci,"ConfirmMerge");function di(o,a){var f,c,m,v;switch(o){case"merge":return(c=(f=a.mergeCommitMeta)==null?void 0:f.title)!=null?c:`Merge pull request #${a.number} from ${a.head}`;case"squash":return(v=(m=a.squashCommitMeta)==null?void 0:m.title)!=null?v:`${a.title} (#${a.number})`;default:return""}}l(di,"getDefaultTitleText");function po(o,a){var f,c,m,v;switch(o){case"merge":return(c=(f=a.mergeCommitMeta)==null?void 0:f.description)!=null?c:a.title;case"squash":return(v=(m=a.squashCommitMeta)==null?void 0:m.description)!=null?v:"";default:return""}}l(po,"getDefaultDescriptionText");const hn={merge:"Create Merge Commit",squash:"Squash and Merge",rebase:"Rebase and Merge"},kr=s.forwardRef(({defaultMergeMethod:o,mergeMethodsAvailability:a,onChange:f,ariaLabel:c,name:m,title:v,disabled:C},P)=>s.createElement("select",{ref:P,defaultValue:o,onChange:f,disabled:C,"aria-label":c!=null?c:"Select merge method",name:m,title:v},Object.entries(hn).map(([N,q])=>s.createElement("option",{key:N,value:N,disabled:!a[N]},q,a[N]?null:" (not enabled)")))),ho=l(({statuses:o})=>s.createElement("div",null,o.map(a=>s.createElement("div",{key:a.id,className:"status-check"},s.createElement("div",{className:"status-check-details"},s.createElement(br,{state:a.state}),s.createElement(kt,{for:{avatarUrl:a.avatarUrl,url:a.url}}),s.createElement("span",{className:"status-check-detail-text"},a.context," ",a.description?`\u2014 ${a.description}`:"")),s.createElement("div",null,a.isRequired?s.createElement("span",{className:"label"},"Required"):null,a.targetUrl?s.createElement("a",{href:a.targetUrl,title:a.targetUrl},"Details"):null)))),"StatusCheckDetails");function fi(o){const a=Wr(o,c=>{switch(c.state){case Te.Success:case Te.Failure:case Te.Neutral:return c.state;default:return Te.Pending}}),f=[];for(const c of Object.keys(a)){const m=a[c].length;let v="";switch(c){case Te.Success:v="successful";break;case Te.Failure:v="failed";break;case Te.Neutral:v="skipped";break;default:v="pending"}const C=m>1?`${m} ${v} checks`:`${m} ${v} check`;f.push(C)}return f.join(" and ")}l(fi,"getSummaryLabel");function br({state:o}){switch(o){case Te.Neutral:return we;case Te.Success:return de;case Te.Failure:return Rt}return Pt}l(br,"StateIcon");function vo({state:o}){switch(o){case Te.Pending:return zr;case Te.Failure:return Rt}return de}l(vo,"RequiredReviewStateIcon");function Ml(o){const a=o.approvals.length,f=o.requestedChanges.length,c=o.count;switch(o.state){case Te.Failure:return`At least ${c} approving review${c>1?"s":""} is required by reviewers with write access.`;case Te.Pending:return`${f} review${f>1?"s":""} requesting changes by reviewers with write access.`}return`${a} approving review${a>1?"s":""} by reviewers with write access.`}l(Ml,"getRequiredReviewSummary");function vn(o){const{name:a,canDelete:f,color:c}=o,m=vr(c,o.isDarkTheme,!1);return s.createElement("div",{className:"section-item label",style:{backgroundColor:m.backgroundColor,color:m.textColor,borderColor:`${m.borderColor}`,paddingRight:f?"2px":"8px"}},a,o.children)}l(vn,"Label");function Nl(o){const{name:a,color:f}=o,c=gitHubLabelColor(f,o.isDarkTheme,!1);return React.createElement("li",{style:{backgroundColor:c.backgroundColor,color:c.textColor,borderColor:`${c.borderColor}`}},a,o.children)}l(Nl,"LabelCreate");function go({reviewers:o,labels:a,hasWritePermission:f,isIssue:c,projectItems:m,milestone:v,assignees:C}){const{addReviewers:P,addAssignees:N,addAssigneeYourself:q,addLabels:te,removeLabel:ce,changeProjects:xe,addMilestone:Je,updatePR:Ke,pr:He}=(0,s.useContext)(j),Ee=l(async()=>{const Le=await xe();Ke({...Le})},"updateProjects");return s.createElement("div",{id:"sidebar"},c?"":s.createElement("div",{id:"reviewers",className:"section"},s.createElement("div",{className:"section-header",onClick:async()=>{const Le=await P();Ke({reviewers:Le.reviewers})}},s.createElement("div",{className:"section-title"},"Reviewers"),f?s.createElement("button",{className:"icon-button",title:"Add Reviewers"},zt):null),o&&o.length?o.map(Le=>s.createElement(ro,{key:_e(Le.reviewer),reviewState:Le})):s.createElement("div",{className:"section-placeholder"},"None yet")),s.createElement("div",{id:"assignees",className:"section"},s.createElement("div",{className:"section-header",onClick:async()=>{const Le=await N();Ke({assignees:Le.assignees})}},s.createElement("div",{className:"section-title"},"Assignees"),f?s.createElement("button",{className:"icon-button",title:"Add Assignees"},zt):null),C&&C.length?C.map((Le,Ye)=>s.createElement("div",{key:Ye,className:"section-item reviewer"},s.createElement("div",{className:"avatar-with-author"},s.createElement(kt,{for:Le}),s.createElement(Bt,{for:Le})))):s.createElement("div",{className:"section-placeholder"},"None yet",He.hasWritePermission?s.createElement(s.Fragment,null,"\u2014",s.createElement("a",{className:"assign-yourself",onClick:async()=>{const Le=await q();Ke({assignees:Le.assignees})}},"assign yourself")):null)),s.createElement("div",{id:"labels",className:"section"},s.createElement("div",{className:"section-header",onClick:async()=>{const Le=await te();Ke({labels:Le.added})}},s.createElement("div",{className:"section-title"},"Labels"),f?s.createElement("button",{className:"icon-button",title:"Add Labels"},zt):null),a.length?s.createElement("div",{className:"labels-list"},a.map(Le=>s.createElement(vn,{key:Le.name,...Le,canDelete:f,isDarkTheme:He.isDarkTheme},f?s.createElement("button",{className:"icon-button",onClick:()=>ce(Le.name)},Rt,"\uFE0F"):null))):s.createElement("div",{className:"section-placeholder"},"None yet")),He.isEnterprise?null:s.createElement("div",{id:"project",className:"section"},s.createElement("div",{className:"section-header",onClick:Ee},s.createElement("div",{className:"section-title"},"Project"),f?s.createElement("button",{className:"icon-button",title:"Add Project"},zt):null),m?m.length>0?m.map(Le=>s.createElement(_r,{key:Le.project.title,...Le,canDelete:f})):s.createElement("div",{className:"section-placeholder"},"None Yet"):s.createElement("a",{onClick:Ee},"Sign in with more permissions to see projects")),s.createElement("div",{id:"milestone",className:"section"},s.createElement("div",{className:"section-header",onClick:async()=>{const Le=await Je();Ke({milestone:Le.added})}},s.createElement("div",{className:"section-title"},"Milestone"),f?s.createElement("button",{className:"icon-button",title:"Add Milestone"},zt):null),v?s.createElement(qt,{key:v.title,...v,canDelete:f}):s.createElement("div",{className:"section-placeholder"},"No milestone")))}l(go,"Sidebar");function qt(o){const{removeMilestone:a,updatePR:f,pr:c}=(0,s.useContext)(j),m=getComputedStyle(document.documentElement).getPropertyValue("--vscode-badge-foreground"),v=vr(m,c.isDarkTheme,!1),{canDelete:C,title:P}=o;return s.createElement("div",{className:"labels-list"},s.createElement("div",{className:"section-item label",style:{backgroundColor:v.backgroundColor,color:v.textColor,borderColor:`${v.borderColor}`}},P,C?s.createElement("button",{className:"icon-button",onClick:async()=>{await a(),f({milestone:void 0})}},Rt,"\uFE0F"):null))}l(qt,"Milestone");function _r(o){const{removeProject:a,updatePR:f,pr:c}=(0,s.useContext)(j),m=getComputedStyle(document.documentElement).getPropertyValue("--vscode-badge-foreground"),v=vr(m,c.isDarkTheme,!1),{canDelete:C}=o;return s.createElement("div",{className:"labels-list"},s.createElement("div",{className:"section-item label",style:{backgroundColor:v.backgroundColor,color:v.textColor,borderColor:`${v.borderColor}`}},o.project.title,C?s.createElement("button",{className:"icon-button",onClick:async()=>{var P;await a(o),f({projectItems:(P=c.projectItems)==null?void 0:P.filter(N=>N.id!==o.id)})}},Rt,"\uFE0F"):null))}l(_r,"Project");var gn;(function(o){o[o.ADD=0]="ADD",o[o.COPY=1]="COPY",o[o.DELETE=2]="DELETE",o[o.MODIFY=3]="MODIFY",o[o.RENAME=4]="RENAME",o[o.TYPE=5]="TYPE",o[o.UNKNOWN=6]="UNKNOWN",o[o.UNMERGED=7]="UNMERGED"})(gn||(gn={}));class qn{constructor(a,f,c,m,v,C,P){this.baseCommit=a,this.status=f,this.fileName=c,this.previousFileName=m,this.patch=v,this.diffHunks=C,this.blobUrl=P}}l(qn,"file_InMemFileChange");class Qn{constructor(a,f,c,m,v){this.baseCommit=a,this.blobUrl=f,this.status=c,this.fileName=m,this.previousFileName=v}}l(Qn,"file_SlimFileChange");var on=Object.defineProperty,yo=l((o,a,f)=>(typeof a!="symbol"&&(a+=""),a in o?on(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f),"diffHunk_publicField"),gt;(function(o){o[o.Context=0]="Context",o[o.Add=1]="Add",o[o.Delete=2]="Delete",o[o.Control=3]="Control"})(gt||(gt={}));class Lr{constructor(a,f,c,m,v,C=!0){this.type=a,this.oldLineNumber=f,this.newLineNumber=c,this.positionInHunk=m,this._raw=v,this.endwithLineBreak=C}get raw(){return this._raw}get text(){return this._raw.substr(1)}}l(Lr,"DiffLine");function mi(o){switch(o[0]){case" ":return 0;case"+":return 1;case"-":return 2;default:return 3}}l(mi,"getDiffChangeType");class pi{constructor(a,f,c,m,v){this.oldLineNumber=a,this.oldLength=f,this.newLineNumber=c,this.newLength=m,this.positionInHunk=v,yo(this,"diffLines",[])}}l(pi,"DiffHunk");const Tr=/^@@ \-(\d+)(,(\d+))?( \+(\d+)(,(\d+)?)?)? @@/;function Pl(o){let a=0,f=0;for(;(f=o.indexOf("\r",f))!==-1;)f++,a++;return a}l(Pl,"countCarriageReturns");function*yn(o){let a=0;for(;a!==-1&&a<o.length;){const f=a;a=o.indexOf(`
`,a);let m=(a!==-1?a:o.length)-f;a!==-1&&(a>0&&o[a-1]==="\r"&&m--,a++),yield o.substr(f,m)}}l(yn,"LineReader");function*At(o){const a=yn(o);let f=a.next(),c,m=-1,v=-1,C=-1;for(;!f.done;){const P=f.value;if(Tr.test(P)){c&&(yield c,c=void 0),m===-1&&(m=0);const N=Tr.exec(P),q=v=Number(N[1]),te=Number(N[3])||1,ce=C=Number(N[5]),xe=Number(N[7])||1;c=new pi(q,te,ce,xe,m),c.diffLines.push(new Lr(3,-1,-1,m,P))}else if(c){const N=mi(P);if(N===3)c.diffLines&&c.diffLines.length&&(c.diffLines[c.diffLines.length-1].endwithLineBreak=!1);else{c.diffLines.push(new Lr(N,N!==1?v:-1,N!==2?C:-1,m,P));const q=1+Pl(P);switch(N){case 0:v+=q,C+=q;break;case 2:v+=q;break;case 1:C+=q;break}}}m!==-1&&++m,f=a.next()}c&&(yield c)}l(At,"parseDiffHunk");function wo(o){const a=At(o);let f=a.next();const c=[],m=[];for(;!f.done;){const v=f.value;c.push(v);for(let C=0;C<v.diffLines.length;C++){const P=v.diffLines[C];if(!(P.type===2||P.type===3))if(P.type===1)m.push(P.text);else{const N=P.text;m.push(N)}}f=a.next()}return c}l(wo,"parsePatch");function Co(o,a){const f=o.split(/\r?\n/),c=At(a);let m=c.next();const v=[],C=[];let P=0;for(;!m.done;){const N=m.value;v.push(N);const q=N.oldLineNumber;for(let te=P+1;te<q;te++)C.push(f[te-1]);P=q+N.oldLength-1;for(let te=0;te<N.diffLines.length;te++){const ce=N.diffLines[te];if(!(ce.type===2||ce.type===3))if(ce.type===1)C.push(ce.text);else{const xe=ce.text;C.push(xe)}}m=c.next()}if(P<f.length)for(let N=P+1;N<=f.length;N++)C.push(f[N-1]);return C.join(`
`)}l(Co,"getModifiedContentFromDiffHunk");function hi(o){switch(o){case"removed":return GitChangeType.DELETE;case"added":return GitChangeType.ADD;case"renamed":return GitChangeType.RENAME;case"modified":return GitChangeType.MODIFY;default:return GitChangeType.UNKNOWN}}l(hi,"getGitChangeType");async function xo(o,a){const f=[];for(let c=0;c<o.length;c++){const m=o[c],v=hi(m.status);if(!m.patch&&!(v===GitChangeType.ADD&&m.additions===0)){f.push(new SlimFileChange(a,m.blob_url,v,m.filename,m.previous_filename));continue}const C=m.patch?wo(m.patch):[];f.push(new InMemFileChange(a,v,m.filename,m.previous_filename,m.patch,C,m.blob_url))}return f}l(xo,"parseDiff");function Sr({hunks:o}){return s.createElement("div",{className:"diff"},o.map((a,f)=>s.createElement(Rl,{key:f,hunk:a})))}l(Sr,"Diff");const ft=Sr,Rl=l(({hunk:o,maxLines:a=8})=>s.createElement(s.Fragment,null,o.diffLines.slice(-a).map(f=>s.createElement("div",{key:Ol(f),className:`diffLine ${Dl(f.type)}`},s.createElement(Eo,{num:f.oldLineNumber}),s.createElement(Eo,{num:f.newLineNumber}),s.createElement("div",{className:"diffTypeSign"},f._raw.substr(0,1)),s.createElement("div",{className:"lineContent"},f._raw.substr(1))))),"Hunk"),Ol=l(o=>`${o.oldLineNumber}->${o.newLineNumber}`,"keyForDiffLine"),Eo=l(({num:o})=>s.createElement("div",{className:"lineNumber"},o>0?o:" "),"LineNumber"),Dl=l(o=>gt[o].toLowerCase(),"getDiffChangeClass"),Il=l(({events:o})=>s.createElement(s.Fragment,null,o.map(a=>{switch(a.event){case re.Committed:return s.createElement(ko,{key:`commit${a.id}`,...a});case re.Reviewed:return s.createElement(gi,{key:`review${a.id}`,...a});case re.Commented:return s.createElement(wi,{key:`comment${a.id}`,...a});case re.Merged:return s.createElement(Ci,{key:`merged${a.id}`,...a});case re.Assigned:return s.createElement(Hl,{key:`assign${a.id}`,...a});case re.HeadRefDeleted:return s.createElement(wn,{key:`head${a.id}`,...a});case re.NewCommitsSinceReview:return s.createElement(Kn,{key:`newCommits${a.id}`});default:throw new fr(a)}})),"Timeline"),js=null,ko=l(o=>s.createElement("div",{className:"comment-container commit"},s.createElement("div",{className:"commit-message"},Ce,it,s.createElement("div",{className:"avatar-container"},s.createElement(kt,{for:o.author})),s.createElement(Bt,{for:o.author}),s.createElement("div",{className:"message-container"},s.createElement("a",{className:"message",href:o.htmlUrl,title:o.htmlUrl},o.message.substr(0,o.message.indexOf(`
`)>-1?o.message.indexOf(`
`):o.message.length)))),s.createElement("div",{className:"sha-with-timestamp"},s.createElement("a",{className:"sha",href:o.htmlUrl,title:o.htmlUrl},o.sha.slice(0,7)),s.createElement(Hn,{date:o.authoredDate}))),"CommitEventView"),Kn=l(()=>{const{gotoChangesSinceReview:o}=(0,s.useContext)(j);return s.createElement("div",{className:"comment-container commit"},s.createElement("div",{className:"commit-message"},dn,it,s.createElement("span",{style:{fontWeight:"bold"}},"New changes since your last Review")),s.createElement("button",{"aria-live":"polite",title:"View the changes since your last review",onClick:()=>o()},"View Changes"))},"NewCommitsSinceReviewEventView"),Al=l(o=>o.position!==null?`pos:${o.position}`:`ori:${o.originalPosition}`,"positionKey"),vi=l(o=>Wr(o,a=>a.path+":"+Al(a)),"groupCommentsByPath"),gi=l(o=>{const a=vi(o.comments),f=o.state==="PENDING";return s.createElement(Fn,{comment:o,allowEmpty:!0},o.comments.length?s.createElement("div",{className:"comment-body review-comment-body"},Object.entries(a).map(([c,m])=>s.createElement(Ht,{key:c,thread:m,event:o}))):null,f?s.createElement(yi,null):null)},"ReviewEventView");function Ht({thread:o,event:a}){var f;const c=o[0],[m,v]=(0,s.useState)(!c.isResolved),[C,P]=(0,s.useState)(!!c.isResolved),{openDiff:N,toggleResolveComment:q}=(0,s.useContext)(j),te=a.reviewThread&&(a.reviewThread.canResolve&&!a.reviewThread.isResolved||a.reviewThread.canUnresolve&&a.reviewThread.isResolved),ce=l(()=>{if(a.reviewThread){const xe=!C;v(!xe),P(xe),q(a.reviewThread.threadId,o,xe)}},"toggleResolve");return s.createElement("div",{key:a.id,className:"diff-container"},s.createElement("div",{className:"resolved-container"},s.createElement("div",null,c.position===null?s.createElement("span",null,s.createElement("span",null,c.path),s.createElement("span",{className:"outdatedLabel"},"Outdated")):s.createElement("a",{className:"diffPath",onClick:()=>N(c)},c.path),!C&&!m?s.createElement("span",{className:"unresolvedLabel"},"Unresolved"):null),s.createElement("button",{className:"secondary",onClick:()=>v(!m)},m?"Hide":"Show")),m?s.createElement("div",null,s.createElement(ft,{hunks:(f=c.diffHunks)!=null?f:[]}),o.map(xe=>s.createElement(Fn,{key:xe.id,comment:xe})),te?s.createElement("div",{className:"resolve-comment-row"},s.createElement("button",{className:"secondary comment-resolve",onClick:()=>ce()},C?"Unresolve Conversation":"Resolve Conversation")):null):null)}l(Ht,"CommentThread");function yi(){const{requestChanges:o,approve:a,submit:f,pr:c}=(0,s.useContext)(j),{isAuthor:m}=c,v=(0,s.useRef)();return s.createElement("form",null,s.createElement("textarea",{ref:v,placeholder:"Leave a review summary comment"}),s.createElement("div",{className:"form-actions"},m?null:s.createElement("button",{id:"request-changes",className:"secondary",onClick:C=>{C.preventDefault(),o(v.current.value)}},"Request Changes"),m?null:s.createElement("button",{id:"approve",className:"secondary",onClick:C=>{C.preventDefault(),a(v.current.value)}},"Approve"),s.createElement("button",{onClick:C=>{C.preventDefault(),f(v.current.value)}},"Submit Review")))}l(yi,"AddReviewSummaryComment");const wi=l(o=>s.createElement(Fn,{headerInEditMode:!0,comment:o}),"CommentEventView"),Ci=l(o=>s.createElement("div",{className:"comment-container commit"},s.createElement("div",{className:"commit-message"},Rn,it,s.createElement("div",{className:"avatar-container"},s.createElement(kt,{for:o.user})),s.createElement(Bt,{for:o.user}),s.createElement("div",{className:"message"},"merged commit",it,s.createElement("a",{className:"sha",href:o.commitUrl,title:o.commitUrl},o.sha.substr(0,7)),it,"into ",o.mergeRef,it),s.createElement(Hn,{href:o.url,date:o.createdAt}))),"MergedEventView"),wn=l(o=>s.createElement("div",{className:"comment-container commit"},s.createElement("div",{className:"commit-message"},s.createElement("div",{className:"avatar-container"},s.createElement(kt,{for:o.actor})),s.createElement(Bt,{for:o.actor}),s.createElement("div",{className:"message"},"deleted the ",o.headRef," branch",it),s.createElement(Hn,{date:o.createdAt}))),"HeadDeleteEventView"),Hl=l(o=>null,"AssignEventView"),Fl=l(o=>s.createElement(s.Fragment,null,s.createElement("div",{id:"title",className:"title"},s.createElement("div",{className:"details"},s.createElement(wl,{...o}))),s.createElement(go,{...o}),s.createElement("div",{id:"main"},s.createElement("div",{id:"description"},s.createElement(Fn,{isPRDescription:!0,comment:o})),s.createElement(Il,{events:o.events}),s.createElement(uo,{pr:o,isSimple:!1}),s.createElement($n,{...o}))),"Overview");function Vl(){(0,oe.render)(s.createElement(zl,null,o=>s.createElement(Fl,{...o})),document.getElementById("app"))}l(Vl,"main");function zl({children:o}){const a=(0,s.useContext)(j),[f,c]=(0,s.useState)(a.pr);return(0,s.useEffect)(()=>{a.onchange=c,c(a.pr)},[]),window.onscroll=U(()=>{a.postMessage({command:"scroll",args:{scrollPosition:{x:window.scrollX,y:window.scrollY}}})},200),a.postMessage({command:"ready"}),a.postMessage({command:"pr.debug",args:"initialized "+(f?"with PR":"without PR")}),f?o(f):s.createElement("div",{className:"loading-indicator"},"Loading...")}l(zl,"Root"),addEventListener("load",Vl)})()})();
