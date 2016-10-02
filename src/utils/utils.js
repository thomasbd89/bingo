/**
 * Created by Mihail on 10/2/2016.
 */

"use strict";

const Utils = {

	eliminateDuplicates(arr) {
		let i,
			len = arr.length,
			arrOut = [],
			objTemp = {};

		for (i = 0; i < len; i++) {
			objTemp[arr[i]] = 0;
		}
		for (i in objTemp) {
			if (objTemp.hasOwnProperty(i))
				arrOut.push(i);
		}
		return arrOut;
	},

	/**
	 * Give the color of a ball according to its number
	 * which relates to its column. Bingo column colors are:
	 * B - dark red, I - dark blue, N - dark purple, G - dark orange
	 * O - dark green
	 *
	 * B is 1–15, I is 16–30, N is 31–45,
	 * G is 46–60, and O is 61–75
	 */
	getColorByNumber(num) {
		if (num === undefined) {
			return;
		}


		if (num >=1 && num <=15) {
			return '#990000';
		} else if (num > 15 && num <= 30) {
			return '#006666';
		} else if (num > 30 && num <= 45) {
			return '#660099';
		} else if (num > 45 && num <= 60) {
			return '#CC3300';
		} else if (num > 60 && num <= 75) {
			return '#009900';
		}
	}
};

export { Utils };