!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
		? define(e)
		: ((t =
				'undefined' != typeof globalThis
					? globalThis
					: t || self).rexuiplugin = e());
})(this, function () {
	'use strict';
	function v(t) {
		return (v =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t &&
							'function' == typeof Symbol &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? 'symbol'
							: typeof t;
				  })(t);
	}
	function B(t, e) {
		if (!(t instanceof e))
			throw new TypeError('Cannot call a class as a function');
	}
	function n(t, e) {
		for (var i = 0; i < e.length; i++) {
			var n = e[i];
			(n.enumerable = n.enumerable || !1),
				(n.configurable = !0),
				'value' in n && (n.writable = !0),
				Object.defineProperty(t, n.key, n);
		}
	}
	function m(t, e, i) {
		return e && n(t.prototype, e), i && n(t, i), t;
	}
	function b(t, e) {
		if ('function' != typeof e && null !== e)
			throw new TypeError('Super expression must either be null or a function');
		(t.prototype = Object.create(e && e.prototype, {
			constructor: {value: t, writable: !0, configurable: !0},
		})),
			e && i(t, e);
	}
	function x(t) {
		return (x = Object.setPrototypeOf
			? Object.getPrototypeOf
			: function (t) {
					return t.__proto__ || Object.getPrototypeOf(t);
			  })(t);
	}
	function i(t, e) {
		return (i =
			Object.setPrototypeOf ||
			function (t, e) {
				return (t.__proto__ = e), t;
			})(t, e);
	}
	function E(t) {
		if (void 0 === t)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return t;
	}
	function w(r) {
		var o = (function () {
			if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ('function' == typeof Proxy) return !0;
			try {
				return (
					Boolean.prototype.valueOf.call(
						Reflect.construct(Boolean, [], function () {})
					),
					!0
				);
			} catch (t) {
				return !1;
			}
		})();
		return function () {
			var t,
				e,
				i,
				n = x(r);
			if (o) {
				var s = x(this).constructor;
				t = Reflect.construct(n, arguments, s);
			} else t = n.apply(this, arguments);
			return (
				(e = this),
				!(i = t) || ('object' != typeof i && 'function' != typeof i) ? E(e) : i
			);
		};
	}
	function l(t, e) {
		for (
			;
			!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = x(t));

		);
		return t;
	}
	function C(t, e, i) {
		return (C =
			'undefined' != typeof Reflect && Reflect.get
				? Reflect.get
				: function (t, e, i) {
						var n = l(t, e);
						if (n) {
							var s = Object.getOwnPropertyDescriptor(n, e);
							return s.get ? s.get.call(i) : s.value;
						}
				  })(t, e, i || t);
	}
	function r(t, e, i, n) {
		return (r =
			'undefined' != typeof Reflect && Reflect.set
				? Reflect.set
				: function (t, e, i, n) {
						var s,
							r,
							o,
							h,
							a = l(t, e);
						if (a) {
							if ((s = Object.getOwnPropertyDescriptor(a, e)).set)
								return s.set.call(n, i), !0;
							if (!s.writable) return !1;
						}
						if ((s = Object.getOwnPropertyDescriptor(n, e))) {
							if (!s.writable) return !1;
							(s.value = i), Object.defineProperty(n, e, s);
						} else
							(h = i),
								(o = e) in (r = n)
									? Object.defineProperty(r, o, {
											value: h,
											enumerable: !0,
											configurable: !0,
											writable: !0,
									  })
									: (r[o] = h);
						return !0;
				  })(t, e, i, n);
	}
	function e(t, e, i, n, s) {
		if (!r(t, e, i, n || t) && s) throw new Error('failed to set property');
		return i;
	}
	function S(t) {
		return (
			(function (t) {
				if (Array.isArray(t)) return t;
			})(t) ||
			s(t) ||
			o(t) ||
			(function () {
				throw new TypeError(
					'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				);
			})()
		);
	}
	function a(t) {
		return (
			(function (t) {
				if (Array.isArray(t)) return h(t);
			})(t) ||
			s(t) ||
			o(t) ||
			(function () {
				throw new TypeError(
					'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				);
			})()
		);
	}
	function s(t) {
		if (
			('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
			null != t['@@iterator']
		)
			return Array.from(t);
	}
	function o(t, e) {
		if (t) {
			if ('string' == typeof t) return h(t, e);
			var i = Object.prototype.toString.call(t).slice(8, -1);
			return (
				'Object' === i && t.constructor && (i = t.constructor.name),
				'Map' === i || 'Set' === i
					? Array.from(t)
					: 'Arguments' === i ||
					  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
					? h(t, e)
					: void 0
			);
		}
	}
	function h(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
		return n;
	}
	function p(t, e, i) {
		var n = i.length;
		if (2 <= n) {
			var s = i[n - 2],
				r = i[n - 1];
			if (t === s && e === r) return i;
		}
		return i.push(t, e), i;
	}
	function c(t, e, i, n, s, r, o, h, a) {
		o && s < r && (r -= 360);
		var l = g(r - s) / h;
		s = g(s);
		for (var u = 0; u <= h; u++) {
			var c = s + l * u,
				d = t + i * Math.cos(c),
				f = e + n * Math.sin(c);
			p(d, f, a);
		}
		return a;
	}
	var u = (function () {
			function i(t) {
				B(this, i),
					(this.scene = t),
					(this.displayList = t.sys.displayList),
					(this.updateList = t.sys.updateList),
					t.events.once('destroy', this.destroy, this);
			}
			return (
				m(
					i,
					[
						{
							key: 'destroy',
							value: function () {
								(this.scene = null),
									(this.displayList = null),
									(this.updateList = null);
							},
						},
					],
					[
						{
							key: 'register',
							value: function (t, e) {
								i.prototype[t] = e;
							},
						},
					]
				),
				i
			);
		})(),
		d = Phaser.Utils.Objects.GetValue,
		k = (function () {
			function r(t, e, i, n, s) {
				B(this, r),
					(this.cornerRadius = {}),
					(this._width = 0),
					(this._height = 0),
					this.setTo(t, e, i, n, s);
			}
			return (
				m(r, [
					{
						key: 'setTo',
						value: function (t, e, i, n, s) {
							return (
								this.setPosition(t, e),
								this.setRadius(s),
								this.setSize(i, n),
								this
							);
						},
					},
					{
						key: 'setPosition',
						value: function (t, e) {
							return (
								void 0 === t && (t = 0),
								void 0 === e && (e = t),
								(this.x = t),
								(this.y = e),
								this
							);
						},
					},
					{
						key: 'setRadius',
						value: function (t) {
							var e, i;
							void 0 === t && (t = 0),
								(i =
									'number' == typeof t
										? (e = t)
										: ((e = d(t, 'x', 0)), d(t, 'y', 0)));
							var n = this.cornerRadius;
							return (
								(n.tl = f(d(t, 'tl', void 0), e, i)),
								(n.tr = f(d(t, 'tr', void 0), e, i)),
								(n.bl = f(d(t, 'bl', void 0), e, i)),
								(n.br = f(d(t, 'br', void 0), e, i)),
								this
							);
						},
					},
					{
						key: 'setSize',
						value: function (t, e) {
							return (this.width = t), (this.height = e), this;
						},
					},
					{
						key: 'minWidth',
						get: function () {
							var t = this.cornerRadius;
							return Math.max(t.tl.x + t.tr.x, t.bl.x + t.br.x);
						},
					},
					{
						key: 'minHeight',
						get: function () {
							var t = this.cornerRadius;
							return Math.max(t.tl.y + t.bl.y, t.tr.y + t.br.y);
						},
					},
					{
						key: 'width',
						get: function () {
							return this._width;
						},
						set: function (t) {
							null == t && (t = 0), (this._width = Math.max(t, this.minWidth));
						},
					},
					{
						key: 'height',
						get: function () {
							return this._height;
						},
						set: function (t) {
							null == t && (t = 0),
								(this._height = Math.max(t, this.minHeight));
						},
					},
					{
						key: 'radius',
						get: function () {
							var t = this.cornerRadius;
							return Math.max(
								t.tl.x,
								t.tl.y,
								t.tr.x,
								t.tr.y,
								t.bl.x,
								t.bl.y,
								t.br.x,
								t.br.y
							);
						},
					},
				]),
				r
			);
		})(),
		f = function (t, e, i) {
			return void 0 === t
				? {x: e, y: i}
				: 'number' == typeof t
				? {x: t, y: t}
				: t;
		},
		g = Phaser.Math.DegToRad,
		P = Phaser.Renderer.WebGL.Utils,
		y = function (t, e, i, n, s, r) {
			for (
				var o = P.getTintAppendFloatAlpha(i.fillColor, i.fillAlpha * n),
					h = i.pathData,
					a = i.pathIndexes,
					l = 0;
				l < a.length;
				l += 3
			) {
				var u = 2 * a[l],
					c = 2 * a[l + 1],
					d = 2 * a[l + 2],
					f = h[0 + u] - s,
					v = h[1 + u] - r,
					p = h[0 + c] - s,
					g = h[1 + c] - r,
					y = h[0 + d] - s,
					k = h[1 + d] - r,
					m = e.getX(f, v),
					b = e.getY(f, v),
					x = e.getX(p, g),
					C = e.getY(p, g),
					w = e.getX(y, k),
					S = e.getY(y, k);
				t.batchTri(m, b, x, C, w, S, o, o, o);
			}
		},
		O = Phaser.Renderer.WebGL.Utils,
		T = function (t, e, i, n, s) {
			var r = t.strokeTint,
				o = O.getTintAppendFloatAlpha(e.strokeColor, e.strokeAlpha * i);
			(r.TL = o), (r.TR = o), (r.BL = o), (r.BR = o);
			var h = e.pathData,
				a = h.length - 1,
				l = e.lineWidth,
				u = l / 2,
				c = h[0] - n,
				d = h[1] - s;
			e.closePath || (a -= 2);
			for (var f = 2; f < a; f += 2) {
				var v = h[f] - n,
					p = h[f + 1] - s;
				t.batchLine(c, d, v, p, u, u, l, f - 2, !!e.closePath && f === a - 1),
					(c = v),
					(d = p);
			}
		},
		t = Phaser.GameObjects.Components.TransformMatrix,
		M = new t(),
		_ = new t(),
		z = new t(),
		D = {camera: M, sprite: _, calc: z},
		j = function (t, e, i) {
			var n = M,
				s = _,
				r = z;
			return (
				s.applyITRS(t.x, t.y, t.rotation, t.scaleX, t.scaleY),
				n.copyFrom(e.matrix),
				i
					? (n.multiplyWithOffset(
							i,
							-e.scrollX * t.scrollFactorX,
							-e.scrollY * t.scrollFactorY
					  ),
					  (s.e = t.x),
					  (s.f = t.y))
					: ((s.e -= e.scrollX * t.scrollFactorX),
					  (s.f -= e.scrollY * t.scrollFactorY)),
				n.multiply(s, r),
				D
			);
		},
		R = function (t, e, i, n) {
			var s = i || e.fillColor,
				r = n || e.fillAlpha,
				o = (16711680 & s) >>> 16,
				h = (65280 & s) >>> 8,
				a = 255 & s;
			t.fillStyle = 'rgba(' + o + ',' + h + ',' + a + ',' + r + ')';
		},
		L = function (t, e, i, n) {
			var s = i || e.strokeColor,
				r = n || e.strokeAlpha,
				o = (16711680 & s) >>> 16,
				h = (65280 & s) >>> 8,
				a = 255 & s;
			(t.strokeStyle = 'rgba(' + o + ',' + h + ',' + a + ',' + r + ')'),
				(t.lineWidth = e.lineWidth);
		},
		Y = Phaser.Renderer.Canvas.SetTransform,
		I = {
			renderWebGL: function (t, e, i, n) {
				e.dirty && (e.updateData(), (e.dirty = !1)), i.addToRenderList(e);
				var s = t.pipelines.set(e.pipeline),
					r = j(e, i, n),
					o = s.calcMatrix.copyFrom(r.calc),
					h = e._displayOriginX,
					a = e._displayOriginY,
					l = i.alpha * e.alpha;
				t.pipelines.preBatch(e),
					e.isFilled && y(s, o, e, l, h, a),
					e.isStroked && T(s, e, l, h, a),
					t.pipelines.postBatch(e);
			},
			renderCanvas: function (t, e, i, n) {
				e.dirty && (e.updateData(), (e.dirty = !1)), i.addToRenderList(e);
				var s = t.currentContext;
				if (Y(t, s, e, i, n)) {
					var r = e._displayOriginX,
						o = e._displayOriginY,
						h = e.pathData,
						a = h.length - 1,
						l = h[0] - r,
						u = h[1] - o;
					s.beginPath(), s.moveTo(l, u), e.closePath || (a -= 2);
					for (var c = 2; c < a; c += 2) {
						var d = h[c] - r,
							f = h[c + 1] - o;
						s.lineTo(d, f);
					}
					s.closePath(),
						e.isFilled && (R(s, e), s.fill()),
						e.isStroked && (L(s, e), s.stroke()),
						s.restore();
				}
			},
		},
		A = Phaser.GameObjects.Shape,
		F = Phaser.Utils.Objects.GetValue,
		W = Phaser.Geom.Polygon.Earcut,
		H = (function () {
			b(f, A);
			var d = w(f);
			function f(t, e, i, n, s, r, o, h) {
				var a;
				B(this, f), void 0 === e && (e = 0), void 0 === i && (i = 0);
				var l = new k();
				a = d.call(this, t, 'rexRoundRectangleShape', l);
				var u = F(r, 'radius', r);
				l.setTo(0, 0, n, s, u);
				var c = F(r, 'iteration', void 0);
				return (
					a.setIteration(c),
					a.setPosition(e, i),
					void 0 !== o && a.setFillStyle(o, h),
					a.updateDisplayOrigin(),
					(a.dirty = !0),
					a
				);
			}
			return (
				m(f, [
					{
						key: 'updateData',
						value: function () {
							var t = this.geom,
								e = this.pathData;
							e.length = 0;
							var i,
								n = t.cornerRadius,
								s = this.iteration + 1;
							if (((i = n.br), X(i))) {
								var r = t.width - i.x,
									o = t.height - i.y;
								c(r, o, i.x, i.y, 0, 90, !1, s, e);
							} else p(t.width, t.height, e);
							if (((i = n.bl), X(i))) {
								(r = i.x), (o = t.height - i.y);
								c(r, o, i.x, i.y, 90, 180, !1, s, e);
							} else p(0, t.height, e);
							if (((i = n.tl), X(i))) {
								(r = i.x), (o = i.y);
								c(r, o, i.x, i.y, 180, 270, !1, s, e);
							} else p(0, 0, e);
							if (((i = n.tr), X(i))) {
								(r = t.width - i.x), (o = i.y);
								c(r, o, i.x, i.y, 270, 360, !1, s, e);
							} else p(t.width, 0, e);
							return e.push(e[0], e[1]), (this.pathIndexes = W(e)), this;
						},
					},
					{
						key: 'width',
						get: function () {
							return this.geom.width;
						},
						set: function (t) {
							this.resize(t, this.height);
						},
					},
					{
						key: 'height',
						get: function () {
							return this.geom.height;
						},
						set: function (t) {
							this.resize(this.width, t);
						},
					},
					{
						key: 'resize',
						value: function (t, e) {
							if (
								(void 0 === e && (e = t),
								this.geom.width === t && this.geom.height === e)
							)
								return this;
							(this.geom.height = e),
								(this.geom.width = t),
								this.updateDisplayOrigin(),
								(this.dirty = !0);
							var i = this.input;
							return (
								i &&
									!i.customHitArea &&
									((i.hitArea.width = t), (i.hitArea.height = e)),
								this
							);
						},
					},
					{
						key: 'iteration',
						get: function () {
							return this._iteration;
						},
						set: function (t) {
							void 0 !== this._iteration
								? this._iteration !== t &&
								  ((this._iteration = t), (this.dirty = !0))
								: (this._iteration = t);
						},
					},
					{
						key: 'setIteration',
						value: function (t) {
							return void 0 === t && (t = 6), (this.iteration = t), this;
						},
					},
					{
						key: 'radius',
						get: function () {
							return this.geom.radius;
						},
						set: function (t) {
							this.geom.setRadius(t),
								this.updateDisplayOrigin(),
								(this.dirty = !0);
						},
					},
					{
						key: 'setRadius',
						value: function (t) {
							return void 0 === t && (t = 0), (this.radius = t), this;
						},
					},
					{
						key: 'cornerRadius',
						get: function () {
							return this.geom.cornerRadius;
						},
						set: function (t) {
							this.radius = t;
						},
					},
					{
						key: 'setCornerRadius',
						value: function (t) {
							return this.setRadius(t);
						},
					},
				]),
				f
			);
		})(),
		X = function (t) {
			return 0 !== t.x && 0 !== t.y;
		};
	Object.assign(H.prototype, I);
	function V(t) {
		return null == t || '' === t || 0 === t.length;
	}
	function G(t, e, i) {
		if ('object' === v(t)) {
			if (V(e)) {
				if (null == i) return;
				'object' === v(i) && (t = i);
			} else {
				'string' == typeof e && (e = e.split('.'));
				var n = e.pop();
				(function (t, e, i) {
					var n = t;
					if (!V(e)) {
						var s;
						'string' == typeof e && (e = e.split('.'));
						for (var r = 0, o = e.length; r < o; r++) {
							var h;
							if (null == n[(s = e[r])] || 'object' !== v(n[s]))
								(h = r !== o - 1 || void 0 === i ? {} : i), (n[s] = h);
							n = n[s];
						}
					}
					return n;
				})(t, e)[n] = i;
			}
			return t;
		}
	}
	u.register('roundRectangle', function (t, e, i, n, s, r, o) {
		var h = new H(this.scene, t, e, i, n, s, r, o);
		return this.scene.add.existing(h), h;
	}),
		G(window, 'RexPlugins.UI.RoundRectangle', H);
	var U = Phaser.Renderer.WebGL.Utils,
		N = {
			renderWebGL: function (t, e, i, n) {
				if (
					(e.dirty && (e.updateTexture(), (e.dirty = !1)),
					0 !== e.width && 0 !== e.height)
				) {
					i.addToRenderList(e);
					var s = e.frame,
						r = s.width,
						o = s.height,
						h = U.getTintAppendFloatAlpha,
						a = t.pipelines.set(e.pipeline, e),
						l = a.setTexture2D(s.glTexture, e);
					t.pipelines.preBatch(e),
						a.batchTexture(
							e,
							s.glTexture,
							r,
							o,
							e.x,
							e.y,
							r / e.resolution,
							o / e.resolution,
							e.scaleX,
							e.scaleY,
							e.rotation,
							e.flipX,
							e.flipY,
							e.scrollFactorX,
							e.scrollFactorY,
							e.displayOriginX,
							e.displayOriginY,
							0,
							0,
							r,
							o,
							h(e.tintTopLeft, i.alpha * e._alphaTL),
							h(e.tintTopRight, i.alpha * e._alphaTR),
							h(e.tintBottomLeft, i.alpha * e._alphaBL),
							h(e.tintBottomRight, i.alpha * e._alphaBR),
							e.tintFill,
							0,
							0,
							i,
							n,
							!1,
							l
						),
						t.pipelines.postBatch(e);
				}
			},
			renderCanvas: function (t, e, i, n) {
				e.dirty && (e.updateTexture(), (e.dirty = !1)),
					0 !== e.width &&
						0 !== e.height &&
						(i.addToRenderList(e), t.batchSprite(e, e.frame, i, n));
			},
		},
		J = Phaser.Display.Color,
		K = {
			clear: function () {
				return (
					this.context.clearRect(0, 0, this.canvas.width, this.canvas.height),
					(this.dirty = !0),
					this
				);
			},
			fill: function (t) {
				return (
					(this.context.fillStyle = t),
					this.context.fillRect(0, 0, this.canvas.width, this.canvas.height),
					(this.dirty = !0),
					this
				);
			},
			loadFromURL: function (t, e) {
				var i = this,
					n = new Image();
				return (
					(n.onload = function () {
						i.width !== n.width || i.height !== n.height
							? i.resize(n.width, n.height)
							: i.clear(),
							i.context.drawImage(n, 0, 0),
							i.updateTexture(),
							e && e(),
							(n.onload = null),
							(n.src = ''),
							n.remove();
					}),
					(n.src = t),
					this
				);
			},
			loadFromURLPromise: function (i) {
				var n = this;
				return new Promise(function (t, e) {
					n.loadFromURL(i, t);
				});
			},
			getDataURL: function (t, e) {
				return this.canvas.toDataURL(t, e);
			},
			getPixel: function (t, e, i) {
				void 0 === i && (i = new J());
				var n = this.context.getImageData(t, e, 1, 1);
				return i.setTo(n.data[0], n.data[1], n.data[2], n.data[3]), i;
			},
			setPixel: function (t, e, i, n, s, r) {
				if ('number' != typeof i) {
					var o = i;
					(i = o.red), (n = o.green), (s = o.blue), (r = o.alpha);
				}
				void 0 === r && (r = 0 !== i || 0 !== n || 0 !== s ? 255 : 0);
				var h = this.context.createImageData(1, 1);
				return (
					(h.data[0] = i),
					(h.data[1] = n),
					(h.data[2] = s),
					(h.data[3] = r),
					this.context.putImageData(h, t, e),
					(this.dirty = !0),
					this
				);
			},
		},
		Z = {
			updateTexture: function (t, e) {
				t &&
					(e
						? t.call(e, this.canvas, this.context)
						: t(this.canvas, this.context)),
					(this.canvas.width === this.frame.width &&
						this.canvas.height === this.frame.height) ||
						this.frame.setSize(this.canvas.width, this.canvas.height),
					this.renderer.gl &&
						((this.frame.source.glTexture = this.renderer.canvasToTexture(
							this.canvas,
							this.frame.source.glTexture,
							!0
						)),
						(this.frame.glTexture = this.frame.source.glTexture)),
					(this.dirty = !1);
				var i = this.input;
				return (
					i &&
						!i.customHitArea &&
						((i.hitArea.width = this.width), (i.hitArea.height = this.height)),
					this
				);
			},
			generateTexture: function (t, e, i, n, s) {
				var r,
					o = this.canvas,
					h = this.scene.sys,
					a = h.game.renderer;
				void 0 === e && (e = 0),
					void 0 === i && (i = 0),
					void 0 === n ? (n = o.width) : (n *= this.resolution),
					void 0 === s ? (s = o.height) : (s *= this.resolution);
				var l = (r = h.textures.exists(t)
					? h.textures.get(t)
					: h.textures.createCanvas(t, n, s)).getSourceImage();
				l.width !== n && (l.width = n), l.height !== s && (l.height = s);
				var u = l.getContext('2d');
				return (
					u.clearRect(0, 0, n, s),
					u.drawImage(o, e, i, n, s),
					a.gl && r && a.canvasToTexture(l, r.source[0].glTexture, !0, 0),
					this
				);
			},
			loadTexture: function (t, e) {
				var i = this.scene.textures.getFrame(t, e);
				return (
					i &&
						(this.width !== i.cutWidth || this.height !== i.cutHeight
							? this.resize(i.cutWidth, i.cutHeight)
							: this.clear(),
						this.context.drawImage(
							i.source.image,
							i.cutX,
							i.cutY,
							i.cutWidth,
							i.cutHeight,
							0,
							0,
							this.canvas.width,
							this.canvas.height
						),
						(this.dirty = !0)),
					this
				);
			},
		},
		q = Phaser.Display.Canvas.CanvasPool,
		$ = Phaser.GameObjects.GameObject,
		Q = (function () {
			b(h, $);
			var o = w(h);
			function h(t, e, i, n, s) {
				var r;
				return (
					B(this, h),
					void 0 === e && (e = 0),
					void 0 === i && (i = 0),
					void 0 === n && (n = 1),
					void 0 === s && (s = 1),
					((r = o.call(this, t, 'rexCanvas')).renderer = t.sys.game.renderer),
					(r.resolution = 1),
					(r._width = n),
					(r._height = s),
					(n = Math.max(Math.ceil(n * r.resolution), 1)),
					(s = Math.max(Math.ceil(s * r.resolution), 1)),
					(r.canvas = q.create(E(r), n, s)),
					(r.context = r.canvas.getContext('2d')),
					(r.dirty = !1),
					r.setPosition(e, i),
					r.setOrigin(0.5, 0.5),
					r.initPipeline(),
					(r._crop = r.resetCropObject()),
					(r.texture = t.sys.textures.addCanvas(null, r.canvas, !0)),
					(r.frame = r.texture.get()),
					(r.frame.source.resolution = r.resolution),
					r.renderer &&
						r.renderer.gl &&
						(r.renderer.deleteTexture(r.frame.source.glTexture),
						(r.frame.source.glTexture = null)),
					(r.dirty = !0),
					t.sys.game.events.on(
						'contextrestored',
						function () {
							this.dirty = !0;
						},
						E(r)
					),
					r
				);
			}
			return (
				m(h, [
					{
						key: 'width',
						get: function () {
							return this._width;
						},
						set: function (t) {
							this.setSize(t, this._height);
						},
					},
					{
						key: 'height',
						get: function () {
							return this._height;
						},
						set: function (t) {
							this.setSize(this._width, t);
						},
					},
					{
						key: 'setSize',
						value: function (t, e) {
							return (
								(this._width === t && this._height === e) ||
									((this._width = t),
									(this._height = e),
									this.updateDisplayOrigin(),
									(t = Math.max(Math.ceil(t * this.resolution), 1)),
									(e = Math.max(Math.ceil(e * this.resolution), 1)),
									(this.canvas.width = t),
									(this.canvas.height = e),
									this.frame.setSize(t, e),
									(this.dirty = !0)),
								this
							);
						},
					},
					{
						key: 'displayWidth',
						get: function () {
							return this.scaleX * this._width;
						},
						set: function (t) {
							this.scaleX = t / this._width;
						},
					},
					{
						key: 'displayHeight',
						get: function () {
							return this.scaleY * this._height;
						},
						set: function (t) {
							this.scaleY = t / this._height;
						},
					},
					{
						key: 'setDisplaySize',
						value: function (t, e) {
							return (this.displayWidth = t), (this.displayHeight = e), this;
						},
					},
					{
						key: 'getCanvas',
						value: function (t) {
							return t || (this.dirty = !0), this.canvas;
						},
					},
					{
						key: 'getContext',
						value: function (t) {
							return t || (this.dirty = !0), this.context;
						},
					},
					{
						key: 'needRedraw',
						value: function () {
							return (this.dirty = !0), this;
						},
					},
					{
						key: 'preDestroy',
						value: function () {
							q.remove(this.canvas);
						},
					},
					{
						key: 'resize',
						value: function (t, e) {
							return this.setSize(t, e), this;
						},
					},
				]),
				h
			);
		})(),
		tt = Phaser.GameObjects.Components;
	Phaser.Class.mixin(Q, [
		tt.Alpha,
		tt.BlendMode,
		tt.Crop,
		tt.Depth,
		tt.Flip,
		tt.GetBounds,
		tt.Mask,
		tt.Origin,
		tt.Pipeline,
		tt.ScrollFactor,
		tt.Tint,
		tt.Transform,
		tt.Visible,
		N,
		K,
		Z,
	]);
	function et(t, e, i) {
		if (null == t) return t;
		switch (v(t)) {
			case 'string':
				return t;
			case 'number':
				return '#'.concat(st(Math.floor(t).toString(16), 6, '0', 1));
			case 'function':
				return t(e, i);
			case 'object':
				return t.hasOwnProperty('r')
					? t.hasOwnProperty('a')
						? 'rgba('
								.concat(t.r, ',')
								.concat(t.g, ',')
								.concat(t.b, ',')
								.concat(t.a, ')')
						: 'rgb('.concat(t.r, ',').concat(t.g, ',').concat(t.b, ')')
					: t.hasOwnProperty('h')
					? t.hasOwnProperty('a')
						? 'hsla('
								.concat(t.h, ',')
								.concat(t.s, ',')
								.concat(t.l, ',')
								.concat(t.a, ')')
						: 'hsl('.concat(t.h, ',').concat(t.s, ',').concat(t.l, ')')
					: t;
			default:
				return t;
		}
	}
	function it(t, e, i, n, s, r, o) {
		var h,
			a,
			l,
			u,
			c,
			d = new k(e, i, n, s, r),
			f = d.minWidth,
			v = d.minHeight,
			p = f <= n ? 1 : n / f,
			g = v <= s ? 1 : s / v,
			y = d.cornerRadius;
		t.save(),
			t.beginPath(),
			t.translate(e, i),
			(u = n - (a = (h = y.br).x * p)),
			(c = s - (l = h.y * g)),
			t.moveTo(n, c),
			0 < a && 0 < l
				? ut(t, u, c, a, l, ot, ht, o)
				: (t.lineTo(n, s), t.lineTo(u, s)),
			(u = a = (h = y.bl).x * p),
			(c = s - (l = h.y * g)),
			t.lineTo(a, s),
			0 < a && 0 < l
				? ut(t, u, c, a, l, ht, at, o)
				: (t.lineTo(0, s), t.lineTo(0, c)),
			(u = a = (h = y.tl).x * p),
			(c = l = h.y * g),
			t.lineTo(0, c),
			0 < a && 0 < l
				? ut(t, u, c, a, l, at, lt, o)
				: (t.lineTo(0, 0), t.lineTo(u, 0)),
			(u = n - (a = (h = y.tr).x * p)),
			(c = l = h.y * g),
			t.lineTo(u, 0),
			0 < a && 0 < l
				? ut(t, u, c, a, l, lt, ot, o)
				: (t.lineTo(n, 0), t.lineTo(n, c)),
			t.closePath(),
			t.restore();
	}
	function nt(t, e, i, n, s, r, o, h) {
		if (null != e || null != i) {
			var a = t.canvas.width,
				l = t.canvas.height;
			null == i && (n = 0);
			var u = n / 2;
			(a -= n),
				(l -= n),
				(function (t, e, i, n, s, r, o, h, a, l, u, c) {
					if ((it(t, e, i, n, s, r, c), null != o)) {
						var d;
						if (null != l)
							(d = u
								? t.createLinearGradient(0, 0, n, 0)
								: t.createLinearGradient(0, 0, 0, s)).addColorStop(0, o),
								d.addColorStop(1, l),
								(o = d);
						(t.fillStyle = o), t.fill();
					}
					null != h &&
						0 < a &&
						((t.strokeStyle = h), (t.lineWidth = a), t.stroke());
				})((t.canvas, t.context), u, u, a, l, s, e, i, n, r, o, h);
		}
	}
	var st = Phaser.Utils.String.Pad,
		rt = Phaser.Math.DegToRad,
		ot = rt(0),
		ht = rt(90),
		at = rt(180),
		lt = rt(270),
		ut = function (t, e, i, n, s, r, o, h) {
			if (null == h) t.ellipse(e, i, n, s, 0, r, o);
			else
				for (var a, l, u, c = (o - r) / (h += 1), d = 0; d <= h; d++)
					(u = r + c * d),
						(a = e + n * Math.cos(u)),
						(l = i + s * Math.sin(u)),
						t.lineTo(a, l);
		},
		ct = Phaser.Utils.Objects.GetValue,
		dt = (function () {
			b(p, Q);
			var v = w(p);
			function p(t, e, i, n, s, r, o, h, a, l, u) {
				var c;
				B(this, p),
					((c = v.call(this, t, e, i, n, s)).type = 'rexRoundRectangleCanvas');
				var d = ct(r, 'radius', r),
					f = ct(r, 'iteration', void 0);
				return (
					c.setRadius(d),
					c.setIteration(f),
					c.setFillStyle(o, l, u),
					c.setStrokeStyle(h, a),
					c
				);
			}
			return (
				m(p, [
					{
						key: 'radius',
						get: function () {
							return this._radius;
						},
						set: function (t) {
							(this.dirty |= this._radius != t), (this._radius = t);
						},
					},
					{
						key: 'setRadius',
						value: function (t) {
							return (this.radius = t), this;
						},
					},
					{
						key: 'iteration',
						get: function () {
							return this._iteration;
						},
						set: function (t) {
							(this.dirty |= this._iteration != t), (this._iteration = t);
						},
					},
					{
						key: 'setIteration',
						value: function (t) {
							return (this.iteration = t), this;
						},
					},
					{
						key: 'fillStyle',
						get: function () {
							return this._fillStyle;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								(this.dirty |= this._fillStyle != t),
								(this._fillStyle = t);
						},
					},
					{
						key: 'fillColor2',
						get: function () {
							return this._fillColor2;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								(this.dirty |= this._fillColor2 != t),
								(this._fillColor2 = t);
						},
					},
					{
						key: 'isHorizontalGradient',
						get: function () {
							return this._fillStyle;
						},
						set: function (t) {
							(this.dirty |= this._isHorizontalGradient != t),
								(this._isHorizontalGradient = t);
						},
					},
					{
						key: 'setFillStyle',
						value: function (t, e, i) {
							return (
								void 0 === i && (i = !0),
								(this.fillStyle = t),
								(this.fillColor2 = e),
								(this.isHorizontalGradient = i),
								this
							);
						},
					},
					{
						key: 'strokeStyle',
						get: function () {
							return this._strokeStyle;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								(this.dirty |= this._strokeStyle != t),
								(this._strokeStyle = t);
						},
					},
					{
						key: 'lineWidth',
						get: function () {
							return this._lineWidth;
						},
						set: function (t) {
							(this.dirty |= this._lineWidth != t), (this._lineWidth = t);
						},
					},
					{
						key: 'setStrokeStyle',
						value: function (t, e) {
							return (this.strokeStyle = t), (this.lineWidth = e), this;
						},
					},
					{
						key: 'updateTexture',
						value: function () {
							return (
								this.clear(),
								function () {
									nt(
										this,
										this.fillStyle,
										this.strokeStyle,
										this.lineWidth,
										this.radius,
										this.fillColor2,
										this.isHorizontalGradient,
										this.iteration
									);
								}.call(this),
								C(x(p.prototype), 'updateTexture', this).call(this),
								this
							);
						},
					},
				]),
				p
			);
		})();
	u.register('roundRectangleCanvas', function (t, e, i, n, s, r, o, h, a, l) {
		var u = new dt(this.scene, t, e, i, n, s, r, o, h, a, l);
		return this.scene.add.existing(u), u;
	}),
		G(window, 'RexPlugins.UI.RoundRectangleCanvas', dt);
	function ft(t) {
		var e = bt.create(this),
			i = e.getContext('2d');
		t.syncFont(e, i);
		var n = i.measureText(t.testString);
		if (
			n.hasOwnProperty('actualBoundingBoxAscent') &&
			n.hasOwnProperty('actualBoundingBoxDescent')
		) {
			var s = n.actualBoundingBoxAscent,
				r = n.actualBoundingBoxDescent,
				o = {ascent: s, descent: r, fontSize: s + r};
			return bt.remove(e), o;
		}
		var h = Math.ceil(n.width * t.baselineX),
			a = h,
			l = 2 * a;
		if (
			((a = (a * t.baselineY) | 0),
			(e.width = h),
			(e.height = l),
			(i.fillStyle = '#f00'),
			i.fillRect(0, 0, h, l),
			(i.font = t._font),
			(i.textBaseline = 'alphabetic'),
			(i.fillStyle = '#000'),
			i.fillText(t.testString, 0, a),
			(o = {ascent: 0, descent: 0, fontSize: 0}),
			!i.getImageData(0, 0, h, l))
		)
			return (
				(o.ascent = a),
				(o.descent = a + 6),
				(o.fontSize = o.ascent + o.descent),
				bt.remove(e),
				o
			);
		var u,
			c,
			d = i.getImageData(0, 0, h, l).data,
			f = d.length,
			v = 4 * h,
			p = 0,
			g = !1;
		for (u = 0; u < a; u++) {
			for (c = 0; c < v; c += 4)
				if (255 !== d[p + c]) {
					g = !0;
					break;
				}
			if (g) break;
			p += v;
		}
		for (o.ascent = a - u, p = f - v, g = !1, u = l; a < u; u--) {
			for (c = 0; c < v; c += 4)
				if (255 !== d[p + c]) {
					g = !0;
					break;
				}
			if (g) break;
			p -= v;
		}
		return (
			(o.descent = u - a), (o.fontSize = o.ascent + o.descent), bt.remove(e), o
		);
	}
	function vt(t) {
		if (Array.isArray(t)) t.length = 0;
		else for (var e in t) delete t[e];
	}
	function pt(t, e) {
		var i = Array.isArray(t);
		if ((void 0 === e ? (e = i ? [] : {}) : vt(e), i)) {
			e.length = t.length;
			for (var n = 0, s = t.length; n < s; n++) e[n] = t[n];
		} else for (var r in t) e[r] = t[r];
		return e;
	}
	function gt() {}
	function yt(t, e, i, n, s) {
		n <= 0 && (i = Qt);
		var r = ie;
		if ((ne.pushMultiple(r), !t || !t.length)) return r;
		for (var o, h, a, l = t.split(ee), u = 0, c = l.length; u < c; u++)
			if (((o = l[u]), (a = u === c - 1 ? Zt : qt), i !== Qt)) {
				var d, f;
				if (((h = 0 === u ? n - s : n), o.length <= 100))
					if ((b = e(o)) <= h) {
						r.push(ne.newline(o, b, a));
						continue;
					}
				for (
					var v,
						p = '',
						g = '',
						y = 0,
						k = 0,
						m = (d = i === te ? o.split(' ') : o).length;
					k < m;
					k++
				)
					(f = d[k]),
						i === te ? ((p += f), k < m - 1 && (p += ' ')) : (p += f),
						h < (v = e(p)) &&
							(0 === k
								? r.push(ne.newline('', 0, $t))
								: (r.push(ne.newline(g, y, $t)),
								  (p = f),
								  i === te && k < m - 1 && (p += ' '),
								  (v = e(p))),
							(h = n)),
						(g = p),
						(y = v);
				r.push(ne.newline(g, y, a));
			} else {
				var b = e(o);
				r.push(ne.newline(o, b, a));
			}
		return r;
	}
	var kt = Phaser.Renderer.WebGL.Utils,
		mt = {
			renderWebGL: function (t, e, i, n) {
				if (0 !== e.width && 0 !== e.height) {
					i.addToRenderList(e);
					var s = e.frame,
						r = s.width,
						o = s.height,
						h = kt.getTintAppendFloatAlpha,
						a = t.pipelines.set(e.pipeline, e),
						l = a.setTexture2D(s.glTexture, e);
					t.pipelines.preBatch(e),
						a.batchTexture(
							e,
							s.glTexture,
							r,
							o,
							e.x,
							e.y,
							r / e.style.resolution,
							o / e.style.resolution,
							e.scaleX,
							e.scaleY,
							e.rotation,
							e.flipX,
							e.flipY,
							e.scrollFactorX,
							e.scrollFactorY,
							e.displayOriginX,
							e.displayOriginY,
							0,
							0,
							r,
							o,
							h(e.tintTopLeft, i.alpha * e._alphaTL),
							h(e.tintTopRight, i.alpha * e._alphaTR),
							h(e.tintBottomLeft, i.alpha * e._alphaBL),
							h(e.tintBottomRight, i.alpha * e._alphaBR),
							e.tintFill,
							0,
							0,
							i,
							n,
							!1,
							l
						),
						t.pipelines.postBatch(e);
				}
			},
			renderCanvas: function (t, e, i, n) {
				0 !== e.width &&
					0 !== e.height &&
					(i.addToRenderList(e), t.batchSprite(e, e.frame, i, n));
			},
		},
		bt = Phaser.Display.Canvas.CanvasPool,
		xt = 0,
		Ct = 1,
		wt = 2,
		St = 0,
		Pt = 1,
		Ot = 2,
		Tt = /(?:\r\n|\r|\n)/,
		Mt = Phaser.Utils.Objects.GetAdvancedValue,
		_t = Phaser.Utils.Objects.GetValue,
		zt = {
			backgroundColor: ['backgroundColor', null, et],
			backgroundColor2: ['backgroundColor2', null, et],
			backgroundHorizontalGradient: ['backgroundHorizontalGradient', !0, null],
			backgroundStrokeColor: ['backgroundStrokeColor', null, et],
			backgroundStrokeLineWidth: ['backgroundStrokeLineWidth', 2, null],
			backgroundCornerRadius: ['backgroundCornerRadius', 0, null],
			backgroundCornerIteration: ['backgroundCornerIteration', null, null],
			fontFamily: ['fontFamily', 'Courier', null],
			fontSize: ['fontSize', '16px', null],
			fontStyle: ['fontStyle', '', null],
			color: ['color', '#fff', et],
			stroke: ['stroke', '#fff', et],
			strokeThickness: ['strokeThickness', 0, null],
			shadowOffsetX: ['shadow.offsetX', 0, null],
			shadowOffsetY: ['shadow.offsetY', 0, null],
			shadowColor: ['shadow.color', '#000', et],
			shadowBlur: ['shadow.blur', 0, null],
			shadowStroke: ['shadow.stroke', !1, null],
			shadowFill: ['shadow.fill', !1, null],
			underlineColor: ['underline.color', '#000', et],
			underlineThickness: ['underline.thickness', 0, null],
			underlineOffset: ['underline.offset', 0, null],
			halign: ['halign', 'left', null],
			valign: ['valign', 'top', null],
			maxLines: ['maxLines', 0, null],
			fixedWidth: ['fixedWidth', 0, null],
			fixedHeight: ['fixedHeight', 0, null],
			resolution: ['resolution', 0, null],
			lineSpacing: ['lineSpacing', 0, null],
			rtl: ['rtl', !1, null],
			testString: ['testString', '|MÃ‰qgy', null],
			baselineX: ['baselineX', 1.2, null],
			baselineY: ['baselineY', 1.4, null],
			wrapMode: ['wrap.mode', 0, null],
			wrapWidth: ['wrap.width', 0, null],
		},
		Bt = (function () {
			function n(t, e) {
				B(this, n),
					(this.parent = t),
					this.backgroundColor,
					this.backgroundColor2,
					this.backgroundHorizontalGradient,
					this.backgroundStrokeColor,
					this.backgroundStrokeLineWidth,
					this.backgroundCornerRadius,
					this.backgroundCornerIteration,
					this.fontFamily,
					this.fontSize,
					this.fontStyle,
					this.color,
					this.stroke,
					this.strokeThickness,
					this.shadowOffsetX,
					this.shadowOffsetY,
					this.shadowColor,
					this.shadowBlur,
					this.shadowStroke,
					this.shadowFill,
					this.underlineColor,
					this.underlineThickness,
					this.underlineOffset,
					this.halign,
					this.valign,
					this.maxLines,
					this.fixedWidth,
					this.fixedHeight,
					this.resolution,
					this.lineSpacing,
					this.rtl,
					this.testString,
					this.baselineX,
					this.baselineY,
					this._font,
					this.setStyle(e, !1);
				var i = _t(e, 'metrics', !1);
				this.metrics = i
					? {
							ascent: _t(i, 'ascent', 0),
							descent: _t(i, 'descent', 0),
							fontSize: _t(i, 'fontSize', 0),
					  }
					: ft(this);
			}
			return (
				m(n, [
					{
						key: 'canvas',
						get: function () {
							return this.parent.canvasText.canvas;
						},
					},
					{
						key: 'context',
						get: function () {
							return this.parent.canvasText.context;
						},
					},
					{
						key: 'isWrapFitMode',
						get: function () {
							return (
								0 < this.fixedWidth &&
								this.wrapMode !== St &&
								0 === this.wrapWidth
							);
						},
					},
					{
						key: 'setStyle',
						value: function (t, e) {
							if ((void 0 === e && (e = !0), t && t.hasOwnProperty('wrap'))) {
								var i = t.wrap;
								if (i.hasOwnProperty('mode')) {
									var n = i.mode;
									'string' == typeof n && (i.mode = Et[n]);
								} else i.hasOwnProperty('width') && (i.mode = 1);
							}
							for (var s in (t &&
								t.hasOwnProperty('fontSize') &&
								'number' == typeof t.fontSize &&
								(t.fontSize = t.fontSize.toString() + 'px'),
							zt)) {
								var r = zt[s],
									o = r[0],
									h = r[1],
									a = r[2],
									l = Mt(t, o, h);
								a && (l = a(l)), (this[s] = l);
							}
							var u = _t(t, 'font', null);
							this._font =
								null === u
									? this.fontStyle + ' ' + this.fontSize + ' ' + this.fontFamily
									: u;
							var c = _t(t, 'fill', null);
							return (
								null !== c && (this.color = c),
								e ? this.update(!0) : this.parent
							);
						},
					},
					{
						key: 'syncFont',
						value: function (t, e) {
							e.font = this._font;
						},
					},
					{
						key: 'syncStyle',
						value: function (t, e) {
							(e.textBaseline = 'alphabetic'),
								(e.fillStyle = this.color),
								(e.strokeStyle = this.stroke),
								(e.lineWidth = this.strokeThickness),
								(e.lineCap = 'round'),
								(e.lineJoin = 'round');
						},
					},
					{
						key: 'syncShadow',
						value: function (t, e) {
							e
								? ((t.shadowOffsetX = this.shadowOffsetX),
								  (t.shadowOffsetY = this.shadowOffsetY),
								  (t.shadowColor = this.shadowColor),
								  (t.shadowBlur = this.shadowBlur))
								: ((t.shadowOffsetX = 0),
								  (t.shadowOffsetY = 0),
								  (t.shadowColor = 0),
								  (t.shadowBlur = 0));
						},
					},
					{
						key: 'update',
						value: function (t) {
							return (
								t &&
									((this._font =
										this.fontStyle +
										' ' +
										this.fontSize +
										' ' +
										this.fontFamily),
									(this.metrics = ft(this))),
								this.parent.updateText(t)
							);
						},
					},
					{
						key: 'buildFont',
						value: function () {
							var t =
								this.fontStyle + ' ' + this.fontSize + ' ' + this.fontFamily;
							return t !== this._font && (this._font = t), this;
						},
					},
					{
						key: 'setFont',
						value: function (t) {
							return (
								'string' == typeof t
									? ((this.fontFamily = t),
									  (this.fontSize = ''),
									  (this.fontStyle = ''))
									: ((this.fontFamily = _t(t, 'fontFamily', 'Courier')),
									  (this.fontSize = _t(t, 'fontSize', '16px')),
									  (this.fontStyle = _t(t, 'fontStyle', ''))),
								this.update(!0)
							);
						},
					},
					{
						key: 'setFontFamily',
						value: function (t) {
							return (this.fontFamily = t), this.update(!0);
						},
					},
					{
						key: 'setFontStyle',
						value: function (t) {
							return (this.fontStyle = t), this.update(!0);
						},
					},
					{
						key: 'setFontSize',
						value: function (t) {
							return (
								'number' == typeof t && (t = t.toString() + 'px'),
								(this.fontSize = t),
								this.update(!0)
							);
						},
					},
					{
						key: 'setTestString',
						value: function (t) {
							return (this.testString = t), this.update(!0);
						},
					},
					{
						key: 'setFixedSize',
						value: function (t, e) {
							return (
								(this.fixedWidth = t),
								(this.fixedHeight = e),
								t && (this.parent.width = t),
								e && (this.parent.height = e),
								this.update(this.isWrapFitMode)
							);
						},
					},
					{
						key: 'setResolution',
						value: function (t) {
							return (this.resolution = t), this.update(!1);
						},
					},
					{
						key: 'setLineSpacing',
						value: function (t) {
							return (this.lineSpacing = t), this.update(!1);
						},
					},
					{
						key: 'setBackgroundColor',
						value: function (t, e, i) {
							return (
								void 0 === i && (i = !0),
								(this.backgroundColor = et(t, this.canvas, this.context)),
								(this.backgroundColor2 = et(e, this.canvas, this.context)),
								(this.backgroundHorizontalGradient = i),
								this.update(!1)
							);
						},
					},
					{
						key: 'setBackgroundStrokeColor',
						value: function (t, e) {
							return (
								(this.backgroundStrokeColor = et(t, this.canvas, this.context)),
								(this.backgroundStrokeLineWidth = e),
								this.update(!1)
							);
						},
					},
					{
						key: 'setBackgroundCornerRadius',
						value: function (t, e) {
							return (
								(this.backgroundCornerRadius = t),
								(this.backgroundCornerIteration = e),
								this.update(!1)
							);
						},
					},
					{
						key: 'setFill',
						value: function (t) {
							return (
								(this.color = et(t, this.canvas, this.context)), this.update(!1)
							);
						},
					},
					{
						key: 'setColor',
						value: function (t) {
							return (
								(this.color = et(t, this.canvas, this.context)), this.update(!1)
							);
						},
					},
					{
						key: 'setStroke',
						value: function (t, e) {
							return (
								void 0 === t
									? (this.strokeThickness = 0)
									: (void 0 === e && (e = this.strokeThickness),
									  (this.stroke = et(t, this.canvas, this.context)),
									  (this.strokeThickness = e)),
								this.update(!0)
							);
						},
					},
					{
						key: 'setShadow',
						value: function (t, e, i, n, s, r) {
							return (
								void 0 === t && (t = 0),
								void 0 === e && (e = 0),
								void 0 === i && (i = '#000'),
								void 0 === n && (n = 0),
								void 0 === s && (s = !1),
								void 0 === r && (r = !0),
								(this.shadowOffsetX = t),
								(this.shadowOffsetY = e),
								(this.shadowColor = et(i, this.canvas, this.context)),
								(this.shadowBlur = n),
								(this.shadowStroke = s),
								(this.shadowFill = r),
								this.update(!1)
							);
						},
					},
					{
						key: 'setShadowOffset',
						value: function (t, e) {
							return (
								void 0 === t && (t = 0),
								void 0 === e && (e = t),
								(this.shadowOffsetX = t),
								(this.shadowOffsetY = e),
								this.update(!1)
							);
						},
					},
					{
						key: 'setShadowColor',
						value: function (t) {
							return (
								void 0 === t && (t = '#000'),
								(this.shadowColor = et(t, this.canvas, this.context)),
								this.update(!1)
							);
						},
					},
					{
						key: 'setShadowBlur',
						value: function (t) {
							return (
								void 0 === t && (t = 0), (this.shadowBlur = t), this.update(!1)
							);
						},
					},
					{
						key: 'setShadowStroke',
						value: function (t) {
							return (this.shadowStroke = t), this.update(!1);
						},
					},
					{
						key: 'setShadowFill',
						value: function (t) {
							return (this.shadowFill = t), this.update(!1);
						},
					},
					{
						key: 'setUnderline',
						value: function (t, e, i) {
							return (
								void 0 === t && (t = '#000'),
								void 0 === e && (e = 0),
								void 0 === i && (i = 0),
								(this.underlineColor = et(t, this.canvas, this.context)),
								(this.underlineThickness = e),
								(this.underlineOffset = i),
								this.update(!1)
							);
						},
					},
					{
						key: 'setUnderlineColor',
						value: function (t) {
							return (
								void 0 === t && (t = '#000'),
								(this.underlineColor = et(t, this.canvas, this.context)),
								this.update(!1)
							);
						},
					},
					{
						key: 'setUnderlineThickness',
						value: function (t) {
							return (
								void 0 === t && (t = 0),
								(this.underlineThickness = t),
								this.update(!1)
							);
						},
					},
					{
						key: 'setUnderlineOffset',
						value: function (t) {
							return (
								void 0 === t && (t = 0),
								(this.underlineOffset = t),
								this.update(!1)
							);
						},
					},
					{
						key: 'setWrapMode',
						value: function (t) {
							return (
								'string' == typeof t && (t = Et[t.toLowerCase()] || 0),
								(this.wrapMode = t),
								this.update(!0)
							);
						},
					},
					{
						key: 'setWrapWidth',
						value: function (t) {
							return (this.wrapWidth = t), this.update(!1);
						},
					},
					{
						key: 'setAlign',
						value: function (t, e) {
							return (
								void 0 === t && (t = 'left'),
								void 0 === e && (e = 'top'),
								(this.halign = t),
								(this.valign = e),
								this.update(!1)
							);
						},
					},
					{
						key: 'setHAlign',
						value: function (t) {
							return (
								void 0 === t && (t = 'left'), (this.halign = t), this.update(!1)
							);
						},
					},
					{
						key: 'setVAlign',
						value: function (t) {
							return (
								void 0 === t && (t = 'top'), (this.valign = t), this.update(!1)
							);
						},
					},
					{
						key: 'setMaxLines',
						value: function (t) {
							return (
								void 0 === t && (t = 0), (this.maxLines = t), this.update(!1)
							);
						},
					},
					{
						key: 'getTextMetrics',
						value: function () {
							var t = this.metrics;
							return {
								ascent: t.ascent,
								descent: t.descent,
								fontSize: t.fontSize,
							};
						},
					},
					{
						key: 'lineHeight',
						get: function () {
							return (
								this.metrics.fontSize + this.strokeThickness + this.lineSpacing
							);
						},
					},
					{
						key: 'toJSON',
						value: function () {
							var t = {};
							for (var e in zt) t[e] = this[e];
							return (t.metrics = this.getTextMetrics()), t;
						},
					},
					{
						key: 'destroy',
						value: function () {
							this.parent = void 0;
						},
					},
				]),
				n
			);
		})(),
		Et = {none: St, word: Pt, char: Ot, character: Ot},
		Dt = {
			draw: function (t, e, i, n) {
				var s = this.penManager;
				this.hitAreaManager.clear();
				var r = this.context;
				r.save();
				var o = this.defaultStyle;
				this.clear(),
					nt(
						this,
						o.backgroundColor,
						o.backgroundStrokeColor,
						o.backgroundStrokeLineWidth,
						o.backgroundCornerRadius,
						o.backgroundColor2,
						o.backgroundHorizontalGradient,
						o.backgroundCornerIteration
					),
					(t += this.startXOffset),
					(e += this.startYOffset);
				var h,
					a,
					l,
					u,
					c,
					d,
					f = o.halign,
					v = o.valign,
					p = o.lineHeight,
					g = s.lines,
					y = g.length,
					k = o.maxLines;
				(u =
					(l =
						0 < k && k < y
							? ((a = k),
							  'center' === v
									? Math.floor((y - a) / 2)
									: 'bottom' === v
									? y - a
									: 0)
							: ((a = y), 0)) + a),
					(d =
						'center' === v
							? Math.max((n - a * p) / 2, 0)
							: 'bottom' === v
							? Math.max(n - a * p - 2, 0)
							: 0),
					(d += e);
				for (var m = l; m < u; m++)
					if (0 !== (h = s.getLineWidth(m))) {
						(c = 'center' === f ? (i - h) / 2 : 'right' === f ? i - h : 0),
							(c += t);
						for (var b = g[m], x = 0, C = b.length; x < C; x++)
							this.drawPen(b[x], c, d);
					}
				r.restore();
			},
			drawPen: function (t, e, i) {
				(e += t.x), (i += t.y);
				var n = this.canvas,
					s = this.context;
				s.save();
				var r = this.parser.propToContextStyle(this.defaultStyle, t.prop);
				r.buildFont(),
					r.syncFont(n, s),
					r.syncStyle(n, s),
					0 < r.underlineThickness &&
						0 < t.width &&
						this.drawUnderline(e, i, t.width, r),
					t.isTextPen && this.drawText(e, i, t.text, r),
					t.isImagePen && this.drawImage(e, i, t.prop.img, r),
					s.restore(),
					t.hasAreaMarker &&
						0 < t.width &&
						this.hitAreaManager.add(
							t.prop.area,
							e,
							i - this.startYOffset,
							t.width,
							this.defaultStyle.lineHeight
						);
			},
			clear: function () {
				var t = this.canvas;
				this.context.clearRect(0, 0, t.width, t.height);
			},
			drawUnderline: function (t, e, i, n) {
				(e += n.underlineOffset - n.underlineThickness / 2),
					this.autoRound && ((t = Math.round(t)), (e = Math.round(e)));
				var s = this.context,
					r = s.lineCap;
				(s.lineCap = 'butt'),
					(s.strokeStyle = n.underlineColor),
					(s.lineWidth = n.underlineThickness),
					s.beginPath(),
					s.moveTo(t, e),
					s.lineTo(t + i, e),
					s.stroke(),
					(s.lineCap = r);
			},
			drawText: function (t, e, i, n) {
				this.autoRound && ((t = Math.round(t)), (e = Math.round(e)));
				var s = this.context;
				n.strokeThickness &&
					(n.syncShadow(s, n.shadowStroke), s.strokeText(i, t, e)),
					n.color &&
						'none' !== n.color &&
						(n.syncShadow(s, n.shadowFill), s.fillText(i, t, e));
			},
			drawImage: function (t, e, i) {
				var n = this.parent.imageManager,
					s = n.get(i),
					r = n.getFrame(i);
				(t += s.left),
					(e += -this.startYOffset + s.y),
					this.autoRound && ((t = Math.round(t)), (e = Math.round(e))),
					this.context.drawImage(
						r.source.image,
						r.cutX,
						r.cutY,
						r.cutWidth,
						r.cutHeight,
						t,
						e,
						s.width,
						s.height
					);
			},
		},
		jt = (function () {
			function t() {
				B(this, t), (this.items = []);
			}
			return (
				m(t, [
					{
						key: 'destroy',
						value: function () {
							this.clear(), (this.items = void 0);
						},
					},
					{
						key: 'pop',
						value: function () {
							return 0 < this.items.length ? this.items.pop() : null;
						},
					},
					{
						key: 'push',
						value: function (t) {
							return this.items.push(t), this;
						},
					},
					{
						key: 'pushMultiple',
						value: function (t) {
							return this.items.push.apply(this.items, t), (t.length = 0), this;
						},
					},
					{
						key: 'clear',
						value: function () {
							return (this.items.length = 0), this;
						},
					},
				]),
				t
			);
		})(),
		Rt = Phaser.Utils.Objects.GetValue,
		Lt = xt,
		Yt = Ct,
		It = (function () {
			function e(t) {
				B(this, e), (this.prop = {}), this.resetFromJSON(t);
			}
			return (
				m(e, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							(this.text = Rt(t, 'text', '')),
								(this.x = Rt(t, 'x', 0)),
								(this.y = Rt(t, 'y', 0)),
								(this.width = Rt(t, 'width', 0));
							var e = Rt(t, 'prop', null);
							null === e && (e = {}),
								(this.prop = e),
								(this.newLineMode = Rt(t, 'newLineMode', 0)),
								(this.startIndex = Rt(t, 'startIndex', 0));
						},
					},
					{
						key: 'plainText',
						get: function () {
							var t = this.text;
							return this.newLineMode === Yt && (t += '\n'), t;
						},
					},
					{
						key: 'wrapText',
						get: function () {
							var t = this.text;
							return this.newLineMode !== Lt && (t += '\n'), t;
						},
					},
					{
						key: 'rawTextLength',
						get: function () {
							var t = this.text.length;
							return this.newLineMode === Yt && (t += 1), t;
						},
					},
					{
						key: 'endIndex',
						get: function () {
							return this.startIndex + this.rawTextLength;
						},
					},
					{
						key: 'lastX',
						get: function () {
							return this.x + this.width;
						},
					},
					{
						key: 'isTextPen',
						get: function () {
							return '' !== this.text;
						},
					},
					{
						key: 'isImagePen',
						get: function () {
							return !!this.prop.img;
						},
					},
					{
						key: 'hasAreaMarker',
						get: function () {
							return !!this.prop.area;
						},
					},
				]),
				e
			);
		})(),
		At = Phaser.Utils.Objects.GetFastValue,
		Ft = xt,
		Wt = wt,
		Ht = new jt(),
		Xt = new jt(),
		Vt = (function () {
			function h(t) {
				B(this, h),
					(this.pens = []),
					(this.lines = []),
					(this.maxLinesWidth = void 0),
					(this.PensPool = At(t, 'pensPool', Ht)),
					(this.LinesPool = At(t, 'linesPool', Xt)),
					(this.tagToText = At(t, 'tagToText', gt)),
					(this.tagToTextScope = At(t, 'tagToTextScope', void 0));
			}
			return (
				m(h, [
					{
						key: 'destroy',
						value: function () {
							this.freePens(),
								(this.tagToText = void 0),
								(this.tagToTextScope = void 0);
						},
					},
					{
						key: 'freePens',
						value: function () {
							for (var t = 0, e = this.lines.length; t < e; t++)
								this.lines[t].length = 0;
							this.PensPool.pushMultiple(this.pens),
								this.LinesPool.pushMultiple(this.lines),
								(this.maxLinesWidth = void 0);
						},
					},
					{
						key: 'addTextPen',
						value: function (t, e, i, n, s, r) {
							var o = this.PensPool.pop();
							return (
								null == o && (o = new It()),
								(Gt.text = t),
								(Gt.x = e),
								(Gt.y = i),
								(Gt.width = n),
								(Gt.prop = s),
								(Gt.newLineMode = r),
								o.resetFromJSON(Gt),
								this.addPen(o),
								this
							);
						},
					},
					{
						key: 'addImagePen',
						value: function (t, e, i, n) {
							return this.addTextPen('', t, e, i, n, Ft), this;
						},
					},
					{
						key: 'addNewLinePen',
						value: function () {
							var t = this.lastPen,
								e = t ? t.lastX : 0,
								i = t ? t.y : 0,
								n = t ? pt(t.prop) : null;
							return this.addTextPen('', e, i, 0, n, Wt), this;
						},
					},
					{
						key: 'addPen',
						value: function (t) {
							var e = this.lastPen;
							(t.startIndex = null == e ? 0 : e.endIndex), this.pens.push(t);
							var i = this.lastLine;
							null == i &&
								((i = this.LinesPool.pop() || []), this.lines.push(i)),
								i.push(t),
								t.newLineMode !== Ft &&
									((i = this.LinesPool.pop() || []), this.lines.push(i)),
								(this.maxLinesWidth = void 0);
						},
					},
					{
						key: 'clone',
						value: function (t) {
							null == t && (t = new h()), t.freePens();
							for (var e = 0, i = this.lines.length; e < i; e++)
								for (var n = this.lines[e], s = 0, r = n.length; s < r; s++) {
									var o = n[s];
									t.addPen(
										o.text,
										o.x,
										o.y,
										o.width,
										pt(o.prop),
										o.newLineMode
									);
								}
							return t;
						},
					},
					{
						key: 'lastPen',
						get: function () {
							return this.pens[this.pens.length - 1];
						},
					},
					{
						key: 'lastLine',
						get: function () {
							return this.lines[this.lines.length - 1];
						},
					},
					{
						key: 'getLineStartIndex',
						value: function (t) {
							if (t >= this.lines.length) return this.getLineEndIndex(t);
							var e = this.lines[t];
							return e && e[0] ? e[0].startIndex : 0;
						},
					},
					{
						key: 'getLineEndIndex',
						value: function (t) {
							t >= this.lines.length && (t = this.lines.length - 1);
							var e,
								i,
								n = !1;
							for (
								e = t;
								0 <= e && !(n = null != (i = this.lines[e]) && 0 < i.length);
								e--
							);
							return n ? i[i.length - 1].endIndex : 0;
						},
					},
					{
						key: 'getLineWidth',
						value: function (t) {
							var e = this.lines[t];
							if (!e) return 0;
							var i = e[e.length - 1];
							return null == i ? 0 : i.lastX;
						},
					},
					{
						key: 'getMaxLineWidth',
						value: function () {
							if (void 0 !== this.maxLinesWidth) return this.maxLinesWidth;
							for (var t, e = 0, i = 0, n = this.lines.length; i < n; i++)
								e < (t = this.getLineWidth(i)) && (e = t);
							return (this.maxLinesWidth = e);
						},
					},
					{
						key: 'getLineWidths',
						value: function () {
							for (var t = [], e = 0, i = this.lines.length; e < i; e++)
								t.push(this.getLineWidth(e));
							return t;
						},
					},
					{
						key: 'linesCount',
						get: function () {
							return this.lines.length;
						},
					},
					{
						key: 'plainText',
						get: function () {
							for (var t = '', e = this.pens, i = 0, n = e.length; i < n; i++)
								t += e[i].plainText;
							return t;
						},
					},
					{
						key: 'rawTextLength',
						get: function () {
							for (
								var t = 0, e = this.pens, i = 0, n = this.pens.length;
								i < n;
								i++
							)
								t += e[i].rawTextLength;
							return t;
						},
					},
					{
						key: 'getSliceTagText',
						value: function (t, e, i) {
							if ((void 0 === t && (t = 0), void 0 === e)) {
								var n = this.lastPen;
								if (null == n) return '';
								e = n.endIndex;
							}
							void 0 === i && (i = !1);
							for (
								var s, r, o, h, a, l, u = '', c = 0, d = this.pens.length;
								c < d &&
								((h = (s = this.pens[c]).endIndex) <= t ||
									((s = this.pens[c]),
									(r = i ? s.wrapText : s.plainText),
									(a = s.prop),
									(t <= (o = s.startIndex) && h <= e) ||
										(r = r.substring(t - o, e - o)),
									this.tagToTextScope
										? (u += this.tagToText.call(this.tagToTextScope, r, a, l))
										: (u += this.tagToText(r, a, l)),
									(l = a),
									!(e <= h)));
								c++
							);
							return u;
						},
					},
				]),
				h
			);
		})(),
		Gt = {},
		Ut = Phaser.Geom.Rectangle,
		Nt = new jt(),
		Jt = (function () {
			function t() {
				B(this, t), (this.hitAreas = []);
			}
			return (
				m(t, [
					{
						key: 'destroy',
						value: function () {
							this.clear();
						},
					},
					{
						key: 'clear',
						value: function () {
							return Nt.pushMultiple(this.hitAreas), this;
						},
					},
					{
						key: 'add',
						value: function (t, e, i, n, s) {
							var r = Nt.pop();
							return (
								null === r ? (r = new Ut(e, i, n, s)) : r.setTo(e, i, n, s),
								(r.key = t),
								this.hitAreas.push(r),
								this
							);
						},
					},
					{
						key: 'getFirstHitArea',
						value: function (t, e) {
							for (var i, n = this.hitAreas, s = 0, r = n.length; s < r; s++)
								if ((i = n[s]).contains(t, e)) return i;
							return null;
						},
					},
					{
						key: 'drawBounds',
						value: function (t, e, i) {
							void 0 === e && (e = 16777215),
								i &&
									t
										.save()
										.scaleCanvas(i.scaleX, i.scaleY)
										.rotateCanvas(i.rotation)
										.translateCanvas(i.x, i.y);
							for (var n, s = this.hitAreas, r = 0, o = s.length; r < o; r++)
								(n = s[r]),
									t.lineStyle(1, e).strokeRect(n.x, n.y, n.width, n.height);
							return i && t.restore(), this;
						},
					},
				]),
				t
			);
		})(),
		Kt = function (t, e, i, n) {
			var s = this.hitAreaManager.getFirstHitArea(i, n);
			if (null !== s) {
				var r = s.key;
				this.parent.emit(''.concat(t, '-').concat(r), e, i, n),
					this.parent.emit(t, r, e, i, n);
			}
		},
		Zt = xt,
		qt = Ct,
		$t = wt,
		Qt = St,
		te = Pt,
		ee = Tt,
		ie = [],
		ne = new jt();
	ne.newline = function (t, e, i) {
		var n = this.pop();
		return (
			null === n && (n = {}),
			(n.text = t),
			(n.width = e),
			(n.newLineMode = i),
			n
		);
	};
	var se = Phaser.Utils.Objects.GetValue,
		re = St,
		oe = xt,
		he = (function () {
			function i(t) {
				B(this, i),
					(this.parent = t.parent),
					(this.context = se(t, 'context', null)),
					(this.canvas = this.context.canvas),
					(this.parser = se(t, 'parser', null)),
					(this.defaultStyle = se(t, 'style', null)),
					(this.autoRound = !0),
					(this.pensPool = se(t, 'pensPool', null)),
					(this.penManager = this.newPenManager()),
					(this._tmpPenManager = null),
					(this.hitAreaManager = new Jt());
				var e = this.context;
				this.getTextWidth = function (t) {
					return e.measureText(t).width;
				};
			}
			return (
				m(i, [
					{
						key: 'destroy',
						value: function () {
							(this.context = void 0),
								(this.canvas = void 0),
								(this.parser = void 0),
								(this.defaultStyle = void 0),
								this.penManager &&
									(this.penManager.destroy(), (this.penManager = void 0)),
								this._tmpPenManager &&
									(this._tmpPenManager.destroy(),
									(this._tmpPenManager = void 0)),
								this.hitAreaManager &&
									(this.hitAreaManager.destroy(),
									(this.hitAreaManager = void 0));
						},
					},
					{
						key: 'updatePenManager',
						value: function (t, e, i, n, s) {
							if (
								(void 0 === s && (s = this.penManager), s.freePens(), '' === t)
							)
								return s;
							if (this.parent.style.isWrapFitMode) {
								var r = this.parent.padding;
								i = this.parent.style.fixedWidth - r.left - r.right;
							}
							for (
								var o,
									h,
									a,
									l,
									u,
									c = this.canvas,
									d = this.context,
									f = 0,
									v = 0,
									p = this.parser.splitText(t),
									g = 0,
									y = p.length;
								g < y;
								g++
							)
								if (
									((o = (l = this.parser.tagTextToProp(p[g], h)).plainText),
									(h = l.prop).img)
								) {
									var k = this.imageManager.getOuterWidth(h.img);
									0 < i &&
										e !== re &&
										i < f + k &&
										(s.addNewLinePen(), (v += n), (f = 0)),
										s.addImagePen(f, v, k, pt(h)),
										(f += k);
								} else if ('' !== o) {
									d.save(),
										(a = this.parser.propToContextStyle(
											this.defaultStyle,
											h
										)).buildFont(),
										a.syncFont(c, d),
										a.syncStyle(c, d);
									for (
										var m,
											b = 0,
											x = (u = yt(
												o,
												function (t) {
													return d.measureText(t).width;
												},
												e,
												i,
												f
											)).length;
										b < x;
										b++
									)
										(m = u[b]),
											s.addTextPen(m.text, f, v, m.width, pt(h), m.newLineMode),
											m.newLineMode !== oe
												? ((f = 0), (v += n))
												: (f += m.width);
									d.restore();
								}
							return s;
						},
					},
					{
						key: 'startXOffset',
						get: function () {
							return this.defaultStyle.strokeThickness / 2;
						},
					},
					{
						key: 'startYOffset',
						get: function () {
							var t = this.defaultStyle;
							return t.strokeThickness / 2 + t.metrics.ascent;
						},
					},
					{
						key: 'lines',
						get: function () {
							return this.penManager.lines;
						},
					},
					{
						key: 'desplayLinesCount',
						get: function () {
							var t = this.penManager.linesCount,
								e = this.defaultStyle.maxLines;
							return 0 < e && e < t && (t = e), t;
						},
					},
					{
						key: 'linesWidth',
						get: function () {
							return this.penManager.getMaxLineWidth();
						},
					},
					{
						key: 'linesHeight',
						get: function () {
							var t = this.desplayLinesCount,
								e = this.defaultStyle.lineHeight * t;
							return 0 < t && (e -= this.defaultStyle.lineSpacing), e;
						},
					},
					{
						key: 'imageManager',
						get: function () {
							return this.parent.imageManager;
						},
					},
					{
						key: 'newPenManager',
						value: function () {
							return new Vt({
								pensPool: this.pensPool,
								tagToText: this.parser.propToTagText,
								tagToTextScope: this.parser,
							});
						},
					},
					{
						key: 'tmpPenManager',
						get: function () {
							return (
								null === this._tmpPenManager &&
									(this._tmpPenManager = this.newPenManager()),
								this._tmpPenManager
							);
						},
					},
					{
						key: 'getPlainText',
						value: function (t, e, i) {
							var n;
							if (null == t) n = this.penManager.plainText;
							else {
								var s = this.parser.splitText(t, 1);
								n = '';
								for (var r = 0, o = s.length; r < o; r++) n += s[r];
							}
							return (
								(null == e && null == i) ||
									(null == e && (e = 0),
									null == i && (i = n.length),
									(n = n.substring(e, i))),
								n
							);
						},
					},
					{
						key: 'getPenManager',
						value: function (t, e) {
							if (void 0 === t) return this.copyPenManager(e, this.penManager);
							void 0 === e && (e = this.newPenManager());
							var i = this.defaultStyle;
							return (
								this.updatePenManager(
									t,
									i.wrapMode,
									i.wrapWidth,
									i.lineHeight,
									e
								),
								e
							);
						},
					},
					{
						key: 'getText',
						value: function (t, e, i, n) {
							if (null == t) return this.penManager.getSliceTagText(e, i, n);
							var s = this.tmpPenManager,
								r = this.defaultStyle;
							return (
								this.updatePenManager(
									t,
									r.wrapMode,
									r.wrapWidth,
									r.lineHeight,
									s
								),
								s.getSliceTagText(e, i, n)
							);
						},
					},
					{
						key: 'copyPenManager',
						value: function (t, e) {
							return void 0 === e && (e = this.penManager), e.copy(t);
						},
					},
					{
						key: 'getTextWidth',
						value: function (t) {
							return void 0 === t && (t = this.penManager), t.getMaxLineWidth();
						},
					},
					{
						key: 'getLastPen',
						value: function (t) {
							return void 0 === t && (t = this.penManager), t.lastPen;
						},
					},
				]),
				i
			);
		})(),
		ae = {
			setInteractive: function () {
				this.parent
					.on(
						'pointerdown',
						function (t, e, i, n) {
							Kt.call(this, 'areadown', t, e, i);
						},
						this
					)
					.on(
						'pointerup',
						function (t, e, i, n) {
							Kt.call(this, 'areaup', t, e, i);
						},
						this
					);
			},
		};
	Object.assign(he.prototype, Dt, ae);
	var le,
		ue = Phaser.Utils.Objects.GetValue,
		ce = (function () {
			function e(t) {
				B(this, e), (this.textureManager = t), (this.images = {});
			}
			return (
				m(e, [
					{
						key: 'add',
						value: function (t, e) {
							if ('string' == typeof t) this._add(t, e);
							else if (Array.isArray(t))
								for (var i = 0, n = (s = t).length; i < n; i++) this._add(s[i]);
							else {
								var s = t;
								for (var t in s) this._add(t, s[t]);
							}
							return this;
						},
					},
					{
						key: '_add',
						value: function (t, e) {
							void 0 === e && (e = {key: t});
							var i = e.key,
								n = e.frame,
								s = e.width,
								r = e.height;
							if (void 0 === s || void 0 === r) {
								var o = this.textureManager.getFrame(i, n),
									h = o ? o.cutWidth : 0,
									a = o ? o.cutHeight : 0;
								void 0 === s && void 0 === r
									? ((s = h), (r = a))
									: void 0 === s
									? (s = h * (r / a))
									: void 0 === r && (r = a * (s / h));
							}
							this.images[t] = {
								key: i,
								frame: n,
								width: s,
								height: r,
								y: ue(e, 'y', 0),
								left: ue(e, 'left', 0),
								right: ue(e, 'right', 0),
							};
						},
					},
					{
						key: 'remove',
						value: function (t) {
							return (
								this.images.hasOwnProperty(t) && delete this.images[t], this
							);
						},
					},
					{
						key: 'get',
						value: function (t) {
							return (
								this.images.hasOwnProperty(t) ||
									(this.textureManager.exists(t) && this.add(t)),
								this.images[t]
							);
						},
					},
					{
						key: 'getOuterWidth',
						value: function (t) {
							var e = this.get(t);
							return e ? e.width + e.left + e.right : 0;
						},
					},
					{
						key: 'getFrame',
						value: function (t) {
							var e = this.get(t);
							return e ? this.textureManager.getFrame(e.key, e.frame) : void 0;
						},
					},
					{
						key: 'hasTexture',
						value: function (t) {
							return !!this.getFrame(t);
						},
					},
				]),
				e
			);
		})();
	var de = Phaser.Utils.Objects.IsPlainObject,
		fe = Phaser.DOM.AddToDOM,
		ve = Phaser.Display.Canvas.CanvasPool,
		pe = Phaser.GameObjects.GameObject,
		ge = Phaser.Utils.Objects.GetValue,
		ye = Phaser.DOM.RemoveFromDOM,
		ke = Tt,
		me = {},
		be = (function () {
			b(c, pe);
			var u = w(c);
			function c(t, e, i, n, s, r, o) {
				var h;
				if ((B(this, c), de(e))) {
					var a = e;
					(e = ge(a, 'x', 0)),
						(i = ge(a, 'y', 0)),
						(n = ge(a, 'text', '')),
						(s = ge(a, 'style', ''));
				}
				if (
					(void 0 === e && (e = 0),
					void 0 === i && (i = 0),
					((h = u.call(this, t, r)).renderer = t.sys.game.renderer),
					h.setPosition(e, i),
					h.setOrigin(0, 0),
					h.initPipeline(),
					(h.canvas = ve.create(E(h))),
					(h.context = h.canvas.getContext('2d')),
					s)
				) {
					if (s.hasOwnProperty('align')) {
						var l = s.align;
						delete s.align, (s.halign = l);
					}
					s.hasOwnProperty('stroke') &&
						!s.hasOwnProperty('strokeThickness') &&
						(s.strokeThickness = 1);
				}
				return (
					(h.style = new Bt(E(h), s)),
					(h.autoRound = !0),
					(h._text = void 0),
					(h.padding = {left: 0, right: 0, top: 0, bottom: 0}),
					(h.width = 1),
					(h.height = 1),
					(h.dirty = !1),
					0 === h.style.resolution && (h.style.resolution = 1),
					(h._crop = h.resetCropObject()),
					(h.texture = t.sys.textures.addCanvas(null, h.canvas, !0)),
					(h.frame = h.texture.get()),
					(h.frame.source.resolution = h.style.resolution),
					h.renderer.gl &&
						(h.renderer.deleteTexture(h.frame.source.glTexture),
						(h.frame.source.glTexture = null)),
					me.hasOwnProperty(r) || (me[r] = new jt()),
					(h.canvasText = new he({
						parent: E(h),
						context: h.context,
						parser: o,
						style: h.style,
						pensPool: me[r],
					})),
					s && s.padding && h.setPadding(s.padding),
					h.setText(n),
					t.sys.game.events.on(
						'contextrestored',
						function () {
							this.dirty = !0;
						},
						E(h)
					),
					h
				);
			}
			return (
				m(c, [
					{
						key: 'text',
						get: function () {
							return this._text;
						},
						set: function (t) {
							this.setText(t);
						},
					},
					{
						key: 'initRTL',
						value: function () {
							this.style.rtl &&
								((this.canvas.dir = 'rtl'),
								(this.context.direction = 'rtl'),
								(this.canvas.style.display = 'none'),
								fe(this.canvas, this.scene.sys.canvas),
								(this.originX = 1));
						},
					},
					{
						key: 'setText',
						value: function (t) {
							return (
								t || 0 === t || (t = ''),
								Array.isArray(t) && (t = t.join('\n')),
								t !== this._text &&
									((this._text = t.toString()), this.updateText()),
								this
							);
						},
					},
					{
						key: 'setStyle',
						value: function (t) {
							return this.style.setStyle(t);
						},
					},
					{
						key: 'setFont',
						value: function (t) {
							return this.style.setFont(t);
						},
					},
					{
						key: 'setFontFamily',
						value: function (t) {
							return this.style.setFontFamily(t);
						},
					},
					{
						key: 'setFontSize',
						value: function (t) {
							return this.style.setFontSize(t);
						},
					},
					{
						key: 'setFontStyle',
						value: function (t) {
							return this.style.setFontStyle(t);
						},
					},
					{
						key: 'setFixedSize',
						value: function (t, e) {
							return this.style.setFixedSize(t, e);
						},
					},
					{
						key: 'setBackgroundColor',
						value: function (t, e, i) {
							return this.style.setBackgroundColor(t, e, i);
						},
					},
					{
						key: 'setBackgroundStrokeColor',
						value: function (t, e) {
							return this.style.setBackgroundStrokeColor(t, e);
						},
					},
					{
						key: 'setBackgroundCornerRadius',
						value: function (t, e) {
							return this.style.setBackgroundCornerRadius(t, e);
						},
					},
					{
						key: 'setFill',
						value: function (t) {
							return this.style.setFill(t);
						},
					},
					{
						key: 'setColor',
						value: function (t) {
							return this.style.setColor(t);
						},
					},
					{
						key: 'setStroke',
						value: function (t, e) {
							return this.style.setStroke(t, e);
						},
					},
					{
						key: 'setShadow',
						value: function (t, e, i, n, s, r) {
							return this.style.setShadow(t, e, i, n, s, r);
						},
					},
					{
						key: 'setShadowOffset',
						value: function (t, e) {
							return this.style.setShadowOffset(t, e);
						},
					},
					{
						key: 'setShadowColor',
						value: function (t) {
							return this.style.setShadowColor(t);
						},
					},
					{
						key: 'setShadowBlur',
						value: function (t) {
							return this.style.setShadowBlur(t);
						},
					},
					{
						key: 'setShadowStroke',
						value: function (t) {
							return this.style.setShadowStroke(t);
						},
					},
					{
						key: 'setShadowFill',
						value: function (t) {
							return this.style.setShadowFill(t);
						},
					},
					{
						key: 'setWrapMode',
						value: function (t) {
							return this.style.setWrapMode(t);
						},
					},
					{
						key: 'setWrapWidth',
						value: function (t) {
							return this.style.setWrapWidth(t);
						},
					},
					{
						key: 'setAlign',
						value: function (t) {
							return this.style.setHAlign(t);
						},
					},
					{
						key: 'setLineSpacing',
						value: function (t) {
							return this.style.setLineSpacing(t);
						},
					},
					{
						key: 'setPadding',
						value: function (t, e, i, n) {
							if ('object' === v(t)) {
								var s = t,
									r = ge(s, 'x', null);
								i =
									null !== r
										? (t = r)
										: ((t = ge(s, 'left', 0)), ge(s, 'right', t));
								var o = ge(s, 'y', null);
								n =
									null !== o
										? (e = o)
										: ((e = ge(s, 'top', 0)), ge(s, 'bottom', e));
							} else
								void 0 === t && (t = 0),
									void 0 === e && (e = t),
									void 0 === i && (i = t),
									void 0 === n && (n = e);
							return (
								(this.padding.left = t),
								(this.padding.top = e),
								(this.padding.right = i),
								(this.padding.bottom = n),
								this.updateText(!1)
							);
						},
					},
					{
						key: 'setResolution',
						value: function (t) {
							return this.style.setResolution(t);
						},
					},
					{
						key: 'setMaxLines',
						value: function (t) {
							return this.style.setMaxLines(t);
						},
					},
					{
						key: 'updateText',
						value: function (t) {
							void 0 === t && (t = !0);
							var e = this.canvasText,
								i = this.style;
							t &&
								e.updatePenManager(
									this._text,
									i.wrapMode,
									i.wrapWidth,
									i.lineHeight
								);
							var n,
								s,
								r = this.padding;
							0 === i.fixedWidth
								? ((this.width = e.linesWidth + r.left + r.right),
								  (n = e.linesWidth))
								: ((this.width = i.fixedWidth),
								  (n = this.width - r.left - r.right) < e.linesWidth &&
										(n = e.linesWidth)),
								0 === i.fixedHeight
									? ((this.height = e.linesHeight + r.top + r.bottom),
									  (s = e.linesHeight))
									: ((this.height = i.fixedHeight),
									  (s = this.height - r.top - r.bottom) < e.linesHeight &&
											(s = e.linesHeight));
							var o = this.width,
								h = this.height;
							this.updateDisplayOrigin();
							var a = i.resolution;
							(o *= a),
								(h *= a),
								(o = Math.max(Math.ceil(o), 1)),
								(h = Math.max(Math.ceil(h), 1));
							var l = this.canvas,
								u = this.context;
							l.width !== o || l.height !== h
								? ((l.width = o), (l.height = h), this.frame.setSize(o, h))
								: u.clearRect(0, 0, o, h),
								u.save(),
								u.scale(a, a),
								e.draw(r.left, r.top, n, s),
								u.restore(),
								this.renderer.gl &&
									((this.frame.source.glTexture = this.renderer.canvasToTexture(
										l,
										this.frame.source.glTexture,
										!0
									)),
									(this.frame.glTexture = this.frame.source.glTexture)),
								(this.dirty = !0);
							var c = this.input;
							return (
								c &&
									!c.customHitArea &&
									((c.hitArea.width = this.width),
									(c.hitArea.height = this.height)),
								this
							);
						},
					},
					{
						key: 'getTextMetrics',
						value: function () {
							return this.style.getTextMetrics();
						},
					},
					{
						key: 'toJSON',
						value: function () {
							var t = xe.ToJSON(this),
								e = {
									autoRound: this.autoRound,
									text: this._text,
									style: this.style.toJSON(),
									resolution: this.resolution,
									padding: {
										left: this.padding.left,
										right: this.padding.right,
										top: this.padding.top,
										bottom: this.padding.bottom,
									},
								};
							return (t.data = e), t;
						},
					},
					{
						key: 'preDestroy',
						value: function () {
							this.style.rtl && ye(this.canvas),
								ve.remove(this.canvas),
								this.canvasText.destroy();
						},
					},
					{
						key: 'setInteractive',
						value: function (t, e, i) {
							return (
								pe.prototype.setInteractive.call(this, t, e, i),
								this.canvasText.setInteractive(),
								this
							);
						},
					},
					{
						key: 'getWrappedText',
						value: function (t, e, i) {
							return (t = this.canvasText.getText(t, e, i, !0)).split(ke);
						},
					},
					{
						key: 'getPlainText',
						value: function (t, e, i) {
							return this.canvasText.getPlainText(t, e, i);
						},
					},
					{
						key: 'getText',
						value: function (t, e, i) {
							return this.canvasText.getText(t, e, i, !1);
						},
					},
					{
						key: 'getSubString',
						value: function (t, e, i) {
							return this.getText(t, e, i);
						},
					},
					{
						key: 'copyPenManager',
						value: function (t) {
							return this.canvasText.copyPenManager(t);
						},
					},
					{
						key: 'getPenManager',
						value: function (t, e) {
							return this.canvasText.getPenManager(t, e);
						},
					},
					{
						key: 'setSize',
						value: function (t, e) {
							return this.setFixedSize(t, e);
						},
					},
					{
						key: 'resize',
						value: function (t, e) {
							return this.setFixedSize(t, e);
						},
					},
					{
						key: 'lineSpacing',
						get: function () {
							return this.style.lineSpacing;
						},
						set: function (t) {
							this.setLineSpacing(t);
						},
					},
					{
						key: 'imageManager',
						get: function () {
							return (
								(t = this.scene.textures), void 0 === le && (le = new ce(t)), le
							);
							var t;
						},
					},
					{
						key: 'addImage',
						value: function (t, e) {
							return this.imageManager.add(t, e), this;
						},
					},
					{
						key: 'drawAreaBounds',
						value: function (t, e) {
							return (
								this.canvasText.hitAreaManager.drawBounds(t, e, this), this
							);
						},
					},
				]),
				c
			);
		})(),
		xe = Phaser.GameObjects.Components;
	Phaser.Class.mixin(be, [
		xe.Alpha,
		xe.BlendMode,
		xe.ComputedSize,
		xe.Crop,
		xe.Depth,
		xe.Flip,
		xe.GetBounds,
		xe.Mask,
		xe.Origin,
		xe.Pipeline,
		xe.ScrollFactor,
		xe.Tint,
		xe.Transform,
		xe.Visible,
		mt,
	]);
	var Ce = {plainText: null, prevProp: null},
		we = new Bt(),
		Se = {},
		Pe = {
			splitText: function (t, e) {
				for (var i = [], n = 0; ; ) {
					var s = Me.exec(t);
					if (!s) {
						var r = t.length;
						return n < r && i.push(t.substring(n, r)), i;
					}
					var o = s[0],
						h = Me.lastIndex - o.length;
					n < h && i.push(t.substring(n, h)),
						void 0 === e && i.push(o),
						(n = Me.lastIndex);
				}
			},
			tagTextToProp: function (t, e) {
				var i, n;
				null == e && (e = {}),
					e.img && Oe(e, Ke, 'img'),
					(i = _e.test(t)
						? (Oe(e, Ze, 'b', !0), '')
						: ze.test(t)
						? (Oe(e, Ke, 'b'), '')
						: Be.test(t)
						? (Oe(e, Ze, 'i', !0), '')
						: Ee.test(t)
						? (Oe(e, Ke, 'i'), '')
						: De.test(t)
						? ((n = t.match(De)), Oe(e, Ze, 'size', n[1] + 'px'), '')
						: je.test(t)
						? (Oe(e, Ke, 'size'), '')
						: Re.test(t)
						? ((n = t.match(Re)), Oe(e, Ze, 'color', n[1]), '')
						: Le.test(t)
						? (Oe(e, Ke, 'color'), '')
						: Ye.test(t)
						? ((n = t.match(Ye)), Oe(e, Ze, 'u', !0), '')
						: Ie.test(t)
						? ((n = t.match(Ie)), Oe(e, Ze, 'u', n[1]), '')
						: Ae.test(t)
						? (Oe(e, Ke, 'u'), '')
						: Fe.test(t)
						? (Oe(e, Ze, 'shadow', !0), '')
						: We.test(t)
						? (Oe(e, Ke, 'shadow'), '')
						: He.test(t)
						? (Oe(e, Ze, 'stroke', !0), '')
						: Xe.test(t)
						? ((n = t.match(Xe)), Oe(e, Ze, 'stroke', n[1]), '')
						: Ve.test(t)
						? (Oe(e, Ke, 'stroke'), '')
						: Ge.test(t)
						? ((n = t.match(Ge)), Oe(e, Ze, 'img', n[1]), '')
						: Ue.test(t)
						? (Oe(e, Ke, 'img'), '')
						: Ne.test(t)
						? ((n = t.match(Ne)), Oe(e, Ze, 'area', n[1]), '')
						: Je.test(t)
						? (Oe(e, Ke, 'area'), '')
						: t);
				var s = Ce;
				return (s.plainText = i), (s.prop = e), s;
			},
			propToContextStyle: function (t, e) {
				var i = we;
				if (e.hasOwnProperty('img')) i.image = e.img;
				else {
					if (
						((i.image = null),
						e.hasOwnProperty('family')
							? (i.fontFamily = e.family)
							: (i.fontFamily = t.fontFamily),
						e.hasOwnProperty('size'))
					) {
						var n = e.size;
						'number' == typeof n && (n = n.toString() + 'px'), (i.fontSize = n);
					} else i.fontSize = t.fontSize;
					(i.fontStyle = Te(e.b, e.i)),
						e.hasOwnProperty('color')
							? (i.color = e.color)
							: (i.color = t.color),
						e.hasOwnProperty('stroke')
							? (!0 === e.stroke
									? (i.stroke = t.stroke)
									: (i.stroke = e.stroke),
							  (i.strokeThickness = t.strokeThickness))
							: ((i.stroke = t.stroke), (i.strokeThickness = 0));
				}
				return (
					e.hasOwnProperty('shadow')
						? (!0 === e.shadow
								? (i.shadowColor = t.shadowColor)
								: (i.shadowColor = e.shadow),
						  (i.shadowOffsetX = t.shadowOffsetX),
						  (i.shadowOffsetY = t.shadowOffsetY),
						  (i.shadowBlur = t.shadowBlur),
						  (i.shadowStroke = !0),
						  (i.shadowFill = !0))
						: ((i.shadowColor = '#000'),
						  (i.shadowOffsetX = 0),
						  (i.shadowOffsetY = 0),
						  (i.shadowBlur = 0),
						  (i.shadowStroke = !1),
						  (i.shadowFill = !1)),
					e.hasOwnProperty('u')
						? (!0 === e.u
								? (i.underlineColor = t.underlineColor)
								: (i.underlineColor = e.u),
						  (i.underlineThickness = t.underlineThickness),
						  (i.underlineOffset = t.underlineOffset))
						: ((i.underlineColor = '#000'),
						  (i.underlineThickness = 0),
						  (i.underlineOffset = 0)),
					i
				);
			},
			propToTagText: function (t, e, i) {
				for (var n in (null == i && (i = Se), i))
					e.hasOwnProperty(n) || (t = '[/' + n + ']' + t);
				var s = '';
				for (var n in e)
					i[n] !== e[n] &&
						('size' === n
							? (s += '[size=' + e[n].replace('px', '') + ']')
							: 'color' === n || 'stroke' === n || 'img' === n
							? (s += '[' + n + '=' + e[n] + ']')
							: 'u' === n
							? !0 === e[n]
								? (s += '[u]')
								: (s += '[u=' + e[n] + ']')
							: (s += '[' + n + ']'));
				return (t = s + t);
			},
		},
		Oe = function (t, e, i, n) {
			return e === Ze ? (t[i] = n) : t.hasOwnProperty(i) && delete t[i], t;
		},
		Te = function (t, e) {
			return t && e ? 'bold italic' : t ? 'bold' : e ? 'italic' : '';
		},
		Me = /\[b\]|\[\/b\]|\[i\]|\[\/i\]|\[size=(\d+)\]|\[\/size\]|\[color=([a-z]+|#[0-9abcdef]+)\]|\[\/color\]|\[u\]|\[u=([a-z]+|#[0-9abcdef]+)\]|\[\/u\]|\[shadow\]|\[\/shadow\]|\[stroke\]|\[stroke=([a-z]+|#[0-9abcdef]+)\]|\[\/stroke\]|\[img=([^\]]+)\]|\[\/img\]|\[area=([^\]]+)\]|\[\/area\]/gi,
		_e = /\[b\]/i,
		ze = /\[\/b\]/i,
		Be = /\[i\]/i,
		Ee = /\[\/i\]/i,
		De = /\[size=(\d+)\]/i,
		je = /\[\/size\]/i,
		Re = /\[color=([a-z]+|#[0-9abcdef]+)\]/i,
		Le = /\[\/color\]/i,
		Ye = /\[u\]/i,
		Ie = /\[u=([a-z]+|#[0-9abcdef]+)\]/i,
		Ae = /\[\/u\]/i,
		Fe = /\[shadow\]/i,
		We = /\[\/shadow\]/i,
		He = /\[stroke\]/i,
		Xe = /\[stroke=([a-z]+|#[0-9abcdef]+)\]/i,
		Ve = /\[\/stroke\]/i,
		Ge = /\[img=([^\]]+)\]/i,
		Ue = /\[\/img\]/i,
		Ne = /\[area=([^\]]+)\]/i,
		Je = /\[\/area\]/i,
		Ke = !1,
		Ze = !0,
		qe = (function () {
			b(o, be);
			var r = w(o);
			function o(t, e, i, n, s) {
				return B(this, o), r.call(this, t, e, i, n, s, 'rexBBCodeText', Pe);
			}
			return o;
		})();
	u.register('BBCodeText', function (t, e, i, n) {
		var s = new qe(this.scene, t, e, i, n);
		return this.scene.add.existing(s), s;
	}),
		G(window, 'RexPlugins.UI.BBCodeText', qe);
	var $e = {plainText: null, prevProp: null},
		Qe = new Bt(),
		ti = (function () {
			function e(t) {
				B(this, e), void 0 === t && (t = {}), (this.tags = t);
			}
			return (
				m(e, [
					{
						key: 'addTag',
						value: function (t, e) {
							this.tags[t] = e;
						},
					},
					{
						key: 'splitText',
						value: function (t, e) {
							for (var i = [], n = 0; ; ) {
								var s = ni.exec(t);
								if (!s) {
									var r = t.length;
									return n < r && i.push(t.substring(n, r)), i;
								}
								var o = s[0],
									h = ni.lastIndex - o.length;
								if ((n < h && i.push(t.substring(n, h)), void 0 === e))
									i.push(o);
								else if (1 === e)
									if (si.test(o)) {
										var a = o.match(ri);
										i.push(a[2]);
									} else if (oi.test(o)) {
										a = o.match(hi);
										i.push(a[2]);
									}
								n = ni.lastIndex;
							}
						},
					},
					{
						key: 'tagTextToProp',
						value: function (t) {
							var e, i;
							if (si.test(t)) {
								if (null != (r = t.match(ri))) {
									var n = r[1],
										s = this.tags;
									((i = s.hasOwnProperty(n) ? s[n] : {})._class = n),
										(e = r[2]);
								}
							} else if (oi.test(t)) {
								var r;
								if (null != (r = t.match(hi))) {
									var o = r[1];
									((i = ei(o))._style = o), (e = r[2]);
								}
							}
							null == e && (e = t), null == i && (i = {});
							var h = $e;
							return (h.plainText = e), (h.prop = i), h;
						},
					},
					{
						key: 'propToContextStyle',
						value: function (t, e) {
							var i = Qe;
							if (e.hasOwnProperty('img')) i.image = e.img;
							else {
								if (
									((i.image = null),
									e.hasOwnProperty('family') ||
										e.hasOwnProperty('fontFamily') ||
										e.hasOwnProperty('font-family'))
								) {
									var n = e.hasOwnProperty('family')
										? e.family
										: e.hasOwnProperty('fontFamily')
										? e.fontFamily
										: e['font-family'];
									i.fontFamily = n;
								} else i.fontFamily = t.fontFamily;
								if (
									e.hasOwnProperty('size') ||
									e.hasOwnProperty('fontSize') ||
									e.hasOwnProperty('font-size')
								) {
									var s = e.hasOwnProperty('size')
										? e.size
										: e.hasOwnProperty('fontSize')
										? e.fontSize
										: e['font-size'];
									'number' == typeof s && (s = s.toString() + 'px'),
										(i.fontSize = s);
								} else i.fontSize = t.fontSize;
								if (
									e.hasOwnProperty('style') ||
									e.hasOwnProperty('fontStyle') ||
									e.hasOwnProperty('font-style')
								) {
									var r = e.hasOwnProperty('style')
										? e.style
										: e.hasOwnProperty('fontStyle')
										? e.fontStyle
										: e['font-style'];
									i.fontStyle = r;
								} else i.fontStyle = t.fontStyle;
								if (
									e.hasOwnProperty('color') ||
									e.hasOwnProperty('font-color')
								) {
									var o = e.hasOwnProperty('color') ? e.color : e['font-color'];
									i.color = o;
								} else i.color = t.color;
								if (e.hasOwnProperty('stroke')) {
									var h = e.stroke;
									(i.stroke = h.hasOwnProperty('color') ? h.color : t.stroke),
										(i.strokeThickness = h.hasOwnProperty('thinkness')
											? h.thinkness
											: t.strokeThickness);
								} else
									(i.stroke = t.stroke),
										(i.strokeThickness = t.strokeThickness);
							}
							if (e.hasOwnProperty('shadow')) {
								var a = e.shadow;
								(i.shadowColor = a.hasOwnProperty('color')
									? a.color
									: t.shadowColor),
									(i.shadowOffsetX = a.hasOwnProperty('offsetX')
										? a.offsetX
										: t.shadowOffsetX),
									(i.shadowOffsetY = a.hasOwnProperty('offsetY')
										? a.offsetY
										: t.shadowOffsetY),
									(i.shadowBlur = a.hasOwnProperty('blur')
										? a.blur
										: t.shadowBlur),
									(i.shadowStroke = !0),
									(i.shadowFill = !0);
							} else
								(i.shadowColor = t.shadowColor),
									(i.shadowOffsetX = t.shadowOffsetX),
									(i.shadowOffsetY = t.shadowOffsetY),
									(i.shadowBlur = t.shadowBlur),
									(i.shadowStroke = t.shadowStroke),
									(i.shadowFill = t.shadowFill);
							if (e.hasOwnProperty('u') || e.hasOwnProperty('underline')) {
								var l = e.hasOwnProperty('u') ? e.u : e.underline;
								(i.underlineColor = l.hasOwnProperty('color')
									? l.color
									: t.underlineColor),
									(i.underlineThickness = l.hasOwnProperty('thinkness')
										? l.thinkness
										: t.underlineThickness),
									(i.underlineOffset = l.hasOwnProperty('offset')
										? l.offset
										: t.underlineOffset);
							} else
								(i.underlineColor = t.underlineColor),
									(i.underlineThickness = t.underlineThickness),
									(i.underlineOffset = t.underlineOffset);
							return i;
						},
					},
					{
						key: 'propToTagText',
						value: function (t, e) {
							return e.hasOwnProperty('_class')
								? '' === t && this.isTextTag(e._class)
									? ''
									: "<class='" + e._class + "'>" + t + '</class>'
								: e.hasOwnProperty('_style')
								? "<style='" + e._style + "'>" + t + '</style>'
								: void 0;
						},
					},
					{
						key: 'destroy',
						value: function () {
							this.tags = void 0;
						},
					},
					{
						key: 'isTextTag',
						value: function (t) {
							var e = this.tags[t];
							return !!e && null == e.img;
						},
					},
				]),
				e
			);
		})(),
		ei = function (t) {
			for (
				var e, i, n, s = {}, r = 0, o = (t = t.split(';')).length;
				r < o;
				r++
			)
				if (((i = (e = t[r].split(':'))[0]), (n = e[1]), !ii(i) && !ii(n))) {
					switch (i) {
						case 'stroke':
							var h = n.split(' ');
							(n = {}),
								1 <= (l = h.length) && (n.color = h[0]),
								2 <= l && (n.thinkness = parseInt(h[1].replace('px', '')));
							break;
						case 'shadow':
							var a = n.split(' ');
							(n = {}),
								1 <= (l = a.length) && (n.color = a[0]),
								2 <= l && (n.offsetX = parseInt(a[1].replace('px', ''))),
								3 <= l && (n.offsetY = parseInt(a[2].replace('px', ''))),
								4 <= l && (n.blur = parseInt(a[3].replace('px', '')));
							break;
						case 'u':
						case 'underline':
							var l,
								u = n.split(' ');
							(n = {}),
								1 <= (l = u.length) && (n.color = u[0]),
								2 <= l && (n.thinkness = parseInt(u[1].replace('px', ''))),
								3 <= l && (n.offset = parseInt(u[2].replace('px', '')));
					}
					s[i] = n;
				}
			return s;
		},
		ii = function (t) {
			return 0 === (t = t.replace(ai, '')).length;
		},
		ni = /<\s*class=["|']([^"|']+)["|']\s*\>([\s\S]*?)<\s*\/class\s*\>|<\s*style=["|']([^"|']+)["|']\s*\>([\s\S]*?)<\s*\/style\s*\>/g,
		si = /<\s*class=/i,
		ri = /<\s*class=["|']([^"|']+)["|']\s*\>([\s\S]*?)<\s*\/class\s*\>/,
		oi = /<\s*style=/i,
		hi = /<\s*style=["|']([^"|']+)["|']\s*\>([\s\S]*?)<\s*\/style\s*\>/,
		ai = /^\s+|\s+$/,
		li = Phaser.Utils.Objects.GetValue,
		ui = (function () {
			b(l, be);
			var a = w(l);
			function l(t, e, i, n, s) {
				var r;
				B(this, l);
				var o = li(s, 'tags', void 0),
					h = new ti(o);
				return (
					((r = a.call(this, t, e, i, n, s, 'rexTagText', h)).parser = h), r
				);
			}
			return (
				m(l, [
					{
						key: 'addTag',
						value: function (t, e) {
							return this.parser.addTag(t, e), this.updateText(!0);
						},
					},
					{
						key: 'addTags',
						value: function (t) {
							for (var e in t) this.parser.addTag(e, t[e]);
							return this.updateText(!0);
						},
					},
					{
						key: 'preDestroy',
						value: function () {
							C(x(l.prototype), 'preDestroy', this).call(this),
								this.parser.destroy(),
								(this.parser = void 0);
						},
					},
				]),
				l
			);
		})();
	u.register('tagText', function (t, e, i, n) {
		var s = new ui(this.scene, t, e, i, n);
		return this.scene.add.existing(s), s;
	}),
		G(window, 'RexPlugins.UI.TagText', ui);
	var ci = Phaser.GameObjects.Zone,
		di = Phaser.Utils.Array.Add,
		fi = Phaser.Utils.Array.Remove,
		vi = (function () {
			b(h, ci);
			var o = w(h);
			function h(t, e, i, n, s) {
				var r;
				return (
					B(this, h),
					void 0 === n && (n = 1),
					void 0 === s && (s = 1),
					((r = o.call(this, t, e, i, n, s)).children = []),
					r
				);
			}
			return (
				m(h, [
					{
						key: 'destroy',
						value: function (t) {
							this.scene &&
								(this.clear(!t),
								C(x(h.prototype), 'destroy', this).call(this, t));
						},
					},
					{
						key: 'contains',
						value: function (t) {
							return -1 !== this.children.indexOf(t);
						},
					},
					{
						key: 'add',
						value: function (t) {
							return (
								di(
									this.children,
									t,
									0,
									function (t) {
										t.on('destroy', this.remove, this);
									},
									this
								),
								this
							);
						},
					},
					{
						key: 'remove',
						value: function (t, e) {
							return (
								fi(this.children, t, function (t) {
									t.off('destroy', this.remove, this), e && t.destroy();
								}),
								this
							);
						},
					},
					{
						key: 'clear',
						value: function (t) {
							for (var e, i = 0, n = this.children.length; i < n; i++)
								(e = this.children[i]).off('destroy', this.remove, this),
									t && e.destroy();
							return (this.children.length = 0), this;
						},
					},
				]),
				h
			);
		})(),
		pi = Phaser.GameObjects.Components;
	Phaser.Class.mixin(vi, [pi.Alpha, pi.Flip]);
	function gi(t) {
		var e;
		return t.hasOwnProperty('rexContainer') && (e = t.rexContainer.parent), e;
	}
	function yi(t) {
		for (var e = gi(t); e; ) e = gi((t = e));
		return t;
	}
	function ki(t) {
		return (
			t.hasOwnProperty('rexContainer') || (t.rexContainer = {}), t.rexContainer
		);
	}
	function mi(t) {
		return (
			this.setParent(t),
			this.resetChildState(t)
				.updateChildVisible(t)
				.updateChildActive(t)
				.updateChildScrollFactor(t)
				.updateChildMask(t),
			Si.call(this, t),
			this
		);
	}
	function bi(t) {
		this.setParent(t);
		var e = ki(t);
		return (
			(e.x = t.x),
			(e.y = t.y),
			(e.rotation = t.rotation),
			(e.scaleX = t.scaleX),
			(e.scaleY = t.scaleY),
			(e.flipX = t.flipX),
			(e.flipY = t.flipY),
			(e.alpha = t.alpha),
			(e.visible = t.visible),
			(e.active = t.active),
			this.updateChildPosition(t)
				.updateChildAlpha(t)
				.updateChildVisible(t)
				.updateChildActive(t)
				.updateChildScrollFactor(t)
				.updateChildMask(t),
			Si.call(this, t),
			this
		);
	}
	function xi(t, e) {
		return t === e ? 1 : t / e;
	}
	function Ci(t) {
		return '[object Array]' === Object.prototype.toString.call(t);
	}
	var wi = {
			setParent: function (t, e) {
				void 0 === e && (e = this);
				var i = ki(t);
				return (
					e
						? ((i.parent = e), (i.self = t))
						: ((i.parent = null), (i.self = null)),
					this
				);
			},
			getParent: function (t) {
				return void 0 === t && (t = this), gi(t);
			},
			getTopmostParent: function (t) {
				return void 0 === t && (t = this), yi(t);
			},
		},
		Si = vi.prototype.add,
		Pi = {
			add: function (t) {
				return Array.isArray(t) ? this.addMultiple(t) : mi.call(this, t), this;
			},
			addMultiple: function (t) {
				for (var e = 0, i = t.length; e < i; e++) mi.call(this, t[e]);
				return this;
			},
			addLocal: function (t) {
				return Array.isArray(t) ? this.addMultiple(t) : bi.call(this, t), this;
			},
			addLocalMultiple: function (t) {
				for (var e = 0, i = t.length; e < i; e++) bi.call(this, t[e]);
				return this;
			},
		},
		Oi = vi.prototype.remove,
		Ti = vi.prototype.clear,
		Mi = {
			remove: function (t, e) {
				return (
					gi(t) !== this || (this.setParent(t, null), Oi.call(this, t, e)), this
				);
			},
			clear: function (t) {
				for (var e = 0, i = this.children.length; e < i; e++)
					this.setParent(this.children[e], null);
				return Ti.call(this, t), this;
			},
		},
		_i = {
			getLocalState: function (t) {
				return ki(t);
			},
			resetChildState: function (t) {
				return (
					this.resetChildPositionState(t)
						.resetChildVisibleState(t)
						.resetChildAlphaState(t)
						.resetChildActiveState(t),
					this
				);
			},
			resetChildrenState: function (t) {
				for (var e = 0, i = t.length; e < i; e++) this.resetChildState(t[e]);
				return this;
			},
			syncProperties: function () {
				return (
					this.syncPosition()
						.syncVisible()
						.syncAlpha()
						.syncActive()
						.syncScrollFactor()
						.syncMask(),
					this
				);
			},
		},
		zi = Phaser.Math.RotateAround,
		Bi = {
			worldToLocal: function (t) {
				return (
					(t.x -= this.x),
					(t.y -= this.y),
					zi(t, 0, 0, -this.rotation),
					(t.x /= this.scaleX),
					(t.y /= this.scaleY),
					(t.x *= this.flipX ? -1 : 1),
					(t.y *= this.flipY ? -1 : 1),
					t
				);
			},
			localToWorld: function (t) {
				return (
					(t.x *= this.flipX ? -1 : 1),
					(t.y *= this.flipY ? -1 : 1),
					(t.x *= this.scaleX),
					(t.y *= this.scaleY),
					zi(t, 0, 0, this.rotation),
					(t.x += this.x),
					(t.y += this.y),
					t
				);
			},
		},
		Ei = {
			updateChildPosition: function (t) {
				t.isRexContainerLite && (t.syncChildrenEnable = !1);
				var e = ki(t),
					i = e.parent;
				return (
					(t.x = e.x),
					(t.y = e.y),
					i.localToWorld(t),
					(t.scaleX = e.scaleX * i.scaleX),
					(t.scaleY = e.scaleY * i.scaleY),
					void 0 !== t.flipX &&
						((t.flipX = i.flipX ? !e.flipX : e.flipX),
						(t.flipY = i.flipY ? !e.flipY : e.flipY)),
					(t.rotation = e.rotation + i.rotation),
					t.isRexContainerLite &&
						((t.syncChildrenEnable = !0), t.syncPosition()),
					this
				);
			},
			syncPosition: function () {
				return (
					this.syncChildrenEnable &&
						this.children.forEach(this.updateChildPosition, this),
					this
				);
			},
			resetChildPositionState: function (t) {
				var e = ki(t),
					i = e.parent;
				return (
					(e.x = t.x),
					(e.y = t.y),
					i.worldToLocal(e),
					(e.scaleX = xi(t.scaleX, i.scaleX)),
					(e.scaleY = xi(t.scaleY, i.scaleY)),
					void 0 !== t.flipX && ((e.flipX = t.flipX), (e.flipY = t.flipY)),
					(e.rotation = t.rotation - i.rotation),
					this
				);
			},
			setChildPosition: function (t, e, i) {
				return (t.x = e), (t.y = i), this.resetChildPositionState(t), this;
			},
			setChildLocalPosition: function (t, e, i) {
				var n = ki(t);
				return (n.x = e), (n.y = i), this.updateChildPosition(t), this;
			},
		},
		Di = {
			updateChildRotation: function (t) {
				var e = ki(t),
					i = e.parent;
				return (t.rotation = i.rotation + e.rotation), this;
			},
			syncRotation: function () {
				return (
					this.syncChildrenEnable &&
						this.children.forEach(this.updateChildRotation, this),
					this
				);
			},
			resetChildRotationState: function (t) {
				var e = ki(t),
					i = e.parent;
				return (e.rotation = t.rotation - i.rotation), this;
			},
			setChildRotation: function (t, e) {
				return (t.rotation = e), this.resetChildRotationState(t), this;
			},
			setChildLocalRotation: function (t, e) {
				return (ki(t).rotation = e), this.updateChildRotation(t), this;
			},
		},
		ji = {
			updateChildScale: function (t) {
				var e = ki(t),
					i = e.parent;
				return (
					(t.scaleX = i.scaleX * e.scaleX),
					(t.scaleY = i.scaleY * e.scaleY),
					this
				);
			},
			syncScale: function () {
				return (
					this.syncChildrenEnable &&
						this.children.forEach(this.updateChildScale, this),
					this
				);
			},
			resetChildScaleState: function (t) {
				var e = ki(t),
					i = e.parent;
				return (
					(e.scaleX = xi(t.scaleX, i.scaleX)),
					(e.scaleY = xi(t.scaleY, i.scaleY)),
					this
				);
			},
			setChildScale: function (t, e, i) {
				return (
					void 0 === i && (i = e),
					(t.scaleX = e),
					(t.scaleY = i),
					this.resetChildScaleState(t),
					this
				);
			},
			setChildLocalScale: function (t, e, i) {
				void 0 === i && (i = e);
				var n = ki(t);
				return (n.scaleX = e), (n.scaleY = i), this.updateChildScale(t), this;
			},
			setChildDisplaySize: function (t, e, i) {
				return t.setDisplaySize(e, i), this.resetChildScaleState(t), this;
			},
		},
		Ri = {
			updateChildVisible: function (t) {
				var e = ki(t),
					i = e.parent,
					n = !e.hasOwnProperty('maskVisible') || e.maskVisible;
				return (t.visible = i.visible && e.visible && n), this;
			},
			syncVisible: function () {
				return (
					this.syncChildrenEnable &&
						this.children.forEach(this.updateChildVisible, this),
					this
				);
			},
			resetChildVisibleState: function (t) {
				var e = ki(t);
				return (
					e.hasOwnProperty('maskVisible') && delete e.maskVisible,
					(e.visible = t.visible),
					this
				);
			},
			setChildVisible: function (t, e) {
				return this.setChildLocalVisible(t, e), this;
			},
			setChildLocalVisible: function (t, e) {
				return (
					void 0 === e && (e = !0),
					(ki(t).visible = e),
					this.updateChildVisible(t),
					this
				);
			},
			setChildMaskVisible: function (t, e) {
				return (
					void 0 === e && (e = !0),
					(ki(t).maskVisible = e),
					this.updateChildVisible(t),
					this
				);
			},
		},
		Li = {
			updateChildAlpha: function (t) {
				var e = ki(t),
					i = e.parent;
				return (t.alpha = i.alpha * e.alpha), this;
			},
			syncAlpha: function () {
				return (
					this.syncChildrenEnable &&
						this.children.forEach(this.updateChildAlpha, this),
					this
				);
			},
			resetChildAlphaState: function (t) {
				var e = ki(t),
					i = e.parent;
				return (e.alpha = xi(t.alpha, i.alpha)), this;
			},
			setChildAlpha: function (t, e) {
				return (t.alpha = e), this.resetChildAlphaState(t), this;
			},
			setChildLocalAlpha: function (t, e) {
				return (ki(t).alpha = e), this.updateChildAlpha(t), this;
			},
		},
		Yi = {
			updateChildActive: function (t) {
				var e = ki(t),
					i = e.parent;
				return (t.active = i.active && e.active), this;
			},
			syncActive: function () {
				return (
					this.syncChildrenEnable &&
						this.children.forEach(this.updateChildActive, this),
					this
				);
			},
			resetChildActiveState: function (t) {
				return (ki(t).active = t.active), this;
			},
			setChildActive: function (t, e) {
				return (t.active = e), this.resetChildActiveState(t), this;
			},
			setChildLocalActive: function (t, e) {
				return (
					void 0 === e && (e = !0),
					(ki(t).active = e),
					this.updateChildActive(t),
					this
				);
			},
		},
		Ii = {
			updateChildScrollFactor: function (t) {
				var e = ki(t).parent;
				return t.setScrollFactor(e.scrollFactorX, e.scrollFactorY), this;
			},
			syncScrollFactor: function () {
				return (
					this.syncChildrenEnable &&
						this.children.forEach(this.updateChildScrollFactor, this),
					this
				);
			},
		},
		Ai = {
			updateChildMask: function (t) {
				return (
					null == this.mask ||
						((this.mask.hasOwnProperty('geometryMask')
							? this.mask.geometryMask
							: this.mask.bitmapMask) !== t &&
							(t.mask = this.mask)),
					this
				);
			},
			syncMask: function () {
				return (
					this.syncChildrenEnable &&
						this.children.forEach(this.updateChildMask, this),
					this
				);
			},
			setMask: function (t) {
				return (this.mask = t), this;
			},
			clearMask: function (t) {
				return (
					void 0 === t && (t = !1),
					t && this.mask && this.mask.destroy(),
					(this.mask = null),
					this
				);
			},
		},
		Fi = Phaser.Utils.Array,
		Wi = {
			getChildren: function () {
				return this.children;
			},
			getAllChildren: function (t) {
				void 0 === t && (t = []);
				for (var e, i = this.children, n = 0, s = i.length; n < s; n++) {
					if (((e = i[n]), t.push(e), e.hasOwnProperty('isRexContainerLite')))
						t.push.apply(t, a(e.getAllChildren()));
				}
				return t;
			},
			getAllVisibleChildren: function (t) {
				void 0 === t && (t = []);
				for (var e, i = this.children, n = 0, s = i.length; n < s; n++) {
					if ((e = i[n]).visible)
						if ((t.push(e), e.hasOwnProperty('isRexContainerLite')))
							t.push.apply(t, a(e.getAllVisibleChildren()));
				}
				return t;
			},
			contains: function (t) {
				var e = gi(t);
				return !!e && (e === this || this.contains(e));
			},
			getByName: function (t, e) {
				if (e) {
					for (var i, n, s = [this]; s.length; )
						for (var r = 0, o = (i = s.shift()).children.length; r < o; r++) {
							if ((n = i.children[r]).name === t) return n;
							n.isRexContainerLite && s.push(n);
						}
					return null;
				}
				return Fi.GetFirst(this.children, 'name', t);
			},
			getRandom: function (t, e) {
				return Fi.GetRandom(this.children, t, e);
			},
			getFirst: function (t, e, i, n) {
				return Fi.GetFirstElement(this.children, t, e, i, n);
			},
			getAll: function (t, e, i, n) {
				return Fi.GetAll(this.children, t, e, i, n);
			},
			count: function (t, e, i, n) {
				return Fi.CountAllMatching(this.children, t, e, i, n);
			},
			swap: function (t, e) {
				return Fi.Swap(this.children, t, e), this;
			},
			moveTo: function (t, e) {
				return Fi.MoveTo(this.children, t, e), this;
			},
			setAll: function (t, e, i, n) {
				return Fi.SetAll(this.children, t, e, i, n), this;
			},
		},
		Hi = {
			tweenChild: function (t) {
				var e = t.targets;
				Ci(e) || (e = [e]);
				for (var i, n, s = [], r = 0, o = e.length; r < o; r++)
					(n = e[r]).hasOwnProperty('rexContainer') &&
						((i = n.scene), s.push(n.rexContainer));
				if (i) {
					t.targets = s;
					var h = i.tweens.add(t);
					return (
						h.on('update', function (t, e, i) {
							var n = i.parent,
								s = i.self;
							switch (e) {
								case 'x':
								case 'y':
									n.updateChildPosition(s);
									break;
								case 'angle':
								case 'rotation':
									n.updateChildRotation(s);
									break;
								case 'scaleX':
								case 'scaleY':
									n.updateChildScale(s);
									break;
								case 'alpha':
									n.updateChildAlpha(s);
							}
						}),
						h
					);
				}
			},
			tween: function (t) {
				var e = this.scene;
				return t.targets || (t.targets = this), e.tweens.add(t);
			},
		},
		Xi = {};
	Object.assign(
		Xi,
		wi,
		Pi,
		Mi,
		_i,
		Bi,
		Ei,
		Di,
		ji,
		Ri,
		Li,
		Yi,
		Ii,
		Ai,
		{
			setDepth: function (t, e) {
				if (((this.depth = t), !e && this.children))
					for (var i = this.getAllChildren(), n = 0, s = i.length; n < s; n++)
						i[n].depth = t;
				return this;
			},
			swapDepth: function (t) {
				var e = this.depth,
					i = t.depth;
				return this.setDepth(i), t.setDepth(e), this;
			},
			incDepth: function (t) {
				if (((this.depth += t), this.children))
					for (var e = this.getAllChildren(), i = 0, n = e.length; i < n; i++)
						e[i].depth += t;
				return this;
			},
		},
		Wi,
		Hi
	);
	var Vi = (function () {
		b(a, vi);
		var h = w(a);
		function a(t, e, i, n, s, r) {
			var o;
			return (
				B(this, a),
				((o = h.call(this, t, e, i, n, s)).type = 'rexContainerLite'),
				(o.isRexContainerLite = !0),
				(o.syncChildrenEnable = !0),
				(o._active = !0),
				(o._mask = null),
				(o._scrollFactorX = 1),
				(o._scrollFactorY = 1),
				r && o.add(r),
				o
			);
		}
		return (
			m(a, [
				{
					key: 'destroy',
					value: function (t) {
						this.scene &&
							((this.syncChildrenEnable = !1),
							C(x(a.prototype), 'destroy', this).call(this, t));
					},
				},
				{
					key: 'resize',
					value: function (t, e) {
						return this.setSize(t, e), this;
					},
				},
				{
					key: 'x',
					get: function () {
						return this._x;
					},
					set: function (t) {
						this._x !== t && ((this._x = t), this.syncPosition());
					},
				},
				{
					key: 'y',
					get: function () {
						return this._y;
					},
					set: function (t) {
						this._y !== t && ((this._y = t), this.syncPosition());
					},
				},
				{
					key: 'rotation',
					get: function () {
						return C(x(a.prototype), 'rotation', this);
					},
					set: function (t) {
						this.rotation !== t &&
							(e(x(a.prototype), 'rotation', t, this, !0), this.syncPosition());
					},
				},
				{
					key: 'scaleX',
					get: function () {
						return C(x(a.prototype), 'scaleX', this);
					},
					set: function (t) {
						this.scaleX !== t &&
							(e(x(a.prototype), 'scaleX', t, this, !0), this.syncPosition());
					},
				},
				{
					key: 'scaleY',
					get: function () {
						return C(x(a.prototype), 'scaleY', this);
					},
					set: function (t) {
						this.scaleY !== t &&
							(e(x(a.prototype), 'scaleY', t, this, !0), this.syncPosition());
					},
				},
				{
					key: 'flipX',
					get: function () {
						return C(x(a.prototype), 'flipX', this);
					},
					set: function (t) {
						C(x(a.prototype), 'flipX', this) !== t &&
							(e(x(a.prototype), 'flipX', t, this, !0), this.syncPosition());
					},
				},
				{
					key: 'flipY',
					get: function () {
						return C(x(a.prototype), 'flipY', this);
					},
					set: function (t) {
						C(x(a.prototype), 'flipY', this) !== t &&
							(e(x(a.prototype), 'flipY', t, this, !0), this.syncPosition());
					},
				},
				{
					key: 'visible',
					get: function () {
						return C(x(a.prototype), 'visible', this);
					},
					set: function (t) {
						C(x(a.prototype), 'visible', this) !== t &&
							(e(x(a.prototype), 'visible', t, this, !0), this.syncVisible());
					},
				},
				{
					key: 'alpha',
					get: function () {
						return C(x(a.prototype), 'alpha', this);
					},
					set: function (t) {
						C(x(a.prototype), 'alpha', this) !== t &&
							(e(x(a.prototype), 'alpha', t, this, !0), this.syncAlpha());
					},
				},
				{
					key: 'active',
					get: function () {
						return this._active;
					},
					set: function (t) {
						this._active !== t && ((this._active = t), this.syncActive());
					},
				},
				{
					key: 'mask',
					get: function () {
						return this._mask;
					},
					set: function (t) {
						this._mask !== t && ((this._mask = t), this.syncMask());
					},
				},
				{
					key: 'scrollFactorX',
					get: function () {
						return this._scrollFactorX;
					},
					set: function (t) {
						this._scrollFactorX !== t &&
							((this._scrollFactorX = t), this.syncScrollFactor());
					},
				},
				{
					key: 'scrollFactorY',
					get: function () {
						return this._scrollFactorY;
					},
					set: function (t) {
						this._scrollFactorY !== t &&
							((this._scrollFactorY = t), this.syncScrollFactor());
					},
				},
				{
					key: 'list',
					get: function () {
						return this.children;
					},
				},
			]),
			a
		);
	})();
	Object.assign(Vi.prototype, Xi),
		u.register('container', function (t, e, i, n, s) {
			var r = new Vi(this.scene, t, e, i, n, s);
			return this.scene.add.existing(r), r;
		}),
		G(window, 'RexPlugins.UI.Container', Vi),
		u.register('canvas', function (t, e, i, n) {
			var s = new Q(this.scene, t, e, i, n);
			return this.scene.add.existing(s), s;
		}),
		G(window, 'RexPlugins.UI.Canvas', Q);
	var Gi = Phaser.Utils.Objects.GetValue,
		Ui = (function () {
			b(a, Q);
			var h = w(a);
			function a(t, e, i, n, s, r) {
				var o;
				return (
					B(this, a),
					((o = h.call(this, t, e, i)).type = 'rexCircleMaskImage'),
					o.setTexture(n, s, r),
					o
				);
			}
			return (
				m(a, [
					{
						key: 'setTexture',
						value: function (t, e, i) {
							var n, s;
							if (
								('object' === v(e) && ((i = e), (e = void 0)),
								(s =
									'string' == typeof i
										? void (n = i)
										: ((n = Gi(i, 'maskType', 0)),
										  Gi(i, 'backgroundColor', void 0))),
								void 0 === n ? (n = 0) : 'string' == typeof n && (n = Ni[n]),
								(this._textureKey = t),
								(this._frameName = e),
								null === n)
							)
								return this.loadTexture(t, e), (this.dirty = !0), this;
							var r = null != s;
							r || this.loadTexture(t, e);
							var o = this.canvas,
								h = this.context,
								a = o.width,
								l = o.height;
							switch (
								(h.save(),
								(h.globalCompositeOperation = r
									? 'source-over'
									: 'destination-in'),
								h.beginPath(),
								n)
							) {
								case 2:
									var u = Gi(i, 'radius', 0),
										c = Gi(i, 'iteration', void 0);
									it(h, 0, 0, a, l, u, c);
									break;
								default:
									var d = Math.floor(a / 2),
										f = Math.floor(l / 2);
									0 === n
										? h.arc(d, f, Math.min(d, f), 0, 2 * Math.PI)
										: h.ellipse(d, f, d, f, 0, 0, 2 * Math.PI);
							}
							return (
								r && (h.fillStyle = s),
								h.fill(),
								h.restore(),
								r &&
									(h.save(),
									(h.globalCompositeOperation = 'destination-atop'),
									this.loadTexture(t, e),
									h.restore()),
								(this.dirty = !0),
								this
							);
						},
					},
				]),
				a
			);
		})(),
		Ni = {circle: 0, ellipse: 1, roundRectangle: 2};
	u.register('circleMaskImage', function (t, e, i, n, s) {
		var r = new Ui(this.scene, t, e, i, n, s);
		return this.scene.add.existing(r), r;
	}),
		G(window, 'RexPlugins.UI.CircleMaskImage', Ui);
	function Ji(t, e) {
		return void 0 === e ? t : t[e];
	}
	function Ki(t, e, i) {
		var n = v(e);
		'string' === n
			? (t[e] = i)
			: 'number' === n
			? ((t.left = e), (t.right = e), (t.top = e), (t.bottom = e))
			: ((t.left = cn(e, 'left', 0)),
			  (t.right = cn(e, 'right', 0)),
			  (t.top = cn(e, 'top', 0)),
			  (t.bottom = cn(e, 'bottom', 0)));
	}
	function Zi(t, e, i, n) {
		void 0 === n && (n = {word: [], width: 0}), (n.word.length = 0);
		for (var s = t.length, r = e, o = n.word, h = 0; r < s; ) {
			var a = t[r];
			if ('text' !== a.type || ' ' === a.text || '\n' === a.text) {
				r === e && (o.push(a), (h += a.width));
				break;
			}
			if ((o.push(a), (h += a.width), r++, i)) break;
		}
		return (n.width = h), n;
	}
	function qi(t) {
		var e,
			i = mn(t, 'start', 0),
			n = mn(t, 'padding.top', 0),
			s = mn(t, 'padding.bottom', 0),
			r = mn(t, 'lineHeight', void 0);
		if (void 0 === r)
			(e = mn(t, 'maxLines', 0)),
				(r =
					0 < this.fixedHeight
						? (o =
								this.fixedHeight -
								this.padding.top -
								this.padding.bottom -
								n -
								s) / e
						: 0);
		else if (0 < this.fixedHeight) {
			if (void 0 === (e = mn(t, 'maxLines', void 0))) {
				var o =
					this.fixedHeight - this.padding.top - this.padding.bottom - n - s;
				e = Math.floor(o / r);
			}
		} else e = mn(t, 'maxLines', 0);
		var h = 0 === e,
			a = mn(t, 'wrapWidth', void 0);
		void 0 === a &&
			(a =
				0 < this.fixedWidth
					? this.fixedWidth - this.padding.left - this.padding.right
					: 1 / 0);
		for (
			var l = mn(t, 'letterSpacing', 0),
				u = mn(t, 'hAlign', 0),
				c = mn(t, 'vAlign', 0),
				d = mn(t, 'charWrap', !1),
				f = {
					start: i,
					isLastPage: !1,
					padding: {top: n, bottom: s},
					lineHeight: r,
					maxLines: e,
					wrapWidth: a,
					letterSpacing: l,
					hAlign: u,
					vAlign: c,
					charWrap: d,
					children: [],
					lines: [],
					maxLineWidth: 0,
					linesHeight: 0,
				},
				v = this.children,
				p = 0,
				g = v.length;
			p < g;
			p++
		)
			v[p].setActive(!1);
		a += l;
		for (
			var y,
				k = this.padding.left,
				m = k,
				b = this.padding.top + r + n,
				x = a,
				C = i,
				w = v.length,
				S = f.children,
				P = f.lines,
				O = [],
				T = 0,
				M = 0;
			C < w;

		) {
			var _ = (y = Zi(v, C, d, y)).word,
				z = _.length,
				B = y.width + z * l;
			C += z;
			var E = bn(_);
			if (x < B || E) {
				if (E) (D = _[0]).setActive().setPosition(m, b), S.push(D), O.push(D);
				if (
					((m = k),
					(b += r),
					(x = a),
					P.push({children: O, width: T}),
					(M = Math.max(M, T)),
					(T = 0),
					(O = []),
					!h && P.length === e)
				)
					break;
				if (E) continue;
			}
			(x -= B), (T += B);
			for (p = 0, g = _.length; p < g; p++) {
				var D;
				(D = _[p]).setActive().setPosition(m, b),
					S.push(D),
					O.push(D),
					(m += D.width + l);
			}
		}
		0 < O.length && (P.push({children: O, width: T}), (M = Math.max(M, T))),
			(f.start += S.length),
			(f.isLastPage = f.start === w),
			(f.maxLineWidth = M),
			(f.linesHeight = P.length * r + n + s);
		var j =
				0 < this.fixedWidth
					? this.fixedWidth
					: f.maxLineWidth + this.padding.left + this.padding.right,
			R =
				0 < this.fixedHeight
					? this.fixedHeight
					: f.linesHeight + this.padding.top + this.padding.bottom;
		return (
			(function (t, e, i) {
				var n = t.hAlign,
					s = t.vAlign;
				if (
					('string' == typeof n && ((n = yn[n]), (t.hAlign = n)),
					'string' == typeof s && ((s = kn[s]), (t.vAlign = s)),
					0 !== n)
				)
					for (var r = t.lines, o = 0, h = r.length; o < h; o++) {
						var a,
							l = r[o],
							u = l.width,
							c = l.children;
						switch (n) {
							case 1:
								a = (e - u) / 2;
								break;
							case 2:
								a = e - u;
						}
						for (var d = 0, f = c.length; d < f; d++) {
							c[d].x += a;
						}
					}
				if (0 !== s) {
					var v,
						p = t.linesHeight;
					switch (s) {
						case 1:
							v = (i - p) / 2;
							break;
						case 2:
							v = i - p;
					}
					for (d = 0, f = (c = t.children).length; d < f; d++) {
						c[d].y += v;
					}
				}
			})(
				f,
				j - this.padding.left - this.padding.right,
				(o = R - this.padding.top - this.padding.bottom - n - s)
			),
			this.setSize(j, R),
			f
		);
	}
	function $i(t) {
		var e,
			i = xn(t, 'start', 0),
			n = xn(t, 'padding.top', 0),
			s = xn(t, 'padding.bottom', 0),
			r = xn(t, 'padding.left', 0),
			o = xn(t, 'padding.right', 0),
			h = xn(t, 'lineWidth', void 0);
		if (void 0 === h)
			(e = xn(t, 'maxLines', 0)),
				(h =
					0 < this.fixedWidth
						? (a =
								this.fixedWidth -
								this.padding.left -
								this.padding.right -
								r -
								o) / e
						: 0);
		else if (0 < this.fixedWidth) {
			if (void 0 === (e = xn(t, 'maxLines', void 0))) {
				var a = this.fixedWidth - this.padding.left - this.padding.right;
				e = Math.floor(a / h);
			}
		} else e = xn(t, 'maxLines', 0);
		var l = 0 === e,
			u = xn(t, 'fixedChildHeight', void 0);
		if (void 0 === u) {
			var c = xn(t, 'charPerLine', void 0);
			if (void 0 !== c) {
				var d =
					this.fixedHeight - this.padding.top - this.padding.bottom - n - s;
				u = Math.floor(d / c);
			}
		}
		var f = xn(t, 'wrapHeight', void 0);
		void 0 === f &&
			(f =
				0 < this.fixedHeight
					? this.fixedHeight - this.padding.top - this.padding.bottom
					: 1 / 0);
		for (
			var v = xn(t, 'letterSpacing', 0),
				p = xn(t, 'rtl', !0),
				g = {
					start: i,
					isLastPage: !1,
					padding: {top: n, bottom: s, left: r, right: o},
					lineWidth: h,
					maxLines: e,
					fixedChildHeight: u,
					wrapHeight: f,
					letterSpacing: v,
					hAlign: xn(t, 'hAlign', p ? 2 : 0),
					vAlign: xn(t, 'vAlign', 0),
					rtl: p,
					children: [],
					lines: [],
					maxLineHeight: 0,
					linesWidth: 0,
				},
				y = this.children,
				k = 0,
				m = y.length;
			k < m;
			k++
		)
			y[k].setActive(!1);
		f += v;
		for (
			var b = this.padding.left + r,
				x = this.padding.top + n,
				C = b,
				w = x,
				S = f,
				P = i,
				O = y.length,
				T = g.children,
				M = g.lines,
				_ = [],
				z = 0,
				B = 0;
			P < O;

		) {
			var E = y[P],
				D = (void 0 !== u ? u : E.height) + v;
			P++;
			var j = Cn(E);
			if (S < D || j) {
				if (
					(j &&
						(E.setActive().setPosition(C, w).setOrigin(0.5),
						T.push(E),
						_.push(E)),
					(C = b),
					(w = x),
					(S = f),
					M.push({children: _, height: z}),
					(B = Math.max(B, z)),
					(z = 0),
					(_ = []),
					!l && M.length === e)
				)
					break;
				if (j) continue;
			}
			(S -= D),
				(z += D),
				E.setActive().setPosition(C, w).setOrigin(0.5),
				T.push(E),
				_.push(E),
				(w += D);
		}
		0 < _.length && (M.push({children: _, height: z}), (B = Math.max(B, z))),
			(g.start += T.length),
			(g.isLastPage = g.start === O),
			(g.maxLineHeight = B),
			(g.linesWidth = M.length * h + r + o);
		var R =
				0 < this.fixedWidth
					? this.fixedWidth
					: g.linesWidth + this.padding.left + this.padding.right,
			L =
				0 < this.fixedHeight
					? this.fixedHeight
					: g.maxLineHeight + this.padding.top + this.padding.bottom;
		return (
			(function (t, e, i) {
				var n = t.hAlign,
					s = t.vAlign;
				'string' == typeof n && ((n = yn[n]), (t.hAlign = n)),
					'string' == typeof s && ((s = kn[s]), (t.vAlign = s));
				var r,
					o = t.rtl,
					h = t.lines,
					a = t.lineWidth,
					l = t.linesWidth;
				switch (n) {
					case 0:
						r = 0;
						break;
					case 1:
						r = (e - l) / 2;
						break;
					case 2:
						r = e - l;
				}
				o && (r += a);
				for (var u = 0, c = h.length; u < c; u++) {
					var d,
						f = h[o ? c - u - 1 : u],
						v = f.children,
						p = f.height;
					switch (s) {
						case 0:
							d = 0;
							break;
						case 1:
							d = (i - p) / 2;
							break;
						case 2:
							d = i - p;
					}
					for (var g = 0, y = v.length; g < y; g++) {
						var k = v[g];
						(k.x += r), (k.y += d);
					}
					r += a;
				}
			})(
				g,
				(a = R - this.padding.left - this.padding.right - r - o),
				(d = L - this.padding.top - this.padding.bottom - n - s)
			),
			this.setSize(R, L),
			g
		);
	}
	function Qi(t, e) {
		if (!e) return t;
		for (var i in (null == t && (t = {}), e))
			t.hasOwnProperty(i) || (t[i] = e[i]);
		return t;
	}
	var tn = Phaser.Math.DegToRad,
		en = Phaser.Math.RadToDeg,
		nn = (function () {
			function i(t, e) {
				B(this, i),
					this.setParent(t),
					(this.type = e),
					this.setActive()
						.setVisible()
						.setAlpha(1)
						.setPosition(0, 0)
						.setRotation(0)
						.setOrigin(0)
						.setDrawBelowCallback()
						.setDrawAboveCallback(),
					(this.originX = 0),
					(this.xOffset = 0),
					(this.yOffset = 0),
					(this.width = 0),
					(this.height = 0);
			}
			return (
				m(i, [
					{
						key: 'setParent',
						value: function (t) {
							return (this.parent = t), this;
						},
					},
					{
						key: 'canvas',
						get: function () {
							return this.parent ? this.parent.canvas : null;
						},
					},
					{
						key: 'context',
						get: function () {
							return this.parent ? this.parent.context : null;
						},
					},
					{
						key: 'setDirty',
						value: function (t) {
							return t && this.parent && (this.parent.dirty = !0), this;
						},
					},
					{
						key: 'active',
						get: function () {
							return this._active;
						},
						set: function (t) {
							this.setDirty(this._active != t), (this._active = t);
						},
					},
					{
						key: 'setActive',
						value: function (t) {
							return void 0 === t && (t = !0), (this.active = t), this;
						},
					},
					{
						key: 'visible',
						get: function () {
							return this._visible;
						},
						set: function (t) {
							this.setDirty(this._visible != t), (this._visible = t);
						},
					},
					{
						key: 'setVisible',
						value: function (t) {
							return void 0 === t && (t = !0), (this.visible = t), this;
						},
					},
					{
						key: 'alpha',
						get: function () {
							return this._alpha;
						},
						set: function (t) {
							this.setDirty(this._alpha != t), (this._alpha = t);
						},
					},
					{
						key: 'setAlpha',
						value: function (t) {
							return (this.alpha = t), this;
						},
					},
					{
						key: 'x',
						get: function () {
							return this._x;
						},
						set: function (t) {
							this.setDirty(this._x != t), (this._x = t);
						},
					},
					{
						key: 'y',
						get: function () {
							return this._y;
						},
						set: function (t) {
							this.setDirty(this._y != t), (this._y = t);
						},
					},
					{
						key: 'setPosition',
						value: function (t, e) {
							return (this.x = t), (this.y = e), this;
						},
					},
					{
						key: 'rotation',
						get: function () {
							return this._rotation;
						},
						set: function (t) {
							this.setDirty(this._rotation != t), (this._rotation = t);
						},
					},
					{
						key: 'setRotation',
						value: function (t) {
							return (this.rotation = t), this;
						},
					},
					{
						key: 'angle',
						get: function () {
							return en(this._rotation);
						},
						set: function (t) {
							this.rotation = tn(t);
						},
					},
					{
						key: 'setAngle',
						value: function (t) {
							return (this.angle = t), this;
						},
					},
					{
						key: 'scaleX',
						get: function () {
							return this._scaleX;
						},
						set: function (t) {
							this.setDirty(this._scaleX !== t), (this._scaleX = t);
						},
					},
					{
						key: 'setScaleX',
						value: function (t) {
							return (this.scaleX = t), this;
						},
					},
					{
						key: 'scaleY',
						get: function () {
							return this._scaleY;
						},
						set: function (t) {
							this.setDirty(this._scaleY !== t), (this._scaleY = t);
						},
					},
					{
						key: 'setScaleY',
						value: function (t) {
							return (this.scaleY = t), this;
						},
					},
					{
						key: 'setScale',
						value: function (t, e) {
							return (
								void 0 === e && (e = t),
								(this.scaleX = t),
								(this.scaleY = e),
								this
							);
						},
					},
					{
						key: 'setOrigin',
						value: function (t) {
							return (this.originX = t), this;
						},
					},
					{
						key: 'setDrawBelowCallback',
						value: function (t) {
							return (this.drawBelowCallback = t), this;
						},
					},
					{
						key: 'setDrawAboveCallback',
						value: function (t) {
							return (this.drawAboveCallback = t), this;
						},
					},
					{
						key: 'onFree',
						value: function () {
							this.setParent()
								.setVisible()
								.setAlpha(1)
								.setPosition(0, 0)
								.setRotation(0)
								.setScale(1, 1)
								.setOrigin(0)
								.setDrawBelowCallback()
								.setDrawAboveCallback();
						},
					},
					{key: 'drawContent', value: function () {}},
					{
						key: 'draw',
						value: function () {
							var t = this.context;
							t.save();
							var e = this.x + this.xOffset - this.originX * this.width,
								i = this.y + this.yOffset;
							this.autoRound && ((e = Math.round(e)), (i = Math.round(i))),
								t.translate(e, i),
								(t.globalAlpha = this.alpha),
								t.scale(this.scaleX, this.scaleY),
								t.rotate(this.rotation),
								this.drawBelowCallback && this.drawBelowCallback.call(this),
								this.drawContent(),
								this.drawAboveCallback && this.drawAboveCallback.call(this),
								t.restore();
						},
					},
				]),
				i
			);
		})(),
		sn = Phaser.Utils.Objects.GetValue,
		rn = (function () {
			b(s, nn);
			var n = w(s);
			function s(t, e) {
				var i;
				return (
					B(this, s),
					(i = n.call(this, t, 'background')).setColor(
						sn(e, 'color', null),
						sn(e, 'color2', null),
						sn(e, 'horizontalGradient', !0)
					),
					i.setStroke(sn(e, 'stroke', null), sn(e, 'strokeThickness', 2)),
					i.setCornerRadius(
						sn(e, 'cornerRadius', 0),
						sn(e, 'cornerIteration', null)
					),
					i
				);
			}
			return (
				m(s, [
					{
						key: 'color',
						get: function () {
							return this._color;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								this.setDirty(this._color != t),
								(this._color = t);
						},
					},
					{
						key: 'color2',
						get: function () {
							return this._color2;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								this.setDirty(this._color2 != t),
								(this._color2 = t);
						},
					},
					{
						key: 'horizontalGradient',
						get: function () {
							return this._horizontalGradient;
						},
						set: function (t) {
							this.setDirty(this._horizontalGradient != t),
								(this._horizontalGradient = t);
						},
					},
					{
						key: 'setColor',
						value: function (t, e, i) {
							return (
								void 0 === i && (i = !0),
								(this.color = t),
								(this.color2 = e),
								(this.horizontalGradient = i),
								this
							);
						},
					},
					{
						key: 'stroke',
						get: function () {
							return this._stroke;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								this.setDirty(this._stroke != t),
								(this._stroke = t);
						},
					},
					{
						key: 'strokeThickness',
						get: function () {
							return this._strokeThickness;
						},
						set: function (t) {
							this.setDirty(this._strokeThickness != t),
								(this._strokeThickness = t);
						},
					},
					{
						key: 'setStroke',
						value: function (t, e) {
							return (this.stroke = t), (this.strokeThickness = e), this;
						},
					},
					{
						key: 'cornerRadius',
						get: function () {
							return this._cornerRadius;
						},
						set: function (t) {
							this.setDirty(this._cornerRadius != t), (this._cornerRadius = t);
						},
					},
					{
						key: 'cornerIteration',
						get: function () {
							return this._cornerIteration;
						},
						set: function (t) {
							this.setDirty(this._cornerIteration != t),
								(this._cornerIteration = t);
						},
					},
					{
						key: 'setCornerRadius',
						value: function (t, e) {
							return (this.cornerRadius = t), (this.cornerIteration = e), this;
						},
					},
					{
						key: 'draw',
						value: function () {
							return (
								this.visible &&
									nt(
										this.parent,
										this.color,
										this.stroke,
										this.strokeThickness,
										this.cornerRadius,
										this.color2,
										this.horizontalGradient,
										this.cornerIteration
									),
								this
							);
						},
					},
				]),
				s
			);
		})(),
		on = Phaser.Utils.Objects.GetValue,
		hn = (function () {
			b(s, nn);
			var n = w(s);
			function s(t, e) {
				var i;
				return (
					B(this, s),
					(i = n.call(this, t, 'innerbounds')).setColor(
						on(e, 'color', null),
						on(e, 'color2', null),
						on(e, 'horizontalGradient', !0)
					),
					i.setStroke(on(e, 'stroke', null), on(e, 'strokeThickness', 2)),
					i
				);
			}
			return (
				m(s, [
					{
						key: 'color',
						get: function () {
							return this._color;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								this.setDirty(this._color != t),
								(this._color = t);
						},
					},
					{
						key: 'color2',
						get: function () {
							return this._color2;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								this.setDirty(this._color2 != t),
								(this._color2 = t);
						},
					},
					{
						key: 'horizontalGradient',
						get: function () {
							return this._horizontalGradient;
						},
						set: function (t) {
							this.setDirty(this._horizontalGradient != t),
								(this._horizontalGradient = t);
						},
					},
					{
						key: 'setColor',
						value: function (t, e, i) {
							return (
								void 0 === i && (i = !0),
								(this.color = t),
								(this.color2 = e),
								(this.horizontalGradient = i),
								this
							);
						},
					},
					{
						key: 'stroke',
						get: function () {
							return this._stroke;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								this.setDirty(this._stroke != t),
								(this._stroke = t);
						},
					},
					{
						key: 'strokeThickness',
						get: function () {
							return this._strokeThickness;
						},
						set: function (t) {
							this.setDirty(this._strokeThickness != t),
								(this._strokeThickness = t);
						},
					},
					{
						key: 'setStroke',
						value: function (t, e) {
							return (this.stroke = t), (this.strokeThickness = e), this;
						},
					},
					{
						key: 'draw',
						value: function () {
							if (!this.visible) return this;
							var t = this.parent.padding,
								e = t.left,
								i = t.top,
								n = this.parent.width - t.left - t.right,
								s = this.parent.height - t.top - t.bottom,
								r = this.context;
							if (null != this.color) {
								var o, h;
								if (null != this.color2)
									(h = this.horizontalGradient
										? r.createLinearGradient(0, 0, n, 0)
										: r.createLinearGradient(0, 0, 0, s)).addColorStop(
										0,
										this.color
									),
										h.addColorStop(1, this.color2),
										(o = h);
								else o = this.color;
								(r.fillStyle = o), r.fillRect(e, i, n, s);
							}
							return (
								null != this.stroke &&
									0 < this.strokeThickness &&
									((r.strokeStyle = this.stroke),
									(r.lineWidth = this.strokeThickness),
									r.strokeRect(e, i, n, s)),
								this
							);
						},
					},
				]),
				s
			);
		})(),
		an = Phaser.Utils.Objects.GetValue,
		ln = (function () {
			function e(t) {
				B(this, e), this.set(t);
			}
			return (
				m(e, [
					{
						key: 'toJSON',
						value: function () {
							return {
								bold: this.bold,
								italic: this.italic,
								fontSize: this.fontSize,
								fontFamily: this.fontFamily,
								color: this.color,
								stroke: this.stroke,
								strokeThickness: this.strokeThickness,
								shaodwColor: this.shadowColor,
								shadowBlur: this.shadowBlur,
								shadowOffsetX: this.shadowOffsetX,
								shadowOffsetY: this.shadowOffsetY,
								x: this.x,
								y: this.y,
							};
						},
					},
					{
						key: 'set',
						value: function (t) {
							this.setBold(an(t, 'bold', !1)),
								this.setItalic(an(t, 'italic', !1)),
								this.setFontSize(an(t, 'fontSize', '16px')),
								this.setFontFamily(an(t, 'fontFamily', 'Courier')),
								this.setColor(an(t, 'color', '#fff')),
								this.setStrokeStyle(
									an(t, 'stroke', '#fff'),
									an(t, 'strokeThickness', 0)
								),
								this.setShadow(
									an(t, 'shadowColor', null),
									an(t, 'shadowOffsetX', 0),
									an(t, 'shadowOffsetY', 0),
									an(t, 'shadowBlur', 0)
								),
								this.setOffset(an(t, 'x', 0), an(t, 'y', 0));
						},
					},
					{
						key: 'modify',
						value: function (t) {
							return (
								t.hasOwnProperty('bold') && this.setBold(t.bold),
								t.hasOwnProperty('italic') && this.setItalic(t.italic),
								t.hasOwnProperty('fontSize') && this.setFontSize(t.fontSize),
								t.hasOwnProperty('fontFamily') &&
									this.setFontFamily(t.fontFamily),
								t.hasOwnProperty('color') && this.setColor(t.color),
								(t.hasOwnProperty('stroke') ||
									t.hasOwnProperty('strokeThickness')) &&
									this.setStrokeStyle(
										un('stroke', t, this),
										un('strokeThickness', t, this)
									),
								(t.hasOwnProperty('shadowColor') ||
									t.hasOwnProperty('shadowBlur') ||
									t.hasOwnProperty('shadowOffsetX') ||
									t.hasOwnProperty('shadowOffsetY')) &&
									this.setShadow(
										un('shadowColor', t, this),
										un('shadowOffsetX', t, this),
										un('shadowOffsetY', t, this),
										un('shadowBlur', t, this)
									),
								(t.hasOwnProperty('x') || t.hasOwnProperty('y')) &&
									this.setOffset(un('x', t, this), un('y', t, this)),
								this
							);
						},
					},
					{
						key: 'setBold',
						value: function (t) {
							return void 0 === t && (t = !0), (this.bold = t), this;
						},
					},
					{
						key: 'setItalic',
						value: function (t) {
							return void 0 === t && (t = !0), (this.italic = t), this;
						},
					},
					{
						key: 'fontStyle',
						get: function () {
							return this.bold && this.italic
								? 'bold italic'
								: this.bold
								? 'bold'
								: this.italic
								? 'italic'
								: '';
						},
					},
					{
						key: 'fontSize',
						get: function () {
							return this._fontSize;
						},
						set: function (t) {
							'number' == typeof t && (t = ''.concat(t, 'px')),
								(this._fontSize = t);
						},
					},
					{
						key: 'setFontSize',
						value: function (t) {
							return (this.fontSize = t), this;
						},
					},
					{
						key: 'setFontFamily',
						value: function (t) {
							return (this.fontFamily = t), this;
						},
					},
					{
						key: 'font',
						get: function () {
							return ''
								.concat(this.fontStyle, ' ')
								.concat(this.fontSize, ' ')
								.concat(this.fontFamily);
						},
					},
					{
						key: 'setColor',
						value: function (t) {
							return (this.color = et(t)), this;
						},
					},
					{
						key: 'setStrokeStyle',
						value: function (t, e) {
							return (
								null == t && (e = 0),
								(this.stroke = et(t)),
								(this.strokeThickness = e),
								this
							);
						},
					},
					{
						key: 'setShadow',
						value: function (t, e, i, n) {
							return (
								(this.shadowColor = et(t)),
								(this.shadowOffsetX = e),
								(this.shadowOffsetY = i),
								(this.shaodwBlur = n),
								this
							);
						},
					},
					{
						key: 'setOffset',
						value: function (t, e) {
							return (this.x = t), (this.y = e), this;
						},
					},
					{
						key: 'syncFont',
						value: function (t) {
							return (t.font = this.font), this;
						},
					},
					{
						key: 'syncStyle',
						value: function (t) {
							return (
								(t.textBaseline = 'alphabetic'),
								(t.fillStyle = this.color),
								(t.strokeStyle = this.stroke),
								(t.lineWidth = this.strokeThickness),
								(t.lineCap = 'round'),
								(t.lineJoin = 'round'),
								this
							);
						},
					},
					{
						key: 'syncShadow',
						value: function (t) {
							null != t.shadowColor
								? ((t.shadowColor = this.shadowColor),
								  (t.shadowOffsetX = this.shadowOffsetX),
								  (t.shadowOffsetY = this.shadowOffsetY),
								  (t.shadowBlur = this.shadowBlur))
								: ((t.shadowColor = 0),
								  (t.shadowOffsetX = 0),
								  (t.shadowOffsetY = 0),
								  (t.shadowBlur = 0));
						},
					},
					{
						key: 'getTextMetrics',
						value: function (t, e) {
							return this.syncFont(t).syncStyle(t), t.measureText(e);
						},
					},
				]),
				e
			);
		})(),
		un = function (t, e, i) {
			return e.hasOwnProperty(t) ? e[t] : i[t];
		},
		cn = Phaser.Utils.Objects.GetValue,
		dn = {
			setPadding: function (t, e) {
				var i = this.padding,
					n = i.left,
					s = i.right,
					r = i.top,
					o = i.bottom;
				return (
					Ki(this.padding, t, e),
					(this.dirty =
						this.dirty ||
						n != this.padding.left ||
						s != this.padding.right ||
						r != this.padding.top ||
						o != this.padding.bottom),
					this
				);
			},
			getPadding: function (t) {
				return Ji(this.padding, t);
			},
		},
		fn = (function () {
			b(r, nn);
			var s = w(r);
			function r(t, e, i) {
				var n;
				return (
					B(this, r),
					((n = s.call(this, t, 'text')).style = new ln(i)),
					n.setText(e),
					n
				);
			}
			return (
				m(r, [
					{
						key: 'autoRound',
						get: function () {
							return this.parent.autoRound;
						},
					},
					{
						key: 'xOffset',
						get: function () {
							return this.style.x;
						},
						set: function () {},
					},
					{
						key: 'yOffset',
						get: function () {
							return this.style.y;
						},
						set: function () {},
					},
					{
						key: 'modifyStyle',
						value: function (t) {
							return this.setDirty(!0), this.style.modify(t), this;
						},
					},
					{
						key: 'setText',
						value: function (t) {
							if ((this.setDirty(this.text != t), '\n' === (this.text = t)))
								(this.textWidth = 0), (this.textHeight = 0);
							else {
								var e,
									i,
									n = this.style.getTextMetrics(this.context, this.text);
								(this.textWidth = n.width),
									(i = n.hasOwnProperty('actualBoundingBoxAscent')
										? ((e = n.actualBoundingBoxAscent),
										  n.actualBoundingBoxDescent)
										: (e = 0)),
									(this.textHeight = e + i);
							}
							return this;
						},
					},
					{
						key: 'width',
						get: function () {
							return this.textWidth * this.scaleX;
						},
						set: function (t) {
							0 < this.textWidth
								? (this.scaleX = t / this.textWidth)
								: (this.scaleX = 1);
						},
					},
					{
						key: 'height',
						get: function () {
							return this.textHeight * this.scaleY;
						},
						set: function (t) {
							0 < this.textHeight
								? (this.scaleY = t / this.textHeight)
								: (this.scaleY = 1);
						},
					},
					{
						key: 'drawContent',
						value: function () {
							var t = this.style;
							if (null != t.color || null != t.stroke) {
								var e = this.context;
								t.syncFont(e).syncStyle(e),
									t.stroke &&
										t.strokeThickness &&
										(t.syncShadow(e), e.strokeText(this.text, 0, 0)),
									t.color && (t.syncShadow(e), e.fillText(this.text, 0, 0));
							}
						},
					},
					{
						key: 'draw',
						value: function () {
							if (!this.visible || '' === this.text || '\n' === this.text)
								return this;
							C(x(r.prototype), 'draw', this).call(this);
						},
					},
				]),
				r
			);
		})(),
		vn = Phaser.Utils.Objects.GetValue,
		pn = (function () {
			b(o, nn);
			var r = w(o);
			function o(t, e, i, n) {
				var s;
				return (
					B(this, o),
					((s = r.call(this, t, 'image'))._scaleX = 1),
					(s._scaleY = 1),
					s.setTexture(e, i),
					s.setStyle(n),
					s
				);
			}
			return (
				m(o, [
					{
						key: 'scene',
						get: function () {
							return this.parent.scene;
						},
					},
					{
						key: 'frameWidth',
						get: function () {
							return this.frameObj ? this.frameObj.cutWidth : 0;
						},
					},
					{
						key: 'frameHeight',
						get: function () {
							return this.frameObj ? this.frameObj.cutHeight : 0;
						},
					},
					{
						key: 'yOffset',
						get: function () {
							return -this.height;
						},
						set: function () {},
					},
					{
						key: 'setStyle',
						value: function (t) {
							(this._scaleX = 1), (this._scaleY = 1);
							var e = vn(t, 'width', void 0),
								i = vn(t, 'height', void 0),
								n = vn(t, 'scaleX', void 0),
								s = vn(t, 'scaleY', void 0);
							return (
								void 0 !== e &&
									(void 0 === i && void 0 === s
										? this.setWidth(e, !0)
										: this.setWidth(e)),
								void 0 !== i &&
									(void 0 === e && void 0 === n
										? this.setHeight(i, !0)
										: this.setHeight(i)),
								void 0 !== n && void 0 === e && this.setScaleX(n),
								void 0 !== s && void 0 === i && this.setScaleY(s),
								this
							);
						},
					},
					{
						key: 'setTexture',
						value: function (t, e) {
							return (
								(this.key = t),
								(this.frame = e),
								(this.frameObj = this.scene.textures.getFrame(t, e)),
								this
							);
						},
					},
					{
						key: 'width',
						get: function () {
							return this.frameWidth * this.scaleX;
						},
						set: function (t) {
							this.setDirty(this.width !== t),
								(this.scaleX = t / this.frameWidth);
						},
					},
					{
						key: 'setWidth',
						value: function (t, e) {
							return (
								void 0 === e && (e = !1),
								(this.width = t),
								e && (this.scaleY = this.scaleX),
								this
							);
						},
					},
					{
						key: 'height',
						get: function () {
							return this.frameHeight * this.scaleY;
						},
						set: function (t) {
							this.setDirty(this.height !== t),
								(this.scaleY = t / this.frameHeight);
						},
					},
					{
						key: 'setHeight',
						value: function (t, e) {
							return (
								void 0 === e && (e = !1),
								(this.height = t),
								e && (this.scaleX = this.scaleY),
								this
							);
						},
					},
					{
						key: 'drawContent',
						value: function () {
							var t = this.context,
								e = this.frameObj;
							t.drawImage(
								e.source.image,
								e.cutX,
								e.cutY,
								e.cutWidth,
								e.cutHeight
							);
						},
					},
					{
						key: 'draw',
						value: function () {
							if (!this.visible) return this;
							C(x(o.prototype), 'draw', this).call(this);
						},
					},
				]),
				o
			);
		})(),
		gn = {
			modifyTextStyle: function (t) {
				return this.textStyle.modify(t), this;
			},
			setText: function (t, e) {
				void 0 === t && (t = '');
				var i = this.children.length;
				return (
					this.poolManager.freeMultiple(this.children),
					(this.children.length = 0),
					this.appendText(t, e),
					this.children.length !== i && (this.dirty = !0),
					this
				);
			},
			appendText: function (t, e) {
				e && this.modifyTextStyle(e);
				for (var i = 0, n = t.length; i < n; i++) {
					var s = t.charAt(i),
						r = this.poolManager.allocate('text');
					null === r
						? (r = new fn(this, s, this.textStyle))
						: r
								.setParent(this)
								.setActive()
								.modifyStyle(this.textStyle)
								.setText(s),
						this.children.push(r);
				}
				return this;
			},
			appendImage: function (t, e, i) {
				var n = this.poolManager.allocate('frame');
				return (
					null === n
						? (n = new pn(this, t, e, i))
						: n.setParent(this).setActive().setTexture(t, e).setStyle(i),
					this.children.push(n),
					this
				);
			},
		},
		yn = {left: 0, center: 1, right: 2},
		kn = {top: 0, center: 1, bottom: 2},
		mn = Phaser.Utils.Objects.GetValue,
		bn = function (t) {
			var e = t[0];
			return 'text' === e.type && '\n' === e.text;
		},
		xn = Phaser.Utils.Objects.GetValue,
		Cn = function (t) {
			return 'text' === t.type && '\n' === t.text;
		},
		wn = {
			setWrapConfig: function (t) {
				return (this.wrapConfig = t), this;
			},
			runWordWrap: function (t) {
				return (t = Qi(t, this.wrapConfig)), qi.call(this, t);
			},
			runVerticalWrap: function (t) {
				return (t = Qi(t, this.wrapConfig)), $i.call(this, t);
			},
		},
		Sn = Phaser.Utils.Array.GetAll,
		Pn = {
			getChildren: function () {
				return this.children;
			},
			getActiveChildren: function () {
				return Sn(this.children, 'active', !0);
			},
		},
		On = Phaser.Utils.Objects.GetFastValue,
		Tn = {},
		Mn = (function () {
			function e(t) {
				B(this, e), (this.pools = On(t, 'pools', Tn));
			}
			return (
				m(e, [
					{
						key: 'free',
						value: function (t) {
							if (!this.pools) return this;
							var e = t.type;
							return (
								this.pools.hasOwnProperty(e) || (this.pools[e] = new jt()),
								this.pools[e].push(t),
								t.onFree(),
								this
							);
						},
					},
					{
						key: 'freeMultiple',
						value: function (t) {
							if (!this.pools) return this;
							for (var e = 0, i = t.length; e < i; e++) this.free(t[e]);
							return this;
						},
					},
					{
						key: 'allocate',
						value: function (t) {
							return this.pools && this.pools.hasOwnProperty(t)
								? this.pools[t].pop()
								: null;
						},
					},
				]),
				e
			);
		})(),
		_n = Phaser.Utils.Objects.IsPlainObject,
		zn = Phaser.Utils.Objects.GetValue,
		Bn = (function () {
			b(u, Q);
			var l = w(u);
			function u(t, e, i, n, s, r) {
				var o;
				B(this, u),
					_n(e)
						? ((e = zn((r = e), 'x', 0)),
						  (i = zn(r, 'y', 0)),
						  (n = zn(r, 'width', 0)),
						  (s = zn(r, 'height', 0)))
						: _n(n) &&
						  ((n = zn((r = n), 'width', 0)), (s = zn(r, 'height', 0)));
				var h = 0 === n ? 1 : n,
					a = 0 === s ? 1 : s;
				return (
					((o = l.call(this, t, e, i, h, a)).type = 'rexDynamicCanvasText'),
					(o.autoRound = !0),
					(o.padding = {}),
					(o.textStyle = new ln(zn(r, 'style', void 0))),
					(o.background = new rn(E(o), zn(r, 'background', void 0))),
					(o.innerBounds = new hn(E(o), zn(r, 'innerBounds', void 0))),
					(o.children = []),
					(o.poolManager = new Mn(r)),
					o.setFixedSize(n, s),
					o.setPadding(zn(r, 'padding', 0)),
					o.setWrapConfig(zn(r, 'wrap', void 0)),
					o.setText(zn(r, 'text', '')),
					o
				);
			}
			return (
				m(u, [
					{
						key: 'setFixedSize',
						value: function (t, e) {
							return (
								void 0 === t && (t = 0),
								void 0 === e && (e = 0),
								(0 < t &&
									0 < e &&
									this.fixedWidth === t &&
									this.fixedHeight === e) ||
									(this.dirty = !0),
								(this.fixedWidth = t),
								(this.fixedHeight = e),
								this
							);
						},
					},
					{
						key: 'updateTexture',
						value: function () {
							return (
								this.clear(),
								function () {
									var t,
										e = 0 < this.fixedWidth ? this.fixedWidth : this.width,
										i = 0 < this.fixedHeight ? this.fixedHeight : this.height;
									this.setSize(e, i),
										this.background.active && this.background.draw();
									for (var n = 0, s = this.children.length; n < s; n++)
										(t = this.children[n]).active && t.draw();
									this.innerBounds.active && this.innerBounds.draw();
								}.call(this),
								C(x(u.prototype), 'updateTexture', this).call(this),
								this
							);
						},
					},
				]),
				u
			);
		})();
	Object.assign(Bn.prototype, dn, gn, wn, Pn),
		u.register('dynamicText', function (t, e, i, n, s) {
			var r = new Bn(this.scene, t, e, i, n, s);
			return this.scene.add.existing(r), r;
		}),
		G(window, 'RexPlugins.UI.DynamicText', Bn);
	function En(t, e, i, n, s, r, o, h, a, l, u, c) {
		void 0 === l && (l = 0),
			void 0 === u && (u = 2 * Math.PI),
			void 0 === c && (c = !1),
			e.beginPath(),
			e.ellipse(i, n, s, r, 0, l, u, c),
			null != o && ((e.fillStyle = o), e.fill()),
			null != h && ((e.strokeStyle = h), (e.lineWidth = a), e.stroke());
	}
	function Dn() {
		var t,
			e,
			i,
			n,
			s,
			r,
			o,
			h,
			a,
			l,
			u = this.radius,
			c = this.thickness * this.radius,
			d = this.radius - c / 2,
			f = this.radius - c;
		if (
			(this.trackColor &&
				0 < c &&
				En(this.canvas, this.context, u, u, d, d, void 0, this.trackColor, c),
			this.barColor && 0 < d)
		) {
			var v, p, g;
			if (1 === this.value) (v = !1), (p = 0), (g = 2 * Math.PI);
			else
				(v = this.anticlockwise),
					(p = this.startAngle),
					(g = 2 * Math.PI * (v ? 1 - this.value : this.value) + p);
			En(
				this.canvas,
				this.context,
				u,
				u,
				d,
				d,
				void 0,
				this.barColor,
				c,
				p,
				g,
				v
			);
		}
		this.centerColor &&
			0 < f &&
			(this.centerColor2
				? ((t = this.context.createRadialGradient(
						u,
						u,
						0,
						u,
						u,
						f
				  )).addColorStop(0, this.centerColor),
				  t.addColorStop(1, this.centerColor2))
				: (t = this.centerColor),
			En(this.canvas, this.context, u, u, f, f, t)),
			this.textFormatCallback &&
				(this.textColor || this.textStrokeColor) &&
				(this.canvas,
				(e = this.context),
				(n = i = u),
				(s = this.getFormatText()),
				(r = 'center'),
				(o = this.textFont),
				(h = this.textColor),
				(a = this.textStrokeColor),
				void 0 === (l = this.textStrokeThickness) && null != a && (l = 2),
				(e.font = o),
				(e.textAlign = r),
				null != h && ((e.fillStyle = h), e.fillText(s, i, n)),
				null != a &&
					0 < strokeThickness &&
					((e.strokeStyle = a), (e.lineWidth = l), e.strokeText(s, i, n)));
	}
	var jn = Phaser.Utils.Objects.GetValue,
		Rn = Phaser.Utils.Objects.IsPlainObject,
		Ln = Phaser.Math.Clamp,
		Yn = Phaser.Math.DegToRad(270),
		In = (function () {
			b(u, Q);
			var l = w(u);
			function u(t, e, i, n, s, r, o) {
				var h;
				B(this, u),
					Rn(e) &&
						((e = jn((o = e), 'x', 0)),
						(i = jn(o, 'y', 0)),
						(n = jn(o, 'radius', 1)),
						(s = jn(o, 'barColor', void 0)),
						(r = jn(o, 'value', 0)));
				var a = 2 * n;
				return (
					((h = l.call(this, t, e, i, a, a)).type =
						'rexCircularProgressCanvas'),
					h.setRadius(n),
					h.setTrackColor(jn(o, 'trackColor', void 0)),
					h.setBarColor(s),
					h.setCenterColor(jn(o, 'centerColor', void 0)),
					h.setThickness(jn(o, 'thickness', 0.2)),
					h.setStartAngle(jn(o, 'startAngle', Yn)),
					h.setAnticlockwise(jn(o, 'anticlockwise', !1)),
					h.setTextColor(jn(o, 'textColor', void 0)),
					h.setTextStrokeColor(
						jn(o, 'textStrokeColor', void 0),
						jn(o, 'textStrokeThickness', void 0)
					),
					h.setTextFont(
						jn(o, 'textSize', '16px'),
						jn(o, 'textFamily', 'Courier'),
						jn(o, 'textStyle', '')
					),
					h.setTextFormatCallback(
						jn(o, 'textFormatCallback', void 0),
						jn(o, 'textFormatCallbackScope', void 0)
					),
					h.setValue(r),
					h
				);
			}
			return (
				m(u, [
					{
						key: 'resize',
						value: function (t, e) {
							return (
								(t = Math.floor(Math.min(t, e))) === this.width ||
									(C(x(u.prototype), 'resize', this).call(this, t, t),
									this.setRadius(t / 2)),
								this
							);
						},
					},
					{
						key: 'value',
						get: function () {
							return this._value;
						},
						set: function (t) {
							(t = Ln(t, 0, 1)),
								(this.dirty = this.dirty || this._value != t),
								(this._value = t);
						},
					},
					{
						key: 'setValue',
						value: function (t) {
							return (this.value = t), this;
						},
					},
					{
						key: 'radius',
						get: function () {
							return this._radius;
						},
						set: function (t) {
							this.dirty = this.dirty || this._radius != t;
							var e = 2 * (this._radius = t);
							this.resize(e, e);
						},
					},
					{
						key: 'setRadius',
						value: function (t) {
							return (this.radius = t), this;
						},
					},
					{
						key: 'trackColor',
						get: function () {
							return this._trackColor;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								(this.dirty = this.dirty || this._trackColor != t),
								(this._trackColor = t);
						},
					},
					{
						key: 'setTrackColor',
						value: function (t) {
							return (this.trackColor = t), this;
						},
					},
					{
						key: 'barColor',
						get: function () {
							return this._barColor;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								(this.dirty = this.dirty || this._barColor != t),
								(this._barColor = t);
						},
					},
					{
						key: 'setBarColor',
						value: function (t) {
							return (this.barColor = t), this;
						},
					},
					{
						key: 'startAngle',
						get: function () {
							return this._startAngle;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._startAngle != t),
								(this._startAngle = t);
						},
					},
					{
						key: 'setStartAngle',
						value: function (t) {
							return (this.startAngle = t), this;
						},
					},
					{
						key: 'anticlockwise',
						get: function () {
							return this._anticlockwise;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._anticlockwise != t),
								(this._anticlockwise = t);
						},
					},
					{
						key: 'setAnticlockwise',
						value: function (t) {
							return void 0 === t && (t = !0), (this.anticlockwise = t), this;
						},
					},
					{
						key: 'thickness',
						get: function () {
							return this._thickness;
						},
						set: function (t) {
							(t = Ln(t, 0, 1)),
								(this.dirty = this.dirty || this._thickness != t),
								(this._thickness = t);
						},
					},
					{
						key: 'setThickness',
						value: function (t) {
							return (this.thickness = t), this;
						},
					},
					{
						key: 'centerColor',
						get: function () {
							return this._centerColor;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								(this.dirty = this.dirty || this._centerColor != t),
								(this._centerColor = t);
						},
					},
					{
						key: 'centerColor2',
						get: function () {
							return this._centerColor2;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								(this.dirty = this.dirty || this._centerColor2 != t),
								(this._centerColor2 = t);
						},
					},
					{
						key: 'setCenterColor',
						value: function (t, e) {
							return (this.centerColor = t), (this.centerColor2 = e), this;
						},
					},
					{
						key: 'textColor',
						get: function () {
							return this._textColor;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								(this.dirty = this.dirty || this._textColor != t),
								(this._textColor = t);
						},
					},
					{
						key: 'setTextColor',
						value: function (t) {
							return (this.textColor = t), this;
						},
					},
					{
						key: 'textStrokeColor',
						get: function () {
							return this._textStrokeColor;
						},
						set: function (t) {
							(t = et(t, this.canvas, this.context)),
								(this.dirty = this.dirty || this._textStrokeColor != t),
								(this._textStrokeColor = t);
						},
					},
					{
						key: 'textStrokeThickness',
						get: function () {
							return this._textStrokeThickness;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._textStrokeThickness != t),
								(this._textStrokeThickness = t);
						},
					},
					{
						key: 'setTextStrokeColor',
						value: function (t, e) {
							return (
								void 0 === e && (e = 2),
								(this.textStrokeColor = t),
								(this.textStrokeThickness = e),
								this
							);
						},
					},
					{
						key: 'textFont',
						get: function () {
							return this._textFont;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._textFont != t),
								(this._textFont = t);
						},
					},
					{
						key: 'setTextFont',
						value: function (t, e, i) {
							var n = i + ' ' + t + ' ' + e;
							return (this.textFont = n), this;
						},
					},
					{
						key: 'setTextFormatCallback',
						value: function (t, e) {
							return (
								(this.textFormatCallback = t),
								(this.textFormatCallbackScope = e),
								this
							);
						},
					},
					{
						key: 'updateTexture',
						value: function () {
							return (
								this.clear(),
								Dn.call(this),
								C(x(u.prototype), 'updateTexture', this).call(this),
								this
							);
						},
					},
					{
						key: 'getFormatText',
						value: function (t) {
							return (
								void 0 === t && (t = this.value),
								this.textFormatCallbackScope
									? this.textFormatCallback(t)
									: this.textFormatCallback.call(
											this.textFormatCallbackScope,
											t
									  )
							);
						},
					},
				]),
				u
			);
		})();
	u.register('circularProgressCanvas', function (t, e, i, n, s, r) {
		var o = new In(this.scene, t, e, i, n, s, r);
		return this.scene.add.existing(o), o;
	}),
		G(window, 'RexPlugins.UI.CircularProgressCanvas', In);
	var An = Phaser.Renderer.Canvas.SetTransform,
		Fn = {
			renderWebGL: function (t, e, i, n) {
				e.dirty && (e.updateData(), (e.dirty = !1)), i.addToRenderList(e);
				var s = t.pipelines.set(e.pipeline),
					r = j(e, i, n),
					o = s.calcMatrix.copyFrom(r.calc),
					h = e._displayOriginX,
					a = e._displayOriginY,
					l = i.alpha * e.alpha;
				t.pipelines.preBatch(e);
				for (var u = e.geom, c = 0, d = u.length; c < d; c++)
					u[c].webglRender(s, o, l, h, a);
				t.pipelines.postBatch(e);
			},
			renderCanvas: function (t, e, i, n) {
				e.dirty && (e.updateData(), (e.dirty = !1)), i.addToRenderList(e);
				var s = t.currentContext;
				if (An(t, s, e, i, n)) {
					for (
						var r = e._displayOriginX,
							o = e._displayOriginY,
							h = e.geom,
							a = 0,
							l = h.length;
						a < l;
						a++
					)
						h[a].canvasRender(s, r, o);
					s.restore();
				}
			},
		},
		Wn = Phaser.GameObjects.Shape,
		Hn = Phaser.Utils.Array.Remove,
		Xn = (function () {
			b(h, Wn);
			var o = w(h);
			function h(t, e, i, n, s) {
				var r;
				return (
					B(this, h),
					void 0 === e && (e = 0),
					void 0 === i && (i = 0),
					void 0 === n && (n = 0),
					void 0 === s && (s = n),
					((r = o.call(this, t, 'rexShapes', []))._width = -1),
					(r._height = -1),
					(r.shapes = {}),
					r.setPosition(e, i),
					r.setSize(n, s),
					r.updateDisplayOrigin(),
					(r.dirty = !0),
					r
				);
			}
			return (
				m(h, [
					{
						key: 'width',
						get: function () {
							return this._width;
						},
						set: function (t) {
							this.setSize(t, this._height);
						},
					},
					{
						key: 'height',
						get: function () {
							return this._height;
						},
						set: function (t) {
							this.setSize(this._width, t);
						},
					},
					{
						key: 'setDirty',
						value: function (t) {
							return void 0 === t && (t = !0), (this.dirty = t), this;
						},
					},
					{
						key: 'setSize',
						value: function (t, e) {
							(this.dirty =
								this.dirty || this._width !== t || this._height !== e),
								(this._width = t),
								(this._height = e),
								this.updateDisplayOrigin();
							var i = this.input;
							return (
								i &&
									!i.customHitArea &&
									((i.hitArea.width = t), (i.hitArea.height = e)),
								this
							);
						},
					},
					{
						key: 'resize',
						value: function (t, e) {
							return this.setSize(t, e), this;
						},
					},
					{key: 'updateShapes', value: function () {}},
					{
						key: 'updateData',
						value: function () {
							this.updateShapes();
							for (var t = this.geom, e = 0, i = t.length; e < i; e++) {
								var n = t[e];
								n.dirty && n.updateData();
							}
							return this;
						},
					},
					{
						key: 'clear',
						value: function () {
							return (this.geom.length = 0), vt(this.shapes), this;
						},
					},
					{
						key: 'getShape',
						value: function (t) {
							return this.shapes[t];
						},
					},
					{
						key: 'getShapes',
						value: function () {
							return this.geom;
						},
					},
					{
						key: 'addShape',
						value: function (t) {
							this.geom.push(t);
							var e = t.name;
							return e && (this.shapes[e] = t), (this.dirty = !0), this;
						},
					},
					{
						key: 'deleteShape',
						value: function (t) {
							var e = this.getShape(t);
							return e && (delete this.shapes[t], Hn(this.geom, e)), this;
						},
					},
				]),
				h
			);
		})();
	Object.assign(Xn.prototype, Fn);
	var Vn = {
			fillStyle: function (t, e) {
				return (
					void 0 === t
						? (this.isFilled = !1)
						: (void 0 === e && (e = 1),
						  (this.isFilled = !0),
						  (this.fillColor = t),
						  (this.fillAlpha = e)),
					this
				);
			},
			lineStyle: function (t, e, i) {
				return (
					void 0 === t
						? (this.isStroked = !1)
						: (void 0 === i && (i = 1),
						  (this.isStroked = !0),
						  (this.lineWidth = t),
						  (this.strokeColor = e),
						  (this.strokeAlpha = i)),
					this
				);
			},
		},
		Gn = {
			setData: function (t, e) {
				return (
					void 0 === this.data && (this.data = {}), (this.data[t] = e), this
				);
			},
			getData: function (t, e) {
				return (
					void 0 === this.data && (this.data = {}),
					this.data.hasOwnProperty(t) || (this.data[t] = e),
					this.data[t]
				);
			},
		},
		Un = (function () {
			function t() {
				B(this, t),
					(this.name = void 0),
					(this.dirty = !0),
					(this.data = void 0),
					(this.isFilled = !1),
					(this.fillColor = void 0),
					(this.fillAlpha = 1),
					(this.isStroked = !1),
					(this.lineWidth = 1),
					(this.strokeColor = void 0),
					(this.strokeAlpha = 1);
			}
			return (
				m(t, [
					{
						key: 'setName',
						value: function (t) {
							return (this.name = t), this;
						},
					},
					{
						key: 'reset',
						value: function () {
							return this.fillStyle(), this.lineStyle(), this;
						},
					},
					{key: 'webglRender', value: function () {}},
					{key: 'canvasRender', value: function () {}},
					{key: 'updateData', value: function () {}},
				]),
				t
			);
		})();
	Object.assign(Un.prototype, Vn, Gn);
	var Nn = Phaser.Geom.Polygon.Earcut,
		Jn = (function () {
			b(i, Un);
			var e = w(i);
			function i() {
				var t;
				return (
					B(this, i),
					((t = e.call(this)).pathData = []),
					(t.pathIndexes = []),
					(t.closePath = !1),
					t
				);
			}
			return (
				m(i, [
					{
						key: 'updateData',
						value: function () {
							return (
								(this.pathIndexes = Nn(this.pathData)), (this.dirty = !1), this
							);
						},
					},
					{
						key: 'webglRender',
						value: function (t, e, i, n, s) {
							this.isFilled && y(t, e, this, i, n, s),
								this.isStroked && T(t, this, i, n, s);
						},
					},
					{
						key: 'canvasRender',
						value: function (t, e, i) {
							var n = this.pathData,
								s = n.length - 1,
								r = n[0] - e,
								o = n[1] - i;
							t.beginPath(), t.moveTo(r, o), this.closePath || (s -= 2);
							for (var h = 2; h < s; h += 2) {
								var a = n[h] - e,
									l = n[h + 1] - i;
								t.lineTo(a, l);
							}
							this.closePath && t.closePath(),
								this.isFilled && (R(t, this), t.fill()),
								this.isStroked && (L(t, this), t.stroke());
						},
					},
				]),
				i
			);
		})(),
		Kn = Phaser.Math.DegToRad,
		Zn = (function () {
			b(u, Jn);
			var l = w(u);
			function u(t, e, i, n, s, r, o, h) {
				var a;
				return (
					B(this, u),
					void 0 === h && (h = !1),
					(a = l.call(this)).setCenterPosition(t, e),
					a.setRadius(i, n),
					a.setAngle(s, r, o),
					a.setPie(h),
					a.setIterations(32),
					a
				);
			}
			return (
				m(u, [
					{
						key: 'x',
						get: function () {
							return this._x;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._x !== t), (this._x = t);
						},
					},
					{
						key: 'y',
						get: function () {
							return this._y;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._y !== t), (this._y = t);
						},
					},
					{
						key: 'setCenterPosition',
						value: function (t, e) {
							return (this.x = t), (this.y = e), this;
						},
					},
					{
						key: 'radiusX',
						get: function () {
							return this._radiusX;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._radiusX !== t),
								(this._radiusX = t);
						},
					},
					{
						key: 'radiusY',
						get: function () {
							return this._radiusY;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._radiusY !== t),
								(this._radiusY = t);
						},
					},
					{
						key: 'setRadius',
						value: function (t, e) {
							return (
								void 0 === e && (e = t),
								(this.radiusX = t),
								(this.radiusY = e),
								this
							);
						},
					},
					{
						key: 'startAngle',
						get: function () {
							return this._startAngle;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._startAngle !== t),
								(this._startAngle = t);
						},
					},
					{
						key: 'endAngle',
						get: function () {
							return this._endAngle;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._endAngle !== t),
								(this._endAngle = t);
						},
					},
					{
						key: 'anticlockwise',
						get: function () {
							return this._anticlockwise;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._anticlockwise !== t),
								(this._anticlockwise = t);
						},
					},
					{
						key: 'setAngle',
						value: function (t, e, i) {
							return (
								void 0 === i && (i = !1),
								(this.startAngle = t),
								(this.endAngle = e),
								(this.anticlockwise = i),
								this
							);
						},
					},
					{
						key: 'pie',
						get: function () {
							return this._pie;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._pie !== t), (this._pie = t);
						},
					},
					{
						key: 'setPie',
						value: function (t) {
							return void 0 === t && (t = !0), (this.pie = t), this;
						},
					},
					{
						key: 'iterations',
						get: function () {
							return this._iterations;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._iterations !== t),
								(this._iterations = t);
						},
					},
					{
						key: 'setIterations',
						value: function (t) {
							return (this.iterations = t), this;
						},
					},
					{
						key: 'updateData',
						value: function () {
							return (
								(this.pathData.length = 0),
								this.pie && this.pathData.push(this.x, this.y),
								c(
									this.x,
									this.y,
									this.radiusX,
									this.radiusY,
									this.startAngle,
									this.endAngle,
									this.anticlockwise,
									this.iterations,
									this.pathData
								),
								this.pie && this.pathData.push(this.x, this.y),
								this.pathData.push(this.pathData[0], this.pathData[1]),
								C(x(u.prototype), 'updateData', this).call(this),
								this
							);
						},
					},
					{
						key: 'canvasRender',
						value: function (t, e, i) {
							t.beginPath();
							var n = this.x - e,
								s = this.y - i,
								r = Kn(this.startAngle),
								o = Kn(this.endAngle);
							this.pie &&
								(t.moveTo(n, s),
								t.lineTo(
									n + Math.cos(r) * this.radiusX,
									s + Math.sin(r) * this.radiusY
								)),
								t.ellipse(
									n,
									s,
									this.radiusX,
									this.radiusY,
									0,
									r,
									o,
									this.anticlockwise
								),
								this.pie && t.lineTo(n, s),
								this.isFilled && (R(t, this), t.fill()),
								this.isStroked && (L(t, this), t.stroke());
						},
					},
				]),
				u
			);
		})(),
		qn = (function () {
			b(s, Zn);
			var n = w(s);
			function s(t, e, i) {
				return B(this, s), n.call(this, t, e, i, i, 0, 360);
			}
			return s;
		})(),
		$n = (function () {
			b(n, Jn);
			var i = w(n);
			function n(t) {
				var e;
				return (
					B(this, n), (e = i.call(this)).setCurve(t), e.setIterations(32), e
				);
			}
			return (
				m(n, [
					{
						key: 'curve',
						get: function () {
							return this._curve;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._curve !== t), (this._curve = t);
						},
					},
					{
						key: 'setCurve',
						value: function (t) {
							return (this.curve = t), this;
						},
					},
					{
						key: 'iterations',
						get: function () {
							return this._iterations;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._iterations !== t),
								(this._iterations = t);
						},
					},
					{
						key: 'setIterations',
						value: function (t) {
							return (this.iterations = t), this;
						},
					},
					{
						key: 'updateData',
						value: function () {
							this.pathData.length = 0;
							for (
								var t = this.curve.getPoints(this.iterations),
									e = 0,
									i = t.length;
								e < i;
								e++
							)
								this.pathData.push(t[e].x, t[e].y);
							return (
								this.pathData.push(t[0].x, t[0].y),
								C(x(n.prototype), 'updateData', this).call(this),
								this
							);
						},
					},
				]),
				n
			);
		})(),
		Qn = (function () {
			b(r, Zn);
			var s = w(r);
			function r(t, e, i, n) {
				return B(this, r), s.call(this, t, e, i, n, 0, 360);
			}
			return r;
		})(),
		ts = (function () {
			b(o, Jn);
			var r = w(o);
			function o(t, e, i, n) {
				var s;
				return B(this, o), (s = r.call(this)).setP0(t, e), s.setP1(i, n), s;
			}
			return (
				m(o, [
					{
						key: 'x0',
						get: function () {
							return this._x0;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._x0 !== t), (this._x0 = t);
						},
					},
					{
						key: 'y0',
						get: function () {
							return this._y0;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._y0 !== t), (this._y0 = t);
						},
					},
					{
						key: 'setP0',
						value: function (t, e) {
							return (this.x0 = t), (this.y0 = e), this;
						},
					},
					{
						key: 'x1',
						get: function () {
							return this._x1;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._x1 !== t), (this._x1 = t);
						},
					},
					{
						key: 'y1',
						get: function () {
							return this._y1;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._y1 !== t), (this._y1 = t);
						},
					},
					{
						key: 'setP1',
						value: function (t, e) {
							return (this.x1 = t), (this.y1 = e), this;
						},
					},
					{
						key: 'updateData',
						value: function () {
							return (
								(this.pathData.length = 0),
								this.pathData.push(this.x0, this.y0),
								this.pathData.push(this.x1, this.y1),
								this.pathData.push(this.x0, this.y0),
								C(x(o.prototype), 'updateData', this).call(this),
								this
							);
						},
					},
				]),
				o
			);
		})(),
		es = Phaser.Math.DegToRad,
		is = Phaser.Math.RotateAround,
		ns = Phaser.Math.Interpolation.QuadraticBezier,
		ss = Phaser.Math.Interpolation.CubicBezier,
		rs = (function () {
			b(i, Jn);
			var e = w(i);
			function i() {
				var t;
				return B(this, i), (t = e.call(this)).setIterations(32), t;
			}
			return (
				m(i, [
					{
						key: 'iterations',
						get: function () {
							return this._iterations;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._iterations !== t),
								(this._iterations = t);
						},
					},
					{
						key: 'setIterations',
						value: function (t) {
							return (this.iterations = t), this;
						},
					},
					{
						key: 'startAt',
						value: function (t, e) {
							return (
								(this.dirty = !0),
								(this.pathData.length = 0),
								this.pathData.push(t, e),
								(this.lastPointX = t),
								(this.lastPointY = e),
								this
							);
						},
					},
					{
						key: 'lineTo',
						value: function (t, e, i) {
							return (
								void 0 === i && (i = !1),
								i && ((t += this.lastPointX), (e += this.lastPointY)),
								(this.dirty = !0),
								this.pathData.push(t, e),
								(this.lastPointX = t),
								(this.lastPointY = e),
								this
							);
						},
					},
					{
						key: 'verticalLineTo',
						value: function (t, e) {
							return this.lineTo(t, this.lastPointY, e), this;
						},
					},
					{
						key: 'horizontalLineTo',
						value: function (t, e) {
							return this.lineTo(this.lastPointX, t, e), this;
						},
					},
					{
						key: 'ellipticalArc',
						value: function (t, e, i, n, s, r, o) {
							void 0 === o && (o = !1),
								(this.dirty = !0),
								c(t, e, i, n, s, r, o, this.iterations, this.pathData);
							var h = this.pathData.length;
							return (
								(this.lastPointX = this.pathData[h - 2]),
								(this.lastPointY = this.pathData[h - 1]),
								this
							);
						},
					},
					{
						key: 'arc',
						value: function (t, e, i, n, s, r) {
							return this.ellipticalArc(t, e, i, i, n, s, r), this;
						},
					},
					{
						key: 'quadraticBezierTo',
						value: function (t, e, i, n) {
							this.dirty = !0;
							for (
								var s = this.lastPointX,
									r = this.lastPointY,
									o = 1,
									h = this.iterations - 1;
								o <= h;
								o++
							) {
								var a = o / h;
								this.pathData.push(ns(a, s, t, i), ns(a, r, e, n));
							}
							return (
								(this.lastPointX = i),
								(this.lastPointY = n),
								(this.lastCX = t),
								(this.lastCY = e),
								this
							);
						},
					},
					{
						key: 'smoothQuadraticBezierTo',
						value: function (t, e) {
							var i = 2 * this.lastPointX - this.lastCX,
								n = 2 * this.lastPointY - this.lastCY;
							return this.quadraticBezierTo(i, n, t, e);
						},
					},
					{
						key: 'cubicBezierCurveTo',
						value: function (t, e, i, n, s, r) {
							this.dirty = !0;
							for (
								var o = this.lastPointX,
									h = this.lastPointY,
									a = 1,
									l = this.iterations - 1;
								a <= l;
								a++
							) {
								var u = a / l;
								this.pathData.push(ss(u, o, t, i, s), ss(u, h, e, n, r));
							}
							return (
								(this.lastPointX = s),
								(this.lastPointY = r),
								(this.lastCX = i),
								(this.lastCY = n),
								this
							);
						},
					},
					{
						key: 'smoothCubicBezierCurveTo',
						value: function (t, e, i, n) {
							var s = 2 * this.lastPointX - this.lastCX,
								r = 2 * this.lastPointY - this.lastCY;
							return this.cubicBezierCurveTo(s, r, t, e, i, n);
						},
					},
					{
						key: 'close',
						value: function () {
							return (this.dirty = !0), (this.closePath = !0), this;
						},
					},
					{
						key: 'rotateAround',
						value: function (t, e, i) {
							if (0 === this.pathData.length) return this;
							i = es(i);
							for (
								var n = {x: 0, y: 0}, s = 0, r = this.pathData.length - 1;
								s < r;
								s += 2
							)
								(n.x = this.pathData[s]),
									(n.y = this.pathData[s + 1]),
									is(n, t, e, i),
									(this.pathData[s] = n.x),
									(this.pathData[s + 1] = n.y);
							var o = this.pathData.length;
							return (
								(this.lastPointX = this.pathData[o - 2]),
								(this.lastPointY = this.pathData[o - 1]),
								void 0 !== this.lastCX &&
									((n.x = this.lastCX),
									(n.y = this.lastCY),
									is(n, t, e, i),
									(this.lastCX = n.x),
									(this.lastCY = n.y)),
								this
							);
						},
					},
				]),
				i
			);
		})(),
		os = Phaser.Renderer.WebGL.Utils,
		hs = (function () {
			b(o, Un);
			var r = w(o);
			function o(t, e, i, n) {
				var s;
				return (
					B(this, o),
					void 0 === t && (t = 0),
					void 0 === e && (e = 0),
					void 0 === i && (i = 0),
					void 0 === n && (n = i),
					((s = r.call(this)).pathData = []),
					(s.closePath = !0),
					s.setTopLeftPosition(t, e),
					s.setSize(i, n),
					s
				);
			}
			return (
				m(o, [
					{
						key: 'x',
						get: function () {
							return this._x;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._x !== t), (this._x = t);
						},
					},
					{
						key: 'y',
						get: function () {
							return this._y;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._y !== t), (this._y = t);
						},
					},
					{
						key: 'setTopLeftPosition',
						value: function (t, e) {
							return (this.x = t), (this.y = e), this;
						},
					},
					{
						key: 'width',
						get: function () {
							return this._width;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._width !== t), (this._width = t);
						},
					},
					{
						key: 'height',
						get: function () {
							return this._height;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._height !== t),
								(this._height = t);
						},
					},
					{
						key: 'setSize',
						value: function (t, e) {
							return (this.width = t), (this.height = e), this;
						},
					},
					{
						key: 'updateData',
						value: function () {
							this.pathData.length = 0;
							var t = this.x,
								e = t + this.width,
								i = this.y,
								n = i + this.height;
							return (
								this.pathData.push(t, i),
								this.pathData.push(e, i),
								this.pathData.push(e, n),
								this.pathData.push(t, n),
								this.pathData.push(t, i),
								this
							);
						},
					},
					{
						key: 'webglRender',
						value: function (t, e, i, n, s) {
							if (this.isFilled) {
								var r = t.fillTint,
									o = os.getTintAppendFloatAlpha(
										this.fillColor,
										this.fillAlpha * i
									);
								(r.TL = o),
									(r.TR = o),
									(r.BL = o),
									(r.BR = o),
									t.batchFillRect(
										-n + this.x,
										-s + this.y,
										this.width,
										this.height
									);
							}
							this.isStroked && T(t, this, i, n, s);
						},
					},
					{
						key: 'canvasRender',
						value: function (t, e, i) {
							this.isFilled &&
								(R(t, this), t.fillRect(-e, -i, this.width, this.height)),
								this.isStroked &&
									(L(t, this),
									t.beginPath(),
									t.rect(-e, -i, this.width, this.height),
									t.stroke());
						},
					},
				]),
				o
			);
		})(),
		as = Phaser.Renderer.WebGL.Utils,
		ls = (function () {
			b(a, Un);
			var h = w(a);
			function a(t, e, i, n, s, r) {
				var o;
				return (
					B(this, a),
					((o = h.call(this)).pathData = []),
					(o.closePath = !0),
					o.setP0(t, e),
					o.setP1(i, n),
					o.setP2(s, r),
					o
				);
			}
			return (
				m(a, [
					{
						key: 'x0',
						get: function () {
							return this._x0;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._x0 !== t), (this._x0 = t);
						},
					},
					{
						key: 'y0',
						get: function () {
							return this._y0;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._y0 !== t), (this._y0 = t);
						},
					},
					{
						key: 'setP0',
						value: function (t, e) {
							return (this.x0 = t), (this.y0 = e), this;
						},
					},
					{
						key: 'x1',
						get: function () {
							return this._x1;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._x1 !== t), (this._x1 = t);
						},
					},
					{
						key: 'y1',
						get: function () {
							return this._y1;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._y1 !== t), (this._y1 = t);
						},
					},
					{
						key: 'setP1',
						value: function (t, e) {
							return (this.x1 = t), (this.y1 = e), this;
						},
					},
					{
						key: 'x2',
						get: function () {
							return this._x2;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._x2 !== t), (this._x2 = t);
						},
					},
					{
						key: 'y2',
						get: function () {
							return this._y2;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._y2 !== t), (this._y2 = t);
						},
					},
					{
						key: 'setP2',
						value: function (t, e) {
							return (
								(this.dirty = this.dirty || this.x2 !== t || this.y2 !== e),
								(this.x2 = t),
								(this.y2 = e),
								this
							);
						},
					},
					{
						key: 'updateData',
						value: function () {
							return (
								(this.pathData.length = 0),
								this.pathData.push(this.x0, this.y0),
								this.pathData.push(this.x1, this.y1),
								this.pathData.push(this.x2, this.y2),
								this.pathData.push(this.x0, this.y0),
								this
							);
						},
					},
					{
						key: 'webglRender',
						value: function (t, e, i, n, s) {
							if (this.isFilled) {
								var r = as.getTintAppendFloatAlpha(
										this.fillColor,
										this.fillAlpha * i
									),
									o = this.x0 - n,
									h = this.y0 - s,
									a = this.x1 - n,
									l = this.y1 - s,
									u = this.x2 - n,
									c = this.y2 - s,
									d = e.getX(o, h),
									f = e.getY(o, h),
									v = e.getX(a, l),
									p = e.getY(a, l),
									g = e.getX(u, c),
									y = e.getY(u, c);
								t.batchTri(d, f, v, p, g, y, r, r, r);
							}
							this.isStroked && T(t, this, i, n, s);
						},
					},
					{
						key: 'canvasRender',
						value: function (t, e, i) {
							var n = this.x1 - e,
								s = this.y1 - i,
								r = this.x2 - e,
								o = this.y2 - i,
								h = this.x3 - e,
								a = this.y3 - i;
							t.beginPath(),
								t.moveTo(n, s),
								t.lineTo(r, o),
								t.lineTo(h, a),
								t.closePath(),
								this.isFilled && (R(t, this), t.fill()),
								this.isStroked && (L(t, this), t.stroke());
						},
					},
				]),
				a
			);
		})(),
		us = Phaser.Utils.Objects.GetValue,
		cs = Phaser.Utils.Objects.IsPlainObject,
		ds = Phaser.Math.Clamp,
		fs = Phaser.Math.DegToRad(270),
		vs = Phaser.Math.RadToDeg,
		ps = (function () {
			b(u, Xn);
			var l = w(u);
			function u(t, e, i, n, s, r, o) {
				var h;
				B(this, u),
					cs(e) &&
						((e = us((o = e), 'x', 0)),
						(i = us(o, 'y', 0)),
						(n = us(o, 'radius', 1)),
						(s = us(o, 'barColor', void 0)),
						(r = us(o, 'value', 0)));
				var a = 2 * n;
				return (
					((h = l.call(this, t, e, i, a, a)).type = 'rexCircularProgress'),
					h
						.addShape(new qn().setName('track'))
						.addShape(new Zn().setName('bar'))
						.addShape(new qn().setName('center')),
					h.setRadius(n),
					h.setTrackColor(us(o, 'trackColor', void 0)),
					h.setBarColor(s),
					h.setCenterColor(us(o, 'centerColor', void 0)),
					h.setThickness(us(o, 'thickness', 0.2)),
					h.setStartAngle(us(o, 'startAngle', fs)),
					h.setAnticlockwise(us(o, 'anticlockwise', !1)),
					h.setValue(r),
					h
				);
			}
			return (
				m(u, [
					{
						key: 'resize',
						value: function (t, e) {
							return (
								(t = Math.floor(Math.min(t, e))) === this.width ||
									(C(x(u.prototype), 'resize', this).call(this, t, t),
									this.setRadius(t / 2)),
								this
							);
						},
					},
					{
						key: 'value',
						get: function () {
							return this._value;
						},
						set: function (t) {
							(t = ds(t, 0, 1)),
								(this.dirty = this.dirty || this._value != t),
								(this._value = t);
						},
					},
					{
						key: 'setValue',
						value: function (t) {
							return (this.value = t), this;
						},
					},
					{
						key: 'radius',
						get: function () {
							return this._radius;
						},
						set: function (t) {
							this.dirty = this.dirty || this._radius != t;
							var e = 2 * (this._radius = t);
							this.resize(e, e);
						},
					},
					{
						key: 'setRadius',
						value: function (t) {
							return (this.radius = t), this;
						},
					},
					{
						key: 'trackColor',
						get: function () {
							return this._trackColor;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._trackColor != t),
								(this._trackColor = t);
						},
					},
					{
						key: 'setTrackColor',
						value: function (t) {
							return (this.trackColor = t), this;
						},
					},
					{
						key: 'barColor',
						get: function () {
							return this._barColor;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._barColor != t),
								(this._barColor = t);
						},
					},
					{
						key: 'setBarColor',
						value: function (t) {
							return (this.barColor = t), this;
						},
					},
					{
						key: 'startAngle',
						get: function () {
							return this._startAngle;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._startAngle != t),
								(this._startAngle = t);
						},
					},
					{
						key: 'setStartAngle',
						value: function (t) {
							return (this.startAngle = t), this;
						},
					},
					{
						key: 'anticlockwise',
						get: function () {
							return this._anticlockwise;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._anticlockwise != t),
								(this._anticlockwise = t);
						},
					},
					{
						key: 'setAnticlockwise',
						value: function (t) {
							return void 0 === t && (t = !0), (this.anticlockwise = t), this;
						},
					},
					{
						key: 'thickness',
						get: function () {
							return this._thickness;
						},
						set: function (t) {
							(t = ds(t, 0, 1)),
								(this.dirty = this.dirty || this._thickness != t),
								(this._thickness = t);
						},
					},
					{
						key: 'setThickness',
						value: function (t) {
							return (this.thickness = t), this;
						},
					},
					{
						key: 'centerColor',
						get: function () {
							return this._centerColor;
						},
						set: function (t) {
							(this.dirty = this.dirty || this._centerColor != t),
								(this._centerColor = t);
						},
					},
					{
						key: 'setCenterColor',
						value: function (t) {
							return (this.centerColor = t), this;
						},
					},
					{
						key: 'updateShapes',
						value: function () {
							var t = this.radius,
								e = this.thickness * this.radius,
								i = this.radius - e / 2,
								n = this.radius - e,
								s = this.getShape('track');
							this.trackColor && 0 < e
								? s
										.setCenterPosition(t, t)
										.setRadius(i)
										.lineStyle(e, this.trackColor)
								: s.reset();
							var r = this.getShape('bar');
							if (this.barColor && 0 < i) {
								var o, h, a;
								if (1 === this.value) (o = !1), (h = 0), (a = 360);
								else
									(o = this.anticlockwise),
										(h = vs(this.startAngle)),
										(a = 360 * (o ? 1 - this.value : this.value) + h);
								r.setCenterPosition(t, t)
									.setRadius(i)
									.setAngle(h, a, o)
									.lineStyle(e, this.barColor);
							} else r.reset();
							var l = this.getShape('center');
							this.centerColor && 0 < n
								? l
										.setCenterPosition(t, t)
										.setRadius(n)
										.fillStyle(this.centerColor)
								: l.reset();
						},
					},
				]),
				u
			);
		})();
	u.register('circularProgress', function (t, e, i, n, s, r) {
		var o = new ps(this.scene, t, e, i, n, s, r);
		return this.scene.add.existing(o), o;
	}),
		G(window, 'RexPlugins.UI.CircularProgress', ps);
	function gs(t) {
		return t.hasOwnProperty('rexSizer') || (t.rexSizer = {}), t.rexSizer;
	}
	function ys(t, e) {
		void 0 === e &&
			(void 0 === ks && (ks = new Phaser.Geom.Rectangle()), (e = ks));
		var i = t.game.config;
		return e.setTo(0, 0, i.width, i.height), e;
	}
	var ks,
		ms = Phaser.Display.Align,
		bs = {
			center: ms.CENTER,
			left: ms.LEFT_CENTER,
			right: ms.RIGHT_CENTER,
			top: ms.TOP_CENTER,
			bottom: ms.BOTTOM_CENTER,
			'left-top': ms.TOP_LEFT,
			'left-center': ms.LEFT_CENTER,
			'left-bottom': ms.BOTTOM_LEFT,
			'center-top': ms.TOP_CENTER,
			'center-center': ms.CENTER,
			'center-bottom': ms.BOTTOM_CENTER,
			'right-top': ms.TOP_RIGHT,
			'right-center': ms.RIGHT_CENTER,
			'right-bottom': ms.BOTTOM_RIGHT,
		},
		xs = new Phaser.GameObjects.Zone(
			{sys: {queueDepthSort: gt, events: {once: gt}}},
			0,
			0,
			1,
			1
		);
	xs.setOrigin(0);
	function Cs(t) {
		return void 0 !== t.displayWidth ? t.displayWidth : t.width;
	}
	function ws(t) {
		return void 0 !== t.displayHeight ? t.displayHeight : t.height;
	}
	function Ss(t) {
		var e = ws(t);
		return t.y + e - e * t.originY;
	}
	function Ps(t) {
		var e = Cs(t);
		return t.x - e * t.originX + 0.5 * e;
	}
	function Os(t, e) {
		var i = ws(t);
		return (t.y = e - i + i * t.originY), t;
	}
	function Ts(t, e) {
		var i = Cs(t),
			n = i * t.originX;
		return (t.x = e + n - 0.5 * i), t;
	}
	function Ms(t) {
		var e = Cs(t);
		return t.x - e * t.originX;
	}
	function _s(t, e) {
		var i = Cs(t);
		return (t.x = e + i * t.originX), t;
	}
	function zs(t) {
		var e = Cs(t);
		return t.x + e - e * t.originX;
	}
	function Bs(t, e) {
		var i = Cs(t);
		return (t.x = e - i + i * t.originX), t;
	}
	function Es(t, e) {
		var i = ws(t),
			n = i * t.originY;
		return (t.y = e + n - 0.5 * i), t;
	}
	function Ds(t) {
		var e = ws(t);
		return t.y - e * t.originY + 0.5 * e;
	}
	function js(t) {
		var e = ws(t);
		return t.y - e * t.originY;
	}
	function Rs(t, e) {
		var i = ws(t);
		return (t.y = e + i * t.originY), t;
	}
	var Ls = 0,
		Ys = 1,
		Is = 2,
		As = 4,
		Fs = 6,
		Ws = 8,
		Hs = 10,
		Xs = 12,
		Vs = [];
	(Vs[11] = function (t, e, i, n) {
		return (
			void 0 === i && (i = 0),
			void 0 === n && (n = 0),
			Ts(t, Ps(e) + i),
			Os(t, Ss(e) + n),
			t
		);
	}),
		(Vs[Hs] = function (t, e, i, n) {
			return (
				void 0 === i && (i = 0),
				void 0 === n && (n = 0),
				_s(t, Ms(e) - i),
				Os(t, Ss(e) + n),
				t
			);
		}),
		(Vs[Xs] = function (t, e, i, n) {
			return (
				void 0 === i && (i = 0),
				void 0 === n && (n = 0),
				Bs(t, zs(e) + i),
				Os(t, Ss(e) + n),
				t
			);
		}),
		(Vs[Fs] = function (t, e, i, n) {
			var s, r, o;
			return (
				void 0 === i && (i = 0),
				void 0 === n && (n = 0),
				(s = t),
				(r = Ps(e) + i),
				(o = Ds(e) + n),
				Ts(s, r),
				Es(s, o),
				t
			);
		}),
		(Vs[As] = function (t, e, i, n) {
			return (
				void 0 === i && (i = 0),
				void 0 === n && (n = 0),
				_s(t, Ms(e) - i),
				Es(t, Ds(e) + n),
				t
			);
		}),
		(Vs[Ws] = function (t, e, i, n) {
			return (
				void 0 === i && (i = 0),
				void 0 === n && (n = 0),
				Bs(t, zs(e) + i),
				Es(t, Ds(e) + n),
				t
			);
		}),
		(Vs[Ys] = function (t, e, i, n) {
			return (
				void 0 === i && (i = 0),
				void 0 === n && (n = 0),
				Ts(t, Ps(e) + i),
				Rs(t, js(e) - n),
				t
			);
		}),
		(Vs[Ls] = function (t, e, i, n) {
			return (
				void 0 === i && (i = 0),
				void 0 === n && (n = 0),
				_s(t, Ms(e) - i),
				Rs(t, js(e) - n),
				t
			);
		}),
		(Vs[Is] = function (t, e, i, n) {
			return (
				void 0 === i && (i = 0),
				void 0 === n && (n = 0),
				Bs(t, zs(e) + i),
				Rs(t, js(e) - n),
				t
			);
		});
	function Gs(t, e, i, n, s) {
		return Vs[i](t, e, n, s);
	}
	function Us(t, e) {
		return (
			void 0 === e && (e = {}),
			'number' == typeof t
				? ((e.left = t), (e.right = t), (e.top = t), (e.bottom = t))
				: ((e.left = or(t, 'left', 0)),
				  (e.right = or(t, 'right', 0)),
				  (e.top = or(t, 'top', 0)),
				  (e.bottom = or(t, 'bottom', 0))),
			e
		);
	}
	function Ns(t, e) {
		return (
			void 0 === this.childrenMap && (this.childrenMap = {}),
			(this.childrenMap[t] = e),
			this
		);
	}
	function Js(t) {
		var e = Math.max(this.childrenWidth, this.minWidth);
		return void 0 === t && (t = e), t;
	}
	function Ks(t) {
		var e = Math.max(this.childrenHeight, this.minHeight);
		return void 0 === t && (t = e), t;
	}
	function Zs() {
		(this._childrenWidth = void 0), (this._childrenHeight = void 0);
		for (var t, e = this.getChildrenSizers(), i = 0, n = e.length; i < n; i++)
			(t = e[i]).ignoreLayout || t.preLayout();
	}
	function qs(t) {
		var e, i;
		for (var n in this.sizerChildren)
			!(e = this.sizerChildren[n]) ||
				(e.isRexSizer && e.ignoreLayout) ||
				(void 0 === (i = this.getExpandedChildWidth(e, t)) &&
					(i = this.resolveWidth(i)),
				e.runWidthWrap && e.runWidthWrap(i));
		return this;
	}
	function $s(t, e) {
		void 0 === e ? (e = new cr()) : !0 === e && (e = dr);
		var i = t.scale,
			n = i.canvasBounds,
			s = i.displayScale,
			r = i.autoCenter;
		return (
			(e.x = 0 <= n.x ? 0 : -(n.x * s.x)),
			(e.y = 0 <= n.y ? 0 : -(n.y * s.y)),
			(e.width = n.width * s.x - e.x),
			(e.height = n.height * s.y - e.y),
			(1 !== r && 2 !== r) || (e.width -= e.x),
			(1 !== r && 3 !== r) || (e.height -= e.y),
			e
		);
	}
	function Qs(t) {
		return t instanceof pr;
	}
	function tr(t) {
		return Qs(t)
			? t
			: t.scene && Qs(t.scene)
			? t.scene
			: t.parent && t.parent.scene && Qs(t.parent.scene)
			? t.parent.scene
			: void 0;
	}
	function er(t) {
		return t instanceof gr;
	}
	var ir = Phaser.Utils.Objects.GetValue,
		nr = Phaser.GameObjects.Group,
		sr = function (t) {
			return t.add.text(0, 0, '');
		},
		rr = new Phaser.Geom.Rectangle(),
		or = Phaser.Utils.Objects.GetValue,
		hr = Vi.prototype.add,
		ar = {
			pin: function (t) {
				return hr.call(this, t), this;
			},
			addBackground: function (t, e, i) {
				return (
					void 0 === this.backgroundChildren && (this.backgroundChildren = []),
					'string' == typeof e && ((i = e), (e = void 0)),
					void 0 === e && (e = 0),
					this.pin(t),
					this.backgroundChildren.push(t),
					(this.getSizerConfig(t).padding = Us(e)),
					void 0 !== i && this.addChildrenMap(i, t),
					this
				);
			},
			isBackground: function (t) {
				return (
					void 0 !== this.backgroundChildren &&
					-1 !== this.backgroundChildren.indexOf(t)
				);
			},
		},
		lr = /(\S+)\[(\d+)\]/i,
		ur = {
			getInnerPadding: function (t) {
				return Ji(this.space, t);
			},
			setInnerPadding: function (t, e) {
				return Ki(this.space, t, e), this;
			},
			getOutterPadding: function (t) {
				return Ji(this.getSizerConfig(this).padding, t);
			},
			setOuterPadding: function (t, e) {
				return Ki(this.getSizerConfig(this).padding, t, e), this;
			},
		},
		cr = Phaser.Geom.Rectangle,
		dr = new cr(),
		fr = (function () {
			function i(t, e) {
				B(this, i),
					(this.gameObject = t),
					(this.scene = t.scene),
					this.resetFromJSON(e),
					this.boot();
			}
			return (
				m(i, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							var e, i, n, s, r, o, h, a;
							return (
								void 0 !== t.x
									? ((e = null), (i = t.x))
									: void 0 !== t.left
									? ((e = 0), (i = t.left))
									: void 0 !== t.right
									? ((e = 1), (i = t.right))
									: void 0 !== t.centerX && ((e = 0.5), (i = t.centerX)),
								void 0 !== t.y
									? ((n = null), (s = t.y))
									: void 0 !== t.top
									? ((n = 0), (s = t.top))
									: void 0 !== t.bottom
									? ((n = 1), (s = t.bottom))
									: void 0 !== t.centerY && ((n = 0.5), (s = t.centerY)),
								void 0 !== i &&
									((i = i
										.replace('left', '0%')
										.replace('right', '100%')
										.replace('center', '50%')
										.split('%')),
									(r = parseFloat(i[0]) / 100),
									(o = '' === i[1] ? 0 : parseFloat(i[1]))),
								void 0 !== s &&
									((s = s
										.replace('top', '0%')
										.replace('bottom', '100%')
										.replace('center', '50%')
										.split('%')),
									(h = parseFloat(s[0]) / 100),
									(a = '' === s[1] ? 0 : parseFloat(s[1]))),
								this.setAlign(e, n),
								this.setPercentage(r, h),
								this.setOffset(o, a),
								this
							);
						},
					},
					{
						key: 'boot',
						value: function () {
							this.scene.scale.on('resize', this.anchor, this),
								this.gameObject.on('destroy', this.destroy, this),
								this.anchor();
						},
					},
					{
						key: 'shutdown',
						value: function () {
							this.scene.scale.off('resize', this.anchor, this),
								(this.gameObject = void 0),
								(this.scene = void 0);
						},
					},
					{
						key: 'destroy',
						value: function () {
							this.shutdown();
						},
					},
					{
						key: 'setAlign',
						value: function (t, e) {
							return (this.alignX = t), (this.alignY = e), this;
						},
					},
					{
						key: 'setPercentage',
						value: function (t, e) {
							return (this.percentageX = t), (this.percentageY = e), this;
						},
					},
					{
						key: 'setOffset',
						value: function (t, e) {
							return (this.offsetX = t), (this.offsetY = e), this;
						},
					},
					{
						key: 'anchor',
						value: function () {
							return (
								(this.viewport = $s(this.scene, !0)),
								this.updatePosition(),
								this
							);
						},
					},
					{
						key: 'updatePosition',
						value: function () {
							var t = this.gameObject;
							return (
								null === this.alignX
									? (t.x = this.anchorX)
									: void 0 !== this.alignX &&
									  (t.x =
											this.anchorX +
											t.displayWidth * (t.originX - this.alignX)),
								null === this.alignY
									? (this.gameObject.y = this.anchorY)
									: void 0 !== this.alignY &&
									  (t.y =
											this.anchorY +
											t.displayHeight * (t.originY - this.alignY)),
								this
							);
						},
					},
					{
						key: 'anchorX',
						get: function () {
							return (
								this.viewport.x +
								this.viewport.width * this.percentageX +
								this.offsetX
							);
						},
					},
					{
						key: 'anchorY',
						get: function () {
							return (
								this.viewport.y +
								this.viewport.height * this.percentageY +
								this.offsetY
							);
						},
					},
				]),
				i
			);
		})(),
		vr = {
			setEventEmitter: function (t, e) {
				return (
					void 0 === e && (e = Phaser.Events.EventEmitter),
					(this._privateEE = void 0 === t),
					(this._eventEmitter = this._privateEE ? new e() : t),
					this
				);
			},
			destroyEventEmitter: function () {
				return (
					this._eventEmitter &&
						this._privateEE &&
						this._eventEmitter.shutdown(),
					this
				);
			},
			getEventEmitter: function () {
				return this._eventEmitter;
			},
			on: function () {
				return (
					this._eventEmitter &&
						this._eventEmitter.on.apply(this._eventEmitter, arguments),
					this
				);
			},
			once: function () {
				return (
					this._eventEmitter &&
						this._eventEmitter.once.apply(this._eventEmitter, arguments),
					this
				);
			},
			off: function () {
				return (
					this._eventEmitter &&
						this._eventEmitter.off.apply(this._eventEmitter, arguments),
					this
				);
			},
			emit: function (t) {
				return (
					this._eventEmitter &&
						t &&
						this._eventEmitter.emit.apply(this._eventEmitter, arguments),
					this
				);
			},
			addListener: function () {
				return (
					this._eventEmitter &&
						this._eventEmitter.addListener.apply(this._eventEmitter, arguments),
					this
				);
			},
			removeListener: function () {
				return (
					this._eventEmitter &&
						this._eventEmitter.removeListener.apply(
							this._eventEmitter,
							arguments
						),
					this
				);
			},
			removeAllListeners: function () {
				return (
					this._eventEmitter &&
						this._eventEmitter.removeAllListeners.apply(
							this._eventEmitter,
							arguments
						),
					this
				);
			},
			listenerCount: function () {
				return this._eventEmitter
					? this._eventEmitter.listenerCount.apply(
							this._eventEmitter,
							arguments
					  )
					: 0;
			},
			listeners: function () {
				return this._eventEmitter
					? this._eventEmitter.listeners.apply(this._eventEmitter, arguments)
					: [];
			},
		},
		pr = Phaser.Scene,
		gr = Phaser.GameObjects.GameObject,
		yr = Phaser.Utils.Objects.GetValue,
		kr = (function () {
			function n(t, e) {
				B(this, n), (this.parent = t), (this.scene = tr(t));
				var i = yr(e, 'eventEmitter', !1);
				!0 === i && (i = void 0), this.setEventEmitter(i), this.boot();
			}
			return (
				m(n, [
					{
						key: 'boot',
						value: function () {
							er(this.parent)
								? this.parent.once &&
								  this.parent.on('destroy', this.destroy, this)
								: Qs(this.parent) &&
								  this.parent.events.once('shutdown', this.destroy, this);
						},
					},
					{
						key: 'shutdown',
						value: function () {
							return (
								this.stop(),
								Qs(this.parent) &&
									this.parent.events.off('shutdown', this.destroy, this),
								this.destroyEventEmitter(),
								(this.parent = void 0),
								(this.scene = void 0),
								this
							);
						},
					},
					{
						key: 'destroy',
						value: function () {
							return this.shutdown(), this;
						},
					},
					{
						key: 'start',
						value: function (t) {
							return (
								this.isRunning ||
									((this.tween = this.scene.tweens
										.add(t)
										.on('complete', this.complete, this)),
									!1 === this.getEventEmitter() &&
										this.setEventEmitter(this.tween)),
								this
							);
						},
					},
					{
						key: 'restart',
						value: function () {
							return this.stop().start(), this;
						},
					},
					{
						key: 'stop',
						value: function () {
							return (
								this.tween &&
									(this.getEventEmitter() === this.tween &&
										this.setEventEmitter(!1),
									this.tween.remove(),
									(this.tween = void 0)),
								this
							);
						},
					},
					{
						key: 'pause',
						value: function () {
							return this.tween && this.tween.pause(), this;
						},
					},
					{
						key: 'resume',
						value: function () {
							return this.tween && this.tween.resume(), this;
						},
					},
					{
						key: 'complete',
						value: function () {
							return (
								this.stop(),
								this.getEventEmitter() && this.emit('complete'),
								this
							);
						},
					},
					{
						key: 'isRunning',
						get: function () {
							return !!this.tween;
						},
					},
				]),
				n
			);
		})();
	Object.assign(kr.prototype, vr);
	function mr(i, n) {
		return new Promise(function (t, e) {
			i.once(n, function () {
				t();
			});
		});
	}
	function br(t) {
		return mr(t, 'complete');
	}
	function xr(t) {
		Qr(t, !1);
	}
	function Cr(t) {
		Qr(t, !0);
	}
	function wr(t) {
		return !!t && !gs(t).hidden;
	}
	function Sr(t, e, i, n, s) {
		return (
			!(!t || !t.getBounds) &&
			!(n && !n(t, e, i)) &&
			!!(eo = t.getBounds(eo)).contains(e, i) &&
			!(s && !s(t, e, i))
		);
	}
	function Pr(t, e, i, n) {
		if (e) return Sr(t, e.x, e.y, i, n);
		for (
			var s = t.scene.input.manager, r = s.pointersTotal, o = s.pointers, h = 0;
			h < r;
			h++
		)
			if (((e = o[h]), Sr(t, e.x, e.y, i, n))) return !0;
		return !1;
	}
	function Or(t) {
		return t && 'function' == typeof t;
	}
	function Tr(t, e, i, n, s) {
		return Sr(t, e, i, io(n), no(s));
	}
	function Mr(t) {
		return !(t.rexSizer && t.rexSizer.hidden);
	}
	function _r(t, e, i) {
		!t ||
			(void 0 === e && void 0 === i) ||
			(t.resize
				? (void 0 === e && (e = t.width),
				  void 0 === i && (i = t.height),
				  t.resize(e, i))
				: (void 0 !== e && (t.displayWidth = e),
				  void 0 !== i && (t.displayHeight = i)));
	}
	var zr = Phaser.Utils.Objects.GetValue,
		Br = Phaser.Utils.Objects.GetAdvancedValue,
		Er = (function () {
			b(s, kr);
			var n = w(s);
			function s(t, e) {
				var i;
				return (
					B(this, s),
					((i = n.call(this, t)).gameObject = t),
					(i.scaleStart = {}),
					(i.scaleEnd = {}),
					i.resetFromJSON(e),
					i
				);
			}
			return (
				m(s, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								this.setMode(zr(t, 'mode', 0)),
								this.setScaleRange(Br(t, 'start', void 0), Br(t, 'end', 0)),
								this.setDelay(Br(t, 'delay', 0)),
								this.setDuration(Br(t, 'duration', 1e3)),
								this.setEase(zr(t, 'ease', void 0)),
								this
							);
						},
					},
					{
						key: 'toJSON',
						value: function () {
							return {
								mode: this.mode,
								startX: this.startX,
								startY: this.startY,
								endX: this.endX,
								endY: this.endY,
								delay: this.delay,
								duration: this.duration,
							};
						},
					},
					{
						key: 'setMode',
						value: function (t) {
							return 'string' == typeof t && (t = Dr[t]), (this.mode = t), this;
						},
					},
					{
						key: 'setScaleRange',
						value: function (t, e) {
							return (
								'number' == typeof t
									? ((this.startX = t), (this.startY = t))
									: ((this.startX = Br(t, 'x', this.gameObject.scaleX)),
									  (this.startY = Br(t, 'y', this.gameObject.scaleY))),
								'number' == typeof e
									? ((this.endX = e), (this.endY = e))
									: ((this.endX = Br(e, 'x', void 0)),
									  (this.endY = Br(e, 'y', void 0))),
								this
							);
						},
					},
					{
						key: 'setDelay',
						value: function (t) {
							return (this.delay = t), this;
						},
					},
					{
						key: 'setDuration',
						value: function (t) {
							return (this.duration = t), this;
						},
					},
					{
						key: 'setEase',
						value: function (t) {
							return void 0 === t && (t = 'Linear'), (this.ease = t), this;
						},
					},
					{
						key: 'start',
						value: function () {
							if (this.isRunning) return this;
							var t = {
								targets: this.gameObject,
								delay: this.delay,
								duration: this.duration,
								ease: this.ease,
								yoyo: 2 == this.mode,
								repeat: 2 == this.mode ? -1 : 0,
								onComplete: function () {
									1 === this.mode && this.gameObject.destroy();
								},
								onCompleteScope: this,
							};
							return (
								void 0 !== this.startX &&
									void 0 !== this.endX &&
									((this.gameObject.scaleX = this.startX),
									(t.scaleX = this.endX)),
								void 0 !== this.startY &&
									void 0 !== this.endY &&
									((this.gameObject.scaleY = this.startY),
									(t.scaleY = this.endY)),
								C(x(s.prototype), 'start', this).call(this, t),
								this
							);
						},
					},
				]),
				s
			);
		})(),
		Dr = {stop: 0, destroy: 1, yoyo: 2},
		jr = {},
		Rr = Phaser.Utils.Objects.IsPlainObject,
		Lr = {
			popUp: function (t, e, i) {
				if (Rr(t)) {
					var n = t;
					(t = n.duration), (e = n.orientation), (i = n.ease);
				}
				(this._scale = (function (t, e, i, n, s) {
					switch (i) {
						case (jr.mode = 0):
						case 'x':
							jr.start = {x: 0};
							break;
						case 1:
						case 'y':
							jr.start = {y: 0};
							break;
						default:
							jr.start = 0;
					}
					return (
						(jr.end = 1),
						(jr.duration = e),
						(jr.ease = void 0 === n ? 'Cubic' : n),
						void 0 === s ? (s = new Er(t, jr)) : s.resetFromJSON(jr),
						s.restart(),
						s
					);
				})(this, t, e, i, this._scale)),
					this._scale.once(
						'complete',
						function () {
							this.emit('popup.complete', this);
						},
						this
					);
				var s = this.getParentSizer();
				if (s) {
					var r = this;
					this._scale.on('update', function () {
						s.resetChildPositionState(r);
					});
				}
				return this;
			},
			popUpPromise: function (t, e, i) {
				return this.popUp(t, e, i), br(this._scale);
			},
			scaleDownDestroy: function (t, e, i, n) {
				if (Rr(t)) {
					var s = t;
					(t = s.duration), (e = s.orientation), (i = s.ease), (n = s.destroy);
				}
				(this._scale = (function (t, e, i, n, s, r) {
					s instanceof Er && ((r = s), (s = void 0)), void 0 === s && (s = !0);
					var o = {};
					switch (((o.mode = s ? 1 : 0), i)) {
						case 0:
						case 'x':
							o.end = {x: 0};
							break;
						case 1:
						case 'y':
							o.end = {y: 0};
							break;
						default:
							o.end = 0;
					}
					return (
						(o.duration = e),
						(o.ease = void 0 === n ? 'Linear' : n),
						void 0 === r ? (r = new Er(t, o)) : r.resetFromJSON(o),
						r.restart(),
						r
					);
				})(this, t, e, i, n, this._scale)),
					this._scale.once(
						'complete',
						function () {
							this.emit('scaledown.complete', this);
						},
						this
					);
				var r = this.getParentSizer();
				if (r) {
					var o = this;
					this._scale.on('update', function () {
						r.resetChildPositionState(o);
					});
				}
				return this;
			},
			scaleDownDestroyPromise: function (t, e, i, n) {
				return this.scaleDownDestroy(t, e, i, n), br(this._scale);
			},
			scaleDown: function (t, e, i) {
				return this.scaleDownDestroy(t, e, i, !1), this;
			},
			scaleDownPromise: function (t, e, i) {
				return this.scaleDown(t, e, i), br(this._scale);
			},
		},
		Yr = Phaser.Utils.Objects.GetValue,
		Ir = Phaser.Utils.Objects.GetAdvancedValue,
		Ar = (function () {
			b(s, kr);
			var n = w(s);
			function s(t, e) {
				var i;
				return (
					B(this, s),
					((i = n.call(this, t)).gameObject = t),
					(i.alphaStart = void 0),
					(i.alphaEnd = void 0),
					i.resetFromJSON(e),
					i
				);
			}
			return (
				m(s, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								this.setMode(Yr(t, 'mode', 0)),
								this.setAlphaRange(
									Ir(t, 'start', this.gameObject.alpha),
									Ir(t, 'end', 0)
								),
								this.setDelay(Ir(t, 'delay', 0)),
								this.setDuration(Ir(t, 'duration', 1e3)),
								this
							);
						},
					},
					{
						key: 'toJSON',
						value: function () {
							return {
								mode: this.mode,
								start: this.alphaStart,
								end: this.alphaEnd,
								delay: this.delay,
								duration: this.duration,
							};
						},
					},
					{
						key: 'shutdown',
						value: function () {
							return (
								C(x(s.prototype), 'shutdown', this).call(this),
								(this.gameObject = void 0),
								this
							);
						},
					},
					{
						key: 'setMode',
						value: function (t) {
							return 'string' == typeof t && (t = Fr[t]), (this.mode = t), this;
						},
					},
					{
						key: 'setAlphaRange',
						value: function (t, e) {
							return (this.alphaStart = t), (this.alphaEnd = e), this;
						},
					},
					{
						key: 'setDelay',
						value: function (t) {
							return (this.delay = t), this;
						},
					},
					{
						key: 'setDuration',
						value: function (t) {
							return (this.duration = t), this;
						},
					},
					{
						key: 'start',
						value: function () {
							if (this.isRunning) return this;
							this.gameObject.setAlpha(this.alphaStart);
							var t = {
								targets: this.gameObject,
								alpha: this.alphaEnd,
								delay: this.delay,
								duration: this.duration,
								ease: 'Linear',
								yoyo: 2 == this.mode,
								repeat: 2 == this.mode ? -1 : 0,
								onComplete: function () {
									1 === this.mode && this.gameObject.destroy();
								},
								onCompleteScope: this,
							};
							return C(x(s.prototype), 'start', this).call(this, t), this;
						},
					},
				]),
				s
			);
		})(),
		Fr = {stop: 0, destroy: 1, yoyo: 2},
		Wr = Phaser.Utils.Objects.IsPlainObject,
		Hr = {},
		Xr = {},
		Vr = Phaser.Utils.Objects.IsPlainObject,
		Gr = {
			fadeIn: function (t, e) {
				var i, n, s, r, o, h;
				Vr(t) && (t = t.duration);
				(this._fade =
					((n = t),
					(s = e),
					(r = (i = this)._fade),
					(h = Wr(s) ? ((o = s.start), s.end) : s),
					void 0 === o && (o = 0),
					void 0 === h && (h = i.alpha),
					(Hr.mode = 0),
					(Hr.start = o),
					(Hr.end = h),
					(Hr.duration = n),
					void 0 === r ? (r = new Ar(i, Hr)) : r.resetFromJSON(Hr),
					r.restart(),
					r)),
					this._fade.once(
						'complete',
						function () {
							this.emit('fadein.complete', this);
						},
						this
					);
				var a = this.getParentSizer();
				if (a) {
					var l = this;
					this._fade.on('update', function () {
						a.resetChildAlphaState(l);
					});
				}
				return this;
			},
			fadeInPromoise: function (t, e) {
				return this.fadeIn(t, e), br(this._fade);
			},
			fadeOutDestroy: function (t, e) {
				if (Vr(t)) {
					var i = t;
					(t = i.duration), (e = i.destroy);
				}
				var n, s, r, o;
				(this._fade =
					((s = t),
					(r = e),
					(o = (n = this)._fade),
					r instanceof Ar && ((o = r), (r = void 0)),
					void 0 === r && (r = !0),
					(Xr.mode = r ? 1 : 0),
					(Xr.end = 0),
					(Xr.duration = s),
					void 0 === o ? (o = new Ar(n, Xr)) : o.resetFromJSON(Xr),
					o.restart(),
					o)),
					this._fade.once(
						'complete',
						function () {
							this.emit('fadeout.complete', this);
						},
						this
					);
				var h = this.getParentSizer();
				if (h) {
					var a = this;
					this._fade.on('update', function () {
						h.resetChildAlphaState(a);
					});
				}
				return this;
			},
			fadeOutDestroyPromise: function (t, e) {
				return this.fadeOutDestroy(t, e), br(this._fade);
			},
			fadeOut: function (t) {
				return this.fadeOutDestroy(t, !1), this;
			},
			fadeOutPromise: function (t) {
				return this.fadeOut(t), br(this._fade);
			},
		},
		Ur = Phaser.Utils.Objects.GetValue,
		Nr = Phaser.Utils.Objects.GetAdvancedValue,
		Jr = (function () {
			b(s, kr);
			var n = w(s);
			function s(t, e) {
				var i;
				return (
					B(this, s),
					((i = n.call(this, t)).gameObject = t),
					i.resetFromJSON(e),
					i
				);
			}
			return (
				m(s, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							if (
								(this.setMode(Ur(t, 'mode', 0)),
								t && (t.hasOwnProperty('x') || t.hasOwnProperty('y')))
							) {
								var e = Nr(t, 'x', void 0),
									i = Nr(t, 'y', void 0);
								this.setTargetPosition(e, i);
							} else this.setTargetPosition(t);
							return (
								this.setDelay(Nr(t, 'delay', 0)),
								this.setDuration(Nr(t, 'duration', 1e3)),
								this.setEase(Ur(t, 'ease', void 0)),
								this
							);
						},
					},
					{
						key: 'toJSON',
						value: function () {
							return {
								mode: this.mode,
								startX: this.startX,
								startY: this.startY,
								endX: this.endX,
								endY: this.endY,
								delay: this.delay,
								duration: this.duration,
							};
						},
					},
					{
						key: 'setMode',
						value: function (t) {
							return 'string' == typeof t && (t = Kr[t]), (this.mode = t), this;
						},
					},
					{
						key: 'setTargetPosition',
						value: function (t, e) {
							if ('number' == typeof t || 'number' == typeof e)
								(this.startX = this.gameObject.x),
									(this.startY = this.gameObject.y),
									(this.endX = t),
									(this.endY = e);
							else {
								var i = t;
								(this.startX = Nr(i, 'startX', void 0)),
									(this.startY = Nr(i, 'startY', void 0)),
									(this.endX = Nr(i, 'endX', void 0)),
									(this.endY = Nr(i, 'endY', void 0));
							}
							return this;
						},
					},
					{
						key: 'setDelay',
						value: function (t) {
							return (this.delay = t), this;
						},
					},
					{
						key: 'setDuration',
						value: function (t) {
							return (this.duration = t), this;
						},
					},
					{
						key: 'setEase',
						value: function (t) {
							return void 0 === t && (t = 'Linear'), (this.ease = t), this;
						},
					},
					{
						key: 'start',
						value: function () {
							if (this.isRunning) return this;
							var t = {
								targets: this.gameObject,
								delay: this.delay,
								duration: this.duration,
								ease: this.ease,
								yoyo: 2 == this.mode,
								repeat: 2 == this.mode ? -1 : 0,
								onComplete: function () {
									1 === this.mode && this.gameObject.destroy();
								},
								onCompleteScope: this,
							};
							return (
								void 0 !== this.startX &&
									void 0 !== this.endX &&
									(this.gameObject.setX(this.startX), (t.x = this.endX)),
								void 0 !== this.startY &&
									void 0 !== this.endY &&
									(this.gameObject.setY(this.startY), (t.y = this.endY)),
								C(x(s.prototype), 'start', this).call(this, t),
								this
							);
						},
					},
				]),
				s
			);
		})(),
		Kr = {stop: 0, destroy: 1, yoyo: 2},
		Zr = function (t, e) {
			if ('number' == typeof t) return t;
			var i = t[0],
				n = parseFloat(t.substr(2));
			switch (i) {
				case '+':
					return e + n;
				case '-':
					return e - n;
				case '*':
					return e * n;
				case '/':
					return e / n;
			}
		},
		qr = Phaser.Utils.Objects.IsPlainObject,
		$r = {
			moveFrom: function (t, e, i, n, s) {
				if (qr(e)) {
					var r = e;
					(e = r.x), (i = r.y), (t = r.duration), (n = r.ease);
				}
				(this._easeMove = (function (t, e, i, n, s, r, o) {
					r instanceof Jr && ((o = r), (r = void 0)), void 0 === r && (r = !1);
					var h = {};
					return (
						(h.mode = r ? 1 : 0),
						void 0 !== i && ((h.startX = Zr(i, t.x)), (h.endX = t.x)),
						void 0 !== n && ((h.startY = Zr(n, t.y)), (h.endY = t.y)),
						(h.duration = e),
						(h.ease = void 0 === s ? 'Linear' : s),
						void 0 === o ? (o = new Jr(t, h)) : o.resetFromJSON(h),
						o.restart(),
						o
					);
				})(this, t, e, i, n, s, this._easeMove)),
					this._easeMove.once(
						'complete',
						function () {
							this.emit('movefrom.complete', this);
						},
						this
					);
				var o = this.getParentSizer();
				if (o) {
					var h = this;
					this._easeMove.on('update', function () {
						o.resetChildPositionState(h);
					});
				}
				return this;
			},
			moveFromPromise: function (t, e, i, n, s) {
				return this.moveFrom(t, e, i, n, s), br(this._easeMove);
			},
			moveFromDestroy: function (t, e, i, n) {
				return this.moveFrom(t, e, i, n, !0), this;
			},
			moveFromDestroyPromise: function (t, e, i, n) {
				return this.moveFromDestroy(t, e, i, n), br(this._easeMove);
			},
			moveTo: function (t, e, i, n, s) {
				if (qr(e)) {
					var r = e;
					(e = r.x), (i = r.y), (t = r.duration), (n = r.ease);
				}
				(this._easeMove = (function (t, e, i, n, s, r, o) {
					r instanceof Jr && ((o = r), (r = void 0)), void 0 === r && (r = !1);
					var h = {};
					return (
						(h.mode = r ? 1 : 0),
						void 0 !== i && ((h.startX = t.x), (h.endX = Zr(i, t.x))),
						void 0 !== n && ((h.startY = t.y), (h.endY = Zr(n, t.y))),
						(h.duration = e),
						(h.ease = void 0 === s ? 'Linear' : s),
						void 0 === o ? (o = new Jr(t, h)) : o.resetFromJSON(h),
						o.restart(),
						o
					);
				})(this, t, e, i, n, s, this._easeMove)),
					this._easeMove.once(
						'complete',
						function () {
							this.emit('moveto.complete', this);
						},
						this
					);
				var o = this.getParentSizer();
				if (o) {
					var h = this;
					this._easeMove.on('update', function () {
						o.resetChildPositionState(h);
					});
				}
				return this;
			},
			moveToPromise: function (t, e, i, n, s) {
				return this.moveTo(t, e, i, n, s), br(this._easeMove);
			},
			moveToDestroy: function (t, e, i, n) {
				return this.moveTo(t, e, i, n, !0), this;
			},
			moveToDestroyPromise: function (t, e, i, n) {
				return this.moveToDestroy(t, e, i, n, !0), br(this._easeMove);
			},
		},
		Qr = function (t, e) {
			t && ((gs(t).hidden = e), t.rexContainer.parent.setChildVisible(t, !e));
		},
		to = {
			show: function (t) {
				return void 0 === t && (t = this), xr(t), this;
			},
			hide: function () {
				return (
					void 0 === gameObject && (gameObject = this), Cr(gameObject), this
				);
			},
			isShow: function () {
				return void 0 === gameObject && (gameObject = this), wr(gameObject);
			},
		},
		eo = void 0,
		io = function (n) {
			return n
				? function (t, e, i) {
						return !!Mr(t) && (n(t, e, i), !0);
				  }
				: Mr;
		},
		no = function (t) {
			return t;
		},
		so = Phaser.Display.Align.CENTER,
		ro = {
			getSizerConfig: gs,
			pushIntoBounds: function (t) {
				return (
					void 0 === t && (t = ys(this.scene)),
					(this.left = Math.max(this.left, t.left)),
					(this.right = Math.min(this.right, t.right)),
					(this.top = Math.max(this.top, t.top)),
					(this.bottom = Math.min(this.bottom, t.bottom)),
					this
				);
			},
			drawBounds: function (t, e) {
				var i,
					n,
					s,
					r,
					o = t.scene;
				if ('number' == typeof e) i = e;
				else {
					i = ir(e, 'color', 16777215);
					var h = ir(e, 'name', !1);
					h &&
						((n = ir(h, 'createTextCallback', sr)),
						(s = ir(h, 'createTextCallbackScope', void 0)),
						'string' == typeof (r = ir(h, 'align', 'left-top')) && (r = bs[r]));
				}
				if (n && !t.children) {
					(t.children = new nr(o)),
						t.on('destroy', function () {
							t.children.destroy(!0), (t.children = void 0);
						});
					var a = t.clear.bind(t);
					t.clear = function () {
						a(), t.children.clear(!1, !0);
					};
				}
				for (
					var l, u, c = this.getAllChildren([this]), d = 0, f = c.length;
					d < f;
					d++
				)
					(l = c[d]).getBounds &&
						(i && t.lineStyle(1, i).strokeRectShape(l.getBounds(rr)),
						l.name &&
							n &&
							(u = s ? n.call(s, o) : n(o)) &&
							(u.setText(l.name),
							t.children.add(u),
							xs.setPosition(rr.x, rr.y).setSize(rr.width, rr.height),
							Gs(u, xs, r)));
				return this;
			},
			resolveWidth: Js,
			resolveChildrenWidth: function (t) {
				var e, i;
				for (var n in this.sizerChildren)
					(e = this.sizerChildren[n]) &&
						e.isRexSizer &&
						!e.ignoreLayout &&
						((i = this.getExpandedChildWidth(e, t)),
						(i = e.resolveWidth(i)),
						e.resolveChildrenWidth(i));
			},
			resolveHeight: Ks,
			getChildWidth: function (t) {
				return t.isRexSizer
					? Math.max(t.minWidth, t.childrenWidth)
					: t.hasOwnProperty('minWidth')
					? t.minWidth
					: Cs(t);
			},
			getChildHeight: function (t) {
				return t.isRexSizer
					? Math.max(t.minHeight, t.childrenHeight)
					: t.hasOwnProperty('minHeight')
					? t.minHeight
					: ws(t);
			},
			getExpandedChildWidth: function (t, e) {
				return e;
			},
			getExpandedChildHeight: function (t, e) {
				return e;
			},
			getChildrenWidth: function () {
				return 0;
			},
			getChildrenHeight: function () {
				return 0;
			},
			addChildrenMap: Ns,
			addElement: Ns,
			getElement: function (t, e) {
				if (('string' == typeof t && (t = t.split('.')), 0 !== t.length)) {
					var i = t.shift(),
						n = null;
					if ('#' === i.charAt(0))
						(i = i.substring(1)), (n = this.getByName(i, e));
					else if (-1 === i.indexOf('['))
						this.childrenMap && (n = this.childrenMap[i]);
					else {
						var s = i.match(lr);
						if (null != s && this.childrenMap) {
							var r = this.childrenMap[s[1]];
							r && (n = r[s[2]]);
						}
					}
					return 0 === t.length
						? n
						: n && n.childrenMap
						? n.getElement(t)
						: null;
				}
			},
			getAllChildrenSizers: function (t) {
				void 0 === t && (t = []);
				for (
					var e = t.length, i = this.getChildrenSizers(t), n = t.length, s = e;
					s < n;
					s++
				)
					i[s].getAllChildrenSizers(t);
				return t;
			},
			getChildrenSizers: function (t) {
				return void 0 === t && (t = []), t;
			},
			preLayout: Zs,
			layout: function () {
				return this.runLayout(), this;
			},
			runLayout: function (t, e, i) {
				if (this.ignoreLayout) return this;
				var n = !t;
				return (
					n && this.preLayout(),
					(e = this.resolveWidth(e)),
					n && (this.resolveChildrenWidth(e), this.runWidthWrap(e)),
					(i = this.resolveHeight(i)),
					this.resize(e, i),
					this.layoutChildren(),
					this.layoutBackgrounds(),
					this.postLayout()
				);
			},
			layoutChildren: function () {},
			runWidthWrap: qs,
			layoutBackgrounds: function () {
				if (void 0 !== this.backgroundChildren)
					for (
						var t,
							e,
							i,
							n,
							s,
							r,
							o,
							h = this.backgroundChildren,
							a = this.left,
							l = this.top,
							u = this.width,
							c = this.height,
							d = 0,
							f = h.length;
						d < f;
						d++
					)
						(e = (t = h[d]).rexSizer).hidden ||
							((n = a + (i = e.padding).left),
							(s = l + i.top),
							(r = u - i.left - i.right),
							(o = c - i.top - i.bottom),
							_r(t, r, o),
							xs.setPosition(n, s).setSize(r, o),
							Gs(t, xs, so),
							this.resetChildPositionState(t));
			},
			postLayout: function () {
				return this._anchor && this._anchor.updatePosition(), this;
			},
			setAnchor: function (t) {
				return (
					void 0 === this._anchor
						? (this._anchor = new fr(this, t))
						: this._anchor.resetFromJSON(t),
					this
				);
			},
			isInTouching: function (t, e) {
				return void 0 === e && (e = this), Pr(e, t);
			},
			pointToChild: function (t, e, i, n, s) {
				if (
					(Or(i) || ((s = i), (n = i = void 0)),
					void 0 === s &&
						(s = this.sizerChildren ? this.sizerChildren : this.children),
					Ci(s))
				) {
					for (var r, o = 0, h = s.length; o < h; o++)
						if (((r = s[o]), Tr(r, t, e, i, n))) return r;
				} else for (var a in s) if (((r = s[a]), Tr(r, t, e, i, n))) return r;
				return null;
			},
			setDraggable: function (s, t) {
				var e = v(s);
				return (
					'string' === e
						? (s = this.getElement(s))
						: (void 0 !== s && 'object' == e) || ((t = s), (s = this)),
					void 0 === t && (t = !0),
					s.input && s.input.hasOwnProperty('draggable')
						? (s.input.draggable = t)
						: t &&
						  (s.setInteractive(),
						  s.scene.input.setDraggable(s),
						  s.on(
								'drag',
								function (t, e, i) {
									var n = this.getTopmostSizer();
									(n.x += e - s.x), (n.y += i - s.y);
								},
								this
						  )),
					this
				);
			},
		};
	Object.assign(
		ro,
		ur,
		ar,
		{
			getParentSizer: function (t) {
				return this.getParent(t);
			},
			getTopmostSizer: function (t) {
				return this.getTopmostParent(t);
			},
		},
		Lr,
		Gr,
		$r,
		to
	);
	var oo = Phaser.Utils.Objects.GetValue,
		ho = (function () {
			b(l, Vi);
			var a = w(l);
			function l(t, e, i, n, s, r) {
				var o;
				B(this, l),
					((o = a.call(this, t, e, i, 2, 2)).isRexSizer = !0),
					o.setMinSize(n, s),
					o.setName(oo(r, 'name', '')),
					(o.rexSizer = {}),
					(o.space = {}),
					(o.backgroundChildren = void 0),
					(o.sizerChildren = void 0);
				var h = oo(r, 'anchor', void 0);
				return (
					h && o.setAnchor(h),
					o.setInnerPadding(oo(r, 'space', 0)),
					o.setDraggable(oo(r, 'draggable', !1)),
					o.setDirty(!0),
					o
				);
			}
			return (
				m(l, [
					{
						key: 'destroy',
						value: function (t) {
							this.scene &&
								(void 0 !== this.backgroundChildren &&
									(this.backgroundChildren.length = 0),
								C(x(l.prototype), 'destroy', this).call(this, t));
						},
					},
					{
						key: 'setMinSize',
						value: function (t, e) {
							return this.setMinWidth(t).setMinHeight(e), this;
						},
					},
					{
						key: 'setMinWidth',
						value: function (t) {
							return null == t && (t = 0), (this.minWidth = t), this;
						},
					},
					{
						key: 'setMinHeight',
						value: function (t) {
							return null == t && (t = 0), (this.minHeight = t), this;
						},
					},
					{
						key: 'setDirty',
						value: function (t) {
							return void 0 === t && (t = !0), (this.dirty = t), this;
						},
					},
					{
						key: 'ignoreLayout',
						get: function () {
							return this.rexSizer.hidden || !this.dirty;
						},
					},
					{
						key: 'childrenWidth',
						get: function () {
							return (
								void 0 === this._childrenWidth &&
									(this._childrenWidth = this.getChildrenWidth()),
								this._childrenWidth
							);
						},
					},
					{
						key: 'childrenHeight',
						get: function () {
							return (
								void 0 === this._childrenHeight &&
									(this._childrenHeight = this.getChildrenHeight()),
								this._childrenHeight
							);
						},
					},
					{
						key: 'left',
						get: function () {
							return this.x - Cs(this) * this.originX;
						},
						set: function (t) {
							this.x += t - this.left;
						},
					},
					{
						key: 'alignLeft',
						value: function (t) {
							return (this.left = t), this;
						},
					},
					{
						key: 'right',
						get: function () {
							return this.left + Cs(this);
						},
						set: function (t) {
							this.x += t - this.right;
						},
					},
					{
						key: 'alignRight',
						value: function (t) {
							return (this.right = t), this;
						},
					},
					{
						key: 'centerX',
						get: function () {
							return this.left + Cs(this) / 2;
						},
						set: function (t) {
							this.x += t - this.centerX;
						},
					},
					{
						key: 'alignCenterX',
						value: function (t) {
							return (this.centerX = t), this;
						},
					},
					{
						key: 'top',
						get: function () {
							return this.y - ws(this) * this.originY;
						},
						set: function (t) {
							this.y += t - this.top;
						},
					},
					{
						key: 'alignTop',
						value: function (t) {
							return (this.top = t), this;
						},
					},
					{
						key: 'bottom',
						get: function () {
							return this.top + ws(this);
						},
						set: function (t) {
							this.y += t - this.bottom;
						},
					},
					{
						key: 'alignBottom',
						value: function (t) {
							return (this.bottom = t), this;
						},
					},
					{
						key: 'centerY',
						get: function () {
							return this.top + ws(this) / 2;
						},
						set: function (t) {
							this.y += t - this.centerY;
						},
					},
					{
						key: 'alignCenterY',
						value: function (t) {
							return (this.centerY = t), this;
						},
					},
					{
						key: 'innerLeft',
						get: function () {
							return this.left + this.space.left;
						},
					},
					{
						key: 'innerRight',
						get: function () {
							return this.right - this.space.right;
						},
					},
					{
						key: 'innerTop',
						get: function () {
							return this.top + this.space.top;
						},
					},
					{
						key: 'innerBottom',
						get: function () {
							return this.bottom - this.space.bottom;
						},
					},
					{
						key: 'innerWidth',
						get: function () {
							return this.width - this.space.left - this.space.right;
						},
					},
					{
						key: 'innerHeight',
						get: function () {
							return this.height - this.space.top - this.space.bottom;
						},
					},
				]),
				l
			);
		})();
	Object.assign(ho.prototype, ro);
	var ao = Phaser.Utils.Objects.IsPlainObject,
		lo = Phaser.Utils.Objects.GetValue,
		uo = Phaser.Display.Align.CENTER,
		co = {
			add: function (t, e, i, n, s) {
				var r;
				this.pin(t),
					ao(e) &&
						((e = lo((r = e), 'key', void 0)),
						(i = lo(r, 'align', uo)),
						(n = lo(r, 'padding', 0)),
						(s = lo(r, 'expand', !0)));
				return (
					void 0 === e && (e = Date.now()),
					'string' == typeof i && (i = bs[i]),
					void 0 === i && (i = uo),
					void 0 === n && (n = 0),
					void 0 === s && (s = !0),
					((r = this.getSizerConfig(t)).align = i),
					(r.padding = Us(n)),
					ao(s)
						? ((r.expandWidth = lo(s, 'width', !1)),
						  (r.expandHeight = lo(s, 'height', !1)))
						: ((r.expandWidth = s), (r.expandHeight = s)),
					this.sizerChildren.hasOwnProperty(e) &&
						this.sizerChildren[e].destroy(),
					(this.sizerChildren[e] = t),
					this
				);
			},
		},
		fo = Vi.prototype.remove,
		vo = Vi.prototype.clear,
		po = {
			remove: function (t, e) {
				var i;
				if ('string' == typeof t) {
					if (((i = t), !this.sizerChildren.hasOwnProperty(i))) return this;
				} else {
					if (this.getParentSizer(t) !== this) return this;
					i = this.childToKey(t);
				}
				return delete this.sizerChildren[i], fo.call(this, t, e), this;
			},
			removeAll: function (t) {
				var e;
				for (var i in this.sizerChildren)
					(e = this.sizerChildren[i]),
						delete this.sizerChildren[i],
						fo.call(this, e, t);
				return this;
			},
			clear: function (t) {
				return (
					this.removeAll(t),
					this.backgroundChildren && (this.backgroundChildren.length = 0),
					vo.call(this, t),
					this
				);
			},
		},
		go = {
			getChildrenWidth: function () {
				if (this.rexSizer.hidden) return 0;
				var t,
					e,
					i,
					n = 0,
					s = this.sizerChildren;
				for (var r in s)
					(e = (t = s[r]).rexSizer.padding),
						(i = this.getChildWidth(t) + e.left + e.right),
						(n = Math.max(i, n));
				return n + this.space.left + this.space.right;
			},
			getChildrenHeight: function () {
				if (this.rexSizer.hidden) return 0;
				var t,
					e,
					i,
					n = 0,
					s = this.sizerChildren;
				for (var r in s)
					(i = (t = s[r]).isRexSizer
						? Math.max(t.minHeight, t.childrenHeight)
						: t.hasOwnProperty('minHeight')
						? t.minHeight
						: ws(t)),
						(i += (e = t.rexSizer.padding).top + e.bottom),
						(n = Math.max(i, n));
				return n + this.space.top + this.space.bottom;
			},
			getExpandedChildWidth: function (t, e) {
				var i;
				void 0 === e && (e = this.width);
				var n = t.rexSizer,
					s = n.padding;
				n.expandWidth
					? (i = e - this.space.left - this.space.right - s.left - s.right)
					: (i = t.width);
				return i;
			},
			getExpandedChildHeight: function (t, e) {
				var i;
				void 0 === e && (e = this.height);
				var n = t.rexSizer,
					s = n.padding;
				n.expandHeight
					? (i = e - this.space.top - this.space.bottom - s.top - s.bottom)
					: (i = t.height);
				return i;
			},
			getChildrenSizers: function (t) {
				void 0 === t && (t = []);
				var e,
					i = this.sizerChildren;
				for (var n in i) (e = i[n]).isRexSizer && t.push(e);
				return t;
			},
			layoutChildren: function () {
				var t,
					e,
					i,
					n,
					s,
					r,
					o,
					h,
					a,
					l = this.innerLeft,
					u = this.innerTop,
					c = this.innerWidth,
					d = this.innerHeight,
					f = this.sizerChildren;
				for (var v in f)
					(i = (e = (t = f[v]).rexSizer).padding),
						t.isRexSizer
							? t.runLayout(
									this,
									this.getExpandedChildWidth(t),
									this.getExpandedChildHeight(t)
							  )
							: ((a = h = void 0),
							  e.expandWidth && (h = c - i.left - i.right),
							  e.expandHeight && (a = d - i.top - i.bottom),
							  _r(t, h, a)),
						(n = l + i.left),
						(r = c - i.left - i.right),
						(s = u + i.top),
						(o = d - i.top - i.bottom),
						xs.setPosition(n, s).setSize(r, o),
						Gs(t, xs, e.align),
						this.resetChildPositionState(t);
			},
		};
	Object.assign(go, co, po);
	function yo(t, e) {
		if (Array.isArray(t)) return t.indexOf(e);
		for (var i in t) if (t[i] === e) return i;
		return null;
	}
	var ko = Phaser.Utils.Objects.IsPlainObject,
		mo = Phaser.Utils.Objects.GetValue,
		bo = (function () {
			b(a, ho);
			var h = w(a);
			function a(t, e, i, n, s, r) {
				var o;
				return (
					B(this, a),
					ko(e)
						? ((e = mo((r = e), 'x', 0)),
						  (i = mo(r, 'y', 0)),
						  (n = mo(r, 'width', void 0)),
						  (s = mo(r, 'height', void 0)))
						: ko(n) &&
						  ((n = mo((r = n), 'width', void 0)),
						  (s = mo(r, 'height', void 0))),
					((o = h.call(this, t, e, i, n, s, r)).type = 'rexOverlapSizer'),
					(o.sizerChildren = {}),
					o.addChildrenMap('items', o.sizerChildren),
					o
				);
			}
			return (
				m(a, [
					{
						key: 'destroy',
						value: function (t) {
							this.scene &&
								(vt(this.sizerChildren),
								C(x(a.prototype), 'destroy', this).call(this, t));
						},
					},
					{
						key: 'childToKey',
						value: function (t) {
							if ('string' != typeof t) return yo(this.sizerChildren, t);
							var e = t;
							return this.sizerChildren.hasOwnPropery(e) ? e : null;
						},
					},
				]),
				a
			);
		})();
	Object.assign(bo.prototype, go);
	function xo(t, e, i) {
		var n = t.width / 2;
		return To(n, n, e, i) <= n;
	}
	function Co(t, e, i) {
		if (this.enable && t.isDown) {
			var n = this.sizerChildren.knob;
			if (xo(n, e, i)) {
				var s = n.width / 2,
					r = n.startAngle,
					o = Mo(s, s, e, i),
					h = n.anticlockwise ? r - o : o - r,
					a = _o(h) / (2 * Math.PI);
				this.stopEaseValue(),
					0 === this.easeValueDuration || Math.abs(this.value - a) < 0.1
						? (this.value = a)
						: this.easeValueTo(a);
			}
		}
	}
	function wo(t, e, i) {
		if (this.enable && !this.panPointer) {
			var n = this.sizerChildren.knob;
			xo(n, e, i) && Eo.call(this, t);
		}
	}
	function So(t, e, i) {
		if (this.enable && t.isDown) {
			var n = this.sizerChildren.knob;
			switch (this.panState) {
				case Ro:
					xo(n, e, i) && Eo.call(this, t);
					break;
				case Lo:
					xo(n, e, i) ? jo.call(this) : Do.call(this);
			}
		}
	}
	function Po(t) {
		this.enable && this.panPointer === t && Do.call(this);
	}
	function Oo(t) {
		return (
			void 0 === t && (t = this.value),
			this.textFormatCallbackScope
				? this.textFormatCallback(t)
				: this.textFormatCallback.call(this.textFormatCallbackScope, t)
		);
	}
	var To = Phaser.Math.Distance.Between,
		Mo = Phaser.Math.Angle.Between,
		_o = Phaser.Math.Angle.Normalize,
		zo = Phaser.Math.Angle.Between,
		Bo = Phaser.Math.Angle.Wrap,
		Eo = function (t) {
			(this.panPointer = t), (this.panState = Lo);
		},
		Do = function () {
			(this.panPointer = void 0), (this.panState = Ro);
		},
		jo = function () {
			var t = this.panPointer.prevPosition,
				e = this.panPointer.position,
				i = this.sizerChildren.knob,
				n = zo(i.x, i.y, t.x, t.y),
				s = zo(i.x, i.y, e.x, e.y),
				r = i.anticlockwise ? n - s : s - n,
				o = Bo(r) / (2 * Math.PI);
			this.stopEaseValue(), (this.value += o);
		},
		Ro = 0,
		Lo = 1,
		Yo = {
			setTextFormatCallback: function (t, e) {
				return (
					(this.textFormatCallback = t),
					(this.textFormatCallbackScope = e),
					this
				);
			},
			getFormatText: Oo,
			updateText: function () {
				var t = this.sizerChildren.text;
				return t && (t.setText(Oo.call(this)), t.layout && t.layout()), this;
			},
		},
		Io = {
			setEaseValueDuration: function (t) {
				return (this.easeValueDuration = t), this;
			},
			setEaseValueFunction: function (t) {
				return (this.easeValueMode = t), this;
			},
			stopEaseValue: function () {
				return this.tweenValueTask && this.tweenValueTask.stop(), this;
			},
			easeValueTo: function (t, e, i) {
				return (
					null == t ||
						(void 0 !== e && (t = Percent(t, e, i)),
						void 0 === this.tweenValueTask &&
							(this.tweenValueTask = new kr(this, {eventEmitter: null})),
						this.tweenValueTask
							.stop()
							.start({
								targets: this,
								value: t,
								duration: this.easeValueDuration,
								ease: this.easeValueMode,
							})),
					this
				);
			},
		},
		Ao = Phaser.Utils.Objects.GetValue,
		Fo = Phaser.Math.Linear,
		Wo = Phaser.Math.Percent,
		Ho = Phaser.Math.Snap.To,
		Xo = (function () {
			b(u, bo);
			var l = w(u);
			function u(t, e) {
				var i;
				B(this, u),
					void 0 === e && (e = {}),
					((i = l.call(this, t, e)).type = 'rexKnob'),
					(i.eventEmitter = Ao(e, 'eventEmitter', E(i)));
				var n = Ao(e, 'background', void 0),
					s = Ao(e, 'text', void 0);
				n && i.addBackground(n),
					s &&
						((e.textColor = void 0),
						(e.textStrokeColor = void 0),
						i.setTextFormatCallback(
							Ao(e, 'textFormatCallback', void 0),
							Ao(e, 'textFormatCallbackScope', void 0)
						));
				var r = new ps(t, e);
				r.setDepth(Ao(e, 'knobDepth', 0)),
					(r._value = -1),
					t.add.existing(r),
					i.add(r, 'knob'),
					s && i.add(s, 'text', 'center', 0, !1),
					i.addChildrenMap('background', n),
					i.addChildrenMap('knob', r),
					i.addChildrenMap('text', s);
				var o = Ao(e, 'valuechangeCallback', null);
				if (null !== o) {
					var h = Ao(e, 'valuechangeCallbackScope', void 0);
					i.eventEmitter.on('valuechange', o, h);
				}
				i.setEnable(Ao(e, 'enable', void 0)),
					i.setEaseValueDuration(Ao(e, 'easeValue.duration', 0)),
					i.setEaseValueFunction(Ao(e, 'easeValue.ease', 'Linear')),
					i.setGap(Ao(e, 'gap', void 0)),
					i.setValue(
						Ao(e, 'value', 0),
						Ao(e, 'min', void 0),
						Ao(e, 'max', void 0)
					);
				var a = Ao(e, 'input', 0);
				switch (('string' == typeof a && (a = Vo[a]), a)) {
					case 0:
						(function () {
							this.sizerChildren.knob
								.setInteractive()
								.on('pointerdown', wo, this)
								.on('pointermove', So, this)
								.on('pointerup', Po, this),
								(this.panPointer = void 0),
								(this.panState = Ro);
						}.call(E(i)));
						break;
					case 1:
						(function () {
							this.sizerChildren.knob
								.setInteractive()
								.on('pointerdown', Co, this)
								.on('pointermove', Co, this);
						}.call(E(i)));
				}
				return i;
			}
			return (
				m(u, [
					{
						key: 'setEnable',
						value: function (t) {
							return void 0 === t && (t = !0), (this.enable = t), this;
						},
					},
					{
						key: 'setGap',
						value: function (t) {
							return (this.gap = t), this;
						},
					},
					{
						key: 'value',
						get: function () {
							return this.sizerChildren.knob.value;
						},
						set: function (t) {
							void 0 !== this.gap && (t = Ho(t, this.gap));
							var e = this.value;
							this.sizerChildren.knob.value = t;
							var i = this.value;
							e !== i &&
								(this.updateText(),
								this.eventEmitter.emit('valuechange', i, e, this.eventEmitter));
						},
					},
					{
						key: 'setValue',
						value: function (t, e, i) {
							return (
								null == t ||
									(void 0 !== e && (t = Wo(t, e, i)), (this.value = t)),
								this
							);
						},
					},
					{
						key: 'addValue',
						value: function (t, e, i) {
							return void 0 !== e && (t = Wo(t, e, i)), (this.value += t), this;
						},
					},
					{
						key: 'getValue',
						value: function (t, e) {
							var i = this.value;
							return void 0 !== t && (i = Fo(t, e, i)), i;
						},
					},
				]),
				u
			);
		})(),
		Vo = {pan: 0, click: 1, none: -1};
	Object.assign(Xo.prototype, Yo, Io),
		u.register('knob', function (t) {
			var e = new Xo(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.Knob', Xo);
	function Go() {
		for (var t = this.getShapes(), e = 0, i = t.length; e < i; e++)
			t[e].lineStyle().fillStyle();
	}
	var Uo = {
			arc: Zn,
			circle: qn,
			curve: $n,
			ellipse: Qn,
			line: ts,
			lines: rs,
			rectangle: hs,
			triangle: ls,
		},
		No = Phaser.Utils.Objects.GetValue,
		Jo = Phaser.Utils.Objects.IsPlainObject,
		Ko = {
			createShape: function (t, e) {
				var i = new Uo[t]();
				return e && i.setName(e), i;
			},
			buildShapes: function (t) {
				var e = No(t, 'create', void 0);
				if ('function' == typeof e) e.call(this);
				else if (Jo(e)) {
					var i = e;
					for (var n in i) {
						var s = i[n];
						switch (v(s)) {
							case 'number':
								for (var r = 0; r < s; r++) this.addShape(this.createShape(n));
								break;
							case 'string':
								this.addShape(this.createShape(n, s));
								break;
							default:
								for (var o = s, h = ((r = 0), o.length); r < h; r++)
									this.addShape(this.createShape(n, o[r]));
						}
					}
				}
				this.setUpdateShapesCallback(No(t, 'update'));
			},
			setUpdateShapesCallback: function (t) {
				return (
					void 0 === t && (t = Go),
					(this.dirty = this.dirty || this.updateCallback !== t),
					(this.updateCallback = t),
					this
				);
			},
			updateShapes: function () {
				this.updateCallback.call(this);
			},
		},
		Zo = Phaser.Utils.Objects.GetValue,
		qo = Phaser.Utils.Objects.IsPlainObject,
		$o = (function () {
			b(a, Xn);
			var h = w(a);
			function a(t, e, i, n, s, r) {
				var o;
				return (
					B(this, a),
					qo(e) &&
						((e = Zo((r = e), 'x', 0)),
						(i = Zo(r, 'y', 0)),
						(n = Zo(r, 'width', 2)),
						(s = Zo(r, 'height', 2))),
					((o = h.call(this, t, e, i, n, s)).type = Zo(
						r,
						'type',
						'rexCustomShapes'
					)),
					o.buildShapes(r),
					o
				);
			}
			return a;
		})();
	Object.assign($o.prototype, Ko),
		u.register('customShapes', function (t, e, i, n, s) {
			var r = new $o(this.scene, t, e, i, n, s);
			return this.scene.add.existing(r), r;
		}),
		G(window, 'RexPlugins.UI.CustomShapes', $o);
	var Qo = function (e, t) {
			void 0 === t && (t = {}), void 0 === t.options && (t.options = {});
			var i = t.options;
			(i.responsive = !1),
				(i.maintainAspectRatio = !1),
				i.hasOwnProperty('devicePixelRatio') || (i.devicePixelRatio = 1);
			var n = !1;
			void 0 === i.animation
				? (i.animation = {})
				: !1 === i.animation && ((n = !0), (i.animation = {}));
			var s = i.animation;
			n && (s.duration = 0);
			var r = s.onProgress;
			s.onProgress = function (t) {
				r && r(t), e.needRedraw();
			};
			var o = s.onComplete;
			return (
				(s.onComplete = function (t) {
					o && o(t), e.needRedraw();
				}),
				t
			);
		},
		th = (function () {
			b(a, Q);
			var h = w(a);
			function a(t, e, i, n, s, r) {
				var o;
				return (
					B(this, a),
					((o = h.call(this, t, e, i, n, s)).type = 'rexChart'),
					(o.chart = void 0) !== r && o.setChart(r),
					o
				);
			}
			return (
				m(a, [
					{
						key: 'destroy',
						value: function (t) {
							this.scene &&
								(this.chart && (this.chart.destroy(), (this.chart = void 0)),
								C(x(a.prototype), 'destroy', this).call(this, t));
						},
					},
					{
						key: 'resize',
						value: function (t, e) {
							if (t === this.width && e === this.height) return this;
							if (
								(C(x(a.prototype), 'resize', this).call(this, t, e), this.chart)
							) {
								var i = this.chart;
								(i.height = this.canvas.height),
									(i.width = this.canvas.width),
									(i.aspectRatio = i.height ? i.width / i.height : null),
									i.update();
							}
							return this;
						},
					},
				]),
				a
			);
		})(),
		eh = {
			setChart: function (t) {
				if (window.Chart)
					return (
						this.chart && this.chart.destroy(),
						(this.chart = new Chart(this.context, Qo(this, t))),
						this
					);
				return (
					console.error(
						"Can not find chartjs! Load chartjs in preload stage.\nscene.load.script('chartjs', 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js');"
					),
					this
				);
			},
			getChartDataset: function (t) {
				if (void 0 !== this.chart) {
					if ('string' != typeof t) return this.chart.data.datasets[t];
					for (
						var e, i = this.chart.data.datasets, n = 0, s = i.length;
						n < s;
						n++
					)
						if ((e = i[n]).label === t) return e;
				}
			},
			getChartData: function (t, e) {
				var i = this.getChartDataset(t);
				if (void 0 !== i) {
					if ('string' == typeof e)
						if (-1 === (e = this.chart.data.labels.indexOf(e))) return;
					return i.data[e];
				}
			},
			setChartData: function (t, e, i) {
				if (void 0 === this.chart) return this;
				var n = this.getChartDataset(t);
				if (
					'string' == typeof e &&
					-1 === (e = this.chart.data.labels.indexOf(e))
				)
					return this;
				return (n.data[e] = i), this;
			},
			updateChart: function () {
				if (void 0 === this.chart) return this;
				this.chart.update();
			},
		};
	Object.assign(th.prototype, eh),
		u.register('chart', function (t, e, i, n, s) {
			var r = new th(this.scene, t, e, i, n, s);
			return this.scene.add.existing(r), r;
		}),
		G(window, 'RexPlugins.UI.Chart', th);
	function ih(t, e, i) {
		return (
			void 0 === i && (i = 'image'),
			t[e] ||
				((t[e] = t.scene.make[i]({add: !1, origin: {x: 0, y: 0}})),
				t.on('destroy', function () {
					t[e] && (t[e].destroy(), (t[e] = void 0));
				})),
			t[e]
		);
	}
	function nh(t, e, i) {
		return '__BASE' === i
			? ''.concat(t, ',').concat(e)
			: ''.concat(i, '_').concat(t, ',').concat(e);
	}
	var sh = Phaser.Utils.Objects.IsPlainObject,
		rh = Phaser.Utils.Objects.GetValue,
		oh = function (t) {
			return 'string' == typeof t && (t = hh[t]), t;
		},
		hh = {scale: 0, repeat: 1},
		ah = {
			setTexture: function (t, e, i, n) {
				Array.isArray(e) && ((n = i), (i = e), (e = void 0)),
					void 0 === e && (e = '__BASE'),
					(this.textureKey = t),
					(this.baseFrameName = e),
					(this.columns.data = i),
					(this.columns.count = i ? i.length : 0),
					(this.columns.stretch = 0),
					(this.columns.minWidth = 0),
					(this.rows.data = n),
					(this.rows.count = n ? n.length : 0),
					(this.rows.stretch = 0),
					(this.rows.minHeight = 0);
				var s = this.scene.textures.get(t);
				if (!s) return this.clear(), this;
				if (!i || !n) return this.clear(), this;
				for (
					var r = s.frames[e], o = r.width, h = 0, a = 0, l = i.length;
					a < l;
					a++
				)
					void 0 === i[a]
						? h++
						: 'number' == typeof i[a]
						? (o -= i[a])
						: (o -= i[a].width);
				var u = o / h,
					c = r.height,
					d = 0;
				for (a = 0, l = n.length; a < l; a++)
					void 0 === n[a]
						? d++
						: 'number' == typeof n[a]
						? (c -= n[a])
						: (c -= n[a].width);
				for (
					var f, v, p, g, y, k = c / d, m = 0, b = 0, x = 0, C = n.length;
					x < C;
					x++
				) {
					void 0 === n[x] && (n[x] = k),
						'number' == typeof n[x] && (n[x] = {height: n[x], stretch: x % 2}),
						(p = (f = n[x]).height),
						(this.rows.stretch += 0 | f.stretch),
						(this.rows.minHeight += 0 < f.stretch ? 0 : p);
					a = m = 0;
					for (var w = i.length; a < w; a++)
						void 0 === i[a] && (i[a] = u),
							'number' == typeof i[a] && (i[a] = {width: i[a], stretch: a % 2}),
							(g = (v = i[a]).width),
							0 === x &&
								((this.columns.stretch += 0 | v.stretch),
								(this.columns.minWidth += 0 < v.stretch ? 0 : g)),
							1 <= g && 1 <= p
								? (y = this.getFrameNameCallback(a, x, e)) &&
								  s.add(y, 0, m + r.cutX, b + r.cutY, g, p)
								: console.warn(
										'Size of Grid('
											.concat(a, ',')
											.concat(x, ') = ')
											.concat(g, 'x')
											.concat(p, ', which is invalid')
								  ),
							(m += g);
					b += p;
				}
				return this.updateTexture(), this;
			},
			updateTexture: function () {
				if ((this.clear(), void 0 === this.textureKey)) return this;
				var t = this.scene.textures.get(this.textureKey);
				if (!t) return this;
				var e,
					i,
					n = this.width - this.columns.minWidth;
				i =
					0 <= n
						? ((e = 0 < this.columns.stretch ? n / this.columns.stretch : 0), 1)
						: ((e = 0), this.width / this.columns.minWidth);
				var s,
					r,
					o,
					h,
					a,
					l,
					u,
					c = this.height - this.rows.minHeight;
				r =
					0 <= c
						? ((s = 0 < this.rows.stretch ? c / this.rows.stretch : 0), 1)
						: ((s = 0), this.height / this.rows.minHeight);
				for (var d, f = 0, v = 0, p = 0, g = this.rows.count; p < g; p++) {
					u =
						0 === (a = this.rows.data[p]).stretch
							? a.height * r
							: s * a.stretch;
					for (var y = (f = 0), k = this.columns.count; y < k; y++)
						(l =
							0 === (h = this.columns.data[y]).stretch
								? h.width * i
								: e * h.stretch),
							(o = this.getFrameNameCallback(y, p, this.baseFrameName)) &&
								0 < l &&
								0 < u &&
								t.has(o) &&
								(0 ===
								((0 === a.stretch && 0 === h.stretch) ||
								0 === this.getStretchMode(y, p)
									? 0
									: 1)
									? (d = ih(this, '_image', 'image'))
											.setTexture(this.textureKey, o)
											.setDisplaySize(l, u)
									: (d = ih(this, '_tileSprite', 'tileSprite'))
											.setTexture(this.textureKey, o)
											.setSize(l, u)),
							d && (this.draw(d, f, v), (d = void 0)),
							(f += l);
					v += u;
				}
			},
			setStretchMode: function (t) {
				return (
					sh(t)
						? ((this.stretchMode.edge = oh(rh(t, 'edge', 0))),
						  (this.stretchMode.internal = oh(rh(t, 'internal', 0))))
						: ((t = oh(t)),
						  (this.stretchMode.edge = t),
						  (this.stretchMode.internal = t)),
					this
				);
			},
			getStretchMode: function (t, e) {
				return function (t, e) {
					return (
						0 === t ||
						t === this.columns.count - 1 ||
						0 === e ||
						e === this.rows.count - 1
					);
				}.call(this, t, e)
					? this.stretchMode.edge
					: this.stretchMode.internal;
			},
		},
		lh = Phaser.GameObjects.RenderTexture,
		uh = Phaser.Utils.Objects.IsPlainObject,
		ch = Phaser.Utils.Objects.GetValue,
		dh = (function () {
			b(d, lh);
			var c = w(d);
			function d(t, e, i, n, s, r, o, h, a, l) {
				var u;
				return (
					B(this, d),
					uh(e)
						? ((e = ch((l = e), 'x', 0)),
						  (i = ch(l, 'y', 0)),
						  (n = ch(l, 'width', 1)),
						  (s = ch(l, 'height', 1)),
						  (r = ch(l, 'key', void 0)),
						  (o = ch(l, 'baseFrame', void 0)),
						  (h = ch(l, 'columns', void 0)),
						  (a = ch(l, 'rows', void 0)))
						: uh(n)
						? ((n = ch((l = n), 'width', 1)),
						  (s = ch(l, 'height', 1)),
						  (r = ch(l, 'key', void 0)),
						  (o = ch(l, 'baseFrame', void 0)),
						  (h = ch(l, 'columns', void 0)),
						  (a = ch(l, 'rows', void 0)))
						: uh(r)
						? ((r = ch((l = r), 'key', void 0)),
						  (o = ch(l, 'baseFrame', void 0)),
						  (h = ch(l, 'columns', void 0)),
						  (a = ch(l, 'rows', void 0)))
						: uh(o)
						? ((o = ch((l = o), 'baseFrame', void 0)),
						  (h = ch(l, 'columns', void 0)),
						  (a = ch(l, 'rows', void 0)))
						: Array.isArray(o)
						? ((l = a), (a = h), (h = o), (o = ch(l, 'baseFrame', void 0)))
						: uh(h) &&
						  ((h = ch((l = h), 'columns', void 0)),
						  (a = ch(l, 'rows', void 0))),
					((u = c.call(this, t, e, i, n, s)).columns = {}),
					(u.rows = {}),
					(u.stretchMode = {}),
					(u._tileSprite = void 0),
					(u._image = void 0),
					u.setOrigin(0.5, 0.5),
					u.setGetFrameNameCallback(ch(l, 'getFrameNameCallback', void 0)),
					u.setStretchMode(ch(l, 'stretchMode', 0)),
					u.setTexture(r, o, h, a),
					u
				);
			}
			return (
				m(d, [
					{
						key: 'setGetFrameNameCallback',
						value: function (t) {
							return (
								void 0 === t && (t = nh), (this.getFrameNameCallback = t), this
							);
						},
					},
					{
						key: 'minWidth',
						get: function () {
							return this.columns.minWidth;
						},
					},
					{
						key: 'minHeight',
						get: function () {
							return this.rows.minHeight;
						},
					},
					{
						key: 'resize',
						value: function (t, e) {
							return (
								(this.width === t && this.height === e) ||
									(C(x(d.prototype), 'resize', this).call(this, t, e),
									this.updateTexture()),
								this
							);
						},
					},
				]),
				d
			);
		})();
	Object.assign(dh.prototype, ah),
		u.register('ninePatch', function (t, e, i, n, s, r, o, h) {
			var a = new dh(this.scene, t, e, i, n, s, r, o, h);
			return this.scene.add.existing(a), a;
		}),
		G(window, 'RexPlugins.UI.NinePatch', dh);
	function fh(t, e, i, n, s, r, o) {
		this.pin(t);
		var h = v(e);
		if (null === e) return this;
		if ('number' !== h)
			if ('string' === h) e = yh[e];
			else if (vh(e)) {
				var a;
				(e = ph((a = e), 'proportion', 0)),
					(i = ph(a, 'align', gh)),
					(n = ph(a, 'padding', 0)),
					(s = ph(a, 'expand', !1)),
					(r = ph(a, 'key', void 0)),
					(o = ph(a, 'index', void 0));
			}
		return (
			'string' == typeof i && (i = bs[i]),
			void 0 === e && (e = 0),
			void 0 === i && (i = gh),
			void 0 === n && (n = 0),
			void 0 === s && (s = !1),
			((a = this.getSizerConfig(t)).proportion = e),
			(a.align = i),
			(a.padding = Us(n)),
			(a.expand = s),
			void 0 === o || o >= this.sizerChildren.length
				? this.sizerChildren.push(t)
				: this.sizerChildren.splice(o, 0, t),
			void 0 !== r && this.addChildrenMap(r, t),
			this
		);
	}
	var vh = Phaser.Utils.Objects.IsPlainObject,
		ph = Phaser.Utils.Objects.GetValue,
		gh = Phaser.Display.Align.CENTER,
		yh = {min: 0, full: -1},
		kh = {
			add: fh,
			addSpace: function (t) {
				var e, i;
				return (
					void 0 === t && (t = 1),
					fh.call(
						this,
						((e = this.scene),
						((i = e.add.zone(0, 0, 1, 1)).isRexSpace = !0),
						i),
						t
					),
					this
				);
			},
			insert: function (t, e, i, n, s, r, o) {
				return fh.call(this, e, i, n, s, r, o, t), this;
			},
		},
		mh = Phaser.Utils.Array.Remove,
		bh = Vi.prototype.remove,
		xh = Vi.prototype.clear,
		Ch = {
			remove: function (t, e) {
				return (
					this.getParentSizer(t) !== this ||
						(mh(this.sizerChildren, t), bh.call(this, t, e)),
					this
				);
			},
			removeAll: function (t) {
				for (var e = 0, i = this.sizerChildren; e < i; e++)
					this.remove(this.sizerChildren[e], t);
				return (this.sizerChildren.length = 0), this;
			},
			clear: function (t) {
				return (
					(this.sizerChildren.length = 0),
					this.backgroundChildren && (this.backgroundChildren.length = 0),
					xh.call(this, t),
					this
				);
			},
		},
		wh = {
			getChildrenWidth: function (t) {
				if (this.rexSizer.hidden) return 0;
				void 0 === t && (t = !0);
				var e,
					i,
					n,
					s = 0,
					r = this.sizerChildren;
				if (0 === this.orientation)
					for (var o = 0, h = r.length; o < h; o++)
						(e = r[o]).rexSizer.hidden ||
							((n =
								0 === e.rexSizer.proportion ||
								(t && !e.isRexSpace && 0 < e.rexSizer.proportion)
									? this.getChildWidth(e)
									: 0),
							(n += (i = e.rexSizer.padding).left + i.right),
							0 < o && (n += this.space.item),
							(s += n));
				else
					for (o = 0, h = r.length; o < h; o++)
						(e = r[o]).hasOwnProperty('rexSizer') &&
							(e.rexSizer.hidden ||
								((i = e.rexSizer.padding),
								(n = this.getChildWidth(e) + i.left + i.right),
								(s = Math.max(n, s))));
				return s + this.space.left + this.space.right;
			},
			getChildrenHeight: function (t) {
				if (this.rexSizer.hidden) return 0;
				void 0 === t && (t = !0);
				var e,
					i,
					n,
					s = 0,
					r = this.sizerChildren;
				if (0 === this.orientation)
					for (var o = 0, h = r.length; o < h; o++)
						(e = r[o]).rexSizer.hidden ||
							((i = e.rexSizer.padding),
							(n = this.getChildHeight(e) + i.top + i.bottom),
							(s = Math.max(n, s)));
				else
					for (o = 0, h = r.length; o < h; o++)
						(e = r[o]).hasOwnProperty('rexSizer') &&
							(e.rexSizer.hidden ||
								((i = e.rexSizer.padding),
								(n =
									0 === e.rexSizer.proportion ||
									(t && !e.isRexSpace && 0 < e.rexSizer.proportion)
										? this.getChildHeight(e)
										: 0),
								(n += i.top + i.bottom),
								0 < o && (n += this.space.item),
								(s += n)));
				return s + this.space.top + this.space.bottom;
			},
			getExpandedChildWidth: function (t, e) {
				var i;
				void 0 === e && (e = this.width);
				var n = t.rexSizer,
					s = n.padding;
				0 === this.orientation
					? 0 < n.proportion &&
					  0 < this.proportionLength &&
					  (i = n.proportion * this.proportionLength)
					: n.expand &&
					  (i = e - this.space.left - this.space.right - s.left - s.right);
				return i;
			},
			getExpandedChildHeight: function (t, e) {
				var i;
				void 0 === e && (e = this.height);
				var n = t.rexSizer,
					s = n.padding;
				0 === this.orientation
					? n.expand &&
					  (i = e - this.space.top - this.space.bottom - s.top - s.bottom)
					: 0 < n.proportion &&
					  0 < this.proportionLength &&
					  (i = n.proportion * this.proportionLength);
				return i;
			},
			getChildrenSizers: function (t) {
				void 0 === t && (t = []);
				for (var e, i = this.sizerChildren, n = 0, s = i.length; n < s; n++)
					(e = i[n]).isRexSizer && t.push(e);
				return t;
			},
			preLayout: function () {
				return (
					(this._childrenProportion = void 0),
					(this.proportionLength = void 0),
					Zs.call(this),
					this
				);
			},
			layoutChildren: function () {
				for (
					var t,
						e,
						i,
						n,
						s,
						r,
						o,
						h,
						a,
						l = this.sizerChildren,
						u = this.innerLeft,
						c = this.innerTop,
						d = this.innerWidth,
						f = this.innerHeight,
						v = u,
						p = c,
						g = 0,
						y = l.length;
					g < y;
					g++
				)
					(t = l[g]).rexSizer.hidden ||
						((i = (e = t.rexSizer).padding),
						(h = this.getExpandedChildWidth(t)),
						(a = this.getExpandedChildHeight(t)),
						t.isRexSizer ? t.runLayout(this, h, a) : _r(t, h, a),
						void 0 === h && (h = Cs(t)),
						void 0 === a && (a = ws(t)),
						(o =
							0 === this.orientation
								? ((n = v + i.left),
								  (r =
										0 === e.proportion || 0 === this.proportionLength
											? h
											: e.proportion * this.proportionLength),
								  (s = p + i.top),
								  f - i.top - i.bottom)
								: ((n = v + i.left),
								  (r = d - i.left - i.right),
								  (s = p + i.top),
								  0 === e.proportion || 0 === this.proportionLength
										? a
										: e.proportion * this.proportionLength)),
						xs.setPosition(n, s).setSize(r, o),
						Gs(t, xs, e.align),
						this.resetChildPositionState(t),
						0 === this.orientation
							? (v += r + i.left + i.right + this.space.item)
							: (p += o + i.top + i.bottom + this.space.item));
			},
			resolveWidth: function (t) {
				t = Js.call(this, t);
				if (void 0 === this.proportionLength && 0 === this.orientation) {
					var e = t - this.childrenWidth;
					0 < e
						? ((e = t - this.getChildrenWidth(!1)),
						  (this.proportionLength = e / this.childrenProportion))
						: (this.proportionLength = 0);
				}
				return t;
			},
			resolveHeight: function (t, e) {
				e = Ks.call(this, t, e);
				if (void 0 === this.proportionLength && 1 === this.orientation) {
					var i = e - this.childrenHeight;
					0 < i
						? ((i = e - this.getChildrenHeight(!1)),
						  (this.proportionLength = i / this.childrenProportion))
						: (this.proportionLength = 0);
				}
				return e;
			},
		};
	Object.assign(wh, kh, Ch);
	function Sh(t) {
		return 'string' == typeof t && (t = Ph[t]), t;
	}
	var Ph = {
			x: 0,
			h: 0,
			horizontal: 0,
			'left-to-right': 0,
			y: 1,
			v: 1,
			vertical: 1,
			'top-to-bottom': 1,
		},
		Oh = Phaser.Utils.Objects.IsPlainObject,
		Th = Phaser.Utils.Objects.GetValue,
		Mh = (function () {
			b(l, ho);
			var a = w(l);
			function l(t, e, i, n, s, r, o) {
				var h;
				return (
					B(this, l),
					Oh(e)
						? ((e = Th((o = e), 'x', 0)),
						  (i = Th(o, 'y', 0)),
						  (n = Th(o, 'width', void 0)),
						  (s = Th(o, 'height', void 0)),
						  (r = Th(o, 'orientation', 0)))
						: Oh(n)
						? ((n = Th((o = n), 'width', void 0)),
						  (s = Th(o, 'height', void 0)),
						  (r = Th(o, 'orientation', 0)))
						: Oh(r) && (r = Th((o = r), 'orientation', 0)),
					void 0 === r && (r = 0),
					((h = a.call(this, t, e, i, n, s, o)).type = 'rexSizer'),
					(h.sizerChildren = []),
					h.setOrientation(r),
					h.setItemSpacing(Th(o, 'space.item', 0)),
					h.addChildrenMap('items', h.sizerChildren),
					h
				);
			}
			return (
				m(l, [
					{
						key: 'destroy',
						value: function (t) {
							this.scene &&
								((this.sizerChildren.length = 0),
								C(x(l.prototype), 'destroy', this).call(this, t));
						},
					},
					{
						key: 'setOrientation',
						value: function (t) {
							return (this.orientation = Sh(t)), this;
						},
					},
					{
						key: 'setItemSpacing',
						value: function (t) {
							return (this.space.item = t), this;
						},
					},
					{
						key: 'childrenProportion',
						get: function () {
							return (
								void 0 === this._childrenProportion &&
									(this._childrenProportion = function () {
										for (
											var t,
												e,
												i = 0,
												n = this.sizerChildren,
												s = 0,
												r = n.length;
											s < r;
											s++
										)
											(t = n[s]).rexSizer.hidden ||
												(0 < (e = t.rexSizer.proportion) && (i += e));
										return i;
									}.call(this)),
								this._childrenProportion
							);
						},
					},
				]),
				l
			);
		})();
	Object.assign(Mh.prototype, wh),
		u.register('sizer', function (t, e, i, n, s, r) {
			var o = new Mh(this.scene, t, e, i, n, s, r);
			return this.scene.add.existing(o), o;
		}),
		G(window, 'RexPlugins.UI.Sizer', Mh);
	function _h() {
		return Array.prototype.reduce.call(arguments, Bh, 0);
	}
	function zh(t, e, i, n) {
		void 0 === i && (i = 0), void 0 === n && (n = t.length - 1);
		for (var s = i; s <= n; s++) t[s] = e;
		return t;
	}
	var Bh = function (t, e) {
			return t + e;
		},
		Eh = Phaser.Utils.Objects.IsPlainObject,
		Dh = Phaser.Utils.Objects.GetValue,
		jh = Phaser.Display.Align.CENTER,
		Rh = {
			add: function (t, e, i, n, s, r, o) {
				this.pin(t),
					Eh(e) &&
						((e = Dh((h = e), 'column', void 0)),
						(i = Dh(h, 'row', void 0)),
						(n = Dh(h, 'align', jh)),
						(s = Dh(h, 'padding', 0)),
						(r = Dh(h, 'expand', !1)),
						(o = Dh(h, 'key', void 0)));
				var h,
					a = (function (t, e, i, n, s) {
						if ('number' == typeof t || 'number' == typeof e)
							if (void 0 === t) {
								for (var r = 0; r < n; r++) if (!i[(o = e * n + r)]) return o;
							} else if (void 0 === e) {
								for (r = 0; r < s; r++) if (!i[(o = r * n + t)]) return o;
							} else {
								if (!i[(o = e * n + t)]) return o;
							}
						else if (!0 === e) {
							var o;
							for (r = 0; r < n; r++)
								for (var h = 0; h < s; h++) if (!i[(o = h * n + r)]) return o;
						} else {
							r = 0;
							for (var a = i.length; r < a; r++) if (!i[r]) return r;
						}
						return null;
					})(e, i, this.sizerChildren, this.columnCount, this.rowCount);
				return (
					null === a ||
						('string' == typeof n && (n = bs[n]),
						void 0 === n && (n = jh),
						void 0 === s && (s = 0),
						void 0 === r && (r = !0),
						((h = this.getSizerConfig(t)).align = n),
						(h.padding = Us(s)),
						(h.expand = r),
						(this.sizerChildren[a] = t),
						void 0 !== o && this.addChildrenMap(o, t)),
					this
				);
			},
		},
		Lh = Phaser.Utils.Array.Remove,
		Yh = Vi.prototype.remove,
		Ih = Vi.prototype.clear,
		Ah = {
			remove: function (t, e) {
				if (this.getParentSizer(t) !== this) return this;
				if (this.isBackground(t)) Lh(this.backgroundChildren, t);
				else {
					var i = this.sizerChildren.indexOf(t);
					-1 !== i && (this.sizerChildren[i] = null);
				}
				return Yh.call(this, t, e), this;
			},
			removeAt: function (t, e, i) {
				var n = this.getChildAt(t, e);
				return n && this.remove(n, i), this;
			},
			removeAll: function (t) {
				for (var e = 0, i = this.sizerChildren.length; e < i; e++) {
					var n = this.sizerChildren[e];
					n && this.remove(n, t);
				}
				return this;
			},
			clear: function (t) {
				return (
					zh(this.sizerChildren, null),
					this.backgroundChildren && (this.backgroundChildren.length = 0),
					Ih.call(this, t),
					this
				);
			},
		},
		Fh = Phaser.Utils.Objects.GetValue,
		Wh = {
			getChildrenWidth: function () {
				if (this.rexSizer.hidden) return 0;
				for (
					var t, e, i, n, s = 0, r = this.sizerChildren, o = 0;
					o < this.columnCount;
					o++
				) {
					if ((t = 0) === this.columnProportions[o]) {
						for (var h = 0; h < this.rowCount; h++)
							(e = r[h * this.columnCount + o]) &&
								(e.rexSizer.hidden ||
									((i = e.rexSizer.padding),
									(n = this.getChildWidth(e) + i.left + i.right),
									(t = Math.max(t, n))));
						s += t;
					}
					this.columnWidth[o] = t;
				}
				return (
					s +
					_h.apply(
						void 0,
						[this.space.left].concat(a(this.space.column), [this.space.right])
					)
				);
			},
			getChildrenHeight: function () {
				if (this.rexSizer.hidden) return 0;
				for (
					var t, e, i, n, s = 0, r = this.sizerChildren, o = 0;
					o < this.rowCount;
					o++
				) {
					if ((t = 0) === this.rowProportions[o]) {
						for (var h = 0; h < this.columnCount; h++)
							(e = r[o * this.columnCount + h]) &&
								(e.rexSizer.hidden ||
									((n = e.isRexSizer
										? Math.max(e.minHeight, e.childrenHeight)
										: e.hasOwnProperty('minHeight')
										? e.minHeight
										: ws(e)),
									(n += (i = e.rexSizer.padding).top + i.bottom),
									(t = Math.max(t, n))));
						s += t;
					}
					this.rowHeight[o] = t;
				}
				return (
					s +
					_h.apply(
						void 0,
						[this.space.top].concat(a(this.space.row), [this.space.bottom])
					)
				);
			},
			getExpandedChildWidth: function (t, e) {
				var i,
					n = t.rexSizer;
				if (n.expand) {
					var s = n.padding;
					i = e - s.left - s.right;
				}
				return i;
			},
			getExpandedChildHeight: function (t, e) {
				var i,
					n = t.rexSizer;
				if (n.expand) {
					var s = n.padding;
					i = e - s.top - s.bottom;
				}
				return i;
			},
			getChildrenSizers: function (t) {
				void 0 === t && (t = []);
				for (var e, i = this.sizerChildren, n = 0, s = i.length; n < s; n++)
					(e = i[n]) && e.isRexSizer && t.push(e);
				return t;
			},
			preLayout: function () {
				return (
					(this._totalColumnProportions = void 0),
					(this._totalRowProportions = void 0),
					(this.proportionWidthLength = void 0),
					(this.proportionHeightLength = void 0),
					Zs.call(this),
					this
				);
			},
			layoutChildren: function () {
				for (
					var t,
						e,
						i,
						n,
						s,
						r,
						o,
						h,
						a,
						l,
						u,
						c = this.innerLeft,
						d = c,
						f = this.innerTop,
						v = this.space.column,
						p = this.space.row,
						g = 0;
					g < this.rowCount;
					g++
				) {
					(u = this.getRowHeight(g)), (d = c);
					for (var y = 0; y < this.columnCount; y++)
						(l = this.getColumnWidth(y)),
							(t = this.getChildAt(y, g)) &&
								!t.rexSizer.hidden &&
								((h = this.getExpandedChildWidth(t, l)),
								(a = this.getExpandedChildHeight(t, u)),
								t.isRexSizer ? t.runLayout(this, h, a) : _r(t, h, a),
								(n = d + (i = (e = t.rexSizer).padding).left),
								(r = l - i.left - i.right),
								(s = f + i.top),
								(o = u - i.top - i.bottom),
								xs.setPosition(n, s).setSize(r, o),
								Gs(t, xs, e.align),
								this.resetChildPositionState(t)),
							(d += l + v[y]);
					f += u + p[g];
				}
			},
			resolveWidth: function (t) {
				t = Js.call(this, t);
				if (void 0 === this.proportionWidthLength) {
					var e = this.totalColumnProportions;
					if (0 < e) {
						var i = t - this.childrenWidth;
						0 <= i && (this.proportionWidthLength = i / e);
					} else this.proportionWidthLength = 0;
				}
				return t;
			},
			resolveHeight: function (t, e) {
				e = Ks.call(this, t, e);
				if (void 0 === this.proportionHeightLength) {
					var i = this.totalRowProportions;
					if (0 < i) {
						var n = e - this.childrenHeight;
						0 <= n && (this.proportionHeightLength = n / i);
					} else this.proportionHeightLength = 0;
				}
				return e;
			},
			resolveChildrenWidth: function () {
				var t, e, i;
				for (var n in this.sizerChildren)
					(t = this.sizerChildren[n]) &&
						((i = this.getColumnWidth(parseInt(n) % this.columnCount)),
						t.isRexSizer &&
							((e = this.getExpandedChildWidth(t, i)),
							(e = t.resolveWidth(e)),
							t.resolveChildrenWidth(e)));
			},
			runWidthWrap: function () {
				var t, e, i;
				for (var n in this.sizerChildren)
					(t = this.sizerChildren[n]) &&
						((i = this.getColumnWidth(parseInt(n) % this.columnCount)),
						void 0 === (e = this.getExpandedChildWidth(t, i)) &&
							(e = this.resolveWidth(e)),
						t.runWidthWrap && t.runWidthWrap(e));
				return this;
			},
			resetGrid: function (t, e, i, n, s) {
				if (
					(void 0 === i && (i = 0),
					void 0 === n && (n = 0),
					(this.columnCount = t),
					(this.rowCount = e),
					void 0 === this.sizerChildren
						? (this.sizerChildren = [])
						: this.removeAll(),
					(this.sizerChildren.length = t * e),
					zh(this.sizerChildren, null),
					(this.columnProportions = []),
					(this.columnProportions.length = t),
					'number' == typeof i)
				)
					zh(this.columnProportions, i);
				else for (var r = 0; r < t; r++) this.columnProportions[r] = i[r] || 0;
				if (
					((this.rowProportions = []),
					(this.rowProportions.length = e),
					'number' == typeof n)
				)
					zh(this.rowProportions, n);
				else for (r = 0; r < e; r++) this.rowProportions[r] = n[r] || 0;
				(this.columnWidth = []),
					(this.columnWidth.length = t),
					(this.rowHeight = []),
					(this.rowHeight.length = e),
					(this.space.column = []),
					(this.space.column.length = t - 1);
				var o = Fh(s, 'column', 0);
				if ('number' == typeof o) zh(this.space.column, o);
				else {
					r = 0;
					for (var h = this.space.column.length; r < h; r++)
						this.space.column[r] = o[r] || 0;
				}
				(this.space.row = []), (this.space.row.length = e - 1);
				var a = Fh(s, 'row', 0);
				if ('number' == typeof a) zh(this.space.row, a);
				else
					for (r = 0, h = this.space.row.length; r < h; r++)
						this.space.row[r] = a[r] || 0;
				return this;
			},
		};
	Object.assign(Wh, Rh, Ah);
	var Hh = Phaser.Utils.Objects.IsPlainObject,
		Xh = Phaser.Utils.Objects.GetValue,
		Vh = (function () {
			b(d, ho);
			var c = w(d);
			function d(t, e, i, n, s, r, o, h, a, l) {
				var u;
				return (
					B(this, d),
					Hh(e)
						? ((e = Xh((l = e), 'x', 0)),
						  (i = Xh(l, 'y', 0)),
						  (n = Xh(l, 'width', void 0)),
						  (s = Xh(l, 'height', void 0)),
						  (r = Xh(l, 'column', 0)),
						  (o = Xh(l, 'row', 0)),
						  (h = Xh(l, 'columnProportions', 0)),
						  (a = Xh(l, 'rowProportions', 0)))
						: Hh(n)
						? ((n = Xh((l = n), 'width', void 0)),
						  (s = Xh(l, 'height', void 0)),
						  (r = Xh(l, 'column', 0)),
						  (o = Xh(l, 'row', 0)),
						  (h = Xh(l, 'columnProportions', 0)),
						  (a = Xh(l, 'rowProportions', 0)))
						: Hh(r)
						? ((r = Xh((l = r), 'column', 0)),
						  (o = Xh(l, 'row', 0)),
						  (h = Xh(l, 'columnProportions', 0)),
						  (a = Xh(l, 'rowProportions', 0)))
						: Hh(h) &&
						  ((h = Xh((l = h), 'columnProportions', 0)),
						  (a = Xh(l, 'rowProportions', 0))),
					((u = c.call(this, t, e, i, n, s, l)).type = 'rexGridSizer'),
					u.resetGrid(r, o, h, a, Xh(l, 'space', void 0)),
					u.addChildrenMap('items', u.sizerChildren),
					u
				);
			}
			return (
				m(d, [
					{
						key: 'destroy',
						value: function (t) {
							this.scene &&
								((this.sizerChildren.length = 0),
								C(x(d.prototype), 'destroy', this).call(this, t));
						},
					},
					{
						key: 'setColumnProportion',
						value: function (t, e) {
							return (
								t >= this.columnProportions.length ||
									(this.columnProportions[t] = e),
								this
							);
						},
					},
					{
						key: 'setRowProportion',
						value: function (t, e) {
							return (
								t >= this.rowProportions.length || (this.rowProportions[t] = e),
								this
							);
						},
					},
					{
						key: 'totalColumnProportions',
						get: function () {
							return (
								void 0 === this._totalColumnProportions &&
									(this._totalColumnProportions = function () {
										for (var t, e = 0, i = 0; i < this.columnCount; i++)
											0 < (t = this.columnProportions[i]) && (e += t);
										return e;
									}.call(this)),
								this._totalColumnProportions
							);
						},
					},
					{
						key: 'totalRowProportions',
						get: function () {
							return (
								void 0 === this._totalRowProportions &&
									(this._totalRowProportions = function () {
										for (var t, e = 0, i = 0; i < this.rowCount; i++)
											0 < (t = this.rowProportions[i]) && (e += t);
										return e;
									}.call(this)),
								this._totalRowProportions
							);
						},
					},
					{
						key: 'getChildAt',
						value: function (t, e) {
							return this.sizerChildren[e * this.columnCount + t];
						},
					},
					{
						key: 'childToGridIndex',
						value: function (t, e) {
							if (!t) return null;
							var i = this.sizerChildren.indexOf(t);
							return -1 === i
								? null
								: (void 0 === e && (e = {}),
								  (e.x = i % this.columnCount),
								  (e.y = Math.floor(i / this.columnCount)),
								  e);
						},
					},
					{
						key: 'getColumnWidth',
						value: function (t) {
							var e = this.columnProportions[t];
							return 0 === e
								? this.columnWidth[t]
								: e * this.proportionWidthLength;
						},
					},
					{
						key: 'getRowHeight',
						value: function (t) {
							var e = this.rowProportions[t];
							return 0 === e
								? this.rowHeight[t]
								: e * this.proportionHeightLength;
						},
					},
				]),
				d
			);
		})();
	Object.assign(Vh.prototype, Wh),
		u.register('gridSizer', function (t, e, i, n, s, r, o, h, a) {
			var l = new Vh(this.scene, t, e, i, n, s, r, o, h, a);
			return this.scene.add.existing(l), l;
		}),
		G(window, 'RexPlugins.UI.GridSizer', Vh);
	function Gh(t, e, i, n) {
		return (
			'\n' === t
				? this.addNewLine()
				: (this.pin(t),
				  Kh(e) &&
						((e = Zh((s = e), 'padding', 0)),
						(i = Zh(s, 'key', void 0)),
						(n = Zh(s, 'index', void 0))),
				  void 0 === e && (e = 0),
				  ((s = this.getSizerConfig(t)).align = qh),
				  (s.padding = Us(e)),
				  void 0 === n || n >= this.sizerChildren.length
						? this.sizerChildren.push(t)
						: this.sizerChildren.splice(n, 0, t),
				  void 0 !== i && this.addChildrenMap(i, t)),
			this
		);
		var s;
	}
	var Uh = function (t, e, i) {
			return e / t <= 0.25 ? e / (i - 1) : 0;
		},
		Nh = function (t) {
			var e = t.rexSizer.padding;
			return Cs(t) + e.left + e.right;
		},
		Jh = function (t) {
			var e = t.rexSizer.padding;
			return ws(t) + e.top + e.bottom;
		},
		Kh = Phaser.Utils.Objects.IsPlainObject,
		Zh = Phaser.Utils.Objects.GetValue,
		qh = Phaser.Display.Align.CENTER,
		$h = {
			add: function (t, e, i) {
				if (Ci(t))
					for (var n = t, s = 0, r = n.length; s < r; s++)
						Gh.call(this, n[s], e);
				else Gh.call(this, t, e, i);
				return this;
			},
			addNewLine: function () {
				return this.sizerChildren.push('\n'), this;
			},
			insert: function (t, e, i, n) {
				return Gh.call(this, e, i, n, t), this;
			},
		},
		Qh = Phaser.Utils.Array.Remove,
		ta = Vi.prototype.remove,
		ea = Vi.prototype.clear,
		ia = {
			remove: function (t, e) {
				return (
					this.getParentSizer(t) !== this ||
						(Qh(this.sizerChildren, t), ta.call(this, t, e)),
					this
				);
			},
			removeAll: function (t) {
				for (var e = 0, i = this.sizerChildren.length; e < i; e++)
					ta.call(this, this.sizerChildren[e], t);
				return (this.sizerChildren.length = 0), this;
			},
			clear: function (t) {
				return (
					(this.sizerChildren.length = 0),
					this.backgroundChildren && (this.backgroundChildren.length = 0),
					ea.call(this, t),
					this
				);
			},
		},
		na = {
			getChildrenWidth: function () {
				return this.rexSizer.hidden
					? 0
					: this.maxChildWidth + this.space.left + this.space.right;
			},
			getChildrenHeight: function () {
				return this.rexSizer.hidden
					? 0
					: this.widthWrapResult.height + this.space.top + this.space.bottom;
			},
			getChildrenSizers: function (t) {
				void 0 === t && (t = []);
				for (var e, i = this.sizerChildren, n = 0, s = i.length; n < s; n++)
					'\n' !== (e = i[n]) && e.isRexSizer && t.push(e);
				return t;
			},
			preLayout: function () {
				return (
					(this._maxChildWidth = void 0),
					(this._maxChildHeight = void 0),
					Zs.call(this),
					this
				);
			},
			layoutChildren: function () {
				for (
					var t,
						e,
						i,
						n,
						s,
						r,
						o,
						h,
						a,
						l,
						u = this.innerWidth,
						c = 0,
						d = this.innerLeft,
						f = d,
						v = this.innerTop,
						p = this.widthWrapResult.lines,
						g = 0,
						y = p.length;
					g < y;
					g++
				) {
					switch (
						((a = (h = p[g]).children),
						this.rtl && a.reverse(),
						(l = u - h.width),
						this.align)
					) {
						case 0:
							break;
						case 1:
							f += l;
							break;
						case 2:
							f += l / 2;
							break;
						case 3:
							c = Uh(u, l, a.length);
							break;
						case 4:
							0 === (c = Uh(u, l, a.length)) && (f += l);
							break;
						case 5:
							0 === (c = Uh(u, l, a.length)) && (f += l / 2);
					}
					for (var k = 0, m = a.length; k < m; k++)
						(n = f + (i = (e = (t = a[k]).rexSizer).padding).left),
							0 < k && (n += this.space.item),
							(s = v + i.top),
							(r = Cs(t)),
							(o = ws(t)),
							(f = n + r + i.right + c),
							xs.setPosition(n, s).setSize(r, o),
							Gs(t, xs, e.align),
							this.resetChildPositionState(t);
					(f = d), (v += h.height + this.space.line);
				}
			},
			runWidthWrap: function (t) {
				var e = t - this.space.left - this.space.right;
				(this.widthWrapResult = function (t, e) {
					void 0 === e
						? (e = {lines: [], width: 0, height: 0})
						: ((e.lines.length = 0), (e.width = 0), (e.height = 0));
					for (
						var i,
							n,
							s,
							r,
							o,
							h = this.sizerChildren,
							a = 0,
							l = e.lines,
							u = 0,
							c = h.length;
						u < c;
						u++
					) {
						if ('\n' === (i = h[u])) (i = void 0), (o = !(n = 0));
						else {
							if (i.rexSizer.hidden) continue;
							i.isRexSizer && i.layout(), (o = a < (n = Nh(i)));
						}
						o &&
							(r &&
								((r.width = t - (a + this.space.item)),
								(e.width = Math.max(e.width, r.width)),
								(e.height += r.height + this.space.line)),
							(r = {children: [], height: 0}),
							l.push(r),
							(a = t)),
							(a -= n + this.space.item),
							i &&
								(r.children.push(i),
								(s = Jh(i)),
								(r.height = Math.max(r.height, s)));
					}
					return (
						r &&
							((r.width = t - (a + this.space.item)),
							(e.width = Math.max(e.width, r.width)),
							(e.height += r.height)),
						e
					);
				}.call(this, e, this.widthWrapResult)),
					qs.call(this, t);
			},
		};
	Object.assign(na, $h, ia);
	var sa = Phaser.Utils.Objects.IsPlainObject,
		ra = Phaser.Utils.Objects.GetValue,
		oa = (function () {
			b(a, ho);
			var h = w(a);
			function a(t, e, i, n, s, r) {
				var o;
				return (
					B(this, a),
					sa(e)
						? ((e = ra((r = e), 'x', 0)),
						  (i = ra(r, 'y', 0)),
						  (n = ra(r, 'width', void 0)),
						  (s = ra(r, 'height', void 0)))
						: sa(n) &&
						  ((n = ra((r = n), 'width', void 0)),
						  (s = ra(r, 'height', void 0))),
					((o = h.call(this, t, e, i, n, s, r)).type = 'rexFixWidthSizer'),
					(o.sizerChildren = []),
					o.setOrientation(ra(r, 'orientation', 0)),
					o.setItemSpacing(ra(r, 'space.item', 0)),
					o.setLineSpacing(ra(r, 'space.line', 0)),
					o.setAlign(ra(r, 'align', 0)),
					o.setRTL(ra(r, 'rtl', !1)),
					o.addChildrenMap('items', o.sizerChildren),
					o
				);
			}
			return (
				m(a, [
					{
						key: 'destroy',
						value: function (t) {
							this.scene &&
								((this.sizerChildren.length = 0),
								C(x(a.prototype), 'destroy', this).call(this, t));
						},
					},
					{
						key: 'setOrientation',
						value: function (t) {
							return (this.orientation = Sh(t)), this;
						},
					},
					{
						key: 'setItemSpacing',
						value: function (t) {
							return (this.space.item = t), this;
						},
					},
					{
						key: 'setLineSpacing',
						value: function (t) {
							return (this.space.line = t), this;
						},
					},
					{
						key: 'setAlign',
						value: function (t) {
							return (
								'string' == typeof t && (t = ha[t]), (this.align = t), this
							);
						},
					},
					{
						key: 'setRTL',
						value: function (t) {
							return void 0 === t && (t = !0), (this.rtl = t), this;
						},
					},
					{
						key: 'maxChildWidth',
						get: function () {
							return (
								void 0 === this._maxChildWidth &&
									(this._maxChildWidth = function (t) {
										void 0 === t && (t = this.sizerChildren);
										for (var e, i, n = 0, s = 0, r = t.length; s < r; s++)
											'\n' !== (e = t[s]) &&
												((i = this.getChildWidth(e)), (n = Math.max(i, n)));
										return n;
									}.call(this)),
								this._maxChildWidth
							);
						},
					},
					{
						key: 'maxChildHeight',
						get: function () {
							return (
								void 0 === this._maxChildHeight &&
									(this._maxChildHeight = function (t) {
										void 0 === t && (t = this.sizerChildren);
										for (var e, i, n = 0, s = 0, r = t.length; s < r; s++)
											'\n' !== (e = t[s]) &&
												((i = e.isRexSizer
													? Math.max(e.minHeight, e.childrenHeight)
													: e.hasOwnProperty('minHeight')
													? e.minHeight
													: ws(e)),
												(n = Math.max(i, n)));
										return n;
									}.call(this)),
								this._maxChildHeight
							);
						},
					},
				]),
				a
			);
		})(),
		ha = {
			left: 0,
			top: 0,
			right: 1,
			bottom: 1,
			center: 2,
			justify: 3,
			'justify-left': 3,
			'justify-top': 3,
			'justify-right': 4,
			'justify-bottom': 4,
			'justify-center': 5,
		};
	Object.assign(oa.prototype, na),
		u.register('fixWidthSizer', function (t, e, i, n, s) {
			var r = new oa(this.scene, t, e, i, n, s);
			return this.scene.add.existing(r), r;
		}),
		G(window, 'RexPlugins.UI.FixWidthSizer', oa),
		u.register('overlapSizer', function (t, e, i, n, s) {
			var r = new bo(this.scene, t, e, i, n, s);
			return this.scene.add.existing(r), r;
		}),
		G(window, 'RexPlugins.UI.OverlapSizer', bo);
	function aa(t, e, i, n) {
		var s = new ua(e, i, n);
		return (
			t && !t.isRexSizer && t.setMask(s.createGeometryMask()), this.pin(s), s
		);
	}
	var la = Phaser.GameObjects.Graphics,
		ua = (function () {
			b(r, la);
			var s = w(r);
			function r(t, e, i) {
				var n;
				return (
					B(this, r),
					void 0 === e && (e = 0),
					'string' == typeof e && (e = ca[e]),
					void 0 === i && (i = 0),
					((n = s.call(this, t.scene)).parent = t),
					(n.shape = e),
					(n.padding = i),
					n.setPosition().resize(),
					n
				);
			}
			return (
				m(r, [
					{
						key: 'destroy',
						value: function () {
							return (
								(this.parent = void 0),
								C(x(r.prototype), 'destroy', this).call(this),
								this
							);
						},
					},
					{
						key: 'setPosition',
						value: function (t, e) {
							var i = this.parent;
							return (
								void 0 === t && (t = i.x),
								void 0 === e && (e = i.y),
								C(x(r.prototype), 'setPosition', this).call(this, t, e),
								this
							);
						},
					},
					{
						key: 'resize',
						value: function (t, e, i) {
							var n = this.parent;
							if (
								(void 0 === t && (t = n.width),
								void 0 === e && (e = n.height),
								void 0 === i && (i = this.padding),
								this.widthSave === t &&
									this.heightSave === e &&
									this.paddingSave === i)
							)
								return this;
							switch ((this.clear().fillStyle(16777215), this.shape)) {
								case 1:
									var s = Math.min(t, e) / 2;
									this.fillCircle(0, 0, s + i);
									break;
								default:
									this.fillRect(
										-(t * n.originX) - i,
										-(e * n.originY) - i,
										t + 2 * i,
										e + 2 * i
									);
							}
							return (
								(this.widthSave = t),
								(this.heightSave = e),
								(this.paddingSave = i),
								this
							);
						},
					},
				]),
				r
			);
		})(),
		ca = {rectangle: 0, circle: 1},
		da = Phaser.Utils.Objects.GetValue,
		fa = (function () {
			b(k, Mh);
			var y = w(k);
			function k(t, e) {
				var i;
				B(this, k), ((i = y.call(this, t, e)).type = 'rexLabel');
				var n = da(e, 'background', void 0),
					s = da(e, 'icon', void 0),
					r = da(e, 'iconMask', void 0),
					o = da(e, 'text', void 0),
					h = da(e, 'action', void 0),
					a = da(e, 'actionMask', void 0),
					l = da(e, 'align', void 0),
					u = da(e, 'space.icon', 0),
					c = da(e, 'space.text', 0);
				n && i.addBackground(n),
					('right' !== l && 'bottom' !== l && 'center' !== l) || i.addSpace(),
					s &&
						(0 === i.orientation
							? (o || h) && (f = {right: u})
							: (o || h) && (f = {bottom: u}),
						i.add(s, 0, 'center', f),
						(r = r && i.addChildMask(s, s, 1)));
				if (o) {
					var d,
						f,
						v,
						p = da(e, 'expandTextWidth', !1),
						g = da(e, 'expandTextHeight', !1);
					(v =
						0 === i.orientation
							? ((d = p ? 1 : 0), h && (f = {right: c}), g)
							: ((d = g ? 1 : 0), h && (f = {bottom: c}), p)),
						i.add(o, d, 'center', f, v);
				}
				return (
					h && (i.add(h), (a = a && i.addChildMask(h, h, 1))),
					'center' === l && i.addSpace(),
					i.addChildrenMap('background', n),
					i.addChildrenMap('icon', s),
					i.addChildrenMap('iconMask', r),
					i.addChildrenMap('text', o),
					i.addChildrenMap('action', h),
					i.addChildrenMap('actionMask', a),
					i
				);
			}
			return (
				m(k, [
					{
						key: 'text',
						get: function () {
							var t = this.childrenMap.text;
							return void 0 === t ? '' : t.text ? t.text : t.getData('text');
						},
						set: function (t) {
							var e = this.childrenMap.text;
							void 0 !== e && (e.setText ? e.setText(t) : e.setData('text', t));
						},
					},
					{
						key: 'setText',
						value: function (t) {
							return (this.text = t), this;
						},
					},
					{
						key: 'appendText',
						value: function (t) {
							return (this.text += t), this;
						},
					},
					{
						key: 'runLayout',
						value: function (t, e, i) {
							if (this.ignoreLayout) return this;
							C(x(k.prototype), 'runLayout', this).call(this, t, e, i);
							var n = this.childrenMap.iconMask;
							n && (n.setPosition(), this.resetChildPositionState(n));
							var s = this.childrenMap.actionMask;
							return (
								s && (s.setPosition(), this.resetChildPositionState(s)), this
							);
						},
					},
					{
						key: 'resize',
						value: function (t, e) {
							C(x(k.prototype), 'resize', this).call(this, t, e);
							var i = this.childrenMap.iconMask;
							i && i.resize();
							var n = this.childrenMap.actionMask;
							return n && n.resize(), this;
						},
					},
				]),
				k
			);
		})(),
		va = {addChildMask: aa};
	Object.assign(fa.prototype, va),
		u.register('label', function (t) {
			var e = new fa(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.Label', fa);
	var pa = Phaser.Utils.Objects.GetValue,
		ga = (function () {
			function i(t, e) {
				B(this, i),
					(this.gameObject = t),
					(this.scene = tr(t)),
					this.setEventEmitter(pa(e, 'eventEmitter', void 0)),
					(this._enable = void 0),
					t.setInteractive(pa(e, 'inputConfig', void 0)),
					this.resetFromJSON(e),
					this.boot();
			}
			return (
				m(i, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								(this.pointer = void 0),
								(this.lastClickTime = void 0),
								this.setEnable(pa(t, 'enable', !0)),
								this.setMode(pa(t, 'mode', 1)),
								this.setClickInterval(pa(t, 'clickInterval', 100)),
								this.setDragThreshold(pa(t, 'threshold', void 0)),
								this
							);
						},
					},
					{
						key: 'boot',
						value: function () {
							this.gameObject.on('pointerdown', this.onPress, this),
								this.gameObject.on('pointerup', this.onRelease, this),
								this.gameObject.on('pointerout', this.onPointOut, this),
								this.gameObject.on('pointermove', this.onMove, this),
								this.gameObject.on('destroy', this.destroy, this);
						},
					},
					{
						key: 'shutdown',
						value: function () {
							this.destroyEventEmitter(),
								(this.pointer = null),
								(this.gameObject = null),
								(this.scene = null);
						},
					},
					{
						key: 'destroy',
						value: function () {
							this.shutdown();
						},
					},
					{
						key: 'enable',
						get: function () {
							return this._enable;
						},
						set: function (t) {
							if (this._enable !== t) {
								t || this.cancel();
								var e = (this._enable = t) ? 'enable' : 'disable';
								this.emit(e, this, this.gameObject);
							}
						},
					},
					{
						key: 'setEnable',
						value: function (t) {
							return void 0 === t && (t = !0), (this.enable = t), this;
						},
					},
					{
						key: 'toggleEnable',
						value: function () {
							return this.setEnable(!this.enable), this;
						},
					},
					{
						key: 'setMode',
						value: function (t) {
							return 'string' == typeof t && (t = Ca[t]), (this.mode = t), this;
						},
					},
					{
						key: 'setClickInterval',
						value: function (t) {
							return (this.clickInterval = t), this;
						},
					},
					{
						key: 'setDragThreshold',
						value: function (t) {
							return (this.dragThreshold = t), this;
						},
					},
					{
						key: 'onPress',
						value: function (t, e, i, n) {
							void 0 === this.pointer &&
								((this.pointer = t),
								0 === this.mode && this.click(t.downTime, t, n));
						},
					},
					{
						key: 'onRelease',
						value: function (t, e, i, n) {
							this.pointer === t &&
								(1 === this.mode && this.click(t.upTime, t, n),
								(this.pointer = void 0));
						},
					},
					{
						key: 'onPointOut',
						value: function (t) {
							this.pointer === t && this.cancel();
						},
					},
					{
						key: 'onMove',
						value: function (t) {
							this.pointer === t &&
								void 0 !== this.dragThreshold &&
								t.getDistance() >= this.dragThreshold &&
								this.cancel();
						},
					},
					{
						key: 'click',
						value: function (t, e, i) {
							if (!this.enable) return this;
							if (void 0 === t)
								return this.emit('click', this, this.gameObject, e, i), this;
							this.pointer = void 0;
							var n = this.lastClickTime;
							return (
								(void 0 !== n && t - n <= this.clickInterval) ||
									((this.lastClickTime = t),
									this.emit('click', this, this.gameObject, e, i)),
								this
							);
						},
					},
					{
						key: 'cancel',
						value: function () {
							return (this.pointer = void 0), this;
						},
					},
				]),
				i
			);
		})();
	Object.assign(ga.prototype, vr);
	function ya(s, t) {
		(s._buttonBehavior = new ga(s, t)),
			s._buttonBehavior
				.on(
					'click',
					function (t, e, i, n) {
						wa.call(this, 'button.click', e, i, n);
					},
					this
				)
				.on(
					'enable',
					function (t, e) {
						wa.call(this, 'button.enable', e);
					},
					this
				)
				.on(
					'disable',
					function (t, e) {
						wa.call(this, 'button.disable', e);
					},
					this
				),
			s
				.on(
					'pointerover',
					function (t, e, i, n) {
						wa.call(this, 'button.over', s, t, n);
					},
					this
				)
				.on(
					'pointerout',
					function (t, e) {
						wa.call(this, 'button.out', s, t, e);
					},
					this
				);
	}
	function ka(t) {
		if (0 === this.buttons.length) {
			if (!this.buttonsExpand)
				switch (this.buttonsAlign) {
					case 'right':
					case 'bottom':
					case 'center':
						Pa.call(this);
				}
			Sa.call(this, t, this.buttonProportion, 'center', 0, !0),
				this.buttonsExpand || ('center' === this.buttonsAlign && Pa.call(this));
		} else {
			var e = this.sizerChildren.length - 1;
			this.sizerChildren[e].isRexSpace
				? Oa.call(this, e, t, this.buttonProportion, 'center', 0, !0)
				: Sa.call(this, t, this.buttonProportion, 'center', 0, !0);
		}
		return this.buttons.push(t), ya.call(this, t, this.clickConfig), this;
	}
	function ma(t, e) {
		return (
			(t = this.getButton(t)) &&
				(1 === this.buttons.length
					? this.clear(e)
					: (Ma(this.buttons, t), _a.call(this, t, e))),
			this
		);
	}
	function ba(t, e) {
		void 0 === e && (e = !1);
		var i = ja(t, 'dataManager', void 0),
			s = ja(t, 'setValueCallback', void 0),
			r = ja(t, 'setValueCallbackScope', void 0);
		void 0 === i && (this.setDataEnabled(), (i = this.data)),
			this.buttons.forEach(function (n) {
				var t = n.name;
				s &&
					i.events.on(
						'changedata-'.concat(t),
						function (t, e, i) {
							r ? s.call(r, n, e, i) : s(n, e, i);
						},
						this
					),
					i.set(t, void 0),
					i.set(t, e);
			}),
			(this._dataManager = i);
	}
	function xa(t) {
		var e = Ra(t, 'type', void 0);
		e && La.hasOwnProperty(e) && La[e].call(this, t);
	}
	var Ca = {press: 0, pointerdown: 0, release: 1, pointerup: 1},
		wa = function (t, e, i, n) {
			var s;
			if ('number' == typeof e) {
				if (((s = e), !(e = this.buttons[s]))) return;
			} else if (-1 === (s = this.buttons.indexOf(e))) return;
			this.eventEmitter !== this && this.emit(t, e, s, i, n),
				void 0 !== this.groupName
					? this.eventEmitter.emit(t, e, this.groupName, s, i, n)
					: this.eventEmitter.emit(t, e, s, i, n);
		},
		Sa = Mh.prototype.add,
		Pa = Mh.prototype.addSpace,
		Oa = Mh.prototype.insert,
		Ta = {
			addButton: function (t) {
				if (Ci(t))
					for (var e = t, i = 0, n = e.length; i < n; i++) ka.call(this, e[i]);
				else ka.call(this, t);
				return this;
			},
			addButtons: function (t) {
				for (var e = 0, i = t.length; e < i; e++) ka.call(this, t[e]);
				return this;
			},
		},
		Ma = Phaser.Utils.Array.Remove,
		_a = Mh.prototype.remove,
		za = Mh.prototype.clear,
		Ba = {
			remove: function (t, e) {
				if (Ci(t))
					for (var i = t, n = 0, s = i.length; n < s; n++)
						ma.call(this, i[n], e);
				else ma.call(this, t, e);
				return this;
			},
			clear: function (t) {
				return (this.buttons.length = 0), za.call(this, t), this;
			},
			removeButton: function (t, e) {
				return this.remove(t, e), this;
			},
			clearButtons: function (t) {
				return this.clear(t), this;
			},
		},
		Ea = function (t, e) {
			return t
				? t.hasOwnProperty('name')
					? t.name === e
						? t
						: null
					: GetElementByName(t, e)
				: null;
		},
		Da = {
			getButton: function (t) {
				var e;
				switch (v(t)) {
					case 'number':
						e = this.buttons[t];
						break;
					case 'string':
						e = (function (t, e) {
							if (!t) return null;
							if (Ci(t)) {
								for (var i, n = 0, s = t.length; n < s; n++)
									if ((i = Ea(t[n], e))) return i;
							} else for (var r in t) if ((i = Ea(t[r], e))) return i;
						})(this.buttons, t);
						break;
					default:
						(e = t), -1 === this.buttons.indexOf(e) && (e = void 0);
				}
				return e;
			},
			setButtonEnable: function (t, e) {
				if (void 0 === t || 'boolean' == typeof t) {
					e = t;
					for (var i = 0, n = this.buttons.length; i < n; i++)
						this.buttons[i]._buttonBehavior.setEnable(e);
				} else this.getButton(t)._buttonBehavior.setEnable(e);
				return this;
			},
			toggleButtonEnable: function (t) {
				if (void 0 === t || 'boolean' == typeof t)
					for (var e = 0, i = this.buttons.length; e < i; e++)
						this.buttons[e]._buttonBehavior.toggleEnable();
				else this.getButton(t)._buttonBehavior.toggleEnable();
				return this;
			},
			getButtonEnable: function (t) {
				return (
					void 0 === t && (t = 0), this.getButton(t)._buttonBehavior.enable
				);
			},
			emitButtonClick: function (t) {
				return wa.call(this, 'button.click', t), this;
			},
			showButton: function (t) {
				return xr(this.getButton(t)), this;
			},
			hideButton: function (t) {
				return Cr(this.getButton(t)), this;
			},
			isButtonShown: function (t) {
				return wr(this.getButton(t)), this;
			},
			forEachButtton: function (t, e) {
				for (var i = 0, n = this.buttons.length; i < n; i++)
					e
						? t.call(e, this.buttons[i], i, this.buttons)
						: t(this.buttons[i], i, this.buttons);
				return this;
			},
		},
		ja = Phaser.Utils.Objects.GetValue,
		Ra = Phaser.Utils.Objects.GetValue,
		La = {
			radio: function (t) {
				ba.call(this, t),
					(this._value = void 0),
					Object.defineProperty(this, 'value', {
						get: function () {
							return this._value;
						}.bind(this),
						set: function (n) {
							if (n !== this._value) {
								this._value = n;
								var s = this._dataManager;
								this.buttons.forEach(function (t) {
									var e = t.name,
										i = s.get(e);
									e === n ? i || s.set(e, !0) : i && s.set(e, !1);
								});
							}
						}.bind(this),
						enumerable: !0,
						configurable: !0,
					}),
					this.on(
						'button.click',
						function (t) {
							this.value = t.name;
						},
						this
					);
			},
			checkboxes: function (t) {
				ba.call(this, t),
					this.on(
						'button.click',
						function (t) {
							var e = this._dataManager,
								i = t.name,
								n = e.get(i);
							e.set(i, !n);
						},
						this
					);
			},
		},
		Ya = Phaser.Utils.Objects.GetValue,
		Ia = (function () {
			b(h, Mh);
			var o = w(h);
			function h(t, e) {
				var i;
				B(this, h), void 0 === e && (e = {});
				var n = e.space;
				'number' == typeof n && (e.space = {item: n}),
					((i = o.call(this, t, e)).type = 'rexButtons'),
					(i.eventEmitter = Ya(e, 'eventEmitter', E(i))),
					(i.groupName = Ya(e, 'groupName', void 0)),
					(i.buttons = []);
				var s = Ya(e, 'background', void 0),
					r = Ya(e, 'buttons', void 0);
				return (
					(i.buttonsExpand = Ya(e, 'expand', !1)),
					(i.buttonsAlign = Ya(e, 'align', void 0)),
					(i.buttonProportion = i.buttonsExpand ? 1 : 0),
					(i.clickConfig = Ya(e, 'click', void 0)),
					s && i.addBackground(s),
					r && i.addButtons(r),
					xa.call(E(i), e),
					i.addChildrenMap('background', s),
					i.addChildrenMap('buttons', i.buttons),
					i
				);
			}
			return h;
		})();
	Object.assign(Ia.prototype, Ta, Ba, Da),
		u.register('buttons', function (t) {
			var e = new Ia(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.Buttons', Ia);
	function Aa(t, e) {
		return (
			(t = this.getButton(t)) && (Ha(this.buttons, t), Xa.call(this, t, e)),
			this
		);
	}
	var Fa = Vh.prototype.add,
		Wa = {
			addButton: function (t, e, i) {
				return (
					Fa.call(this, t, e, i, void 0, 0, this.buttonsExpand),
					this.buttons.push(t),
					ya.call(this, t, this.clickConfig),
					this
				);
			},
			addButtons: function (t, e) {
				for (var i = 0, n = t; i < n; i++) this.addButton(t[i], void 0, e);
				return this;
			},
		},
		Ha = Phaser.Utils.Array.Remove,
		Xa = Vh.prototype.remove,
		Va = Vh.prototype.clear,
		Ga = {
			remove: function (t, e) {
				if (Ci(t))
					for (var i = t, n = 0, s = i.length; n < s; n++)
						Aa.call(this, i[n], e);
				else Aa.call(this, t, e);
				return this;
			},
			clear: function (t) {
				return (this.buttons.length = 0), Va.call(this, t), this;
			},
			removeButton: function (t, e) {
				return this.remove(t, e), this;
			},
			clearButtons: function (t) {
				return this.clear(t), this;
			},
		},
		Ua = Phaser.Utils.Objects.GetValue,
		Na = (function () {
			b(k, Vh);
			var y = w(k);
			function k(t, e) {
				var i;
				B(this, k), void 0 === e && (e = {});
				var n = Ua(e, 'row', 0),
					s = Ua(e, 'col', 0),
					r = Ua(e, 'buttons', void 0),
					o = Ua(e, 'expand', !0),
					h = o ? 1 : 0;
				if (void 0 !== r) {
					n = Math.max(n, r.length);
					for (var a = 0, l = r.length; a < l; a++)
						s = Math.max(s, r[a].length);
				}
				(e.row = n),
					(e.column = s),
					(e.columnProportions = h),
					(e.rowProportions = h),
					((i = y.call(this, t, e)).type = 'rexGridButtons'),
					(i.eventEmitter = Ua(e, 'eventEmitter', E(i))),
					(i.groupName = Ua(e, 'groupName', void 0)),
					(i.buttons = []);
				var u = Ua(e, 'background', void 0);
				if (
					((i.buttonsExpand = o),
					Ua(e, 'space', void 0),
					(i.clickConfig = Ua(e, 'click', void 0)),
					u && i.addBackground(u),
					r)
				)
					for (var c, d, f = 0, v = r.length; f < v; f++)
						for (var p = 0, g = (c = r[f]).length; p < g; p++)
							(d = c[p]) && i.addButton(d, p, f);
				return (
					xa.call(E(i), e),
					i.addChildrenMap('background', u),
					i.addChildrenMap('buttons', i.buttons),
					i
				);
			}
			return k;
		})();
	Object.assign(Na.prototype, Wa, Ga, Da),
		u.register('gridButtons', function (t) {
			var e = new Na(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.GridButtons', Na);
	function Ja(t) {
		return (
			Za.call(this, t),
			this.buttons.push(t),
			ya.call(this, t, this.clickConfig),
			this
		);
	}
	function Ka(t, e) {
		return (
			(t = this.getButton(t)) &&
				(1 === this.buttons.length
					? this.clear(e)
					: ($a(this.buttons, t), Qa.call(this, t, e))),
			this
		);
	}
	var Za = oa.prototype.add,
		qa = {
			addButton: function (t) {
				if (Ci(t))
					for (var e = t, i = 0, n = e.length; i < n; i++) Ja.call(this, e[i]);
				else Ja.call(this, t);
				return this;
			},
			addButtons: function (t) {
				if (Ci(t[0]))
					for (var e, i = t, n = 0, s = i.length - 1; n <= s; n++) {
						for (var r = 0, o = (e = i[n]).length; r < o; r++)
							Ja.call(this, e[r]);
						s < n && Za.addNewLine(this);
					}
				else for (r = 0, o = t.length; r < o; r++) Ja.call(this, t[r]);
				return this;
			},
		},
		$a = Phaser.Utils.Array.Remove,
		Qa = oa.prototype.remove,
		tl = oa.prototype.clear,
		el = {
			remove: function (t, e) {
				if (Ci(t))
					for (var i = t, n = 0, s = i.length; n < s; n++)
						Ka.call(this, i[n], e);
				else Ka.call(this, t, e);
				return this;
			},
			clear: function (t) {
				return (this.buttons.length = 0), tl.call(this, t), this;
			},
			removeButton: function (t, e) {
				return this.remove(t, e), this;
			},
			clearButtons: function (t) {
				return this.clear(t), this;
			},
		},
		il = Phaser.Utils.Objects.GetValue,
		nl = (function () {
			b(h, oa);
			var o = w(h);
			function h(t, e) {
				var i;
				B(this, h), void 0 === e && (e = {});
				var n = e.space;
				'number' == typeof n && (e.space = {item: n, line: n}),
					((i = o.call(this, t, e)).type = 'rexFixWidthButtons'),
					(i.eventEmitter = il(e, 'eventEmitter', E(i))),
					(i.groupName = il(e, 'groupName', void 0)),
					(i.buttons = []);
				var s = il(e, 'background', void 0),
					r = il(e, 'buttons', void 0);
				return (
					(i.buttonsAlign = il(e, 'align', void 0)),
					(i.clickConfig = il(e, 'click', void 0)),
					s && i.addBackground(s),
					r && i.addButtons(r),
					xa.call(E(i), e),
					i.addChildrenMap('background', s),
					i.addChildrenMap('buttons', i.buttons),
					i
				);
			}
			return h;
		})();
	Object.assign(nl.prototype, qa, el, Da),
		u.register('fixWidthButtons', function (t) {
			var e = new nl(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.FixWidthButtons', nl);
	var sl = Phaser.Utils.Objects.GetValue,
		rl = (function () {
			b(z, Mh);
			var _ = w(z);
			function z(t, e) {
				var i;
				B(this, z),
					void 0 === e && (e = {}),
					(e.orientation = 1),
					((i = _.call(this, t, e)).type = 'rexDialog'),
					(i.eventEmitter = sl(e, 'eventEmitter', E(i)));
				var n,
					s,
					r,
					o,
					h = sl(e, 'background', void 0),
					a = sl(e, 'title', void 0),
					l = sl(e, 'toolbar', void 0),
					u = sl(e, 'toolbarBackground', void 0),
					c = sl(e, 'leftToolbar', void 0),
					d = sl(e, 'leftToolbarBackground', void 0),
					f = sl(e, 'content', void 0),
					v = sl(e, 'description', void 0),
					p = sl(e, 'choices', void 0),
					g = sl(e, 'choicesBackground', void 0),
					y = sl(e, 'actions', void 0),
					k = sl(e, 'actionsBackground', void 0),
					m = sl(e, 'click', void 0);
				if (
					(h && i.addBackground(h),
					l &&
						(r = new Ia(t, {
							groupName: 'toolbar',
							background: u,
							buttons: l,
							orientation: 0,
							space: {item: sl(e, 'space.toolbarItem', 0)},
							click: m,
							eventEmitter: i.eventEmitter,
						})),
					c &&
						(o = new Ia(t, {
							groupName: 'leftToolbar',
							background: d,
							buttons: c,
							orientation: 0,
							space: {item: sl(e, 'space.leftToolbarItem', 0)},
							click: m,
							eventEmitter: i.eventEmitter,
						})),
					a && !l && !c)
				) {
					var b = sl(e, 'align.title', 'center'),
						x = sl(e, 'space.title', 0);
					(f || v || p || y) && (S = {bottom: x});
					var C = sl(e, 'expand.title', !0);
					i.add(a, 0, b, S, C);
				}
				if (l && !a && !c) {
					x = sl(e, 'space.title', 0);
					(f || v || p || y) && (S = {bottom: x});
					C = sl(e, 'expand.toolbar', !0);
					i.add(r, 0, 'right', S, C);
				}
				if (c && !a && !l) {
					x = sl(e, 'space.title', 0);
					(f || v || p || y) && (S = {bottom: x});
					C = sl(e, 'expand.leftToolbar', !0);
					i.add(o, 0, 'left', S, C);
				}
				if (a && (l || c)) {
					var w = new Mh(t, {orientation: 0});
					o && w.add(o, 0, 'right', 0, !1);
					b = sl(e, 'align.title', 'left');
					(C = sl(e, 'expand.title', !0)) ||
						('right' !== b && 'center' !== b) ||
						w.addSpace();
					var S = {
							left: sl(e, 'space.titleLeft', 0),
							right: sl(e, 'space.titleRight', 0),
						},
						P = C ? 1 : 0;
					w.add(a, P, 'center', S, C),
						C || ('left' !== b && 'center' !== b) || w.addSpace(),
						r && w.add(r, 0, 'right', 0, !1);
					x = sl(e, 'space.title', 0);
					(f || v || p || y) && (S = {bottom: x}), i.add(w, 0, 'center', S, !0);
				}
				if (f) {
					b = sl(e, 'align.content', 'center');
					var O = sl(e, 'space.content', 0);
					(S = {
						left: sl(e, 'space.contentLeft', 0),
						right: sl(e, 'space.contentRight', 0),
						bottom: v || p || y ? O : 0,
					}),
						(C = sl(e, 'expand.content', !0));
					i.add(f, 0, b, S, C);
				}
				if (v) {
					b = sl(e, 'align.description', 'center');
					var T = sl(e, 'space.description', 0);
					(S = {
						left: sl(e, 'space.descriptionLeft', 0),
						right: sl(e, 'space.descriptionRight', 0),
						bottom: p || y ? T : 0,
					}),
						(C = sl(e, 'expand.description', !0));
					i.add(v, 0, b, S, C);
				}
				if (p) {
					b = sl(e, 'align.choices', 'center');
					n = new Ia(t, {
						groupName: 'choices',
						background: g,
						buttons: p,
						orientation: 1,
						space: {item: sl(e, 'space.choice', 0)},
						click: m,
						eventEmitter: i.eventEmitter,
						type: sl(e, 'choicesType', void 0),
						setValueCallback: sl(e, 'choicesSetValueCallback', void 0),
						setValueCallbackScope: sl(
							e,
							'choicesSetValueCallbackScope',
							void 0
						),
					});
					var M = sl(e, 'space.choices', 0);
					(S = {
						left: sl(e, 'space.choicesLeft', 0),
						right: sl(e, 'space.choicesRight', 0),
						bottom: y ? M : 0,
					}),
						(C = sl(e, 'expand.choices', !0));
					i.add(n, 0, b, S, C);
				}
				if (y) {
					s = new Ia(t, {
						groupName: 'actions',
						background: k,
						buttons: y,
						orientation: 0,
						space: {item: sl(e, 'space.action', 0)},
						expand: sl(e, 'expand.actions', !1),
						align: sl(e, 'align.actions', 'center'),
						click: m,
						eventEmitter: i.eventEmitter,
					});
					S = {
						left: sl(e, 'space.actionsLeft', 0),
						right: sl(e, 'space.actionsRight', 0),
					};
					i.add(s, 0, 'center', S, !0);
				}
				return (
					i.addChildrenMap('background', h),
					i.addChildrenMap('title', a),
					i.addChildrenMap('toolbar', l),
					i.addChildrenMap('leftToolbar', c),
					i.addChildrenMap('content', f),
					i.addChildrenMap('description', v),
					i.addChildrenMap('choices', p),
					i.addChildrenMap('actions', y),
					i.addChildrenMap('choicesSizer', n),
					i.addChildrenMap('actionsSizer', s),
					i.addChildrenMap('toolbarSizer', r),
					i.addChildrenMap('leftToolbarSizer', o),
					i
				);
			}
			return z;
		})();
	Object.assign(rl.prototype, {
		getChoice: function (t) {
			return this.childrenMap.choicesSizer.getButton(t);
		},
		getAction: function (t) {
			return this.childrenMap.actionsSizer.getButton(t);
		},
		getToolbar: function (t) {
			return this.childrenMap.toolbarSizer.getButton(t);
		},
		getLeftToolbar: function (t) {
			return this.childrenMap.leftToolbarSizer.getButton(t);
		},
		setChoiceEnable: function (t, e) {
			return this.childrenMap.choicesSizer.setButtonEnable(t, e), this;
		},
		setActionEnable: function (t, e) {
			return this.childrenMap.actionsSizer.setButtonEnable(t, e), this;
		},
		setToolbarEnable: function (t, e) {
			return this.childrenMap.toolbarSizer.setButtonEnable(t, e), this;
		},
		setLeftToolbarEnable: function (t, e) {
			return this.childrenMap.leftToolbarSizer.setButtonEnable(t, e), this;
		},
		toggleChoiceEnable: function (t) {
			return this.childrenMap.choicesSizer.toggleButtonEnable(t), this;
		},
		toggleActionEnable: function (t) {
			return this.childrenMap.actionsSizer.toggleButtonEnable(t), this;
		},
		toggleToolbarEnable: function (t) {
			return this.childrenMap.toolbarSizer.toggleButtonEnable(t), this;
		},
		toggleLeftToolbarEnable: function (t) {
			return this.childrenMap.leftToolbarSizer.toggleButtonEnable(t), this;
		},
		getChoiceEnable: function (t) {
			return this.childrenMap.choicesSizer.getButtonEnable(t);
		},
		getActionEnable: function (t) {
			return this.childrenMap.actionsSizer.getButtonEnable(t);
		},
		getToolbarEnable: function (t) {
			return this.childrenMap.toolbarSizer.getButtonEnable(t);
		},
		getLeftToolbarEnable: function (t) {
			return this.childrenMap.leftToolbarSizer.getButtonEnable(t);
		},
		emitChoiceClick: function (t) {
			return this.childrenMap.choicesSizer.emitButtonClick(t), this;
		},
		emitActionClick: function (t) {
			return this.childrenMap.actionsSizer.emitButtonClick(t), this;
		},
		emitToolbarClick: function (t) {
			return this.childrenMap.toolbarSizer.emitButtonClick(t), this;
		},
		emitLeftToolbarClick: function (t) {
			return this.childrenMap.leftToolbarSizer.emitButtonClick(t), this;
		},
		showChoice: function (t) {
			return this.childrenMap.choicesSizer.showButton(t), this;
		},
		showAction: function (t) {
			return this.childrenMap.actionsSizer.showButton(t), this;
		},
		showToolbar: function (t) {
			return this.childrenMap.toolbarSizer.showButton(t), this;
		},
		showLeftToolbar: function (t) {
			return this.childrenMap.leftToolbarSizer.showButton(t), this;
		},
		hideChoice: function (t) {
			return this.childrenMap.choicesSizer.hideButton(t), this;
		},
		hideAction: function (t) {
			return this.childrenMap.actionsSizer.hideButton(t), this;
		},
		hideToolbar: function (t) {
			return this.childrenMap.toolbarSizer.hideButton(t), this;
		},
		hideLeftToolbar: function (t) {
			return this.childrenMap.leftToolbarSizer.hideButton(t), this;
		},
		addChoice: function (t) {
			return this.childrenMap.choicesSizer.addButton(t), this;
		},
		addAction: function (t) {
			return this.childrenMap.actionsSizer.addButton(t), this;
		},
		addToolbar: function (t) {
			return this.childrenMap.toolbarSizer.addButton(t), this;
		},
		addLeftToolbar: function (t) {
			return this.childrenMap.leftToolbarSizer.addButton(t), this;
		},
		removeChoice: function (t, e) {
			return this.childrenMap.choicesSizer.removeButton(t, e), this;
		},
		removeAction: function (t, e) {
			return this.childrenMap.actionsSizer.removeButton(t, e), this;
		},
		removeToolbar: function (t, e) {
			return this.childrenMap.toolbarSizer.removeButton(t, e), this;
		},
		removeLeftToolbar: function (t, e) {
			return this.childrenMap.leftToolbarSizer.removeButton(t, e), this;
		},
		clearChoices: function (t) {
			return this.childrenMap.choicesSizer.clearButtons(t), this;
		},
		clearActions: function (t) {
			return this.childrenMap.actionsSizer.clearButtons(t), this;
		},
		clearToolbar: function (t) {
			return this.childrenMap.toolbarSizer.clearButtons(t), this;
		},
		clearLeftToolbar: function (t) {
			return this.childrenMap.leftToolbarSizer.clearButtons(t), this;
		},
		forEachChoice: function (t, e) {
			return this.childrenMap.choicesSizer.forEachButtton(t, e), this;
		},
		forEachAction: function (t, e) {
			return this.childrenMap.actionsSizer.forEachButtton(t, e), this;
		},
		forEachToolbar: function (t, e) {
			return this.childrenMap.toolbarSizer.forEachButtton(t, e), this;
		},
		forEachLeftToolbar: function (t, e) {
			return this.childrenMap.leftToolbarSizer.forEachButtton(t, e), this;
		},
	}),
		u.register('dialog', function (t) {
			var e = new rl(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.Dialog', rl);
	var ol = {
			getButtonsSizer: function (t) {
				return this.childrenMap[''.concat(t, 'ButtonsSizer')];
			},
			getButton: function (t, e) {
				var i = this.getButtonsSizer(t);
				return i ? i.getButton(e) : void 0;
			},
			setButtonEnable: function (t, e, i) {
				return this.getButtonsSizer(t).setButtonEnable(e, i), this;
			},
			setLeftButtonEnable: function (t, e) {
				return this.childrenMap.leftButtonsSizer.setButtonEnable(t, e), this;
			},
			setRightButtonEnable: function (t, e) {
				return this.childrenMap.rightButtonsSizer.setButtonEnable(t, e), this;
			},
			setTopButtonEnable: function (t, e) {
				return this.childrenMap.topButtonsSizer.setButtonEnable(t, e), this;
			},
			setBottomButtonEnable: function (t, e) {
				return this.childrenMap.bottomButtonsSizer.setButtonEnable(t, e), this;
			},
			toggleButtonEnable: function (t, e) {
				return this.getButtonsSizer(t).toggleButtonEnable(e), this;
			},
			toggleLeftButtonEnable: function (t) {
				return this.childrenMap.leftButtonsSizer.toggleButtonEnable(t), this;
			},
			toggleRightButtonEnable: function (t) {
				return this.childrenMap.rightButtonsSizer.toggleButtonEnable(t), this;
			},
			toggleTopButtonEnable: function (t) {
				return this.childrenMap.topButtonsSizer.toggleButtonEnable(t), this;
			},
			toggleBottomButtonEnable: function (t) {
				return this.childrenMap.bottomButtonsSizer.toggleButtonEnable(t), this;
			},
			getButtonEnable: function (t, e) {
				return this.getButtonsSizer(t).getButtonEnable(e);
			},
			getLeftButtonEnable: function (t) {
				return this.childrenMap.leftButtonsSizer.getButtonEnable(t);
			},
			getRightButtonEnable: function (t) {
				return this.childrenMap.rightButtonsSizer.getButtonEnable(t);
			},
			getTopButtonEnable: function (t) {
				return this.childrenMap.topButtonsSizer.getButtonEnable(t);
			},
			getBottomButtonEnable: function (t) {
				return this.childrenMap.bottomButtonsSizer.getButtonEnable(t);
			},
			emitButtonClick: function (t, e) {
				var i = this.getButtonsSizer(t);
				return i && i.emitButtonClick(e), this;
			},
			emitLeftButtonClick: function (t) {
				return this.childrenMap.leftButtonsSizer.emitButtonClick(t), this;
			},
			emitRightButtonClick: function (t) {
				return this.childrenMap.rightButtonsSizer.emitButtonClick(t), this;
			},
			emitTopButtonClick: function (t) {
				return this.childrenMap.topButtonsSizer.emitButtonClick(t), this;
			},
			emitBottomButtonClick: function (t) {
				return this.childrenMap.bottomButtonsSizer.emitButtonClick(t), this;
			},
			getLeftButton: function (t) {
				return this.childrenMap.leftButtonsSizer.getButton(t);
			},
			getRightButton: function (t) {
				return this.childrenMap.rightButtonsSizer.getButton(t);
			},
			getTopButton: function (t) {
				return this.childrenMap.topButtonsSizer.getButton(t);
			},
			getBottomButton: function (t) {
				return this.childrenMap.bottomButtonsSizer.getButton(t);
			},
			showButton: function (t, e) {
				return xr(this.getButton(t, e)), this;
			},
			showLeftButton: function (t) {
				return xr(this.getLeftButton(t)), this;
			},
			showRightButton: function (t) {
				return xr(this.getRightButton(t)), this;
			},
			showTopButton: function (t) {
				return xr(this.getTopButton(t)), this;
			},
			showBottomButton: function (t) {
				return xr(this.getBottomButton(t)), this;
			},
			hideButton: function (t, e) {
				return Cr(this.getButton(t, e)), this;
			},
			hideLeftButton: function (t) {
				return Cr(this.getLeftButton(t)), this;
			},
			hideRightButton: function (t) {
				return Cr(this.getRightButton(t)), this;
			},
			hideTopButton: function (t) {
				return Cr(this.getTopButton(t)), this;
			},
			hideBottomButton: function (t) {
				return Cr(this.getBottomButton(t)), this;
			},
			addButton: function (t, e) {
				return this.getButtonsSizer(t).addButton(e), this;
			},
			addLeftButton: function (t) {
				return this.addButton('left', t), this;
			},
			addRightButton: function (t) {
				return this.addButton('right', t), this;
			},
			addTopButton: function (t) {
				return this.addButton('top', t), this;
			},
			removeButton: function (t, e, i) {
				return this.getButtonsSizer(t).removeButton(e, i), this;
			},
			removeLeftButton: function (t, e) {
				return this.removeButton('left', t, e), this;
			},
			removeRightButton: function (t, e) {
				return this.removeButton('right', t, e), this;
			},
			removeTopButton: function (t, e) {
				return this.removeButton('top', t, e), this;
			},
			removeBottomButton: function (t, e) {
				return this.removeButton('bottom', t, e), this;
			},
			clearButtons: function (t, e) {
				return this.getButtonsSizer(t).clearButtons(e), this;
			},
			clearLeftButtons: function (t) {
				return this.clearButtons('left', t), this;
			},
			clearRightButtons: function (t) {
				return this.clearButtons('right', t), this;
			},
			clearTopButtons: function (t) {
				return this.clearButtons('top', t), this;
			},
			clearBottomButtonss: function (t) {
				return this.clearButtons('bottom', t), this;
			},
			forEachLeftButton: function (t, e) {
				return this.childrenMap.leftButtonsSizer.forEachButtton(t, e), this;
			},
			forEachRightButton: function (t, e) {
				return this.childrenMap.rightButtonsSizer.forEachButtton(t, e), this;
			},
			forEachTopButton: function (t, e) {
				return this.childrenMap.topButtonsSizer.forEachButtton(t, e), this;
			},
			forEachBottomButton: function (t, e) {
				return this.childrenMap.bottomButtonsSizer.forEachButtton(t, e), this;
			},
		},
		hl = Phaser.Utils.Objects.GetValue,
		al = (function () {
			b(M, Vh);
			var T = w(M);
			function M(t, e) {
				var i;
				B(this, M),
					void 0 === e && (e = {}),
					(e.column = 3),
					(e.row = 3),
					((i = T.call(this, t, e)).type = 'rexTabs'),
					(i.eventEmitter = hl(e, 'eventEmitter', E(i)));
				var n,
					s,
					r,
					o,
					h = hl(e, 'background', void 0),
					a = hl(e, 'panel', void 0),
					l = hl(e, 'leftButtons', void 0),
					u = hl(e, 'leftButtonsBackground', void 0),
					c = hl(e, 'rightButtons', void 0),
					d = hl(e, 'rightButtonsBackground', void 0),
					f = hl(e, 'topButtons', void 0),
					v = hl(e, 'topButtonsBackground', void 0),
					p = hl(e, 'bottomButtons', void 0),
					g = hl(e, 'bottomButtonsBackground', void 0),
					y = hl(e, 'click', void 0);
				if (
					(h && i.addBackground(h), a && i.add(a, 1, 1, 'center', 0, !0), l)
				) {
					var k = hl(e, 'space.leftButtonsOffset', 0),
						m = hl(e, 'space.leftButton', 0);
					n = new Ia(t, {
						groupName: 'left',
						background: u,
						buttons: l,
						orientation: 1,
						space: {item: m},
						align: hl(e, 'align.leftButtons', void 0),
						click: y,
						eventEmitter: i.eventEmitter,
					});
					var b = {top: k};
					i.add(n, 0, 1, 'top', b, !1);
				}
				if (c) {
					var x = hl(e, 'space.rightButtonsOffset', 0),
						C = hl(e, 'space.rightButton', 0);
					s = new Ia(t, {
						groupName: 'right',
						background: d,
						buttons: c,
						orientation: 1,
						space: {item: C},
						align: hl(e, 'align.rightButtons', void 0),
						click: y,
						eventEmitter: i.eventEmitter,
					});
					b = {top: x};
					i.add(s, 2, 1, 'top', b, !1);
				}
				if (f) {
					var w = hl(e, 'space.topButtonsOffset', 0),
						S = hl(e, 'space.topButton', 0);
					r = new Ia(t, {
						groupName: 'top',
						background: v,
						buttons: f,
						orientation: 0,
						space: {item: S},
						align: hl(e, 'align.topButtons', void 0),
						click: y,
						eventEmitter: i.eventEmitter,
					});
					b = {left: w};
					i.add(r, 1, 0, 'left', b, !1);
				}
				if (p) {
					var P = hl(e, 'space.bottomButtonsOffset', 0),
						O = hl(e, 'space.bottomButton', 0);
					o = new Ia(t, {
						groupName: 'bottom',
						background: g,
						buttons: p,
						orientation: 0,
						space: {item: O},
						align: hl(e, 'align.bottomButtons', void 0),
						click: y,
						eventEmitter: i.eventEmitter,
					});
					b = {left: P};
					i.add(o, 1, 2, 'left', b, !1);
				}
				return (
					i.addChildrenMap('background', h),
					i.addChildrenMap('panel', a),
					i.addChildrenMap('leftButtons', l),
					i.addChildrenMap('rightButtons', c),
					i.addChildrenMap('topButtons', f),
					i.addChildrenMap('bottomButtons', p),
					i.addChildrenMap('leftButtonsSizer', n),
					i.addChildrenMap('rightButtonsSizer', s),
					i.addChildrenMap('topButtonsSizer', r),
					i.addChildrenMap('bottomButtonsSizer', o),
					i
				);
			}
			return M;
		})();
	Object.assign(al.prototype, ol),
		u.register('tabs', function (t) {
			var e = new al(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.Tabs', al);
	function ll(t, e, i) {
		var n, s, r;
		return (
			t.y === e.y
				? ((n = Math.min(t.x, e.x)),
				  (s = Math.max(t.x, e.x)),
				  (r = fl(i.x, n, s)))
				: t.x === e.x &&
				  ((n = Math.min(t.y, e.y)),
				  (s = Math.max(t.y, e.y)),
				  (r = fl(i.y, n, s))),
			r
		);
	}
	function ul(t, e, i) {
		this.enable &&
			((vl.x = e),
			(vl.y = i),
			(this.value = ll(this.getStartPoint(), this.getEndPoint(), vl)));
	}
	function cl(t) {
		if (this.enable && t.isDown) {
			(pl.x = t.worldX), (pl.y = t.worldY);
			var e = ll(this.getStartPoint(), this.getEndPoint(), pl);
			this.stopEaseValue(),
				0 === this.easeValueDuration || Math.abs(this.value - e) < 0.1
					? (this.value = e)
					: this.easeValueTo(e);
		}
	}
	function dl(t, e) {
		void 0 === e && (e = gl);
		var i = this.childrenMap.thumb,
			n = i.x,
			s = i.y;
		return (
			xs
				.setPosition(this.innerLeft, this.innerTop)
				.setSize(this.innerWidth, this.innerHeight),
			Gs(i, xs, t),
			(e.x = i.x),
			(e.y = i.y),
			(i.x = n),
			(i.y = s),
			e
		);
	}
	var fl = Phaser.Math.Percent,
		vl = {},
		pl = {},
		gl = {},
		yl = Phaser.Display.Align.LEFT_CENTER,
		kl = Phaser.Display.Align.TOP_CENTER,
		ml = {},
		bl = Phaser.Display.Align.RIGHT_CENTER,
		xl = Phaser.Display.Align.BOTTOM_CENTER,
		Cl = {},
		wl = Phaser.Math.Linear,
		Sl = {},
		Pl = Phaser.Display.Align.LEFT_CENTER,
		Ol = Phaser.Display.Align.TOP_CENTER,
		Tl = Phaser.Utils.Objects.GetValue,
		Ml = Phaser.Math.Clamp,
		_l = Phaser.Math.Linear,
		zl = Phaser.Math.Percent,
		Bl = Phaser.Math.Snap.To,
		El = (function () {
			b(c, Mh);
			var u = w(c);
			function c(t, e) {
				var i;
				B(this, c),
					((i = u.call(this, t, e)).type = 'rexSlider'),
					(i.eventEmitter = Tl(e, 'eventEmitter', E(i)));
				var n = Tl(e, 'background', void 0),
					s = Tl(e, 'track', void 0),
					r = Tl(e, 'indicator', void 0),
					o = Tl(e, 'thumb', void 0);
				n && i.addBackground(n),
					s &&
						(1 === i.orientation ? (s.minHeight = 0) : (s.minWidth = 0),
						i.add(s, 1, 'center', 0, !0)),
					r && i.pin(r),
					o && i.pin(o);
				var h = Tl(e, 'input', 0);
				switch (('string' == typeof h && (h = Dl[h]), h)) {
					case 0:
						o &&
							(o.setInteractive(),
							i.scene.input.setDraggable(o),
							o.on('drag', ul, E(i)));
						break;
					case 1:
						i.setInteractive()
							.on('pointerdown', cl, E(i))
							.on('pointermove', cl, E(i));
				}
				i.addChildrenMap('background', n),
					i.addChildrenMap('track', s),
					i.addChildrenMap('indicator', r),
					i.addChildrenMap('thumb', o);
				var a = Tl(e, 'valuechangeCallback', null);
				if (null !== a) {
					var l = Tl(e, 'valuechangeCallbackScope', void 0);
					i.eventEmitter.on('valuechange', a, l);
				}
				return (
					i.setEnable(Tl(e, 'enable', void 0)),
					i.setGap(Tl(e, 'gap', void 0)),
					i.setValue(
						Tl(e, 'value', 0),
						Tl(e, 'min', void 0),
						Tl(e, 'max', void 0)
					),
					i.setEaseValueDuration(Tl(e, 'easeValue.duration', 0)),
					i.setEaseValueFunction(Tl(e, 'easeValue.ease', 'Linear')),
					i
				);
			}
			return (
				m(c, [
					{
						key: 'setEnable',
						value: function (t) {
							return void 0 === t && (t = !0), (this.enable = t), this;
						},
					},
					{
						key: 'setGap',
						value: function (t) {
							return (this.gap = t), this;
						},
					},
					{
						key: 'value',
						get: function () {
							return this._value;
						},
						set: function (t) {
							void 0 !== this.gap && (t = Bl(t, this.gap));
							var e = this._value;
							(this._value = Ml(t, 0, 1)),
								e !== this._value &&
									(this.updateThumb(this._value),
									this.updateIndicator(this._value),
									this.eventEmitter.emit(
										'valuechange',
										this._value,
										e,
										this.eventEmitter
									));
						},
					},
					{
						key: 'setValue',
						value: function (t, e, i) {
							return (
								null == t ||
									(void 0 !== e && (t = zl(t, e, i)), (this.value = t)),
								this
							);
						},
					},
					{
						key: 'addValue',
						value: function (t, e, i) {
							return void 0 !== e && (t = zl(t, e, i)), (this.value += t), this;
						},
					},
					{
						key: 'getValue',
						value: function (t, e) {
							var i = this.value;
							return void 0 !== t && (i = _l(t, e, i)), i;
						},
					},
					{
						key: 'runLayout',
						value: function (t, e, i) {
							return (
								this.ignoreLayout ||
									(C(x(c.prototype), 'runLayout', this).call(this, t, e, i),
									this.updateThumb(),
									this.updateIndicator()),
								this
							);
						},
					},
				]),
				c
			);
		})(),
		Dl = {drag: 0, click: 1, none: -1},
		jl = {
			getStartPoint: function (t) {
				if ((void 0 === t && (t = ml), this.childrenMap.thumb)) {
					var e = 0 === this.orientation ? yl : kl;
					dl.call(this, e, t);
				} else
					0 === this.orientation
						? ((t.x = this.innerLeft + 1), (t.y = this.centerY))
						: ((t.x = this.centerX), (t.y = this.innerTop + 1));
				return t;
			},
			getEndPoint: function (t) {
				if ((void 0 === t && (t = Cl), this.childrenMap.thumb)) {
					var e = 0 === this.orientation ? bl : xl;
					dl.call(this, e, t);
				} else
					0 === this.orientation
						? ((t.x = this.innerRight - 1), (t.y = this.centerY))
						: ((t.x = this.centerX), (t.y = this.innerBottom - 1));
				return t;
			},
			updateThumb: function (t) {
				var e,
					i,
					n,
					s,
					r = this.childrenMap.thumb;
				return (
					void 0 === r ||
						(void 0 === t && (t = this.value),
						(e = t),
						(i = this.getStartPoint()),
						(n = this.getEndPoint()),
						void 0 === (s = r) && (s = Sl),
						(s.x = wl(i.x, n.x, e)),
						(s.y = wl(i.y, n.y, e)),
						this.resetChildPositionState(r)),
					this
				);
			},
			updateIndicator: function (t) {
				var e,
					i,
					n = this.childrenMap.indicator;
				if (void 0 === n) return this;
				void 0 === t && (t = this.value);
				var s = this.childrenMap.thumb;
				if (s)
					if (0 === this.orientation) {
						var r = Cs(s);
						e = s.x - r * s.originX + r - this.left;
					} else {
						var o = ws(s);
						i = s.y - o * s.originY + o - this.top;
					}
				else
					0 === this.orientation ? (e = this.width * t) : (i = this.height * t);
				_r(n, e, i);
				var h = 0 === this.orientation ? Pl : Ol;
				Gs(n, this, h), this.resetChildPositionState(n);
			},
		};
	Object.assign(El.prototype, jl, Io),
		u.register('slider', function (t) {
			var e = new El(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.Slider', El);
	function Rl(t) {
		var e = Yl(t, 'scrollMode', 0);
		return 'string' == typeof e && (e = Ll[e]), e;
	}
	var Ll = {v: 0, vertical: 0, h: 1, horizontal: 1},
		Yl = Phaser.Utils.Objects.GetValue,
		Il = function (t, e, i) {
			if (t && 'number' != typeof t) {
				if (t.hasOwnProperty(e)) return t[e];
				if (-1 === e.indexOf('.')) return i;
				for (var n = e.split('.'), s = t, r = i, o = 0; o < n.length; o++) {
					if (!s.hasOwnProperty(n[o])) {
						r = i;
						break;
					}
					(r = s[n[o]]), (s = s[n[o]]);
				}
				return r;
			}
			return i;
		},
		Al = (function () {
			function o(t) {
				B(this, o);
				var e = Il(t, 'states', void 0);
				e && this.addStates(e);
				var i = Il(t, 'extend', void 0);
				if (i)
					for (var n in i)
						(this.hasOwnProperty(n) && void 0 !== this[n]) || (this[n] = i[n]);
				var s = Il(t, 'eventEmitter', void 0),
					r = Il(t, 'EventEmitterClass', void 0);
				this.setEventEmitter(s, r),
					(this._stateLock = !1),
					this.resetFromJSON(t);
			}
			return (
				m(o, [
					{
						key: 'shutdown',
						value: function () {
							this.destroyEventEmitter();
						},
					},
					{
						key: 'destroy',
						value: function () {
							this.shutdown();
						},
					},
					{
						key: 'resetFromJSON',
						value: function (t) {
							this.setEnable(Il(t, 'enable', !0)),
								this.start(Il(t, 'start', void 0));
							var e = Il(t, 'init', void 0);
							return e && e.call(this), this;
						},
					},
					{
						key: 'toJSON',
						value: function () {
							return {
								curState: this.state,
								prevState: this.prevState,
								enable: this.enable,
								start: this._start,
							};
						},
					},
					{
						key: 'setEnable',
						value: function (t) {
							return void 0 === t && (t = !0), (this.enable = t), this;
						},
					},
					{
						key: 'state',
						get: function () {
							return this._state;
						},
						set: function (t) {
							if (this.enable && !this._stateLock && this._state !== t) {
								if (
									((this._prevState = this._state),
									(this._state = t),
									(this._stateLock = !0),
									this.emit('statechange', this),
									null != this._prevState)
								) {
									var e = 'exit_' + this._prevState,
										i = this[e];
									i && i.call(this), this.emit(e, this);
								}
								if (((this._stateLock = !1), null != this._state)) {
									var n = 'enter_' + this._state,
										s = this[n];
									s && s.call(this), this.emit(n, this);
								}
							}
						},
					},
					{
						key: 'prevState',
						get: function () {
							return this._prevState;
						},
					},
					{
						key: 'start',
						value: function (t) {
							return (
								(this._start = t),
								(this._prevState = void 0),
								(this._state = t),
								this
							);
						},
					},
					{
						key: 'goto',
						value: function (t) {
							return null != t && (this.state = t), this;
						},
					},
					{
						key: 'next',
						value: function () {
							var t,
								e = this['next_' + this.state];
							return (
								e && (t = 'string' == typeof e ? e : e.call(this)),
								this.goto(t),
								this
							);
						},
					},
					{
						key: 'addState',
						value: function (t, e) {
							var i = Il(e, 'next', void 0);
							i && (this['next_' + t] = i);
							var n = Il(e, 'exit', void 0);
							n && (this['exit_' + t] = n);
							var s = Il(e, 'enter', void 0);
							return s && (this['enter_' + t] = s), this;
						},
					},
					{
						key: 'addStates',
						value: function (t) {
							for (var e in t) this.addState(e, t[e]);
							return this;
						},
					},
					{
						key: 'update',
						value: function (t, e, i) {
							void 0 === i && (i = 'update');
							var n = this[i + '_' + this.state];
							n && n.call(this, t, e);
						},
					},
					{
						key: 'preupdate',
						value: function (t, e) {
							this.update(t, e, 'preupdate');
						},
					},
					{
						key: 'postupdate',
						value: function (t, e) {
							this.update(t, e, 'postupdate');
						},
					},
				]),
				o
			);
		})();
	Object.assign(Al.prototype, vr);
	var Fl = (function () {
			b(s, Al);
			var n = w(s);
			function s(t, e) {
				var i;
				return B(this, s), ((i = n.call(this, e)).parent = t), i.init(), i;
			}
			return (
				m(s, [
					{
						key: 'init',
						value: function () {
							this.start('IDLE');
						},
					},
					{
						key: 'next_IDLE',
						value: function () {
							var t,
								e = this.parent;
							return (
								e.dragState.isDown &&
									(t = 0 === e.dragThreshold ? 'DRAG' : 'DRAGBEGIN'),
								t
							);
						},
					},
					{
						key: 'update_IDLE',
						value: function () {
							this.next();
						},
					},
					{
						key: 'next_DRAGBEGIN',
						value: function () {
							var t = this.parent,
								e = t.dragState;
							return e.isDown
								? e.pointer.getDistance() >= t.dragThreshold
									? 'DRAG'
									: 'DRAGBEGIN'
								: 'IDLE';
						},
					},
					{
						key: 'update_DRAGBEGIN',
						value: function () {
							this.next();
						},
					},
					{
						key: 'next_DRAG',
						value: function () {
							var t,
								e = this.parent;
							return (
								e.dragState.isUp &&
									(t = e.outOfBounds
										? 'BACK'
										: e.slidingEnable
										? 'SLIDE'
										: 'IDLE'),
								t
							);
						},
					},
					{
						key: 'update_DRAG',
						value: function () {
							var t = this.parent;
							t.dragState.justMoved && t.dragging(), this.next();
						},
					},
					{
						key: 'next_SLIDE',
						value: function () {
							var t,
								e = this.parent;
							return (
								e.dragState.isDown ? (t = 'DRAG') : e.isSliding || (t = 'IDLE'),
								t
							);
						},
					},
					{
						key: 'enter_SLIDE',
						value: function () {
							this.parent.onSliding();
						},
					},
					{
						key: 'exit_SLIDE',
						value: function () {
							this.parent.stop();
						},
					},
					{
						key: 'update_SLIDE',
						value: function (t, e) {
							this.parent.sliding(t, e), this.next();
						},
					},
					{
						key: 'next_BACK',
						value: function () {
							var t,
								e = this.parent;
							return (
								e.dragState.isDown
									? (t = 'DRAG')
									: e.isPullBack || (t = 'IDLE'),
								t
							);
						},
					},
					{
						key: 'enter_BACK',
						value: function () {
							this.parent.onPullBack();
						},
					},
					{
						key: 'exit_BACK',
						value: function () {
							this.parent.stop();
						},
					},
					{
						key: 'update_BACK',
						value: function (t, e) {
							this.parent.pullBack(t, e), this.next();
						},
					},
				]),
				s
			);
		})(),
		Wl = Phaser.Utils.Objects.GetValue,
		Hl = Phaser.Math.Distance.Between,
		Xl = (function () {
			function i(t, e) {
				B(this, i),
					(this.gameObject = t),
					(this.scene = tr(t)),
					this.setEventEmitter(Wl(e, 'eventEmitter', void 0)),
					(this._enable = void 0),
					t.setInteractive(Wl(e, 'inputConfig', void 0)),
					this.resetFromJSON(e),
					this.boot();
			}
			return (
				m(i, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								(this.pointer = void 0),
								(this.isInTouched = !1),
								(this.holdStartTime = void 0),
								(this.x = void 0),
								(this.y = void 0),
								(this.preX = void 0),
								(this.preY = void 0),
								(this.localX = void 0),
								(this.localY = void 0),
								(this.justMoved = !1),
								this.setEnable(Wl(t, 'enable', !0)),
								(this.holdThreshold = Wl(t, 'holdThreshold', 50)),
								this
							);
						},
					},
					{
						key: 'boot',
						value: function () {
							this.gameObject.on('pointerdown', this.onPointIn, this),
								this.gameObject.on('pointerup', this.onPointOut, this),
								this.gameObject.on('pointerout', this.onPointOut, this),
								this.gameObject.on('pointermove', this.onPointerMove, this),
								this.gameObject.on('destroy', this.destroy, this),
								this.scene.events.on('preupdate', this.preupdate, this);
						},
					},
					{
						key: 'shutdown',
						value: function () {
							this.scene &&
								this.scene.events.off('preupdate', this.preupdate, this),
								(this.pointer = void 0),
								(this.gameObject = void 0),
								(this.scene = void 0),
								this.destroyEventEmitter();
						},
					},
					{
						key: 'destroy',
						value: function () {
							this.shutdown();
						},
					},
					{
						key: 'enable',
						get: function () {
							return this._enable;
						},
						set: function (t) {
							this._enable !== t &&
								(t || ((this.isInTouched = !1), (this.pointer = void 0)),
								(this._enable = t));
						},
					},
					{
						key: 'setEnable',
						value: function (t) {
							return void 0 === t && (t = !0), (this.enable = t), this;
						},
					},
					{
						key: 'toggleEnable',
						value: function () {
							return this.setEnable(!this.enable), this;
						},
					},
					{
						key: 'isDown',
						get: function () {
							return this.pointer && this.pointer.isDown;
						},
					},
					{
						key: 'isUp',
						get: function () {
							return !this.isDown;
						},
					},
					{
						key: 'dx',
						get: function () {
							return this.x - this.preX;
						},
					},
					{
						key: 'dy',
						get: function () {
							return this.y - this.preY;
						},
					},
					{
						key: 'dt',
						get: function () {
							return this.scene.sys.game.loop.delta;
						},
					},
					{
						key: 'speed',
						get: function () {
							return this.x === this.preX && this.y === this.preY
								? 0
								: Hl(this.preX, this.preY, this.x, this.y) / (0.001 * this.dt);
						},
					},
					{
						key: 'speedX',
						get: function () {
							return this.dx / (0.001 * this.dt);
						},
					},
					{
						key: 'speedY',
						get: function () {
							return this.dy / (0.001 * this.dt);
						},
					},
					{
						key: 'onPointIn',
						value: function (t, e, i) {
							this.enable &&
								t.isDown &&
								void 0 === this.pointer &&
								((this.pointer = t), (this.localX = e), (this.localY = i));
						},
					},
					{
						key: 'onPointOut',
						value: function (t) {
							this.enable && this.pointer === t && (this.pointer = void 0);
						},
					},
					{
						key: 'onPointerMove',
						value: function (t, e, i) {
							this.enable &&
								t.isDown &&
								this.pointer === t &&
								((this.localX = e), (this.localY = i));
						},
					},
					{
						key: 'preupdate',
						value: function (t) {
							if (this.enable) {
								var e = this.pointer;
								(this.justMoved = !1),
									e && !this.isInTouched
										? ((this.x = e.x),
										  (this.y = e.y),
										  (this.preX = e.x),
										  (this.preY = e.y),
										  (this.isInTouched = !0),
										  (this.holdStartTime = void 0),
										  this.emit('touchstart', e, this.localX, this.localY))
										: e && this.isInTouched
										? this.x === e.x && this.y === e.y
											? void 0 === this.holdStartTime
												? (this.holdStartTime = t)
												: t - this.holdStartTime > this.holdThreshold &&
												  ((this.preX = this.x), (this.preY = this.y))
											: ((this.preX = this.x),
											  (this.preY = this.y),
											  (this.x = e.x),
											  (this.y = e.y),
											  (this.holdStartTime = void 0),
											  (this.justMoved = !0),
											  this.emit('touchmove', e, this.localX, this.localY))
										: !e &&
										  this.isInTouched &&
										  ((this.isInTouched = !1),
										  (this.holdStartTime = void 0),
										  this.emit('touchend', e));
							}
						},
					},
				]),
				i
			);
		})();
	Object.assign(Xl.prototype, vr);
	var Vl = Phaser.Utils.Objects.GetValue,
		Gl = (function () {
			function e(t) {
				B(this, e), this.resetFromJSON(t);
			}
			return (
				m(e, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								this.setValue(Vl(t, 'value', 0)),
								this.setSpeed(Vl(t, 'speed', 0)),
								this.setAcceleration(Vl(t, 'acceleration', 0)),
								this
							);
						},
					},
					{
						key: 'reset',
						value: function () {
							this.setValue(0), this.setSpeed(0), this.setAcceleration(0);
						},
					},
					{
						key: 'setValue',
						value: function (t) {
							return (this.value = t), this;
						},
					},
					{
						key: 'setSpeed',
						value: function (t) {
							return (this.speed = t), this;
						},
					},
					{
						key: 'setAcceleration',
						value: function (t) {
							return (this.acceleration = t), this;
						},
					},
					{
						key: 'updateSpeed',
						value: function (t) {
							return (
								0 !== this.acceleration &&
									((this.speed += this.acceleration * t),
									this.speed < 0 && (this.speed = 0)),
								this
							);
						},
					},
					{
						key: 'getDeltaValue',
						value: function (t) {
							return this.updateSpeed(t), this.speed <= 0 ? 0 : this.speed * t;
						},
					},
					{
						key: 'update',
						value: function (t) {
							return (
								this.updateSpeed(t),
								0 < this.speed && (this.value += this.getDeltaValue(t)),
								this
							);
						},
					},
					{
						key: 'isMoving',
						get: function () {
							return 0 < this.speed;
						},
					},
				]),
				e
			);
		})(),
		Ul = (function () {
			function t() {
				B(this, t), this.value, this.dir, (this.movement = new Gl());
			}
			return (
				m(t, [
					{
						key: 'init',
						value: function (t, e, i, n, s) {
							return (
								(this.value = t),
								(this.end = s),
								(this.dir = void 0 !== s ? t < s : e),
								this.movement.setSpeed(i).setAcceleration(-n),
								this
							);
						},
					},
					{
						key: 'stop',
						value: function () {
							this.movement.reset();
						},
					},
					{
						key: 'update',
						value: function (t) {
							var e = this.movement.getDeltaValue(t);
							return (
								this.dir || (e = -e),
								void 0 === this.end
									? (this.value += e)
									: 0 === e
									? (this.value = this.end)
									: ((this.value += e),
									  this.dir
											? this.value > this.end && (this.value = this.end)
											: this.value < this.end && (this.value = this.end)),
								this
							);
						},
					},
					{
						key: 'isMoving',
						get: function () {
							return this.movement.isMoving;
						},
					},
				]),
				t
			);
		})(),
		Nl = Phaser.Utils.Objects.GetValue,
		Jl = (function () {
			function h(t, e) {
				B(this, h),
					(this.gameObject = t),
					(this.scene = tr(t)),
					this.setEventEmitter(Nl(e, 'eventEmitter', void 0));
				var i = Nl(e, 'enable', !0),
					n = {enable: i, eventEmitter: !1};
				this._state = new Fl(this, n);
				var s = {
					inputConfig: Nl(e, 'inputConfig', void 0),
					enable: i,
					eventEmitter: !1,
				};
				(this.dragState = new Xl(t, s)),
					(this._enable = void 0),
					(this._value = void 0),
					(this._slowDown = new Ul());
				var r = Nl(e, 'valuechangeCallback', null);
				if (null !== r) {
					var o = Nl(e, 'valuechangeCallbackScope', void 0);
					this.on('valuechange', r, o);
				}
				if (null !== (r = Nl(e, 'overmaxCallback', null))) {
					o = Nl(e, 'overmaxCallbackScope', void 0);
					this.on('overmax', r, o);
				}
				if (null !== (r = Nl(e, 'overminCallback', null))) {
					o = Nl(e, 'overminCallbackScope', void 0);
					this.on('overmin', r, o);
				}
				this.resetFromJSON(e), this.boot();
			}
			return (
				m(h, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							this.setOrientationMode(Nl(t, 'orientation', 0)),
								this.setDragThreshold(Nl(t, 'threshold', 10)),
								this.setSlidingDeceleration(Nl(t, 'slidingDeceleration', 5e3)),
								this.setBackDeceleration(Nl(t, 'backDeceleration', 2e3));
							var e = Nl(t, 'bounds', void 0);
							return (
								e
									? this.setBounds(e)
									: this.setBounds(Nl(t, 'max', 0), Nl(t, 'min', 0)),
								this.setValue(Nl(t, 'value', this.maxValue || 0)),
								this.setEnable(Nl(t, 'enable', !0)),
								this
							);
						},
					},
					{
						key: 'boot',
						value: function () {
							this.scene.events.on('update', this._state.update, this._state),
								this.gameObject.on('destroy', this.destroy, this);
						},
					},
					{
						key: 'shutdown',
						value: function () {
							this.destroyEventEmitter(),
								this.scene &&
									this.scene.events.off(
										'update',
										this._state.update,
										this._state
									),
								(this.gameObject = void 0),
								(this.scene = void 0),
								this._state.destroy(),
								this.dragState.destroy();
						},
					},
					{
						key: 'destroy',
						value: function () {
							this.shutdown();
						},
					},
					{
						key: 'enable',
						get: function () {
							return this._enable;
						},
						set: function (t) {
							if (this._enable !== t)
								return (
									(this._enable = t),
									this._state.setEnable(t),
									this.dragState.setEnable(t),
									this
								);
						},
					},
					{
						key: 'setEnable',
						value: function (t) {
							return void 0 === t && (t = !0), (this.enable = t), this;
						},
					},
					{
						key: 'toggleEnable',
						value: function () {
							return this.setEnable(!this.enable), this;
						},
					},
					{
						key: 'setOrientationMode',
						value: function (t) {
							return (
								'string' == typeof t && (t = Kl[t]),
								(this.orientationMode = t),
								this
							);
						},
					},
					{
						key: 'setDragThreshold',
						value: function (t) {
							return (this.dragThreshold = t), this;
						},
					},
					{
						key: 'setSlidingDeceleration',
						value: function (t) {
							return (this.slidingDeceleration = t), this;
						},
					},
					{
						key: 'setBackDeceleration',
						value: function (t) {
							return (this.backDeceleration = t), this;
						},
					},
					{
						key: 'setBounds',
						value: function (t, e) {
							if (Array.isArray(t)) {
								var i = t;
								(t = i[0]), (e = i[1]);
							}
							return (
								t < e
									? ((this.minValue = t), (this.maxValue = e))
									: ((this.minValue = e), (this.maxValue = t)),
								this
							);
						},
					},
					{
						key: 'value',
						get: function () {
							return this._value;
						},
						set: function (t) {
							if (t !== this._value) {
								var e = this._value,
									i = this.overMax(t),
									n = this.overMin(t);
								i && this.emit('overmax', t, e),
									n && this.emit('overmin', t, e),
									this.backEnable ||
										(i && (t = this.maxValue), n && (t = this.minValue)),
									(this._value = t),
									this.emit('valuechange', t, e);
							}
						},
					},
					{
						key: 'setValue',
						value: function (t) {
							this.value = t;
						},
					},
					{
						key: 'state',
						get: function () {
							return this._state.state;
						},
					},
					{
						key: 'isDragging',
						get: function () {
							return this.dragState.isInTouched;
						},
					},
					{
						key: 'outOfMaxBound',
						get: function () {
							return this.overMax(this.value);
						},
					},
					{
						key: 'outOfMinBound',
						get: function () {
							return this.overMin(this.value);
						},
					},
					{
						key: 'outOfBounds',
						get: function () {
							return this.outOfMinBound || this.outOfMaxBound;
						},
					},
					{
						key: 'overMax',
						value: function (t) {
							return null != this.maxValue && t > this.maxValue;
						},
					},
					{
						key: 'overMin',
						value: function (t) {
							return null != this.minValue && t < this.minValue;
						},
					},
					{
						key: 'backEnable',
						get: function () {
							return 'number' == typeof this.backDeceleration;
						},
					},
					{
						key: 'isPullBack',
						get: function () {
							return this._slowDown.isMoving;
						},
					},
					{
						key: 'slidingEnable',
						get: function () {
							return 'number' == typeof this.slidingDeceleration;
						},
					},
					{
						key: 'isSliding',
						get: function () {
							return this._slowDown.isMoving;
						},
					},
					{
						key: 'dragDelta',
						get: function () {
							return 0 === this.orientationMode
								? this.dragState.dy
								: 1 === this.orientationMode
								? this.dragState.dx
								: 0;
						},
					},
					{
						key: 'dragSpeed',
						get: function () {
							return 0 === this.orientationMode
								? this.dragState.speedY
								: 1 === this.orientationMode
								? this.dragState.speedX
								: 0;
						},
					},
					{
						key: 'dragging',
						value: function () {
							this.value += this.dragDelta;
						},
					},
					{
						key: 'onSliding',
						value: function () {
							var t = this.value,
								e = this.dragSpeed;
							if (0 === e)
								return this._slowDown.stop(), void this._state.next();
							var i = this.slidingDeceleration;
							this._slowDown.init(t, 0 < e, Math.abs(e), i);
						},
					},
					{
						key: 'sliding',
						value: function (t, e) {
							e *= 0.001;
							var i = this._slowDown.update(e).value;
							this.overMax(i)
								? ((this.value = this.maxValue), this._slowDown.stop())
								: this.overMin(i)
								? ((this.value = this.minValue), this._slowDown.stop())
								: (this.value = i);
						},
					},
					{
						key: 'onPullBack',
						value: function () {
							var t = this.value,
								e = this.outOfMinBound ? this.minValue : this.maxValue,
								i = Math.abs(e - t),
								n = this.backDeceleration,
								s = Math.sqrt(2 * n * i);
							this._slowDown.init(t, void 0, s, n, e);
						},
					},
					{
						key: 'pullBack',
						value: function (t, e) {
							(e *= 0.001),
								(this.value = this._slowDown.update(e).value),
								this._slowDown.isMoving || this._state.next();
						},
					},
					{
						key: 'stop',
						value: function () {
							this._slowDown.stop();
						},
					},
				]),
				h
			);
		})();
	Object.assign(Jl.prototype, vr);
	var Kl = {y: 0, v: 0, vertical: 0, x: 1, h: 1, horizontal: 1},
		Zl = Phaser.Utils.Objects.GetValue,
		ql = {right: 0, left: 1, bottom: 0, top: 1},
		$l = Phaser.Utils.Objects.GetValue,
		Ql = (function () {
			b(v, Mh);
			var f = w(v);
			function v(t, e) {
				var i;
				B(this, v), void 0 === e && (e = {});
				var n = Rl(e);
				(e.orientation = 0 === n ? 1 : 0),
					((i = f.call(this, t, e)).type = $l(e, 'type', 'rexScrollable'));
				var s = $l(e, 'background', void 0),
					r = function (t) {
						var e,
							i,
							n,
							s = this.scene,
							r = Rl(t),
							o = new Mh(s, {orientation: r}),
							h = Zl(t, 'child.gameObject', void 0),
							a = Zl(t, 'slider', void 0),
							l = Zl(t, 'scroller', !0);
						if (h) {
							var u,
								c = Zl(t, 'space.child', 0);
							if (((this.childPadding = {}), 'number' != typeof c)) {
								var d = c;
								0 === r
									? ((c = Zl(d, 'right', 0)),
									  (this.childPadding.top = Zl(d, 'top', 0)),
									  (this.childPadding.bottom = Zl(d, 'bottom', 0)))
									: ((c = Zl(d, 'bottom', 0)),
									  (this.childPadding.top = Zl(d, 'left', 0)),
									  (this.childPadding.bottom = Zl(d, 'right', 0)));
							} else
								(this.childPadding.top = 0), (this.childPadding.bottom = 0);
							if (a)
								!0 === a && (a = {}),
									'string' == typeof (i = Zl(a, 'position', 0)) && (i = ql[i]),
									(u =
										0 === r
											? 0 === i
												? {left: c}
												: {right: c}
											: 0 === i
											? {top: c}
											: {bottom: c}),
									(a.orientation = 0 === o.orientation ? 1 : 0),
									(e = new El(s, a));
							l &&
								(!0 === l && (l = {}), (l.orientation = r), (n = new Jl(h, l))),
								e && 1 === i && o.add(e, 0, 'center', u, !0);
							var f = Zl(t, 'child.proportion', 1),
								v = Zl(t, 'child.expand', !0);
							o.add(h, f, 'center', 0, v),
								e && 0 === i && o.add(e, 0, 'center', u, !0);
						}
						return (
							e &&
								e.on(
									'valuechange',
									function (t) {
										(this.t = t), this.emit('scroll', this);
									},
									this
								),
							n &&
								n.on(
									'valuechange',
									function (t) {
										(this.childOY = t), this.emit('scroll', this);
									},
									this
								),
							this.addChildrenMap('child', h),
							this.addChildrenMap('slider', e),
							this.addChildrenMap('scroller', n),
							o
						);
					}.call(E(i), e),
					o = $l(e, 'header', void 0),
					h = $l(e, 'footer', void 0);
				if ((s && i.addBackground(s), o)) {
					var a = $l(e, 'align.header', 'center'),
						l = $l(e, 'space.header', 0);
					c = 0 === n ? {bottom: l} : {right: l};
					var u = $l(e, 'expand.header', !0);
					i.add(o, 0, a, c, u);
				}
				if ((r && i.add(r, 1, 'center', 0, !0), h)) {
					a = $l(e, 'align.footer', 'center');
					var c,
						d = $l(e, 'space.footer', 0);
					c = 0 === n ? {top: d} : {left: d};
					u = $l(e, 'expand.footer', !0);
					i.add(h, 0, a, c, u);
				}
				return (
					i.addChildrenMap('background', s),
					i.addChildrenMap('header', o),
					i.addChildrenMap('footer', h),
					i
				);
			}
			return (
				m(v, [
					{
						key: 'runLayout',
						value: function (t, e, i) {
							return (
								this.ignoreLayout ||
									(C(x(v.prototype), 'runLayout', this).call(this, t, e, i),
									this.resizeController()),
								this
							);
						},
					},
					{
						key: 't',
						get: function () {
							var t = this.childrenMap.child.t,
								e = this.childPadding;
							if (0 !== e.top || 0 !== e.bottom) {
								var i = this.childrenMap.child,
									n = i.topChildOY - i.bottomChildOY,
									s = n + e.top + e.bottom;
								t = (n * t + e.top) / s;
							}
							return t;
						},
						set: function (t) {
							var e = this.childPadding;
							if (0 !== e.top || 0 !== e.bottom) {
								var i = this.childrenMap.child,
									n = i.topChildOY - i.bottomChildOY;
								t = ((n + e.top + e.bottom) * t - e.top) / n;
							}
							(this.childrenMap.child.t = t), this.updateController();
						},
					},
					{
						key: 'childOY',
						get: function () {
							return this.childrenMap.child.childOY;
						},
						set: function (t) {
							(this.childrenMap.child.childOY = t), this.updateController();
						},
					},
					{
						key: 'topChildOY',
						get: function () {
							return this.childrenMap.child.topChildOY + this.childPadding.top;
						},
					},
					{
						key: 'bottomChildOY',
						get: function () {
							return (
								this.childrenMap.child.bottomChildOY - this.childPadding.bottom
							);
						},
					},
					{
						key: 'setChildOY',
						value: function (t) {
							return (this.childOY = t), this;
						},
					},
					{
						key: 'setT',
						value: function (t) {
							return (this.t = t), this;
						},
					},
					{
						key: 'scrollToTop',
						value: function () {
							return (this.t = 0), this;
						},
					},
					{
						key: 'scrollToBottom',
						value: function () {
							return (this.t = 1), this;
						},
					},
					{
						key: 'sliderEnable',
						get: function () {
							var t = this.childrenMap.slider;
							if (t) return t.enable;
						},
						set: function (t) {
							var e = this.childrenMap.slider;
							e && e.setEnable(t);
						},
					},
					{
						key: 'setSliderEnable',
						value: function (t) {
							return void 0 === t && (t = !0), (this.sliderEnable = t), this;
						},
					},
					{
						key: 'scrollerEnable',
						get: function () {
							var t = this.childrenMap.scroller;
							if (t) return t.enable;
						},
						set: function (t) {
							var e = this.childrenMap.scroller;
							e && e.setEnable(t);
						},
					},
					{
						key: 'setScrollerEnable',
						value: function (t) {
							return void 0 === t && (t = !0), (this.scrollerEnable = t), this;
						},
					},
				]),
				v
			);
		})(),
		tu = {
			resizeController: function () {
				var t = this.topChildOY,
					e = this.bottomChildOY,
					i = this.childrenMap.scroller,
					n = this.childrenMap.slider;
				return (
					i && i.setBounds(e, t),
					n && n.setEnable(e !== t),
					this.updateController(),
					this
				);
			},
			updateController: function () {
				var t = this.childrenMap.scroller,
					e = this.childrenMap.slider;
				t && t.setValue(this.childOY), e && e.setValue(this.t);
			},
		};
	Object.assign(Ql.prototype, tu);
	var eu = {
			enableData: function () {
				return void 0 === this.data && (this.data = {}), this;
			},
			getData: function (t, e) {
				return (
					this.enableData(), void 0 === t ? this.data : Il(this.data, t, e)
				);
			},
			setData: function (t, e) {
				return this.enableData(), (this.data[t] = e), this;
			},
			incData: function (t, e, i) {
				return (
					void 0 === i && (i = 0),
					this.enableData(),
					this.setData(t, this.getData(t, i) + e),
					this
				);
			},
			mulData: function (t, e, i) {
				return (
					void 0 === i && (i = 0),
					this.enableData(),
					this.setData(t, this.getData(t, i) * e),
					this
				);
			},
			clearData: function () {
				return this.data && vt(this.data), this;
			},
			resetData: function (t) {
				if ((this.clearData(), t))
					for (var e in (this.enableData(), t)) this.data[e] = t[e];
				return this;
			},
			cloneData: function () {
				return this.data ? pt(this.data) : {};
			},
		},
		iu = (function () {
			function i(t, e) {
				B(this, i),
					(this.container = null),
					(this._deltaHeight = 0),
					this.setParent(t);
			}
			return (
				m(i, [
					{
						key: 'setParent',
						value: function (t) {
							(this.parent = t),
								(this.parentContainer = t.getParentContainer());
						},
					},
					{
						key: 'destroy',
						value: function (t) {
							void 0 === t && (t = !1),
								t || this.destroyContainer(),
								(this.deltaHeight = 0),
								(this.data = void 0),
								(this.container = null),
								(this.parent = void 0),
								(this.parentContainer = void 0);
						},
					},
					{
						key: 'table',
						get: function () {
							return this.parent;
						},
					},
					{
						key: 'scrollMode',
						get: function () {
							return this.parentContainer.scrollMode;
						},
					},
					{
						key: 'colIndx',
						get: function () {
							return this.parent.cellIndxeToColIndex(this.index);
						},
					},
					{
						key: 'rowIndx',
						get: function () {
							return this.parent.cellIndxeToRowIndex(this.index);
						},
					},
					{
						key: 'getContainer',
						value: function () {
							return this.container;
						},
					},
					{
						key: 'setContainer',
						value: function (t) {
							return (
								t
									? (this.container && this.container.destroy(),
									  (this.container = t),
									  this.parentContainer.add(t))
									: this.destroyContainer(),
								this
							);
						},
					},
					{
						key: 'destroyContainer',
						value: function () {
							return (
								this.container &&
									(this.container.destroy(), (this.container = null)),
								this
							);
						},
					},
					{
						key: 'popContainer',
						value: function () {
							if (this.container) {
								var t = this.container;
								return (
									(this.container = null), this.parentContainer.remove(t), t
								);
							}
							return null;
						},
					},
					{
						key: 'setXY',
						value: function (t, e) {
							return (
								this.container &&
									this.parentContainer.setChildLocalPosition(
										this.container,
										t,
										e
									),
								this
							);
						},
					},
					{
						key: 'deltaHeight',
						get: function () {
							return this._deltaHeight;
						},
						set: function (t) {
							null == t && (t = 0);
							var e = this.parent;
							0 === this._deltaHeight && 0 !== t
								? e.nonZeroDeltaHeightCount++
								: 0 !== this._deltaHeight &&
								  0 === t &&
								  e.nonZeroDeltaHeightCount--;
							var i = this._deltaHeight !== t;
							if (((this._deltaHeight = t), i)) {
								var n =
									0 === this.scrollMode
										? 'cellheightchange'
										: 'cellwidthchange';
								this.parentContainer.emit(n);
							}
						},
					},
					{
						key: 'deltaWidth',
						get: function () {
							return this.deltaHeight;
						},
						set: function (t) {
							this.deltaHeight = t;
						},
					},
					{
						key: 'setDeltaHeight',
						value: function (t) {
							return (this.deltaHeight = t), this;
						},
					},
					{
						key: 'setDeltaWidth',
						value: function (t) {
							return (this.deltaHeight = t), this;
						},
					},
					{
						key: 'height',
						get: function () {
							return 0 === this.scrollMode
								? this.deltaHeight + this.parent.defaultCellHeight
								: this.parent.defaultCellWidth;
						},
						set: function (t) {
							1 !== this.scrollMode &&
								this.setDeltaHeight(t - this.parent.defaultCellHeight);
						},
					},
					{
						key: 'setHeight',
						value: function (t) {
							return (this.height = t), this;
						},
					},
					{
						key: 'width',
						get: function () {
							return 0 === this.scrollMode
								? this.parent.defaultCellWidth
								: this.deltaHeight + this.parent.defaultCellHeight;
						},
						set: function (t) {
							0 !== this.scrollMode &&
								this.setDeltaHeight(t - this.parent.defaultCellHeight);
						},
					},
					{
						key: 'setWidth',
						value: function (t) {
							return (this.width = t), this;
						},
					},
					{
						key: 'scene',
						get: function () {
							return this.parentContainer.scene;
						},
					},
				]),
				i
			);
		})();
	Object.assign(iu.prototype, eu);
	function nu(t) {
		return t.hasOwnProperty('geometryMask') ? t.geometryMask : t.bitmapMask;
	}
	function su(t, e, i) {
		if (e) {
			void 0 === i && (i = t.getAllChildren());
			for (
				var n, s, r = t.getBounds(), o = nu(e), h = 0, a = i.length;
				h < a;
				h++
			)
				if (
					!(n = i[h]).hasOwnProperty('isRexContainerLite') &&
					n !== o &&
					vu(n)
				)
					if (n.getBounds)
						switch (((s = n.getBounds(s)), pu(r, s))) {
							case 4:
								gu(t, n);
								break;
							case 0:
								du(r, s) || fu(r, s) ? yu(t, n, e) : ku(t, n);
								break;
							default:
								yu(t, n, e);
						}
					else yu(t, n, e);
		}
	}
	function ru(t) {
		if ((this.emit('cellinvisible', t), this.cellContainersPool)) {
			var e = t.popContainer();
			e && this.cellContainersPool.killAndHide(e);
		}
		t.destroyContainer();
	}
	function ou() {
		var t = this.preVisibleCells,
			e = this.visibleCells;
		t.iterate(function (t) {
			e.contains(t) || ru.call(this, t);
		}, this);
	}
	function hu(t) {
		var e,
			i = null;
		(e = t.getContainer())
			? ((i = e), t.popContainer())
			: this.cellContainersPool &&
			  null !== (i = this.cellContainersPool.getFirstDead()) &&
			  i.setActive(!0).setVisible(!0),
			this.emit('cellvisible', t, i, this),
			this.cellContainersPool &&
				((e = t.getContainer())
					? null === i
						? this.cellContainersPool.add(e)
						: i !== e &&
						  (this.cellContainersPool.add(e),
						  this.cellContainersPool.killAndHide(i))
					: null !== i && this.cellContainersPool.killAndHide(i));
	}
	function au(t, e) {
		(e -= this.y + this.topLeftY), (t -= this.x + this.topLeftX);
		var i = this.tableOY - (0 === this.scrollMode ? e : t),
			n = this.tableOX - (0 === this.scrollMode ? t : e),
			s = this.table,
			r = s.heightToRowIndex(-i),
			o = s.widthToColIndex(-n),
			h = s.colRowToCellIndex(o, r);
		return null !== h && this.isCellVisible(h) ? h : null;
	}
	var lu = Phaser.Utils.Objects.GetValue,
		uu = Phaser.Utils.Array.SpliceOne,
		cu = (function () {
			function i(t, e) {
				B(this, i),
					(this.parent = t),
					(this.cells = []),
					(this.cellPool = new jt()),
					this.resetFromJSON(e);
			}
			return (
				m(i, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								(this.colCount = void 0),
								(this._nonZeroDeltaHeightCount = 0),
								this.resetTotalRowsHeight(),
								this.setDefaultCellHeight(lu(t, 'cellHeight', 30)),
								this.setDefaultCellWidth(lu(t, 'cellWidth', 30)),
								this.initCells(lu(t, 'cellsCount', 0)),
								this.setColumnCount(lu(t, 'columns', 1)),
								this
							);
						},
					},
					{
						key: 'destroy',
						value: function (t) {
							for (var e = 0, i = this.cells.length; e < i; e++)
								this.freeCell(this.cells[e], t);
							this.cellPool.destroy(),
								(this.cells = void 0),
								(this.parent = void 0);
						},
					},
					{
						key: 'nonZeroDeltaHeightCount',
						get: function () {
							return this._nonZeroDeltaHeightCount;
						},
						set: function (t) {
							this._nonZeroDeltaHeightCount !== t &&
								((this._nonZeroDeltaHeightCount = t),
								this.resetTotalRowsHeight());
						},
					},
					{
						key: 'defaultCellHeightMode',
						get: function () {
							return 0 === this.nonZeroDeltaHeightCount;
						},
					},
					{
						key: 'setDefaultCellHeight',
						value: function (t) {
							return (this.defaultCellHeight = t), this;
						},
					},
					{
						key: 'setDefaultCellWidth',
						value: function (t) {
							return (this.defaultCellWidth = t), this;
						},
					},
					{
						key: 'initCells',
						value: function (t) {
							var e = this.cells;
							e.length = t;
							for (var i = 0; i < t; i++) e[i] = null;
							return this;
						},
					},
					{
						key: 'insertNewCells',
						value: function (t, e) {
							var i = this.cells;
							if (t === i.length) {
								var n = t + e;
								i.legth = n;
								for (var s = t; s < n; s++) i[s] = null;
							} else {
								var r,
									o = [];
								o.length = e;
								for (s = 0; s < e; s++) o[s] = null;
								(r = this.cells).splice.apply(r, [t, 0].concat(o));
							}
							return this.resetTotalRowsHeight(), this;
						},
					},
					{
						key: 'removeCells',
						value: function (t, e) {
							for (var i = t + e, n = t; n < i; n++) this.freeCell(n);
							return (
								i === this.cells.length
									? (this.cells.length = t)
									: (1 === e ? uu(this.cells, t) : this.cells.splice(t, e),
									  this.buildCellIndex(t)),
								this.resetTotalRowsHeight(),
								this
							);
						},
					},
					{
						key: 'setColumnCount',
						value: function (t) {
							return (this.colCount = t), this.resetTotalRowsHeight(), this;
						},
					},
					{
						key: 'rowCount',
						get: function () {
							return Math.ceil(this.cells.length / this.colCount);
						},
					},
					{
						key: 'cellsCount',
						get: function () {
							return this.cells.length;
						},
					},
					{
						key: 'isValidCellIdx',
						value: function (t) {
							return 0 <= t && t < this.cells.length;
						},
					},
					{
						key: 'heightToRowIndex',
						value: function (t, e) {
							if (this.defaultCellHeightMode) {
								var i = t / this.defaultCellHeight;
								return (i = e ? Math.ceil(i) : Math.floor(i));
							}
							var n,
								s = this.rowCount,
								r = t;
							for (i = 0; ; ) {
								if (
									((n = 0 <= i && i < s),
									!(0 < (r -= this.getRowHeight(i)) && n))
								) {
									if (0 === r) return i;
									if (e) {
										var o = i;
										(n = 0 <= (i += 1) && i < s) || (i = o);
									}
									return i;
								}
								i += 1;
							}
						},
					},
					{
						key: 'widthToColIndex',
						value: function (t, e) {
							var i = t / this.defaultCellWidth;
							return (i = e ? Math.ceil(i) : Math.floor(i));
						},
					},
					{
						key: 'colRowToCellIndex',
						value: function (t, e) {
							return t >= this.colCount ? null : e * this.colCount + t;
						},
					},
					{
						key: 'rowIndexToHeight',
						value: function (t, e) {
							if (this.defaultCellHeightMode)
								return (e - t + 1) * this.defaultCellHeight;
							for (var i = 0, n = t; n <= e; n++) i += this.getRowHeight(n);
							return i;
						},
					},
					{
						key: 'colIndexToWidth',
						value: function (t, e) {
							return (e - t + 1) * this.defaultCellWidth;
						},
					},
					{
						key: 'getRowHeight',
						value: function (t) {
							var e = this.colCount;
							if (e <= 1)
								return this.getCellHeight(this.colRowToCellIndex(0, t));
							for (var i, n = 0, s = 0; s < e; s++)
								n < (i = this.getCellHeight(this.colRowToCellIndex(s, t))) &&
									(n = i);
							return n;
						},
					},
					{
						key: 'getColWidth',
						value: function () {
							return this.defaultCellWidth;
						},
					},
					{
						key: 'getCellHeight',
						value: function (t) {
							if (!this.isValidCellIdx(t)) return 0;
							var e;
							if (this.defaultCellHeightMode) e = this.defaultCellHeight;
							else {
								var i = this.getCell(t, !1),
									n = i ? i.deltaHeight : 0;
								e = this.defaultCellHeight + n;
							}
							return e;
						},
					},
					{
						key: 'resetTotalRowsHeight',
						value: function () {
							this._totalRowsHeight = null;
						},
					},
					{
						key: 'totalRowsHeight',
						get: function () {
							return (
								null === this._totalRowsHeight &&
									(this._totalRowsHeight = this.rowIndexToHeight(
										0,
										this.rowCount - 1
									)),
								this._totalRowsHeight
							);
						},
					},
					{
						key: 'totalColumnWidth',
						get: function () {
							return this.colCount * this.defaultCellWidth;
						},
					},
					{
						key: 'cellIndxeToColIndex',
						value: function (t) {
							return t % this.colCount;
						},
					},
					{
						key: 'cellIndxeToRowIndex',
						value: function (t) {
							return Math.floor(t / this.colCount);
						},
					},
					{
						key: 'getCell',
						value: function (t, e) {
							if (!this.isValidCellIdx(t)) return null;
							if ((void 0 === e && (e = !0), null === this.cells[t] && e)) {
								var i = this.newCell(t);
								this.cells[t] = i;
							}
							return this.cells[t];
						},
					},
					{
						key: 'newCell',
						value: function (t) {
							var e = this.cellPool.pop();
							return (
								null === e ? (e = new iu(this)) : e.setParent(this),
								(e.index = t),
								e
							);
						},
					},
					{
						key: 'buildCellIndex',
						value: function (t) {
							void 0 === t && (t = 0);
							for (var e, i = this.cells, n = t, s = i.length; n < s; n++)
								(e = i[n]) && (e.index = n);
							return this;
						},
					},
					{
						key: 'getParentContainer',
						value: function () {
							return this.parent;
						},
					},
					{
						key: 'freeCell',
						value: function (t, e) {
							return (
								'number' == typeof t && (t = this.cells[t]),
								t && (t.destroy(e), e || this.cellPool.push(t)),
								this
							);
						},
					},
				]),
				i
			);
		})(),
		du = Phaser.Geom.Intersects.RectangleToRectangle,
		fu = Phaser.Geom.Rectangle.Overlaps,
		vu = function (t) {
			for (;;) {
				var e = t.rexContainer;
				if (e) {
					if (e.visible) {
						var i = e.parent;
						if (i) {
							t = i;
							continue;
						}
						return !0;
					}
					return !1;
				}
				return t.visible;
			}
		},
		pu = function (t, e) {
			var i = 0,
				n = e.top,
				s = e.bottom,
				r = e.left,
				o = e.right;
			return (
				(i += t.contains(r, n) ? 1 : 0),
				(i += t.contains(r, s) ? 1 : 0),
				(i += t.contains(o, n) ? 1 : 0),
				(i += t.contains(o, s) ? 1 : 0)
			);
		},
		gu = function (t, e) {
			t.setChildMaskVisible(e, !0), e.clearMask && e.clearMask();
		},
		yu = function (t, e, i) {
			t.setChildMaskVisible(e, !0), e.setMask && e.setMask(i);
		},
		ku = function (t, e) {
			t.setChildMaskVisible(e, !1), e.clearMask && e.clearMask();
		},
		mu = function (t) {
			var e = 0 === this.scrollMode ? this.topLeftX : this.topLeftY;
			return this.tableOX + this.table.colIndexToWidth(0, t - 1) + e;
		},
		bu = function (t) {
			var e = 0 === this.scrollMode ? this.topLeftY : this.topLeftX;
			return this.tableOY + this.table.rowIndexToHeight(0, t - 1) + e;
		},
		xu = function () {
			var t = this.preVisibleCells;
			(this.preVisibleCells = this.visibleCells),
				(this.visibleCells = t),
				this.visibleCells.clear();
		},
		Cu = Phaser.Math.Clamp,
		wu = {
			setTableOY: function (t) {
				var e = this.table,
					i = this.topTableOY,
					n = this.bottomTableOY,
					s = t > this.topTableOY,
					r = t < this.bottomTableOY;
				this.clampTableOXY &&
					(e.rowCount < e.heightToRowIndex(this.instHeight, !0)
						? (t = 0)
						: s
						? (t = i)
						: r && (t = n));
				return (
					this._tableOY !== t && (this._tableOY = t),
					s && (this.execeedTopState || this.emit('execeedtop', this, t, i)),
					(this.execeedTopState = s),
					r &&
						(this.execeedBottomState || this.emit('execeedbottom', this, t, n)),
					(this.execeedBottomState = r),
					this
				);
			},
			setTableOX: function (t) {
				var e = this.table,
					i = this.leftTableOX,
					n = this.rightTableOX,
					s = t > this.leftTableOX,
					r = t < this.rightTableOX;
				this.clampTableOXY &&
					(e.colCount < e.widthToColIndex(this.instWidth, !0)
						? (t = 0)
						: s
						? (t = i)
						: r && (t = n));
				return (
					this._tableOX !== t && (this._tableOX = t),
					s && (this.execeedLeftState || this.emit('execeedleft', this, t, i)),
					(this.execeedLeftState = s),
					r &&
						(this.execeedRightState || this.emit('execeedright', this, t, n)),
					(this.execeedRightState = r),
					this
				);
			},
			maskCells: function () {
				if (!this.cellsMask) return this;
				if (!this.maskCellsFlag) return this;
				if (0 === this.alpha || !this.visible) return this;
				for (
					var t, e = [], i = this.visibleCells.entries, n = 0, s = i.length;
					n < s;
					n++
				)
					(t = i[n].getContainer()) &&
						(t.hasOwnProperty('isRexContainerLite')
							? t.getAllChildren(e)
							: e.push(t));
				return (
					su(this, this.cellsMask, e),
					0 === this.maskUpdateMode && (this.maskCellsFlag = !1),
					this
				);
			},
			updateTable: function (t) {
				return (
					void 0 === t && (t = !1),
					t && (xu.call(this), ou.call(this)),
					xu.call(this),
					function () {
						if (0 !== this.cellsCount) {
							var t = this.table,
								e = t.heightToRowIndex(-this.tableOY);
							e <= 0 && (e = 0);
							var i = e,
								n = t.widthToColIndex(-this.tableOX);
							n <= 0 && (n = 0);
							for (
								var s = n,
									r = t.colRowToCellIndex(s, i),
									o = this.bottomBound,
									h = this.rightBound,
									a = t.cellsCount - 1,
									l = t.colCount - 1,
									u = mu.call(this, s),
									c = u,
									d = bu.call(this, i);
								d < o && r <= a;

							) {
								if (this.table.isValidCellIdx(r)) {
									var f = t.getCell(r, !0);
									this.visibleCells.set(f),
										this.preVisibleCells.contains(f) || hu.call(this, f),
										0 === this.scrollMode ? f.setXY(c, d) : f.setXY(d, c);
								}
								c < h && s < l
									? ((c += t.getColWidth(s)), (s += 1))
									: ((c = u), (d += t.getRowHeight(i)), (s = n), (i += 1)),
									(r = t.colRowToCellIndex(s, i));
							}
						}
					}.call(this),
					ou.call(this),
					(this.maskCellsFlag = !0),
					this
				);
			},
			isCellVisible: function (t) {
				var e = this.table.getCell(t, !1);
				return e && this.visibleCells.contains(e);
			},
			pointToCellIndex: au,
			pointToCellContainer: function (t, e) {
				var i = au.call(this, t, e);
				if (null !== i) return this.getCellContainer(i);
			},
			eachVisibleCell: function (t, e) {
				return this.visibleCells.each(t, e), this;
			},
			iterateVisibleCell: function (t, e) {
				return this.visibleCells.iterate(t, e), this;
			},
			eachCell: function (t, e) {
				return this.table.cells.slice().forEach(t, e), this;
			},
			iterateCell: function (t, e) {
				return this.table.cells.forEach(t, e), this;
			},
			setCellsCount: function (t) {
				var e = this.cellsCount;
				return (
					e === t ||
						(t < e
							? this.removeCells(t, e - t)
							: this.insertNewCells(e, t - e)),
					this
				);
			},
			insertNewCells: function (t, e) {
				return (
					'object' === v(t) && (t = t.index),
					void 0 === e && (e = 1),
					e <= 0 ||
						((t = Cu(t, 0, this.cellsCount)), this.table.insertNewCells(t, e)),
					this
				);
			},
			removeCells: function (t, e) {
				if (
					('object' === v(t) && (t = t.index),
					void 0 === e && (e = 1),
					t < 0 && ((e += t), (t = 0)),
					e <= 0)
				)
					return this;
				if (t > this.cellsCount) return this;
				for (var i, n = t, s = t + e; n < s; n++)
					(i = this.getCell(n, !1)) &&
						(this.visibleCells.contains(i) &&
							(ru.call(this, i), this.visibleCells.delete(i)),
						this.preVisibleCells.delete(i));
				return this.table.removeCells(t, e), this;
			},
			setColumnCount: function (t) {
				return this.table.colCount === t || this.table.setColumnCount(t), this;
			},
			setGridSize: function (t, e) {
				return this.setCellsCount(t * e), this.table.setColumnCount(t), this;
			},
			updateVisibleCell: function (t) {
				var e = this.table.getCell(t, !1);
				return e && e.container && hu.call(this, e), this;
			},
		},
		Su = Phaser.GameObjects.Group,
		Pu = Phaser.GameObjects.Components,
		Ou = Phaser.Structs.Set,
		Tu = Phaser.Utils.Objects.GetValue,
		Mu = (function () {
			b(f, Vi);
			var d = w(f);
			function f(t, e, i, n, s, r) {
				var o;
				B(this, f),
					void 0 === r && (r = {}),
					((o = d.call(this, t, e, i, n, s)).type = 'rexGridTable'),
					(o._tableOX = 0),
					(o._tableOY = 0),
					(o.visibleCells = new Ou()),
					(o.preVisibleCells = new Ou()),
					(o.execeedTopState = !1),
					(o.execeedBottomState = !1),
					(o.execeedLeftState = !1),
					(o.execeedRightState = !1),
					Tu(r, 'reuseCellContainer', !1) && (o.cellContainersPool = new Su(t));
				var h = Tu(r, 'cellVisibleCallback', null);
				if (null !== h) {
					var a = Tu(r, 'cellVisibleCallbackScope', void 0);
					o.on('cellvisible', h, a);
				}
				if (null !== (h = Tu(r, 'cellInvisibleCallback', null))) {
					a = Tu(r, 'cellInvisibleCallbackScope', void 0);
					o.on('cellinvisible', h, a);
				}
				if (
					(o.setCellsMask(Tu(r, 'mask', !0)),
					o.setScrollMode(Tu(r, 'scrollMode', 0)),
					o.setClampMode(Tu(r, 'clamplTableOXY', !0)),
					0 === o.scrollMode)
				) {
					var l = Tu(r, 'cellWidth', void 0);
					if (((o.expandCellSize = void 0 === l), void 0 === l)) {
						var u = Tu(r, 'columns', 1);
						r.cellWidth = o.width / u;
					}
				} else {
					l = Tu(r, 'cellHeight', void 0);
					var c = Tu(r, 'cellWidth', void 0);
					(o.expandCellSize = void 0 === l),
						(r.cellWidth = l),
						(r.cellHeight = c);
				}
				return (o.table = new cu(E(o), r)), o.updateTable(), o;
			}
			return (
				m(f, [
					{
						key: 'destroy',
						value: function (t) {
							this.scene &&
								(this.cellsMask &&
									this.scene.game.events.off('poststep', this.maskCells, this),
								this.table.destroy(t),
								(this.table = void 0),
								this.cellContainersPool &&
									(this.cellContainersPool.destroy(!0),
									(this.cellContainersPool = void 0)),
								C(x(f.prototype), 'destroy', this).call(this, t));
						},
					},
					{
						key: 'setScrollMode',
						value: function (t) {
							return (
								'string' == typeof t && (t = zu[t.toLowerCase()]),
								(this.scrollMode = t),
								this
							);
						},
					},
					{
						key: 'setClampMode',
						value: function (t) {
							return void 0 === t && (t = !0), (this.clampTableOXY = t), this;
						},
					},
					{
						key: 'tableOY',
						get: function () {
							return this._tableOY;
						},
						set: function (t) {
							this.setTableOY(t).updateTable();
						},
					},
					{
						key: 'tableOX',
						get: function () {
							return this._tableOX;
						},
						set: function (t) {
							this.setTableOX(t).updateTable();
						},
					},
					{
						key: 'setTableOXY',
						value: function (t, e) {
							return this.setTableOY(e).setTableOX(t), this;
						},
					},
					{
						key: 'addTableOY',
						value: function (t) {
							return this.setTableOY(this.tableOY + t), this;
						},
					},
					{
						key: 'addTableOX',
						value: function (t) {
							return this.setTableOX(this.tableOX + t), this;
						},
					},
					{
						key: 'addTableOXY',
						value: function (t, e) {
							return this.addTableOY(e).addTableOX(t), this;
						},
					},
					{
						key: 'setTableOYByPercentage',
						value: function (t) {
							return this.setTableOY(-this.tableVisibleHeight * t), this;
						},
					},
					{
						key: 'getTableOYPercentage',
						value: function () {
							var t = this.tableVisibleHeight;
							return 0 === t ? 0 : this.tableOY / -t;
						},
					},
					{
						key: 't',
						get: function () {
							return this.getTableOYPercentage();
						},
						set: function (t) {
							this.setTableOYByPercentage(t).updateTable();
						},
					},
					{
						key: 'getCell',
						value: function (t) {
							return this.table.getCell(t, !0);
						},
					},
					{
						key: 'getCellContainer',
						value: function (t) {
							var e,
								i = this.table.getCell(t, !1);
							return i && (e = i.getContainer()), e;
						},
					},
					{
						key: 'cellsCount',
						get: function () {
							return this.table.cellsCount;
						},
					},
					{
						key: 'columnCount',
						get: function () {
							return this.table.colCount;
						},
					},
					{
						key: 'setCellHeight',
						value: function (t, e) {
							return (
								(('number' == typeof t
									? this.table.getCell(t, !0)
									: t
								).height = e),
								this
							);
						},
					},
					{
						key: 'setCellWidth',
						value: function (t, e) {
							return (
								(('number' == typeof t
									? this.table.getCell(t, !0)
									: t
								).width = e),
								this
							);
						},
					},
					{
						key: 'setCellsMask',
						value: function (t) {
							var e, i, n;
							if (
								(!0 === t
									? ((e = !0), (n = i = 0))
									: !1 === t
									? (e = !1)
									: ((e = Tu(t, 'mask', !0)),
									  (i = Tu(t, 'padding', 0)),
									  (n = Tu(t, 'updateMode', 0))),
								(this.maskCellsFlag = !0),
								(this.maskUpdateMode = n),
								e)
							) {
								var s = new ua(this, 0, i);
								(this.cellsMask = s.createGeometryMask()),
									this.add(s),
									'string' == typeof n && (n = Bu[n]),
									this.scene.game.events.on('poststep', this.maskCells, this);
							}
							return this;
						},
					},
					{
						key: 'instHeight',
						get: function () {
							return 0 === this.scrollMode ? this.height : this.width;
						},
					},
					{
						key: 'instWidth',
						get: function () {
							return 0 === this.scrollMode ? this.width : this.height;
						},
					},
					{
						key: 'tableHeight',
						get: function () {
							return this.table.totalRowsHeight;
						},
					},
					{
						key: 'tableWidth',
						get: function () {
							return this.table.totalColumnWidth;
						},
					},
					{
						key: 'topTableOY',
						get: function () {
							return 0;
						},
					},
					{
						key: 'bottomTableOY',
						get: function () {
							return -this.tableVisibleHeight;
						},
					},
					{
						key: 'leftTableOX',
						get: function () {
							return 0;
						},
					},
					{
						key: 'rightTableOX',
						get: function () {
							return -this.tableVisibleWidth;
						},
					},
					{
						key: 'tableVisibleHeight',
						get: function () {
							var t = this.tableHeight,
								e = this.instHeight;
							return e < t ? t - e : 0;
						},
					},
					{
						key: 'tableVisibleWidth',
						get: function () {
							var t = this.tableWidth,
								e = this.instWidth;
							return e < t ? t - e : 0;
						},
					},
					{
						key: 'bottomLeftY',
						get: function () {
							return -(this.displayHeight * this.originY) + this.displayHeight;
						},
					},
					{
						key: 'topRightX',
						get: function () {
							return -(this.displayWidth * this.originX) + this.displayWidth;
						},
					},
					{
						key: 'topLeftX',
						get: function () {
							return -(this.displayWidth * this.originX);
						},
					},
					{
						key: 'topLeftY',
						get: function () {
							return -(this.displayHeight * this.originY);
						},
					},
					{
						key: 'bottomBound',
						get: function () {
							return 0 === this.scrollMode ? this.bottomLeftY : this.topRightX;
						},
					},
					{
						key: 'rightBound',
						get: function () {
							return 0 === this.scrollMode ? this.topRightX : this.bottomLeftY;
						},
					},
					{
						key: 'resize',
						value: function (t, e) {
							return (
								(this.width === t && this.height === e) ||
									(C(x(f.prototype), 'resize', this).call(this, t, e),
									this.cellsMask && _r(nu(this.cellsMask), t, e),
									this.expandCellSize &&
										this.table.setDefaultCellWidth(
											this.instWidth / this.table.colCount
										),
									this.updateTable(!0)),
								this
							);
						},
					},
				]),
				f
			);
		})();
	Object.assign(Mu.prototype, Pu.GetBounds, wu);
	function _u(t, e, i, n, s, r) {
		var o;
		if (null != (o = void 0 === s ? n : i.pointToCellIndex(n, s))) {
			var h = i.getCellContainer(o);
			h && t.emit(e, h, o, r);
		}
	}
	var zu = {v: 0, vertical: 0, h: 1, horizontal: 1},
		Bu = {update: 0, everyTick: 1},
		Eu = function (t) {
			var e = this.childrenMap.child,
				i = e.pointToCellIndex(t.x, t.y);
			if (i !== e.input.lastOverCellIndex) {
				var n = e.input.lastOverCellIndex;
				(e.input.lastOverCellIndex = i),
					_u(this.eventEmitter, 'cell.out', e, n, void 0, t),
					_u(this.eventEmitter, 'cell.over', e, i, void 0, t);
			}
		},
		Du = function (t) {
			var e = this.childrenMap.child,
				i = e.input.lastOverCellIndex;
			(e.input.lastOverCellIndex = void 0),
				_u(this.eventEmitter, 'cell.out', e, i, void 0, t);
		},
		ju = Phaser.Utils.Objects.GetValue,
		Ru = Phaser.Utils.Objects.GetValue,
		Lu = (function () {
			function i(t, e) {
				B(this, i),
					(this.parent = t),
					(this._isRunning = !1),
					(this.tickingState = !1),
					this.setEventEmitter(Ru(e, 'eventEmitter', void 0)),
					this.setTickingMode(Ru(e, 'tickingMode', 1));
			}
			return (
				m(i, [
					{
						key: 'boot',
						value: function () {
							2 !== this.tickingMode ||
								this.tickingState ||
								this.startTicking();
						},
					},
					{
						key: 'shutdown',
						value: function () {
							this.destroyEventEmitter(),
								this.tickingState && this.stopTicking();
						},
					},
					{
						key: 'setTickingMode',
						value: function (t) {
							'string' == typeof t && (t = Yu[t]), (this.tickingMode = t);
						},
					},
					{
						key: 'startTicking',
						value: function () {
							this.tickingState = !0;
						},
					},
					{
						key: 'stopTicking',
						value: function () {
							this.tickingState = !1;
						},
					},
					{
						key: 'isRunning',
						get: function () {
							return this._isRunning;
						},
						set: function (t) {
							this._isRunning !== t &&
								((this._isRunning = t),
								1 === this.tickingMode &&
									t != this.tickingState &&
									(t ? this.startTicking() : this.stopTicking()));
						},
					},
					{
						key: 'start',
						value: function () {
							return (this.isRunning = !0), this;
						},
					},
					{
						key: 'pause',
						value: function () {
							return (this.isRunning = !1), this;
						},
					},
					{
						key: 'resume',
						value: function () {
							return (this.isRunning = !0), this;
						},
					},
					{
						key: 'stop',
						value: function () {
							return (this.isRunning = !1), this;
						},
					},
					{
						key: 'complete',
						value: function () {
							(this.isRunning = !1), this.emit('complete', this.parent, this);
						},
					},
				]),
				i
			);
		})();
	Object.assign(Lu.prototype, vr);
	var Yu = {no: 0, lazy: 1, always: 2},
		Iu = Phaser.Utils.Objects.GetValue,
		Au = (function () {
			b(r, Lu);
			var s = w(r);
			function r(t, e) {
				var i;
				B(this, r);
				var n = tr(t);
				return (
					n === t && (t = void 0),
					((i = s.call(this, n, e)).scene = n),
					(i.gameObject = t) && t.setInteractive(Iu(e, 'inputConfig', void 0)),
					(i._enable = void 0),
					i.resetFromJSON(e),
					i.boot(),
					i
				);
			}
			return (
				m(r, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								this.setEnable(Iu(t, 'enable', !0)),
								void 0 === this.gameObject
									? (this.bounds = Iu(t, 'bounds', void 0))
									: (this.bounds = void 0),
								(this.tracerState = Fu),
								(this.pointer = void 0),
								(this.lastPointer = void 0),
								(this.movedState = !1),
								(this.isTouchingAnyObject = !1),
								this
							);
						},
					},
					{
						key: 'boot',
						value: function () {
							C(x(r.prototype), 'boot', this).call(this),
								this.gameObject
									? this.gameObject.on('pointerdown', this.onPointerDown, this)
									: this.scene.input.on(
											'pointerdown',
											this.onPointerDown,
											this
									  ),
								this.scene.input.on('pointerup', this.onPointerUp, this),
								this.scene.input.on('pointermove', this.onPointerMove, this),
								this.scene.events.once('shutdown', this.destroy, this);
						},
					},
					{
						key: 'shutdown',
						value: function () {
							this.gameObject
								? this.gameObject.off('pointerdown', this.onPointerDown, this)
								: this.scene &&
								  this.scene.input.off('pointerdown', this.onPointerDown, this),
								this.scene &&
									(this.scene.input.off('pointerup', this.onPointerUp, this),
									this.scene.input.off('pointermove', this.onPointerMove, this),
									this.scene.events.off('destroy', this.destroy, this),
									(this.scene = void 0)),
								(this.scene = void 0),
								(this.gameObject = void 0),
								(this.bounds = void 0),
								(this.pointer = void 0),
								(this.lastPointer = void 0),
								(this.movedState = !1),
								C(x(r.prototype), 'shutdown', this).call(this);
						},
					},
					{
						key: 'destroy',
						value: function () {
							this.shutdown();
						},
					},
					{
						key: 'enable',
						get: function () {
							return this._enable;
						},
						set: function (t) {
							if (this._enable !== t)
								return t || this.dragCancel(), (this._enable = t), this;
						},
					},
					{
						key: 'setEnable',
						value: function (t) {
							return void 0 === t && (t = !0), (this.enable = t), this;
						},
					},
					{
						key: 'toggleEnable',
						value: function () {
							return this.setEnable(!this.enable), this;
						},
					},
					{
						key: 'onPointerDown',
						value: function (t, e) {
							this.enable &&
								void 0 === this.pointer &&
								((this.bounds && !this.bounds.contains(t.x, t.y)) ||
									this.pointer === t ||
									((this.pointer = t),
									(this.lastPointer = t),
									(this.movedState = !1),
									(this.tracerState = Wu),
									void 0 === this.gameObject &&
										(this.isTouchingAnyObject = 0 < e.length),
									this.onDragStart()));
						},
					},
					{
						key: 'onPointerUp',
						value: function (t) {
							this.enable &&
								((this.bounds && !this.bounds.contains(t.x, t.y)) ||
									this.pointer !== t ||
									((this.pointer = void 0),
									(this.movedState = !1),
									(this.tracerState = Fu),
									this.onDragEnd()));
						},
					},
					{
						key: 'onPointerMove',
						value: function (t) {
							if (this.enable && t.isDown) {
								var e = !this.bounds || this.bounds.contains(t.x, t.y),
									i = this.pointer === t;
								(!i && e) ||
									(i && !e
										? this.onPointerUp(t)
										: (this.movedState ||
												(this.movedState = t.x !== t.downX || t.y !== t.downY),
										  this.movedState && this.onDrag()));
							}
						},
					},
					{
						key: 'dragCancel',
						value: function () {
							return (
								this.tracerState === Wu && this.onDragEnd(),
								(this.pointer = void 0),
								(this.tracerState = Fu),
								this
							);
						},
					},
					{
						key: 'onDragStart',
						value: function () {
							this.emit('dragstart', this);
						},
					},
					{
						key: 'onDragEnd',
						value: function () {
							this.emit('dragend', this);
						},
					},
					{
						key: 'onDrag',
						value: function () {
							this.emit('drag', this);
						},
					},
					{key: 'preUpdate', value: function () {}},
					{key: 'postUpdate', value: function () {}},
					{
						key: 'startTicking',
						value: function () {
							C(x(r.prototype), 'startTicking', this).call(this),
								this.scene.events.on('preupdate', this.preUpdate, this),
								this.scene.events.on('postupdate', this.postUpdate, this);
						},
					},
					{
						key: 'stopTicking',
						value: function () {
							C(x(r.prototype), 'stopTicking', this).call(this),
								this.scene &&
									(this.scene.events.off('preupdate', this.preUpdate, this),
									this.scene.events.off('postupdate', this.postUpdate, this));
						},
					},
					{
						key: 'setRecongizedStateObject',
						value: function (t) {
							return (this.recongizedState = t), this;
						},
					},
					{
						key: 'state',
						get: function () {
							return this.recongizedState.state;
						},
						set: function (t) {
							this.recongizedState.state = t;
						},
					},
					{
						key: 'cancel',
						value: function () {
							return (this.state = Hu), this;
						},
					},
				]),
				r
			);
		})(),
		Fu = 0,
		Wu = 1,
		Hu = 'IDLE',
		Xu = Phaser.Utils.Objects.GetValue,
		Vu = Phaser.Math.Distance.Between,
		Gu = (function () {
			b(o, Au);
			var r = w(o);
			function o(t, e) {
				var i;
				B(this, o);
				var n = E((i = r.call(this, t, e))),
					s = {
						states: {
							IDLE: {
								enter: function () {
									n.stop(),
										(n.tapsCount = 0),
										(n.x = 0),
										(n.y = 0),
										(n.worldX = 0),
										(n.worldY = 0);
								},
								exit: function () {
									var t = n.lastPointer;
									(n.x = t.x),
										(n.y = t.y),
										(n.worldX = t.worldX),
										(n.worldY = t.worldY);
								},
							},
							BEGIN: {
								enter: function () {
									n.start(),
										(n.tapsCount = 0),
										n.emit('tappingstart', n, n.gameObject, n.lastPointer);
								},
							},
							RECOGNIZED: {
								enter: function () {
									n.start(),
										n.emit('tap', n, n.gameObject, n.lastPointer),
										n.emit(
											''.concat(n.tapsCount, 'tap'),
											n,
											n.gameObject,
											n.lastPointer
										);
								},
							},
						},
						init: function () {
							this.state = Uu;
						},
						eventEmitter: !1,
					};
				return i.setRecongizedStateObject(new Al(s)), i;
			}
			return (
				m(o, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							C(x(o.prototype), 'resetFromJSON', this).call(this, t),
								this.setMaxHoldTime(Xu(t, 'time', 250)),
								this.setTapInterval(Xu(t, 'tapInterval', 200)),
								this.setDragThreshold(Xu(t, 'threshold', 9)),
								this.setTapOffset(Xu(t, 'tapOffset', 10));
							var e = Xu(t, 'taps', void 0);
							return (
								void 0 !== e
									? this.setTaps(e)
									: (this.setMaxTaps(Xu(t, 'maxTaps', void 0)),
									  this.setMinTaps(Xu(t, 'minTaps', void 0))),
								this
							);
						},
					},
					{
						key: 'onDragStart',
						value: function () {
							switch (this.state) {
								case Uu:
									this.state = Nu;
									break;
								case Nu:
									var t = this.lastPointer;
									Vu(t.upX, t.upY, t.x, t.y) > this.tapOffset &&
										((this.state = Ju), (this.state = Nu));
									break;
								case Ju:
									this.state = Nu;
							}
						},
					},
					{
						key: 'onDragEnd',
						value: function () {
							this.state === Nu &&
								(this.tapsCount++,
								this.emit('tapping', this, this.gameObject, this.lastPointer),
								void 0 !== this.maxTaps &&
									this.tapsCount === this.maxTaps &&
									(this.state = Ju));
						},
					},
					{
						key: 'onDrag',
						value: function () {
							this.state !== Uu &&
								this.pointer.getDistance() > this.dragThreshold &&
								(this.state = Uu);
						},
					},
					{
						key: 'preUpdate',
						value: function (t) {
							if (this.state === Nu) {
								var e = this.lastPointer;
								if (e.isDown)
									t - e.downTime > this.holdTime && (this.state = Uu);
								else
									t - e.upTime > this.tapInterval &&
										(void 0 === this.minTaps || this.tapsCount >= this.minTaps
											? (this.state = Ju)
											: (this.state = Uu));
							}
						},
					},
					{
						key: 'postUpdate',
						value: function () {
							this.state === Ju && (this.state = Uu);
						},
					},
					{
						key: 'isTapped',
						get: function () {
							return this.state === Ju;
						},
					},
					{
						key: 'setMaxHoldTime',
						value: function (t) {
							return (this.holdTime = t), this;
						},
					},
					{
						key: 'setTapInterval',
						value: function (t) {
							return (this.tapInterval = t), this;
						},
					},
					{
						key: 'setDragThreshold',
						value: function (t) {
							return (this.dragThreshold = t), this;
						},
					},
					{
						key: 'setTapOffset',
						value: function (t) {
							return (this.tapOffset = t), this;
						},
					},
					{
						key: 'setMaxTaps',
						value: function (t) {
							return (this.maxTaps = t), this;
						},
					},
					{
						key: 'setMinTaps',
						value: function (t) {
							return (this.minTaps = t), this;
						},
					},
					{
						key: 'setTaps',
						value: function (t, e) {
							return (
								void 0 === e && (e = t), this.setMinTaps(t).setMaxTaps(e), this
							);
						},
					},
				]),
				o
			);
		})(),
		Uu = 'IDLE',
		Nu = 'BEGIN',
		Ju = 'RECOGNIZED',
		Ku = Phaser.Utils.Objects.GetValue,
		Zu = Phaser.Utils.Objects.GetValue,
		qu = (function () {
			b(o, Au);
			var r = w(o);
			function o(t, e) {
				var i;
				B(this, o);
				var n = E((i = r.call(this, t, e))),
					s = {
						states: {
							IDLE: {
								enter: function () {
									(n.x = 0), (n.y = 0), (n.worldX = 0), (n.worldY = 0);
								},
								exit: function () {
									var t = n.lastPointer;
									(n.x = t.x),
										(n.y = t.y),
										(n.worldX = t.worldX),
										(n.worldY = t.worldY);
								},
							},
							BEGIN: {
								enter: function () {
									n.start();
								},
								exit: function () {
									n.stop();
								},
							},
							RECOGNIZED: {
								enter: function () {
									n.emit('pressstart', n, n.gameObject, n.lastPointer);
								},
								exit: function () {
									n.emit('pressend', n, n.gameObject, n.lastPointer);
								},
							},
						},
						init: function () {
							this.state = $u;
						},
						eventEmitter: !1,
					};
				return i.setRecongizedStateObject(new Al(s)), i;
			}
			return (
				m(o, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								C(x(o.prototype), 'resetFromJSON', this).call(this, t),
								this.setDragThreshold(Zu(t, 'threshold', 9)),
								this.setMinHoldTime(Zu(t, 'time', 251)),
								this
							);
						},
					},
					{
						key: 'onDragStart',
						value: function () {
							(this.state = Qu), 0 === this.holdTime && (this.state = tc);
						},
					},
					{
						key: 'onDragEnd',
						value: function () {
							this.state = $u;
						},
					},
					{
						key: 'onDrag',
						value: function () {
							this.state !== $u &&
								this.pointer.getDistance() > this.dragThreshold &&
								(this.state = $u);
						},
					},
					{
						key: 'preUpdate',
						value: function (t) {
							this.state === Qu &&
								t - this.pointer.downTime >= this.holdTime &&
								(this.state = tc);
						},
					},
					{
						key: 'isPressed',
						get: function () {
							return this.state === tc;
						},
					},
					{
						key: 'setDragThreshold',
						value: function (t) {
							return (this.dragThreshold = t), this;
						},
					},
					{
						key: 'setMinHoldTime',
						value: function (t) {
							return (this.holdTime = t), this;
						},
					},
				]),
				o
			);
		})(),
		$u = 'IDLE',
		Qu = 'BEGIN',
		tc = 'RECOGNIZED',
		ec = Phaser.Utils.Objects.GetValue,
		ic = Phaser.Math.Distance.Between,
		nc = Phaser.Math.Angle.Between,
		sc = {
			getDt: function () {
				return this.scene.sys.game.loop.delta;
			},
			getVelocity: function () {
				var t = this.pointer.position,
					e = this.pointer.prevPosition;
				return ic(e.x, e.y, t.x, t.y) / (0.001 * this.getDt());
			},
			getVelocityX: function () {
				var t = this.pointer.position,
					e = this.pointer.prevPosition;
				return Math.abs(t.x - e.x) / (0.001 * this.getDt());
			},
			getVelocityY: function () {
				var t = this.pointer.position,
					e = this.pointer.prevPosition;
				return Math.abs(t.y - e.y) / (0.001 * this.getDt());
			},
			getVelocityAngle: function () {
				var t = this.pointer.position,
					e = this.pointer.prevPosition;
				return nc(e.x, e.y, t.x, t.y);
			},
		},
		rc = {'up&down': 0, 'left&right': 1, '4dir': 2, '8dir': 3},
		oc = {},
		hc = Phaser.Utils.Objects.GetValue,
		ac = Phaser.Math.RadToDeg,
		lc = (function () {
			b(o, Au);
			var r = w(o);
			function o(t, e) {
				var i;
				B(this, o);
				var n = E((i = r.call(this, t, e))),
					s = {
						states: {
							IDLE: {
								enter: function () {
									(n.x = 0), (n.y = 0), (n.worldX = 0), (n.worldY = 0);
								},
								exit: function () {
									var t = n.lastPointer;
									(n.x = t.x),
										(n.y = t.y),
										(n.worldX = t.worldX),
										(n.worldY = t.worldY);
								},
							},
							BEGIN: {
								enter: function () {
									n.validDrag = !1;
								},
							},
							RECOGNIZED: {
								enter: function () {
									n.start(),
										n.updateDirectionStates(),
										n.emit('swipe', n, n.gameObject, n.lastPointer);
								},
								exit: function () {
									n.stop(), n.clearDirectionStates();
								},
							},
						},
						init: function () {
							this.state = cc;
						},
						eventEmitter: !1,
					};
				return (
					i.setRecongizedStateObject(new Al(s)), i.clearDirectionStates(), i
				);
			}
			return (
				m(o, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								C(x(o.prototype), 'resetFromJSON', this).call(this, t),
								this.setDragThreshold(hc(t, 'threshold', 10)),
								this.setMinDragVelocity(hc(t, 'velocityThreshold', 1e3)),
								this.setDirectionMode(hc(t, 'dir', '8dir')),
								this
							);
						},
					},
					{
						key: 'onDragStart',
						value: function () {
							this.state = dc;
						},
					},
					{
						key: 'onDragEnd',
						value: function () {
							this.state = cc;
						},
					},
					{
						key: 'onDrag',
						value: function () {
							this.state === dc &&
								(this.validDrag ||
									(this.validDrag =
										0 === this.dragThreshold ||
										this.pointer.getDistance() >= this.dragThreshold),
								this.validDrag &&
									this.dragVelocity > this.minDragVelocity &&
									(this.state = fc));
						},
					},
					{
						key: 'postUpdate',
						value: function () {
							this.state === fc && (this.state = cc);
						},
					},
					{
						key: 'isSwiped',
						get: function () {
							return this.state === fc;
						},
					},
					{
						key: 'dragVelocity',
						get: function () {
							var t;
							switch (this.dirMode) {
								case 0:
									t = this.getVelocityY();
									break;
								case 1:
									t = this.getVelocityX();
									break;
								default:
									t = this.getVelocity();
							}
							return t;
						},
					},
					{
						key: 'setDragThreshold',
						value: function (t) {
							return (this.dragThreshold = t), this;
						},
					},
					{
						key: 'setMinDragVelocity',
						value: function (t) {
							return (this.minDragVelocity = t), this;
						},
					},
					{
						key: 'setDirectionMode',
						value: function (t) {
							return (
								'string' == typeof t && (t = rc[t]), (this.dirMode = t), this
							);
						},
					},
					{
						key: 'updateDirectionStates',
						value: function () {
							return (
								(function (t, e, i) {
									switch (
										(void 0 === i ? (i = {}) : !0 === i && (i = oc),
										(i.left = !1),
										(i.right = !1),
										(i.up = !1),
										(i.down = !1),
										(t = (t + 360) % 360),
										e)
									) {
										case 0:
											t < 180 ? (i.down = !0) : (i.up = !0);
											break;
										case 1:
											90 < t && t <= 270 ? (i.left = !0) : (i.right = !0);
											break;
										case 2:
											45 < t && t <= 135
												? (i.down = !0)
												: 135 < t && t <= 225
												? (i.left = !0)
												: 225 < t && t <= 315
												? (i.up = !0)
												: (i.right = !0);
											break;
										case 3:
											22.5 < t && t <= 67.5
												? ((i.down = !0), (i.right = !0))
												: 67.5 < t && t <= 112.5
												? (i.down = !0)
												: 112.5 < t && t <= 157.5
												? ((i.down = !0), (i.left = !0))
												: 157.5 < t && t <= 202.5
												? (i.left = !0)
												: 202.5 < t && t <= 247.5
												? ((i.left = !0), (i.up = !0))
												: 247.5 < t && t <= 292.5
												? (i.up = !0)
												: (292.5 < t && t <= 337.5 && (i.up = !0),
												  (i.right = !0));
									}
								})(ac(this.getVelocityAngle()), this.dirMode, this),
								this
							);
						},
					},
					{
						key: 'clearDirectionStates',
						value: function () {
							return (
								(this.left = !1),
								(this.right = !1),
								(this.up = !1),
								(this.down = !1),
								this
							);
						},
					},
				]),
				o
			);
		})();
	Object.assign(lc.prototype, sc);
	function uc(t, e) {
		t.setInteractive(),
			function (e) {
				e.on(
					'pointerdown',
					function (t) {
						_u(this.eventEmitter, 'cell.down', e, t.x, t.y, t);
					},
					this
				).on(
					'pointerup',
					function (t) {
						_u(this.eventEmitter, 'cell.up', e, t.x, t.y, t);
					},
					this
				);
			}.call(this, t, e),
			function (t) {
				t.on('pointermove', Eu, this)
					.on('pointerover', Eu, this)
					.on('pointerout', Du, this);
			}.call(this, t, e),
			function (t, e) {
				var i = ju(e, 'button', void 0);
				!1 !== i &&
					(void 0 === i && (i = {}),
					(i.threshold = 10),
					(t._click = new ga(t, i)),
					t._click.on(
						'click',
						function (t, e, i) {
							_u(this.eventEmitter, 'cell.click', e, i.x, i.y, i);
						},
						this
					));
			}.call(this, t, e),
			function (t, e) {
				var i = Ku(e, 'tap', void 0);
				!1 !== i &&
					((t._tap = new Gu(t, i)),
					t._tap.on(
						'tap',
						function (t, e, i) {
							var n = 'cell.'.concat(t.tapsCount, 'tap');
							_u(this.eventEmitter, n, t.gameObject, t.x, t.y, i);
						},
						this
					));
			}.call(this, t, e),
			function (n, t) {
				var e = ec(t, 'press', void 0);
				!1 !== e &&
					((n._press = new qu(n, e)),
					n._press
						.on(
							'pressstart',
							function (t, e, i) {
								_u(this.eventEmitter, 'cell.pressstart', n, t.x, t.y, i);
							},
							this
						)
						.on(
							'pressend',
							function (t, e, i) {
								_u(this.eventEmitter, 'cell.pressend', n, t.x, t.y, i);
							},
							this
						));
			}.call(this, t, e),
			function (s, t) {
				var e = vc(t, 'swipe', void 0);
				!1 !== e &&
					(void 0 === e && (e = {}),
					(e.dir = '4dir'),
					(s._swipe = new lc(s, e)),
					s._swipe.on(
						'swipe',
						function (t, e, i) {
							var n = t.left
								? 'left'
								: t.right
								? 'right'
								: t.up
								? 'up'
								: 'down';
							_u(this.eventEmitter, 'cell.swipe'.concat(n), s, t.x, t.y, i);
						},
						this
					));
			}.call(this, t, e);
	}
	var cc = 'IDLE',
		dc = 'BEGIN',
		fc = 'RECOGNIZED',
		vc = Phaser.Utils.Objects.GetValue,
		pc = Phaser.Utils.Objects.GetValue,
		gc = (function () {
			b(g, Ql);
			var p = w(g);
			function g(t, e) {
				var i;
				B(this, g), void 0 === e && (e = {});
				var n = Rl(e),
					s = pc(e, 'table', void 0);
				void 0 === s && (s = {}),
					(s.scrollMode = n),
					(s.clamplTableOXY = pc(e, 'clamplChildOY', !1));
				var r,
					o,
					h,
					a = pc(s, 'width', void 0),
					l = pc(s, 'height', void 0),
					u = new Mu(t, 0, 0, a, l, s);
				t.add.existing(u),
					(o =
						0 === n
							? ((r = void 0 === a ? 1 : 0), void 0 === l)
							: ((r = void 0 === l ? 1 : 0), void 0 === a)),
					(h = u),
					Object.defineProperty(h, 'childOY', {
						configurable: !0,
						get: function () {
							return h.tableOY;
						},
						set: function (t) {
							h.tableOY = t;
						},
					}),
					Object.defineProperty(h, 'topChildOY', {
						get: function () {
							return h.topTableOY;
						},
					}),
					Object.defineProperty(h, 'bottomChildOY', {
						get: function () {
							return h.bottomTableOY;
						},
					}),
					(e.type = 'rexGridTable'),
					(e.child = {gameObject: u, proportion: r, expand: o});
				var c = pc(e, 'space', void 0);
				c && (c.child = c.table),
					(i = p.call(this, t, e)).addChildrenMap('table', u),
					(i.eventEmitter = pc(e, 'eventEmitter', E(i)));
				var d = pc(e, 'createCellContainerCallback', gt),
					f = pc(e, 'createCellContainerCallbackScope', void 0);
				i.setCreateCellContainerCallback(d, f),
					function (t) {
						t.on(
							'cellvisible',
							function (t, e, i) {
								var n = this.createCellContainerCallback,
									s = this.createCellContainerCallbackScope;
								(t.item = this.items[t.index]),
									(e = s ? n.call(s, t, e, i) : n(t, e, i)) &&
										(e.setOrigin && e.setOrigin(0), e.isRexSizer && e.layout()),
									(t.item = void 0),
									t.setContainer(e);
							},
							this
						);
					}.call(E(i), u),
					(i.resizeControllerFlag = !1);
				var v = 0 === n ? 'cellheightchange' : 'cellwidthchange';
				return (
					u.on(
						v,
						function () {
							this.resizeControllerFlag = !0;
						},
						E(i)
					),
					pc(s, 'interactive', !0) && uc.call(E(i), u, s),
					i.setItems(pc(e, 'items', [])),
					t.game.events.on('poststep', i.onPostStep, E(i)),
					i
				);
			}
			return (
				m(g, [
					{
						key: 'destroy',
						value: function (t) {
							this.scene &&
								(this.scene.game.events.off('poststep', this.onPostStep, this),
								C(x(g.prototype), 'destroy', this).call(this, t));
						},
					},
					{
						key: 'setCreateCellContainerCallback',
						value: function (t, e) {
							return (
								(this.createCellContainerCallback = t),
								(this.createCellContainerCallbackScope = e),
								this
							);
						},
					},
					{
						key: 'refresh',
						value: function () {
							return this.setItems(this.items), this;
						},
					},
					{
						key: 'getCellContainer',
						value: function (t) {
							return this.childrenMap.child.getCellContainer(t);
						},
					},
					{
						key: 'updateVisibleCell',
						value: function (t) {
							return this.childrenMap.child.updateVisibleCell(t);
						},
					},
					{
						key: 'onPostStep',
						value: function () {
							this.resizeControllerFlag &&
								(this.resizeController(), (this.resizeControllerFlag = !1));
						},
					},
				]),
				g
			);
		})(),
		yc = {
			setItems: function (t) {
				void 0 === t ? (this.items.length = 0) : (this.items = t);
				var e = this.childrenMap.child;
				return (
					e.setCellsCount(this.items.length),
					e.updateTable(!0),
					this.resizeController(),
					this
				);
			},
		};
	Object.assign(gc.prototype, yc),
		u.register('gridTable', function (t) {
			var e = new gc(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.GridTable', gc);
	function kc(t, e) {
		return (
			t.sameOrientation
				? (t.orientation = e.orientation)
				: (t.orientation = 0 === e.orientation ? 1 : 0),
			t
		);
	}
	var mc = {
			expandSubMenu: function (t, e) {
				var i;
				this.collapseSubMenu(),
					(i = this.root.toggleOrientation
						? 0 === this.orientation
							? 1
							: 0
						: this.orientation);
				var n = new this.constructor(this.scene, {
					items: e,
					orientation: i,
					createBackgroundCallback: this.root.createBackgroundCallback,
					createBackgroundCallbackScope: this.root
						.createBackgroundCallbackScope,
					createButtonCallback: this.root.createButtonCallback,
					createButtonCallbackScope: this.root.createButtonCallbackScope,
					easeIn: this.root.easeIn,
					easeOut: this.root.easeOut,
					_rootMenu: this.root,
					_parentMenu: this,
					_parentButton: t,
				});
				return (
					this.pin(n),
					(this.childrenMap.subMenu = n),
					this.root.emit('expand', n, t, this),
					this
				);
			},
			collapse: function () {
				return (
					this.root.emit('collapse', this, this.parentButton, this.root),
					this.scaleDownDestroy(kc(this.root.easeOut, this)),
					this.collapseSubMenu(),
					this
				);
			},
			collapseSubMenu: function () {
				if (void 0 === this.childrenMap.subMenu) return this;
				var t = this.childrenMap.subMenu;
				return (
					(this.childrenMap.subMenu = void 0),
					this.remove(t),
					t.collapse(),
					this
				);
			},
		},
		bc = Phaser.Utils.Objects.GetValue,
		xc = (function () {
			b(P, Ia);
			var S = w(P);
			function P(t, e) {
				var i;
				B(this, P),
					void 0 === e && (e = {}),
					e.hasOwnProperty('orientation') || (e.orientation = 1);
				var n,
					s,
					r,
					o,
					h,
					a = e._rootMenu,
					l = e._parentMenu,
					u = e._parentButton,
					c = bc(e, 'items', void 0),
					d = bc(e, 'createBackgroundCallback', void 0),
					f = bc(e, 'createBackgroundCallbackScope', void 0);
				e.background =
					((n = t),
					(s = c),
					(o = f),
					(r = d) &&
						((s.scene = n), (h = o ? r.call(o, s) : r(s)), (s.scene = void 0)),
					h);
				var v = bc(e, 'createButtonCallback', void 0),
					p = bc(e, 'createButtonCallbackScope', void 0);
				(e.buttons = (function (t, e, i, n) {
					var s,
						r,
						o = [];
					if (e && i)
						for (var h = 0, a = e.length; h < a; h++)
							((s = e[h]).scene = t),
								(r = n ? i.call(n, s, h, e) : i(s, h, e)),
								(s.scene = void 0),
								o.push(r);
					return o;
				})(t, c, v, p)),
					((i = S.call(this, t, e)).type = 'rexMenu'),
					(i.items = c),
					(i.root = void 0 === a ? E(i) : a),
					(i.parentMenu = l),
					(i.parentButton = u);
				var g = i.root === E(i);
				if (g) {
					var y = e.bounds;
					void 0 === y && (y = ys(t)),
						(i.bounds = y),
						(i.subMenuSide = [
							i.y < y.centerY ? Oc : Pc,
							i.x < y.centerX ? Sc : wc,
						]),
						void 0 !== (w = bc(e, 'subMenuSide', void 0)) &&
							('string' == typeof w && (w = Tc[w]),
							(i.subMenuSide[i.orientation] = w)),
						(i.toggleOrientation = bc(e, 'toggleOrientation', !1)),
						(i.expandEventName = bc(e, 'expandEvent', 'button.click')),
						(i.easeIn = Cc(E(i), bc(e, 'easeIn', 0))),
						(i.easeOut = Cc(E(i), bc(e, 'easeOut', 0))),
						(i.createBackgroundCallback = d),
						(i.createBackgroundCallbackScope = f),
						(i.createButtonCallback = v),
						(i.createButtonCallbackScope = p),
						(i._isPassedEvent = !1);
				}
				var k,
					m = 0,
					b = 0;
				if (!i.root.easeIn.sameOrientation) {
					var x = kc(i.root.easeIn, E(i)).orientation,
						C = l ? l.orientation : i.orientation,
						w = i.root.subMenuSide[C];
					0 === x && w === wc && (m = 1), 1 === x && w === Pc && (b = 1);
				}
				if ((i.setOrigin(m, b).layout(), !g))
					switch ((w = i.root.subMenuSide[l.orientation])) {
						case wc:
							i.alignTop(u.top).alignRight(u.left);
							break;
						case Sc:
							i.alignTop(u.top).alignLeft(u.right);
							break;
						case Pc:
							i.alignLeft(u.left).alignBottom(u.top);
							break;
						case Oc:
							i.alignLeft(u.left).alignTop(u.bottom);
					}
				return (
					i.pushIntoBounds(i.root.bounds),
					(k = E(i))
						.on(
							k.root.expandEventName,
							function (t, e) {
								if (!this._isPassedEvent) {
									var i = this.items[e].children;
									i && this.expandSubMenu(t, i);
								}
							},
							k
						)
						.on(
							'button.click',
							function (t, e, i, n) {
								this !== this.root &&
									((this.root._isPassedEvent = !0),
									this.root.emit('button.click', t, e, i, n),
									(this.root._isPassedEvent = !1));
							},
							k
						)
						.on(
							'button.over',
							function (t, e, i, n) {
								this !== this.root &&
									((this.root._isPassedEvent = !0),
									this.root.emit('button.over', t, e, i, n),
									(this.root._isPassedEvent = !1));
							},
							k
						)
						.on(
							'button.out',
							function (t, e, i, n) {
								this !== this.root &&
									((this.root._isPassedEvent = !0),
									this.root.emit('button.out', t, e, i, n),
									(this.root._isPassedEvent = !1));
							},
							k
						),
					i.popUp(kc(i.root.easeIn, E(i))),
					i.once(
						'popup.complete',
						function () {
							this !== this.root && this.root.emit('popup.complete', this);
						},
						E(i)
					),
					i
				);
			}
			return (
				m(P, [
					{
						key: 'isInTouching',
						value: function (t) {
							return (
								!!C(x(P.prototype), 'isInTouching', this).call(this, t) ||
								(!!this.childrenMap.subMenu &&
									this.childrenMap.subMenu.isInTouching(t))
							);
						},
					},
				]),
				P
			);
		})(),
		Cc = function (t, e) {
			return (
				'number' == typeof e && (e = {duration: e}),
				e.hasOwnProperty('orientation') && void 0 !== e.orientation
					? (e.sameOrientation = Sh(e.orientation) === t.orientation)
					: (e.sameOrientation = !0),
				e
			);
		},
		wc = 2,
		Sc = 0,
		Pc = 3,
		Oc = 1,
		Tc = {up: Pc, down: Oc, left: wc, right: Sc};
	Object.assign(xc.prototype, mc),
		u.register('menu', function (t) {
			var e = new xc(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.Menu', xc);
	function Mc(t) {
		return t instanceof zc;
	}
	function _c(t) {
		return t instanceof Bc;
	}
	var zc = Phaser.GameObjects.Text,
		Bc = Phaser.GameObjects.BitmapText,
		Ec = Phaser.Utils.Objects.GetValue,
		Dc = Phaser.Math.Clamp,
		jc = (function () {
			function i(t, e) {
				B(this, i),
					(this.gameObject = t),
					(this.scene = tr(t)),
					this.setTextObjectType(),
					(this.lines = void 0),
					(this.totalLinesCount = 0),
					this.resetFromJSON(e),
					this.boot();
			}
			return (
				m(i, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								this.setMaxLines(Ec(t, 'maxLines', void 0)),
								this.setText(Ec(t, 'text', '')),
								this.setStartIdx(Ec(t, 'start', 0)),
								this.setPageIdx(Ec(t, 'page', -1)),
								this
							);
						},
					},
					{
						key: 'toJSON',
						value: function () {
							return {
								maxLines: this.maxLines,
								text: this.text,
								start: this.startLineIdx,
								page: this.pageIndex,
								pageCount: this.pageCount,
							};
						},
					},
					{
						key: 'boot',
						value: function () {
							this.gameObject.on('destroy', this.destroy, this);
						},
					},
					{
						key: 'shutdown',
						value: function () {
							if (void 0 !== this.lines)
								switch (this.textObjectType) {
									case 0:
										this.lines.length = 0;
										break;
									case 1:
										this.lines.destroy();
										break;
									case 2:
										this.lines.length = 0;
								}
							return (this.gameObject = void 0), (this.scene = void 0), this;
						},
					},
					{
						key: 'destroy',
						value: function () {
							this.shutdown();
						},
					},
					{
						key: 'setTextObjectType',
						value: function () {
							return (
								(this.textObjectType = _c(this.gameObject)
									? 2
									: Mc(this.gameObject)
									? 0
									: 1),
								this
							);
						},
					},
					{
						key: 'isFirstPage',
						get: function () {
							return this.pageIndex <= 0;
						},
					},
					{
						key: 'isLastPage',
						get: function () {
							return this.pageIndex >= this.pageCount - 1;
						},
					},
					{
						key: 'setText',
						value: function (t, e) {
							switch (
								(void 0 === e && (e = !0),
								(this.text = Rc(t)),
								this.textObjectType)
							) {
								case 0:
									(this.lines = this.gameObject.getWrappedText(this.text)),
										(this.totalLinesCount = this.lines.length);
									break;
								case 1:
									(this.lines = this.gameObject.getPenManager(
										this.text,
										this.lines
									)),
										(this.totalLinesCount = this.lines.linesCount);
									break;
								case 2:
									(this.lines = this.gameObject
										.setText(t)
										.getTextBounds()
										.wrappedText.split('\n')),
										(this.totalLinesCount = this.lines.length);
							}
							return (
								(this.pageCount = Math.ceil(
									this.totalLinesCount / this.pageLinesCount
								)),
								e && this.resetPageIdx(),
								this
							);
						},
					},
					{
						key: 'setMaxLines',
						value: function (t) {
							return (this.maxLines = t), this;
						},
					},
					{
						key: 'appendText',
						value: function (t) {
							return this.setText(this.text.concat(Rc(t))), this;
						},
					},
					{
						key: 'getPage',
						value: function (t) {
							return (
								void 0 === t && (t = this.pageIndex),
								this.setPageIdx(t).getLines()
							);
						},
					},
					{
						key: 'getNextPage',
						value: function () {
							return this.getPage(this.pageIndex + 1);
						},
					},
					{
						key: 'getPreviousPage',
						value: function () {
							return this.getPage(this.pageIndex - 1);
						},
					},
					{
						key: 'showPage',
						value: function () {
							return this.displayText(this.getPage()), this;
						},
					},
					{
						key: 'showNextPage',
						value: function () {
							return this.displayText(this.getNextPage()), this;
						},
					},
					{
						key: 'showPreviousPage',
						value: function () {
							return this.displayText(this.getPreviousPage()), this;
						},
					},
					{
						key: 'show',
						value: function () {
							return this.displayText(this.getLines()), this;
						},
					},
					{
						key: 'showNextLine',
						value: function () {
							return (
								this.displayText(
									this.setStartIdx(this.startLineIdx + 1).getLines()
								),
								this
							);
						},
					},
					{
						key: 'showPreviousLine',
						value: function () {
							return (
								this.displayText(
									this.setStartIdx(this.startLineIdx - 1).getLines()
								),
								this
							);
						},
					},
					{
						key: 'setStartIdx',
						value: function (t) {
							return (
								(t = Dc(t, 0, this.totalLinesCount - 1)),
								(this.startLineIdx = t),
								this
							);
						},
					},
					{
						key: 'resetPageIdx',
						value: function () {
							this.pageIndex = -1;
						},
					},
					{
						key: 'setPageIdx',
						value: function (t) {
							return (
								(t = Dc(t, 0, this.pageCount - 1)),
								(this.pageIndex = t),
								this.setStartIdx(this.pageIndex * this.pageLinesCount),
								this
							);
						},
					},
					{
						key: 'pageLinesCount',
						get: function () {
							if (void 0 !== this.maxLines) return this.maxLines;
							var t;
							switch (this.textObjectType) {
								case 0:
								case 1:
									var e = this.gameObject.style.maxLines;
									t = 0 < e ? e : this.totalLinesCount;
									break;
								case 2:
									t = this.totalLinesCount;
							}
							return t;
						},
					},
					{
						key: 'getLines',
						value: function (t) {
							void 0 === t && (t = this.startLineIdx);
							var e,
								i = t + this.pageLinesCount;
							switch (this.textObjectType) {
								case 0:
									e = this.lines.slice(t, i).join('\n');
									break;
								case 1:
									var n = this.lines.getLineStartIndex(t),
										s = this.lines.getLineEndIndex(i - 1);
									e = this.lines.getSliceTagText(n, s, !0);
									break;
								case 2:
									e = this.lines.slice(t, i).join('\n');
							}
							return e;
						},
					},
					{
						key: 'displayText',
						value: function (t) {
							this.gameObject.setText(t);
						},
					},
				]),
				i
			);
		})(),
		Rc = function (t) {
			return (
				Array.isArray(t)
					? (t = t.join('\n'))
					: 'number' == typeof t && (t = t.toString()),
				t
			);
		},
		Lc = Phaser.Utils.Objects.GetFastValue,
		Yc = Phaser.Utils.Objects.GetValue,
		Ic = (function () {
			function i(t, e) {
				B(this, i),
					(this.gameObject = t),
					(this.scene = tr(t)),
					this.setEventEmitter(Yc(e, 'eventEmitter', void 0)),
					(this.timer = null),
					this.resetFromJSON(e),
					this.boot();
			}
			return (
				m(i, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							this.setTypeMode(Yc(t, 'typeMode', 0)),
								this.setTypeSpeed(Yc(t, 'speed', 333)),
								(this.setTextCallback = Lc(t, 'setTextCallback', null)),
								(this.setTextCallbackScope = Lc(
									t,
									'setTextCallbackScope',
									null
								)),
								(this.typingIdx = Lc(t, 'typingIdx', 0)),
								(this.text = Ac(Lc(t, 'text', ''))),
								(this.textLen = Lc(t, 'textLen', 0)),
								(this.insertIdx = Lc(t, 'insertIdx', null));
							var e = Lc(t, 'elapsed', null);
							return (
								null !== e && this.start(void 0, void 0, this.typingIdx, e),
								this
							);
						},
					},
					{
						key: 'toJSON',
						value: function () {
							var t,
								e = this.getTimer();
							return (
								(t = e ? e.elapsed : null),
								{
									typeMode: this.typeMode,
									speed: this.speed,
									setTextCallback: this.setTextCallback,
									setTextCallbackScope: this.setTextCallbackScope,
									typingIdx: this.typingIdx,
									text: this.text,
									textLen: this.textLen,
									insertIdx: this.insertIdx,
									elapsed: t,
								}
							);
						},
					},
					{
						key: 'boot',
						value: function () {
							return (
								this.gameObject.once &&
									this.gameObject.on('destroy', this.destroy, this),
								this
							);
						},
					},
					{
						key: 'shutdown',
						value: function () {
							return (
								this.destroyEventEmitter(),
								this.freeTimer(),
								(this.gameObject = void 0),
								(this.scene = void 0),
								this
							);
						},
					},
					{
						key: 'destroy',
						value: function () {
							return this.shutdown(), this;
						},
					},
					{
						key: 'setTypeMode',
						value: function (t) {
							return (
								'string' == typeof t && (t = Fc[t]), (this.typeMode = t), this
							);
						},
					},
					{
						key: 'setTypeSpeed',
						value: function (t) {
							return (this.speed = t), this;
						},
					},
					{
						key: 'isTyping',
						get: function () {
							return null !== this.getTimer();
						},
					},
					{
						key: 'isLastChar',
						get: function () {
							return this.typingIdx === this.textLen;
						},
					},
					{
						key: 'start',
						value: function (t, e, i, n) {
							return (
								void 0 !== t && this.setTypingContent(t),
								void 0 !== e && (this.speed = e),
								void 0 === i && (i = 0),
								(this.typingIdx = i + 1),
								0 === this.speed ? this.stop(!0) : this.startTimer(n),
								this
							);
						},
					},
					{
						key: 'appendText',
						value: function (t) {
							var e = this.text.concat(Ac(t));
							return (
								this.isTyping
									? this.setTypingContent(e)
									: this.start(e, void 0, this.textLen),
								this
							);
						},
					},
					{
						key: 'stop',
						value: function (t) {
							return (
								this.getTimer() && this.freeTimer(),
								t &&
									((this.typingIdx = this.textLen),
									this.setText(this.text),
									this.emit('type'),
									this.emit('complete', this, this.gameObject)),
								this
							);
						},
					},
					{
						key: 'pause',
						value: function () {
							var t = this.getTimer();
							return t && (t.paused = !0), this;
						},
					},
					{
						key: 'resume',
						value: function () {
							var t = this.getTimer();
							return t && (t.paused = !1), this;
						},
					},
					{
						key: 'setTypingContent',
						value: function (t) {
							return (
								(this.text = Ac(t)),
								(this.textLen = this.getTextLength(this.text)),
								this
							);
						},
					},
					{
						key: 'onTyping',
						value: function () {
							var t = this.getTypingString(
								this.text,
								this.typingIdx,
								this.textLen,
								this.typeMode
							);
							this.setText(t),
								this.emit('type'),
								this.isLastChar
									? (this.freeTimer(),
									  this.emit('complete', this, this.gameObject))
									: ((this.timer.delay = this.speed), this.typingIdx++);
						},
					},
					{
						key: 'getTypingString',
						value: function (t, e, i, n) {
							var s;
							if (0 === n) {
								var r = 0,
									o = e;
								(this.insertIdx = o), (s = this.getSubString(t, r, o));
							} else if (1 === n) {
								r = (o = i) - e;
								(this.insertIdx = 0), (s = this.getSubString(t, r, o));
							} else if (2 === n) {
								var h = i / 2;
								o = (r = Math.floor(h - e / 2)) + e;
								(this.insertIdx = e % 2 ? e : 0),
									(s = this.getSubString(t, r, o));
							} else if (3 === n) {
								var a,
									l = Math.floor(e / 2);
								if (0 < l) {
									r = (o = i) - l;
									a = this.getSubString(t, r, o);
								} else a = '';
								var u,
									c = e - l;
								if (0 < c) {
									o = (r = 0) + c;
									(this.insertIdx = o), (u = this.getSubString(t, r, o));
								} else (u = ''), (this.insertIdx = 0);
								s = u + a;
							}
							return s;
						},
					},
					{
						key: 'startTimer',
						value: function (t) {
							var e;
							return (
								this.timer && this.freeTimer(),
								(e = void 0 === t ? 0 : (this.speed, t)),
								(this.timer = this.scene.time.addEvent({
									delay: 0,
									startAt: e,
									loop: !0,
									callback: this.onTyping,
									callbackScope: this,
								})),
								this
							);
						},
					},
					{
						key: 'getTimer',
						value: function () {
							return this.timer;
						},
					},
					{
						key: 'freeTimer',
						value: function () {
							return (
								this.timer && (this.timer.remove(), (this.timer = null)), this
							);
						},
					},
					{
						key: 'setText',
						value: function (t) {
							this.setTextCallback &&
								(t = this.setTextCallbackScope
									? this.setTextCallback.call(
											this.setTextCallbackScope,
											t,
											this.isLastChar,
											this.insertIdx
									  )
									: this.setTextCallback(t, this.isLastChar, this.insertIdx)),
								this.gameObject.setText(t);
						},
					},
					{
						key: 'getTextLength',
						value: function (t) {
							var e = this.gameObject;
							return e.getPlainText ? e.getPlainText(t).length : t.length;
						},
					},
					{
						key: 'getSubString',
						value: function (t, e, i) {
							var n = this.gameObject;
							return n.getSubString ? n.getSubString(t, e, i) : t.slice(e, i);
						},
					},
				]),
				i
			);
		})();
	Object.assign(Ic.prototype, vr);
	var Ac = function (t) {
			return (
				Array.isArray(t)
					? (t = t.join('\n'))
					: 'number' == typeof t && (t = t.toString()),
				t
			);
		},
		Fc = {
			'left-to-right': 0,
			'right-to-left': 1,
			'middle-to-sides': 2,
			'sides-to-middle': 3,
		},
		Wc = Phaser.Utils.Objects.GetValue,
		Hc = (function () {
			b(r, fa);
			var s = w(r);
			function r(t, e) {
				var i;
				B(this, r),
					void 0 === e && (e = {text: Xc(t)}),
					((i = s.call(this, t, e)).type = 'rexTextBox');
				var n = i.childrenMap.text;
				return (
					(i.page = new jc(n, Wc(e, 'page', void 0))),
					(i.typing = new Ic(n, Wc(e, 'type', void 0))),
					i.typing.on('complete', i.onPageEnd, E(i)).on('type', i.onType, E(i)),
					(i.textWidth = n.width),
					(i.textHeight = n.height),
					i
				);
			}
			return (
				m(r, [
					{
						key: 'start',
						value: function (t, e) {
							return (
								this.page.setText(t),
								void 0 !== e && this.setTypeSpeed(e),
								this.typeNextPage(),
								this
							);
						},
					},
					{
						key: 'typeNextPage',
						value: function () {
							if (this.page.isLastPage) this.emit('complete');
							else {
								var t = this.page.getNextPage();
								this.typing.start(t);
							}
							return this;
						},
					},
					{
						key: 'pause',
						value: function () {
							return this.typing.pause(), this;
						},
					},
					{
						key: 'resume',
						value: function () {
							return this.typing.resume(), this;
						},
					},
					{
						key: 'stop',
						value: function (t) {
							return this.typing.stop(t), this;
						},
					},
					{
						key: 'setTypeSpeed',
						value: function (t) {
							return this.typing.setTypeSpeed(t), this;
						},
					},
					{
						key: 'isTyping',
						get: function () {
							return this.typing.isTyping;
						},
					},
					{
						key: 'isLastPage',
						get: function () {
							return this.page.isLastPage;
						},
					},
					{
						key: 'isFirstPage',
						get: function () {
							return this.page.isFirstPage;
						},
					},
					{
						key: 'pageCount',
						get: function () {
							return this.page.pageCount;
						},
					},
					{
						key: 'pageIndex',
						get: function () {
							return this.page.pageIndex;
						},
					},
					{
						key: 'onType',
						value: function () {
							var t = this.childrenMap.text;
							(this.textWidth === t.width && this.textHeight === t.height) ||
								((this.textWidth = t.width),
								(this.textHeight = t.height),
								this.getTopmostSizer().layout()),
								this.emit('type');
						},
					},
					{
						key: 'onPageEnd',
						value: function () {
							this.emit('pageend');
						},
					},
				]),
				r
			);
		})(),
		Xc = function (t) {
			return t.add.text(0, 0, '', {wordWrap: {width: 200}, maxLines: 5});
		};
	u.register('textBox', function (t) {
		var e = new Hc(this.scene, t);
		return this.scene.add.existing(e), e;
	}),
		G(window, 'RexPlugins.UI.TextBox', Hc);
	var Vc = Phaser.Utils.Objects.GetValue,
		Gc = (function () {
			b(g, Mh);
			var p = w(g);
			function g(t, e) {
				var i;
				B(this, g), ((i = p.call(this, t, e)).type = 'rexNumberBar');
				var n,
					s = Vc(e, 'background', void 0),
					r = Vc(e, 'icon', void 0),
					o = Vc(e, 'iconMask', void 0),
					h = Vc(e, 'slider', void 0),
					a = Vc(e, 'text', void 0),
					l = Vc(e, 'space.icon', 0),
					u = Vc(e, 'space.slider', 0);
				s && i.addBackground(s),
					r &&
						(0 === i.orientation
							? (h || a) && (c = {right: l})
							: (h || a) && (c = {bottom: l}),
						i.add(r, 0, 'center', c),
						(o = o && i.addChildMask(r, r, 1)));
				if (h) {
					var c, d;
					if (
						((h.orientation = i.orientation),
						(h.eventEmitter = E(i)),
						(h.value = null),
						h.hasOwnProperty('input') || (h.input = -1),
						(n = new El(t, h)),
						0 === i.orientation
							? a && (c = {right: u})
							: a && (c = {bottom: u}),
						0 === i.orientation)
					)
						d = void 0 === Vc(h, 'width', void 0) ? 1 : 0;
					else d = void 0 === Vc(h, 'height', void 0) ? 1 : 0;
					i.add(n, d, 'center', c);
				}
				a && i.add(a),
					i.addChildrenMap('background', s),
					i.addChildrenMap('icon', r),
					i.addChildrenMap('iconMask', o),
					i.addChildrenMap('slider', n),
					i.addChildrenMap('text', a);
				var f = Vc(e, 'valuechangeCallback', null);
				if (null !== f) {
					var v = Vc(e, 'valuechangeCallbackScope', void 0);
					i.on('valuechange', f, v);
				}
				return (
					i.setEnable(Vc(e, 'enable', void 0)), i.setValue(Vc(e, 'value', 0)), i
				);
			}
			return (
				m(g, [
					{
						key: 'setEnable',
						value: function (t) {
							return (
								this.childrenMap.slider && this.childrenMap.slider.setEnable(t),
								this
							);
						},
					},
					{
						key: 'value',
						get: function () {
							return this.childrenMap.slider
								? this.childrenMap.slider.value
								: 0;
						},
						set: function (t) {
							this.childrenMap.slider && (this.childrenMap.slider.value = t);
						},
					},
					{
						key: 'setValue',
						value: function (t, e, i) {
							return (
								this.childrenMap.slider &&
									this.childrenMap.slider.setValue(t, e, i),
								this
							);
						},
					},
					{
						key: 'addValue',
						value: function (t, e, i) {
							return (
								this.childrenMap.slider &&
									this.childrenMap.slider.addValue(t, e, i),
								this
							);
						},
					},
					{
						key: 'getValue',
						value: function (t, e) {
							return this.childrenMap.slider
								? this.childrenMap.slider.getValue(t, e)
								: 0;
						},
					},
					{
						key: 'easeValueTo',
						value: function (t, e, i) {
							return (
								this.childrenMap.slider &&
									this.childrenMap.slider.easeValueTo(t, e, i),
								this
							);
						},
					},
					{
						key: 'text',
						get: function () {
							var t = this.childrenMap.text;
							return void 0 === t ? '' : t.text ? t.text : t.getData('text');
						},
						set: function (t) {
							var e = this.childrenMap.text;
							void 0 !== e && (e.setText ? e.setText(t) : e.setData('text', t));
						},
					},
					{
						key: 'setText',
						value: function (t) {
							return (this.text = t), this;
						},
					},
				]),
				g
			);
		})(),
		Uc = {addChildMask: aa};
	Object.assign(Gc.prototype, Uc),
		u.register('numberBar', function (t) {
			var e = new Gc(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.NumberBar', Gc);
	var Nc = Vi.prototype.setChildVisible,
		Jc = {
			addPage: function (t, e, i, n, s) {
				return t.setVisible(!1), this.add(t, e, i, n, s), this;
			},
			getPage: function (t) {
				return void 0 !== t && this.sizerChildren.hasOwnProperty(t)
					? this.sizerChildren[t]
					: null;
			},
			swapPage: function (t) {
				this._previousKey = this._currentKey;
				var e = this.previousPage;
				e &&
					(0 === this.swapMode
						? (Nc.call(this, e, !1),
						  this.emit('pageinvisible', e, this._previousKey, this))
						: e.destroy()),
					t &&
						!this.sizerChildren.hasOwnProperty(t) &&
						this.emit('createpage', t, this),
					(this._currentKey = t);
				var i = this.currentPage;
				return (
					i &&
						(Nc.call(this, i, !0),
						this.emit('pagevisible', i, this._currentKey, this)),
					this
				);
			},
		},
		Kc = Phaser.Utils.Objects.GetValue,
		Zc = (function () {
			b(s, bo);
			var n = w(s);
			function s(t, e) {
				var i;
				return (
					B(this, s),
					((i = n.call(this, t, e)).type = 'rexPages'),
					(i.childrenMap = i.sizerChildren),
					(i._previousKey = void 0),
					(i._currentKey = void 0),
					i.setSwapMode(Kc(e, 'swapMode', 0)),
					i
				);
			}
			return (
				m(s, [
					{
						key: 'setSwapMode',
						value: function (t) {
							return (
								'string' == typeof t && (t = qc[t]), (this.swapMode = t), this
							);
						},
					},
					{
						key: 'previousKey',
						get: function () {
							return this._previousKey;
						},
					},
					{
						key: 'currentKey',
						get: function () {
							return this._currentKey;
						},
						set: function (t) {
							this.swapPage(t);
						},
					},
					{
						key: 'currentPage',
						get: function () {
							return this.getPage(this.currentKey);
						},
					},
					{
						key: 'previousPage',
						get: function () {
							return this.getPage(this.previousKey);
						},
					},
					{
						key: 'keys',
						get: function () {
							return Object.keys(this.sizerChildren);
						},
					},
				]),
				s
			);
		})();
	Object.assign(Zc.prototype, Jc);
	var qc = {invisible: 0, destroy: 1};
	u.register('pages', function (t) {
		var e = new Zc(this.scene, t);
		return this.scene.add.existing(e), e;
	}),
		G(window, 'RexPlugins.UI.Pages', Zc);
	function $c(t) {
		return (
			(t - this.textLineSpacing) / (this.textLineHeight + this.textLineSpacing)
		);
	}
	function Qc(t) {
		return (
			t * (this.textLineHeight + this.textLineSpacing) - this.textLineSpacing
		);
	}
	function td() {
		var t = this.textObject.rexSizer;
		(this.textObject.y += t.offsetY - t.preOffsetY),
			(t.preOffsetY = t.offsetY),
			this.resetChildPositionState(this.textObject);
	}
	var ed = {
			addChildMask: aa,
			setText: function (t) {
				switch ((void 0 !== t && (this.text = t), this.textObjectType)) {
					case 0:
						(this.lines = this.textObject.getWrappedText(this.text)),
							(this.linesCount = this.lines.length);
						break;
					case 1:
						(this.lines = this.textObject.getPenManager(this.text, this.lines)),
							(this.linesCount = this.lines.linesCount);
						break;
					case 2:
						(this.lines = this.textObject
							.setText(this.text)
							.getTextBounds()
							.wrappedText.split('\n')),
							(this.linesCount = this.lines.length);
				}
				return (
					(this._textHeight = void 0),
					(this._textVisibleHeight = void 0),
					this.updateTextObject(),
					this
				);
			},
			updateTextObject: function () {
				var t = Math.max(Math.floor($c.call(this, -this.textOY)), 0),
					e = Qc.call(this, t) + this.textOY;
				return (
					this.textObject.setText(
						function (t) {
							var e,
								i = t + this.visibleLinesCount;
							switch (this.textObjectType) {
								case 0:
									e = this.lines.slice(t, i).join('\n');
									break;
								case 1:
									var n = this.lines.getLineStartIndex(t),
										s = this.lines.getLineEndIndex(i - 1);
									e = this.lines.getSliceTagText(n, s, !0);
									break;
								case 2:
									e = this.lines.slice(t, i).join('\n');
							}
							return e;
						}.call(this, t)
					),
					(this.textObject.rexSizer.offsetY = e),
					td.call(this),
					this
				);
			},
			preLayout: function () {
				return (
					(this._textLineHeight = void 0),
					(this._textLineSpacing = void 0),
					(this._visibleLinesCount = void 0),
					(this._textHeight = void 0),
					(this._textVisibleHeight = void 0),
					Zs.call(this),
					this
				);
			},
			layoutChildren: function () {
				var t,
					e,
					i,
					n,
					s,
					r,
					o,
					h = this.left,
					a = this.top;
				(t = this.textObject).rexSizer.hidden ||
					((n = h + (i = (e = t.rexSizer).padding).left),
					(s = a + i.top),
					(r = this.width - i.left - i.right),
					(o = this.height - i.top - i.bottom),
					function (t, e, i) {
						if (
							((i += this.textLineHeight + this.textLineSpacing),
							this.textObjectWidth !== e || this.textObjectHeight !== i)
						) {
							switch (
								((this.textObjectWidth = e),
								(this.textObjectHeight = i),
								this.textObjectType)
							) {
								case 0:
								case 1:
									t.setFixedSize(e, i);
									var n = t.style,
										s = Math.max(e, 0);
									0 === this.textObjectType
										? (n.wordWrapWidth = s)
										: (0 === n.wrapMode && (n.wrapMode = 1), (n.wrapWidth = s));
									break;
								case 2:
									t.setMaxWidth(e);
							}
							this.setText();
						}
					}.call(this, t, r, o),
					xs.setPosition(n, s).setSize(r, o),
					Gs(t, xs, e.align),
					(e.preOffsetY = 0),
					td.call(this),
					this.textMask &&
						(this.textMask.setPosition().resize(),
						this.resetChildPositionState(this.textMask)));
			},
		},
		id = Phaser.Utils.Objects.IsPlainObject,
		nd = Phaser.Utils.Objects.GetValue,
		sd = Phaser.Display.Align.TOP_LEFT,
		rd = (function () {
			b(d, ho);
			var c = w(d);
			function d(t, e, i, n, s, r) {
				var o;
				B(this, d),
					id(e)
						? ((e = nd((r = e), 'x', 0)),
						  (i = nd(r, 'y', 0)),
						  (n = nd(r, 'width', void 0)),
						  (s = nd(r, 'height', void 0)))
						: id(n) &&
						  ((n = nd((r = n), 'width', void 0)),
						  (s = nd(r, 'height', void 0))),
					((o = c.call(this, t, e, i, n, s, r)).type = 'rexTextBlock'),
					(o.textObject = void 0),
					(o.linesCount = 0),
					(o.textMask = void 0),
					(o.textObjectType = void 0),
					(o._textLineHeight = void 0),
					(o._textLineSpacing = void 0),
					(o._visibleLinesCount = void 0),
					(o._textHeight = void 0),
					(o._textVisibleHeight = void 0),
					(o.lines = void 0),
					(o.text = nd(r, 'content', '')),
					(o._textOY = 0),
					(o.execeedTopState = !1),
					(o.execeedBottomState = !1),
					o.setClampMode(nd(r, 'clamplTextOY', !0));
				var h = nd(r, 'background', void 0),
					a = nd(r, 'text', void 0);
				void 0 === a && (a = od(t));
				var l = nd(r, 'textMask', !0);
				h && o.addBackground(h), o.add(a), (o.sizerChildren = [a]);
				var u = o.getSizerConfig(a);
				return (
					(u.align = sd),
					(u.padding = Us(0)),
					(u.expand = !0),
					(o.textObject = a),
					(o.textObjectType = _c(a) ? 2 : Mc(a) ? 0 : 1),
					(u.preOffsetY = 0),
					(u.offsetY = 0),
					l && (o.textMask = o.addChildMask(o.textObject, E(o))),
					o.addChildrenMap('background', h),
					o.addChildrenMap('text', a),
					o
				);
			}
			return (
				m(d, [
					{
						key: 'destroy',
						value: function (t) {
							if (this.scene) {
								if (
									((this.textObject = void 0),
									(this.textMask = void 0) !== this.lines)
								)
									switch (this.textObjectType) {
										case 0:
											this.lines.length = 0;
											break;
										case 1:
											this.lines.destroy();
											break;
										case 2:
											this.lines.length = 0;
									}
								C(x(d.prototype), 'destroy', this).call(this, t);
							}
						},
					},
					{
						key: 'setClampMode',
						value: function (t) {
							return void 0 === t && (t = !0), (this.clampTextOY = t), this;
						},
					},
					{
						key: 'textLineHeight',
						get: function () {
							if (void 0 === this._textLineHeight) {
								var t;
								switch (this.textObjectType) {
									case 0:
									case 1:
										var e = this.textObject.style;
										t = e.metrics.fontSize + e.strokeThickness;
										break;
									case 2:
										var i =
											this.textObject.fontSize / this.textObject.fontData.size;
										t = this.textObject.fontData.lineHeight * i;
								}
								this._textLineHeight = t;
							}
							return this._textLineHeight;
						},
					},
					{
						key: 'textLineSpacing',
						get: function () {
							if (void 0 === this._textLineSpacing) {
								var t;
								switch (this.textObjectType) {
									case 0:
									case 1:
										t = this.textObject.lineSpacing;
										break;
									case 2:
										t = 0;
								}
								this._textLineSpacing = t;
							}
							return this._textLineSpacing;
						},
					},
					{
						key: 'visibleLinesCount',
						get: function () {
							return (
								void 0 === this._visibleLinesCount &&
									(this._visibleLinesCount = Math.floor(
										$c.call(this, this.textObjectHeight)
									)),
								this._visibleLinesCount
							);
						},
					},
					{
						key: 'topTextOY',
						get: function () {
							return 0;
						},
					},
					{
						key: 'bottomTextOY',
						get: function () {
							return -this.textVisibleHeight;
						},
					},
					{
						key: 'textHeight',
						get: function () {
							return (
								void 0 === this._textHeight &&
									(this._textHeight = Qc.call(this, this.linesCount)),
								this._textHeight
							);
						},
					},
					{
						key: 'textVisibleHeight',
						get: function () {
							if (void 0 === this._textVisibleHeight) {
								var t,
									e = this.textHeight,
									i =
										this.textObjectHeight -
										this.textLineHeight -
										this.textLineSpacing;
								(t = i < e ? e - i : 0), (this._textVisibleHeight = t);
							}
							return this._textVisibleHeight;
						},
					},
					{
						key: 'textOYExceedTop',
						value: function (t) {
							return void 0 === t && (t = this.textOY), t > this.topTextOY;
						},
					},
					{
						key: 'textOYExeceedBottom',
						value: function (t) {
							return void 0 === t && (t = this.textOY), t < this.bottomTextOY;
						},
					},
					{
						key: 'textOY',
						get: function () {
							return this._textOY;
						},
						set: function (t) {
							var e = this.topTextOY,
								i = this.bottomTextOY,
								n = this.textOYExceedTop(t),
								s = this.textOYExeceedBottom(t);
							this.clampTextOY &&
								(this.visibleLinesCount > this.linesCount
									? (t = 0)
									: n
									? (t = e)
									: s && (t = i)),
								this._textOY !== t &&
									((this._textOY = t), this.updateTextObject()),
								n &&
									(this.execeedTopState || this.emit('execeedtop', this, t, e)),
								(this.execeedTopState = n),
								s &&
									(this.execeedBottomState ||
										this.emit('execeedbottom', this, t, i)),
								(this.execeedBottomState = s);
						},
					},
					{
						key: 'setTextOY',
						value: function (t) {
							return (this.textOY = t), this;
						},
					},
					{
						key: 't',
						get: function () {
							var t = this.textVisibleHeight;
							return 0 === t ? 0 : this.textOY / -t;
						},
						set: function (t) {
							this.textOY = -this.textVisibleHeight * t;
						},
					},
					{
						key: 'setTextOYByPercentage',
						value: function (t) {
							return (this.t = t), this;
						},
					},
				]),
				d
			);
		})(),
		od = function (t) {
			return t.add.text(0, 0, '');
		};
	Object.assign(rd.prototype, ed);
	var hd = Phaser.Utils.Objects.GetValue,
		ad = (function () {
			b(v, Ql);
			var f = w(v);
			function v(t, e) {
				var i;
				B(this, v), void 0 === e && (e = {});
				var n = hd(e, 'text', void 0),
					s = hd(e, 'textWidth', void 0),
					r = hd(e, 'textHeight', void 0),
					o = hd(e, 'textMask', !0),
					h = hd(e, 'content', ''),
					a = new rd(t, {
						width: s,
						height: r,
						text: n,
						textMask: o,
						content: h,
						clamplTextOY: hd(e, 'clamplChildOY', !1),
					});
				t.add.existing(a);
				var l,
					u = void 0 === s ? 1 : 0,
					c = void 0 === r;
				(l = a),
					Object.defineProperty(l, 'childOY', {
						configurable: !0,
						get: function () {
							return l.textOY;
						},
						set: function (t) {
							l.textOY = t;
						},
					}),
					Object.defineProperty(l, 'topChildOY', {
						get: function () {
							return l.topTextOY;
						},
					}),
					Object.defineProperty(l, 'bottomChildOY', {
						get: function () {
							return l.bottomTextOY;
						},
					}),
					(e.scrollMode = 0),
					(e.type = 'rexTextArea'),
					(e.child = {gameObject: a, proportion: u, expand: c});
				var d = hd(e, 'space', void 0);
				return (
					d && (d.child = d.text),
					(i = f.call(this, t, e)).addChildrenMap('text', n),
					i
				);
			}
			return (
				m(v, [
					{
						key: 'text',
						get: function () {
							return this.childrenMap.child.text;
						},
					},
					{
						key: 'linesCount',
						get: function () {
							return this.childrenMap.child.linesCount;
						},
					},
					{
						key: 'contentHeight',
						get: function () {
							return this.childrenMap.child.textHeight;
						},
					},
				]),
				v
			);
		})(),
		ld = {
			setText: function (t) {
				return this.childrenMap.child.setText(t), this.resizeController(), this;
			},
			appendText: function (t) {
				return this.setText(this.text + t), this;
			},
		};
	Object.assign(ad.prototype, ld),
		u.register('textArea', function (t) {
			var e = new ad(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.TextArea', ad);
	var ud = {update: 0, everyTick: 1},
		cd = {
			setMaskUpdateMode: function (t) {
				return (
					'string' == typeof t && (t = ud[t]), (this.maskUpdateMode = t), this
				);
			},
			startMaskUpdate: function () {
				this.scene.game.events.on('poststep', this.maskChildren, this);
			},
			stopMaskUpdate: function () {
				this.scene.game.events.off('poststep', this.maskChildren, this);
			},
			addChildMask: aa,
			enableChildrenMask: function (t) {
				var e = this.addChildMask(null, this, 0, t);
				return (this.childrenMask = e.createGeometryMask()), this;
			},
			setMaskChildrenFlag: function (t) {
				return void 0 === t && (t = !0), (this.maskChildrenFlag = t), this;
			},
			maskChildren: function () {
				return (
					this.childrenMask &&
						this.maskChildrenFlag &&
						0 !== this.alpha &&
						this.visible &&
						(su(this, this.childrenMask, this.getAllChildren()),
						0 === this.maskUpdateMode && (this.maskChildrenFlag = !1)),
					this
				);
			},
			layoutChildrenMask: function () {
				if (void 0 === this.childrenMask) return this;
				var t = nu(this.childrenMask);
				return t.setPosition().resize(), this.resetChildPositionState(t), this;
			},
		},
		dd = {
			getChildrenWidth: function () {
				if (this.rexSizer.hidden) return 0;
				var t = this.child;
				return !t.rexSizer.hidden && 0 === this.scrollMode
					? this.getChildWidth(t)
					: 0;
			},
			getChildrenHeight: function () {
				if (this.rexSizer.hidden) return 0;
				var t = this.child;
				return t.rexSizer.hidden || 0 === this.scrollMode
					? 0
					: t.isRexSizer
					? Math.max(t.minHeight, t.childrenHeight)
					: t.hasOwnProperty('minHeight')
					? t.minHeight
					: ws(t);
			},
			getChildrenSizers: function (t) {
				return (
					void 0 === t && (t = []),
					this.child && this.child.isRexSizer && t.push(this.child),
					t
				);
			},
			resetChildPosition: function () {
				var t = this.left,
					e = this.top;
				0 === this.scrollMode ? (e += this.childOY) : (t += this.childOY),
					this.child.setPosition(t, e),
					this.resetChildPositionState(this.child),
					this.setMaskChildrenFlag();
			},
			layoutChildren: function () {
				var t,
					e,
					i = this.child;
				i.rexSizer.hidden ||
					(0 === this.scrollMode ? (t = this.width) : (e = this.height),
					i.isRexSizer ? i.runLayout(this, t, e) : _r(i, t, e),
					this.layoutChildrenMask(),
					this.resetChildPosition(),
					this.maskChildren());
			},
		};
	Object.assign(dd, cd);
	var fd = Phaser.Utils.Objects.IsPlainObject,
		vd = Phaser.Utils.Objects.GetValue,
		pd = Phaser.Display.Align.TOP_LEFT,
		gd = (function () {
			b(p, ho);
			var v = w(p);
			function p(t, e, i, n, s, r) {
				var o;
				B(this, p),
					fd(e)
						? ((e = vd((r = e), 'x', 0)),
						  (i = vd(r, 'y', 0)),
						  (n = vd(r, 'width', void 0)),
						  (s = vd(r, 'height', void 0)))
						: fd(n) &&
						  ((n = vd((r = n), 'width', void 0)),
						  (s = vd(r, 'height', void 0))),
					((o = v.call(this, t, e, i, n, s, r)).type = 'rexScrollableBlock'),
					(o.child = void 0),
					(o.childrenMask = void 0),
					(o._childOY = 0),
					(o.execeedTopState = !1),
					(o.execeedBottomState = !1),
					o.setScrollMode(vd(r, 'scrollMode', !0)),
					o.setClampMode(vd(r, 'clamplChildOY', !0));
				var h = vd(r, 'child', void 0),
					a = vd(r, 'expand', !0),
					l = vd(r, 'mask', void 0);
				h.setOrigin && h.setOrigin(0), o.add(h), (o.sizerChildren = [h]);
				var u,
					c,
					d,
					f = o.getSizerConfig(h);
				return (
					(f.align = pd),
					(f.expand = a),
					(o.child = h),
					!0 === l
						? ((u = !0), (d = c = 0))
						: !1 === l
						? (u = !1)
						: ((u = vd(l, 'mask', !0)),
						  (c = vd(l, 'padding', 0)),
						  (d = vd(r, 'updateMode', 0))),
					u &&
						(o.setMaskUpdateMode(d),
						o.enableChildrenMask(c),
						o.startMaskUpdate()),
					o
				);
			}
			return (
				m(p, [
					{
						key: 'destroy',
						value: function (t) {
							this.scene &&
								(this.childrenMask && this.stopMaskUpdate(),
								(this.child = void 0),
								this.childrenMask &&
									(this.childrenMask.destroy(), (this.childrenMask = void 0)),
								C(x(p.prototype), 'destroy', this).call(this, t));
						},
					},
					{
						key: 'setScrollMode',
						value: function (t) {
							return (
								'string' == typeof t && (t = Ll[t.toLowerCase()]),
								(this.scrollMode = t),
								this
							);
						},
					},
					{
						key: 'setClampMode',
						value: function (t) {
							return void 0 === t && (t = !0), (this.clampChildOY = t), this;
						},
					},
					{
						key: 'instHeight',
						get: function () {
							return 0 === this.scrollMode ? this.height : this.width;
						},
					},
					{
						key: 'instWidth',
						get: function () {
							return 0 === this.scrollMode ? this.width : this.height;
						},
					},
					{
						key: 'childHeight',
						get: function () {
							return (0 === this.scrollMode ? ws : Cs)(this.child);
						},
					},
					{
						key: 'childWidth',
						get: function () {
							return (0 === this.scrollMode ? Cs : ws)(this.child);
						},
					},
					{
						key: 'topChildOY',
						get: function () {
							return 0;
						},
					},
					{
						key: 'bottomChildOY',
						get: function () {
							return -this.visibleHeight;
						},
					},
					{
						key: 'visibleHeight',
						get: function () {
							var t = this.childHeight,
								e = this.instHeight;
							return e < t ? t - e : 0;
						},
					},
					{
						key: 'childOYExceedTop',
						value: function (t) {
							return void 0 === t && (t = this.childOY), t > this.topChildOY;
						},
					},
					{
						key: 'childOYExeceedBottom',
						value: function (t) {
							return void 0 === t && (t = this.childOY), t < this.bottomChildOY;
						},
					},
					{
						key: 'childOY',
						get: function () {
							return this._childOY;
						},
						set: function (t) {
							var e = this.topChildOY,
								i = this.bottomChildOY,
								n = this.childOYExceedTop(t),
								s = this.childOYExeceedBottom(t);
							this.clampChildOY &&
								(this.instHeight > this.childHeight
									? (t = 0)
									: n
									? (t = e)
									: s && (t = i)),
								this._childOY !== t &&
									((this._childOY = t), this.resetChildPosition()),
								n &&
									(this.execeedTopState || this.emit('execeedtop', this, t, e)),
								(this.execeedTopState = n),
								s &&
									(this.execeedBottomState ||
										this.emit('execeedbottom', this, t, i)),
								(this.execeedBottomState = s);
						},
					},
					{
						key: 'setChildOY',
						value: function (t) {
							return (this.childOY = t), this;
						},
					},
					{
						key: 't',
						get: function () {
							var t = this.visibleHeight;
							return 0 === t ? 0 : this.childOY / -t;
						},
						set: function (t) {
							this.childOY = -this.visibleHeight * t;
						},
					},
					{
						key: 'setChildOYByPercentage',
						value: function (t) {
							return (this.t = t), this;
						},
					},
				]),
				p
			);
		})();
	Object.assign(gd.prototype, dd);
	var yd = Phaser.Utils.Objects.GetValue,
		kd = (function () {
			b(d, Ql);
			var c = w(d);
			function d(t, e) {
				var i;
				B(this, d), void 0 === e && (e = {});
				var n = Rl(e),
					s = yd(e, 'panel', void 0);
				void 0 === s && (s = {}),
					(s.scrollMode = n),
					(s.clamplChildOY = yd(e, 'clamplChildOY', !1));
				var r = new gd(t, s);
				t.add.existing(r);
				var o,
					h,
					a = yd(s, 'width', void 0),
					l = yd(s, 'height', void 0);
				(h =
					0 === n
						? ((o = void 0 === a ? 1 : 0), void 0 === l)
						: ((o = void 0 === l ? 1 : 0), void 0 === a)),
					(e.type = 'rexScrollablePanel'),
					(e.child = {gameObject: r, proportion: o, expand: h});
				var u = yd(e, 'space', void 0);
				return (
					u && (u.child = u.panel),
					(i = c.call(this, t, e)).addChildrenMap(
						'panel',
						i.childrenMap.child.child
					),
					i
				);
			}
			return d;
		})();
	u.register('scrollablePanel', function (t) {
		var e = new kd(this.scene, t);
		return this.scene.add.existing(e), e;
	}),
		G(window, 'RexPlugins.UI.ScrollablePanel', kd);
	function md(t) {
		return Qs(t) ? t.events : t.on ? t : void 0;
	}
	function bd(t, e, i, n) {
		void 0 === i && (i = 0), void 0 === n && (n = e.length), (t.length = n - i);
		for (var s = 0, r = t.length; s < r; s++) t[s] = e[s + i];
		return t;
	}
	function xd(t) {
		return (
			'string' != typeof t ||
				('' === t
					? (t = null)
					: Bd.test(t)
					? (t = parseFloat(t))
					: 'false' === t
					? (t = !1)
					: 'true' === t && (t = !0)),
			t
		);
	}
	function Cd(t, e, i) {
		var n,
			s = Ed(i, 'reverse', !1);
		if (Ci(t[0]))
			if (s) for (r = (o = t.length) - 1; 0 <= r; r--) n = Cd(t[r], e, i);
			else for (var r = 0, o = t.length; r < o; r++) n = Cd(t[r], e, i);
		else n = Dd(t, e, i);
		return n;
	}
	var wd = {popUp: 0, fadeIn: 1, scaleDown: 0, fadeOut: 1},
		Sd = function (t, e) {
			t.popUp(e);
		},
		Pd = function (t, e) {
			t.scaleDown(e);
		},
		Od = function (t, e) {
			t.fadeIn(e);
		},
		Td = function (t, e) {
			t.fadeOut(e);
		},
		Md = Phaser.Utils.Objects.GetValue,
		_d = (function () {
			b(s, Lu);
			var n = w(s);
			function s(t, e) {
				var i;
				return (
					B(this, s),
					((i = n.call(this, t, e)).parent = t),
					(i.scene = tr(t)),
					i.resetFromJSON(e),
					i.boot(),
					i
				);
			}
			return (
				m(s, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								(this.isRunning = Md(t, 'isRunning', !1)),
								(this.timeScale = Md(t, 'timeScale', 1)),
								(this.now = Md(t, 'now', 0)),
								this
							);
						},
					},
					{
						key: 'toJSON',
						value: function () {
							return {
								isRunning: this.isRunning,
								timeScale: this.timeScale,
								now: this.now,
								tickingMode: this.tickingMode,
							};
						},
					},
					{
						key: 'boot',
						value: function () {
							C(x(s.prototype), 'boot', this).call(this);
							var t = md(this.parent);
							t && t.on('destroy', this.destroy, this);
						},
					},
					{
						key: 'shutdown',
						value: function () {
							C(x(s.prototype), 'shutdown', this).call(this),
								(this.parent = void 0),
								(this.scene = void 0);
						},
					},
					{
						key: 'destroy',
						value: function () {
							this.shutdown();
						},
					},
					{
						key: 'start',
						value: function (t) {
							return (
								void 0 === t && (t = 0),
								(this.now = t),
								C(x(s.prototype), 'start', this).call(this),
								this
							);
						},
					},
					{
						key: 'seek',
						value: function (t) {
							return (this.now = t), this;
						},
					},
					{
						key: 'tick',
						value: function (t) {
							return (
								(t *= this.timeScale),
								(this.now += t),
								this.emit('update', this.now, t),
								this
							);
						},
					},
				]),
				s
			);
		})(),
		zd = (function () {
			b(e, _d);
			var t = w(e);
			function e() {
				return B(this, e), t.apply(this, arguments);
			}
			return (
				m(e, [
					{
						key: 'startTicking',
						value: function () {
							C(x(e.prototype), 'startTicking', this).call(this),
								this.scene.events.on('update', this.update, this);
						},
					},
					{
						key: 'stopTicking',
						value: function () {
							C(x(e.prototype), 'stopTicking', this).call(this),
								this.scene &&
									this.scene.events.off('update', this.update, this);
						},
					},
					{
						key: 'update',
						value: function (t, e) {
							return (
								this.isRunning && 0 !== this.timeScale && this.tick(e), this
							);
						},
					},
				]),
				e
			);
		})(),
		Bd = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
		Ed = Phaser.Utils.Objects.GetValue,
		Dd = function (t, e, i) {
			var n,
				s = Ed(i, 'argsConvert', void 0),
				r = Ed(i, 'argsConvertScope', void 0),
				o = t[0];
			if (((jd = bd(jd, t, 1)), s)) {
				!0 === s && ((s = xd), (r = void 0));
				for (var h = 0, a = jd.length; h < a; h++)
					jd[h] = r ? s.call(r, jd[h], t) : s(jd[h], t);
			}
			return (
				'string' == typeof o
					? null == (n = e[o]) && (n = Ed(e, o, null))
					: (n = o),
				n.apply(e, jd)
			);
		},
		jd = [],
		Rd = Phaser.Utils.Objects.GetValue,
		Ld = (function () {
			function n(t, e) {
				B(this, n),
					(this.parent = t),
					(this.scene = tr(t)),
					this.setEventEmitter(Rd(e, 'eventEmitter', void 0));
				var i = Rd(e, 'clockClass', zd);
				(this.clock = new i(t, {eventEmitter: this.getEventEmitter()})),
					this.clock.on('update', this.update, this),
					this.resetFromJSON(e),
					this.boot();
			}
			return (
				m(n, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								this.clock.resetFromJSON(Rd(t, 'clock', void 0)),
								(this.state = Rd(t, 'state', 0)),
								(this.commands = Rd(t, 'commands', [])),
								(this.scope = Rd(t, 'scope', void 0)),
								this.setTimeUnit(Rd(t, 'timeUnit', 0)),
								this.setDtMode(Rd(t, 'dtMode', 0)),
								(this.index = Rd(t, 'index', 0)),
								(this.nextTime = Rd(t, 'nextTime', 0)),
								this
							);
						},
					},
					{
						key: 'toJSON',
						value: function () {
							return {
								clock: this.clock.toJSON(),
								state: this.state,
								commands: this.commands,
								scope: this.scope,
								timeUnit: this.timeUnit,
								dtMode: this.dtMode,
								index: this.index,
								nextTime: this.nextTime,
							};
						},
					},
					{
						key: 'boot',
						value: function () {
							var t = md(this.parent);
							t && t.on('destroy', this.destroy, this);
						},
					},
					{
						key: 'shutdown',
						value: function () {
							this.clock.shutdown(),
								(this.parent = void 0),
								(this.scene = void 0),
								(this.commands = void 0);
						},
					},
					{
						key: 'destroy',
						value: function () {
							this.shutdown();
						},
					},
					{
						key: 'load',
						value: function (t, e, i) {
							this.stop();
							var n = Rd(i, 'timeUnit', void 0);
							void 0 !== n && this.setTimeUnit(n);
							var s = Rd(i, 'dtMode', void 0);
							return (
								void 0 !== s && this.setDtMode(s),
								(t = t
									.filter(function (t) {
										var e = t[0];
										return !isNaN(e);
									})
									.map(function (t) {
										return (
											'string' == typeof t[0] && (t[0] = parseFloat(t[0])), t
										);
									})),
								0 === this.dtMode &&
									t.sort(function (t, e) {
										var i = t[0],
											n = e[0];
										return n < i ? 1 : i < n ? -1 : 0;
									}),
								(this.commands = t),
								(this.scope = e),
								this
							);
						},
					},
					{
						key: 'start',
						value: function (t) {
							return (
								void 0 === t && (t = 0),
								this.stop(),
								(this.index = 0),
								(this.state = 1),
								(this.nextTime = this.getNextDt(0)),
								this.clock.start(t),
								this.update(t),
								this
							);
						},
					},
					{
						key: 'pause',
						value: function () {
							return this.clock.pause(), this;
						},
					},
					{
						key: 'resume',
						value: function () {
							return this.clock.resume(), this;
						},
					},
					{
						key: 'stop',
						value: function () {
							return this.clock.stop(), (this.state = 0), this;
						},
					},
					{
						key: 'seek',
						value: function (t) {
							return this.clock.seek(t), this;
						},
					},
					{
						key: 'isPlaying',
						get: function () {
							return this.clock.isRunning;
						},
					},
					{
						key: 'completed',
						get: function () {
							return 2 === this.state;
						},
					},
					{
						key: 'setTimeScale',
						value: function (t) {
							return (this.clock.timeScale = t), this;
						},
					},
					{
						key: 'update',
						value: function (t) {
							if (this.nextTime > t) return this;
							for (var e = this.commands.length - 1; ; ) {
								var i = this.commands[this.index],
									n = i[1];
								if (
									(Ci(n) || (n = bd(Yd, i, 1)),
									Cd(n, this.scope),
									this.emit('runcommand', n, this.scope),
									this.index === e)
								)
									return this.complete(), this;
								if (
									(this.index++,
									(this.nextTime = this.getNextDt(this.nextTime)),
									this.nextTime > t)
								)
									return this;
							}
						},
					},
					{
						key: 'complete',
						value: function () {
							this.clock.complete(), (this.state = 2);
						},
					},
					{
						key: 'getNextDt',
						value: function (t) {
							var e = this.commands[this.index][0];
							return (
								1 === this.timeUnit && (e *= 1e3),
								1 === this.dtMode && (e += t),
								e
							);
						},
					},
					{
						key: 'setDtMode',
						value: function (t) {
							return (
								'string' == typeof t && (t = Ad[t]), (this.dtMode = t), this
							);
						},
					},
					{
						key: 'setTimeUnit',
						value: function (t) {
							return (
								'string' == typeof t && (t = Id[t]), (this.timeUnit = t), this
							);
						},
					},
				]),
				n
			);
		})();
	Object.assign(Ld.prototype, vr);
	var Yd = [],
		Id = {ms: 0, s: 1, sec: 1},
		Ad = {abs: 0, absolute: 0, inc: 1, increment: 1},
		Fd = Phaser.Utils.Objects.GetValue,
		Wd = (function () {
			b(s, fa);
			var n = w(s);
			function s(t, e) {
				var i;
				return (
					B(this, s),
					void 0 === e && (e = {text: createDefaultTextObject(t)}),
					((i = n.call(this, t, e)).type = 'rexToast'),
					i.setTransitInTime(Fd(e, 'duration.in', 200)),
					i.setDisplayTime(Fd(e, 'duration.hold', 1200)),
					i.setTransitOutTime(Fd(e, 'duration.out', 200)),
					i.setTransitInCallback(Fd(e, 'transitIn', wd.popUp)),
					i.setTransitOutCallback(Fd(e, 'transitOut', wd.scaleDown)),
					(i.player = new Ld(E(i), {dtMode: 1})),
					(i.messages = []),
					i.setVisible(!1),
					i
				);
			}
			return (
				m(s, [
					{
						key: 'destroy',
						value: function (t) {
							this.scene &&
								(this.player.destroy(),
								(this.player = void 0),
								(this.messages = void 0),
								C(x(s.prototype), 'destroy', this).call(this, t));
						},
					},
					{
						key: 'setDisplayTime',
						value: function (t) {
							return (this.displayTime = t), this;
						},
					},
					{
						key: 'setTransitOutTime',
						value: function (t) {
							return (this.transitOutTime = t), this;
						},
					},
					{
						key: 'setTransitInTime',
						value: function (t) {
							return (this.transitInTime = t), this;
						},
					},
					{
						key: 'setTransitInCallback',
						value: function (t) {
							switch (('string' == typeof t && (t = wd[t]), t)) {
								case wd.popUp:
									t = Sd;
									break;
								case wd.fadeIn:
									t = Od;
							}
							return (this.transitInCallback = t), this;
						},
					},
					{
						key: 'setTransitOutCallback',
						value: function (t) {
							switch (('string' == typeof t && (t = wd[t]), t)) {
								case wd.scaleDown:
									t = Pd;
									break;
								case wd.fadeOut:
									t = Td;
							}
							return (this.transitOutCallback = t), this;
						},
					},
					{
						key: 'show',
						value: function (t) {
							if (void 0 === t) {
								if (0 === this.messages.length) return this;
								t = this.messages.shift();
							}
							if (this.player.isPlaying) return this.messages.push(t), this;
							this.setScale(1, 1).setVisible(!0),
								'string' == typeof t ? this.setText(t) : t(this),
								this.layout();
							var e = [
								[0, [this.transitInCallback, this, this.transitInTime]],
								[this.transitInTime, [gt]],
								[
									this.displayTime,
									[this.transitOutCallback, this, this.transitOutTime],
								],
								[this.transitOutTime, [this.setVisible, !1]],
								[30, [gt]],
							];
							return (
								this.player
									.load(e, this)
									.once(
										'complete',
										function () {
											this.show();
										},
										this
									)
									.start(),
								this
							);
						},
					},
				]),
				s
			);
		})();
	u.register('toast', function (t) {
		var e = new Wd(this.scene, t);
		return this.scene.add.existing(e), e;
	}),
		G(window, 'RexPlugins.UI.Toast', Wd);
	function Hd(s, r) {
		return function (t, e, i, n) {
			'panel' !== e && i.moveChild(t, n ? 0 : s, r);
		};
	}
	function Xd(s, r) {
		return function (t, e, i, n) {
			'panel' === e && i.moveChild(t, n ? 0 : s, r);
		};
	}
	var Vd = {
			visible: {
				show: function () {
					return function (t, e, i, n) {
						'panel' !== e && i.setChildVisible(t, !0);
					};
				},
				hide: function () {
					return function (t, e, i, n) {
						'panel' !== e && i.setChildVisible(t, !1);
					};
				},
			},
			fade: {
				show: function (s, r) {
					return (
						void 0 === r && (r = 1),
						function (t, e, i, n) {
							'panel' !== e && i.fadeChild(t, n ? 0 : s, r);
						}
					);
				},
				hide: function (s, r) {
					return (
						void 0 === r && (r = 0),
						function (t, e, i, n) {
							'panel' !== e && i.fadeChild(t, n ? 0 : s, r);
						}
					);
				},
			},
			move: {show: Hd, hide: Hd},
			'move-panel': {show: Xd, hide: Xd},
		},
		Gd = Vi.prototype.setChildVisible,
		Ud = {
			setChildVisible: function (t, e) {
				if ('string' == typeof t) {
					var i = t;
					t = this.sizerChildren[i];
				} else i = yo(this.sizerChildren, t);
				return (
					void 0 === e && (e = this.currentChildKey === i),
					Gd.call(this, t, e),
					this
				);
			},
		},
		Nd = {
			fadeChild: function (t, e, i) {
				var n;
				return (
					'string' == typeof t
						? ((n = t), (t = this.sizerChildren[n]))
						: (n = yo(this.sizerChildren, t)),
					void 0 === e && (e = 500),
					void 0 === i && (i = this.currentChildKey === n ? 1 : 0),
					t.fadeIn(e, {start: t.alpha, end: i}),
					this
				);
			},
			fadeChildPromise: function (t, e, i) {
				return (
					'string' == typeof t && (t = this.sizerChildren[key]),
					this.fadeChild(t, e, i),
					t._fade ? br(t._fade) : Promise.resolve()
				);
			},
		},
		Jd = {
			moveChild: function (t, e, i, n) {
				var s;
				'string' == typeof t
					? ((s = t), (t = this.sizerChildren[s]))
					: (s = yo(this.sizerChildren, t)),
					void 0 === e && (e = 500);
				var r,
					o,
					h,
					a,
					l = this.currentChildKey === s;
				if (void 0 === n)
					switch (s) {
						case 'leftSide':
						case 'rightSide':
							n = Cs(t);
							break;
						case 'topSide':
						case 'bottomSide':
							n = ws(t);
							break;
						default:
							if (l)
								switch (this.previousChildKey) {
									case 'leftSide':
									case 'rightSide':
										n = Cs(this.sizerChildren[this.previousChildKey]);
										break;
									case 'topSide':
									case 'bottomSide':
										n = ws(this.sizerChildren[this.previousChildKey]);
										break;
									default:
										n = 0;
								}
							else
								switch (this.currentChildKey) {
									case 'leftSide':
									case 'rightSide':
										n = Cs(this.sizerChildren[this.currentChildKey]);
										break;
									case 'topSide':
									case 'bottomSide':
										n = ws(this.sizerChildren[this.currentChildKey]);
										break;
									default:
										n = 0;
								}
					}
				if (l)
					switch (s) {
						case 'panel':
							switch (this.previousChildKey) {
								case 'leftSide':
									r = !0;
									break;
								case 'rightSide':
									o = !0;
									break;
								case 'topSide':
									h = !0;
									break;
								case 'bottomSide':
									a = !0;
							}
							break;
						case 'leftSide':
							o = !0;
							break;
						case 'rightSide':
							r = !0;
							break;
						case 'topSide':
							a = !0;
							break;
						case 'bottomSide':
							h = !0;
					}
				else
					switch (s) {
						case 'panel':
							switch (this.currentChildKey) {
								case 'leftSide':
									o = !0;
									break;
								case 'rightSide':
									r = !0;
									break;
								case 'topSide':
									a = !0;
									break;
								case 'bottomSide':
									h = !0;
							}
							break;
						case 'leftSide':
							r = !0;
							break;
						case 'rightSide':
							o = !0;
							break;
						case 'topSide':
							h = !0;
							break;
						case 'bottomSide':
							a = !0;
					}
				return (
					r
						? t.moveTo(e, '-='.concat(n), void 0, i)
						: o
						? t.moveTo(e, '+='.concat(n), void 0, i)
						: h
						? t.moveTo(e, void 0, '-='.concat(n), i)
						: a
						? t.moveTo(e, void 0, '+='.concat(n), i)
						: t.moveTo(0),
					this
				);
			},
			moveChildPromise: function (t, e, i, n) {
				return (
					'string' == typeof t && (t = this.sizerChildren[key]),
					this.moveChild(t, e, i, n),
					t._easeMove ? br(t._easeMove) : Promise.resolve()
				);
			},
		},
		Kd = {};
	Object.assign(Kd, Ud, Nd, Jd);
	var Zd = Phaser.Utils.Objects.GetValue,
		qd = (function () {
			b(C, bo);
			var x = w(C);
			function C(t, e) {
				var i;
				B(this, C),
					((i = x.call(this, t, e)).type = 'rexSides'),
					(i.childrenMap = i.sizerChildren),
					(i.previousChildKey = void 0),
					(i.currentChildKey = void 0);
				var n,
					s,
					r,
					o,
					h,
					a,
					l = Zd(e, 'showChildCallback', void 0);
				if (l)
					if (Or(l)) {
						var u = Zd(e, 'showChildCallbackScope', void 0);
						i.on('showchild', l, u);
						var c = Zd(e, 'hideChildCallback', void 0),
							d = Zd(e, 'hideChildCallbackScope', void 0);
						i.on('hidechild', c, d);
					} else {
						var f =
							((a = S('string' == typeof (n = l) ? [n] : n)),
							(s = a[0]),
							(r = a.slice(1)),
							(h = Vd.hasOwnProperty(s)
								? ((o = Vd[s].show.apply(null, r)), Vd[s].hide.apply(null, r))
								: (o = gt)),
							{show: o, hide: h});
						i.on('showchild', f.show), i.on('hidechild', f.hide);
					}
				var v = Zd(e, 'background', void 0),
					p = Zd(e, 'panel', void 0),
					g = Zd(e, 'leftSide', void 0),
					y = Zd(e, 'rightSide', void 0),
					k = Zd(e, 'topSide', void 0),
					m = Zd(e, 'bottomSide', void 0);
				if (
					(v && i.addBackground(v), p && i.add(p, 'panel', 'center', 0, !0), g)
				) {
					var b = Zd(e, 'expand.left', !0);
					i.add(g, 'leftSide', 'left-top', 0, {height: b});
				}
				if (y) {
					b = Zd(e, 'expand.right', !0);
					i.add(y, 'rightSide', 'right-top', 0, {height: b});
				}
				if (k) {
					b = Zd(e, 'expand.top', !0);
					i.add(k, 'topSide', 'left-top', 0, {width: b});
				}
				if (m) {
					b = Zd(e, 'expand.bottom', !0);
					i.add(m, 'bottomSide', 'left-bottom', 0, {width: b});
				}
				return i;
			}
			return (
				m(C, [
					{
						key: 'reset',
						value: function () {
							return (
								(this.previousChildKey = void 0),
								(this.currentChildKey = 'panel'),
								this.showChild('panel', !0),
								this.hideChild('leftSide', !0),
								this.hideChild('rightSide', !0),
								this.hideChild('topSide', !0),
								this.hideChild('bottomSide', !0),
								this
							);
						},
					},
				]),
				C
			);
		})();
	Object.assign(
		qd.prototype,
		{
			showChild: function (t, e) {
				var i = this.sizerChildren[t];
				return (
					i && (this.emit('showchild', i, t, this, e), this.resetChildState(i)),
					this
				);
			},
			hideChild: function (t, e) {
				var i = this.sizerChildren[t];
				return (
					i && (this.emit('hidechild', i, t, this, e), this.resetChildState(i)),
					this
				);
			},
			swapChild: function (t, e) {
				return (
					this.currentChildKey === t ||
						('panel' === this.currentChildKey || 'panel' === t
							? ((this.previousChildKey = this.currentChildKey),
							  (this.currentChildKey = t),
							  this.hideChild(this.previousChildKey, e),
							  this.showChild(this.currentChildKey, e))
							: (this.swapChild('panel', e), this.swapChild(t, e))),
					this
				);
			},
			showPanel: function (t) {
				return this.swapChild('panel', t), this;
			},
			showLeftSide: function () {
				return this.swapChild('leftSide'), this;
			},
			showRightSide: function () {
				return this.swapChild('rightSide'), this;
			},
			showTopSide: function () {
				return this.swapChild('topSide'), this;
			},
			showBottomSide: function () {
				return this.swapChild('bottomSide'), this;
			},
			hideLeftSide: function () {
				return 'leftSide' == this.currentChildKey && this.showPanel(), this;
			},
			hideRightSide: function () {
				return 'rightSide' == this.currentChildKey && this.showPanel(), this;
			},
			hideTopSide: function () {
				return 'topSide' == this.currentChildKey && this.showPanel(), this;
			},
			hideBottomSide: function () {
				return 'bottomSide' == this.currentChildKey && this.showPanel(), this;
			},
			toggleLeftSide: function () {
				var t = 'panel' !== this.currentChildKey ? 'panel' : 'leftSide';
				return this.swapChild(t), this;
			},
			toggleRightSide: function () {
				var t = 'panel' !== this.currentChildKey ? 'panel' : 'rightSide';
				return this.swapChild(t), this;
			},
			toggleTopSide: function () {
				var t = 'panel' !== this.currentChildKey ? 'panel' : 'topSide';
				return this.swapChild(t), this;
			},
			toggleBottomSide: function () {
				var t = 'panel' !== this.currentChildKey ? 'panel' : 'bottomSide';
				return this.swapChild(t), this;
			},
		},
		Kd
	),
		u.register('sides', function (t) {
			var e = new qd(this.scene, t);
			return this.scene.add.existing(e), e;
		}),
		G(window, 'RexPlugins.UI.Sides', qd),
		u.register('click', function (t, e) {
			return er(t) || ((e = t), (t = this.scene)), new ga(t, e);
		}),
		G(window, 'RexPlugins.UI.Click', ga),
		u.register('tap', function (t, e) {
			return er(t) || ((e = t), (t = this.scene)), new Gu(t, e);
		}),
		G(window, 'RexPlugins.UI.Tap', Gu),
		u.register('press', function (t, e) {
			return er(t) || ((e = t), (t = this.scene)), new qu(t, e);
		}),
		G(window, 'RexPlugins.UI.Press', qu),
		u.register('swipe', function (t, e) {
			return er(t) || ((e = t), (t = this.scene)), new lc(t, e);
		}),
		G(window, 'RexPlugins.UI.Swipe', lc);
	var $d = Phaser.Utils.Objects.GetValue,
		Qd = (function () {
			b(o, Au);
			var r = w(o);
			function o(t, e) {
				var i;
				B(this, o);
				var n = E((i = r.call(this, t, e))),
					s = {
						states: {
							IDLE: {},
							BEGIN: {
								enter: function () {
									var t = n.pointer;
									(n.startX = t.x),
										(n.startY = t.y),
										(n.startWorldX = t.worldX),
										(n.startWorldY = t.worldY);
								},
							},
							RECOGNIZED: {
								enter: function () {
									n.emit('panstart', n, n.gameObject, n.lastPointer);
								},
								exit: function () {
									var t = n.lastPointer;
									(n.endX = t.x),
										(n.endY = t.y),
										(n.endWorldX = t.worldX),
										(n.endWorldY = t.worldY),
										n.emit('panend', n, n.gameObject, n.lastPointer);
								},
							},
						},
						init: function () {
							this.state = tf;
						},
						eventEmitter: !1,
					};
				return i.setRecongizedStateObject(new Al(s)), i;
			}
			return (
				m(o, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								C(x(o.prototype), 'resetFromJSON', this).call(this, t),
								this.setDragThreshold($d(t, 'threshold', 10)),
								this
							);
						},
					},
					{
						key: 'onDragStart',
						value: function () {
							(this.state = ef), 0 === this.dragThreshold && (this.state = nf);
						},
					},
					{
						key: 'onDragEnd',
						value: function () {
							this.state = tf;
						},
					},
					{
						key: 'onDrag',
						value: function () {
							switch (this.state) {
								case ef:
									this.pointer.getDistance() >= this.dragThreshold &&
										(this.state = nf);
									break;
								case nf:
									var t = this.pointer.position,
										e = this.pointer.prevPosition;
									(this.dx = t.x - e.x), (this.dy = t.y - e.y);
									var i = this.pointer;
									(this.x = i.x),
										(this.y = i.y),
										(this.worldX = i.worldX),
										(this.worldY = i.worldY),
										this.emit('pan', this, this.gameObject, this.lastPointer);
							}
						},
					},
					{
						key: 'isPan',
						get: function () {
							return this.state === nf;
						},
					},
					{
						key: 'setDragThreshold',
						value: function (t) {
							return (this.dragThreshold = t), this;
						},
					},
				]),
				o
			);
		})(),
		tf = 'IDLE',
		ef = 'BEGIN',
		nf = 'RECOGNIZED';
	u.register('pan', function (t, e) {
		return er(t) || ((e = t), (t = this.scene)), new Qd(t, e);
	}),
		G(window, 'RexPlugins.UI.Pan', Qd);
	var sf = Phaser.Utils.Objects.GetValue,
		rf = Phaser.Utils.Array.SpliceOne,
		of = Phaser.Math.Distance.Between,
		hf = Phaser.Math.Angle.Between,
		af = (function () {
			function n(t, e) {
				B(this, n);
				var i = t.input.manager.pointersTotal - 1;
				i < 2 && t.input.addPointer(2 - i),
					(this.scene = t),
					this.setEventEmitter(sf(e, 'eventEmitter', void 0)),
					(this._enable = void 0),
					(this.pointers = []),
					(this.movedState = {}),
					this.resetFromJSON(e),
					this.boot();
			}
			return (
				m(n, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								this.setEnable(sf(t, 'enable', !0)),
								(this.bounds = sf(t, 'bounds', void 0)),
								(this.tracerState = uf),
								(this.pointers.length = 0),
								vt(this.movedState),
								this
							);
						},
					},
					{
						key: 'boot',
						value: function () {
							this.scene.input.on('pointerdown', this.onPointerDown, this),
								this.scene.input.on('pointerup', this.onPointerUp, this),
								this.scene.input.on('pointermove', this.onPointerMove, this),
								this.scene.events.once('shutdown', this.destroy, this);
						},
					},
					{
						key: 'shutdown',
						value: function () {
							this.destroyEventEmitter(),
								(this.pointers.length = 0),
								vt(this.movedState),
								this.scene &&
									(this.scene.input.off(
										'pointerdown',
										this.onPointerDown,
										this
									),
									this.scene.input.off('pointerup', this.onPointerUp, this),
									this.scene.input.off('pointermove', this.onPointerMove, this),
									this.scene.events.off('destroy', this.destroy, this),
									(this.scene = void 0)),
								(this.scene = void 0);
						},
					},
					{
						key: 'destroy',
						value: function () {
							this.shutdown();
						},
					},
					{
						key: 'enable',
						get: function () {
							return this._enable;
						},
						set: function (t) {
							if (this._enable !== t)
								return t || this.dragCancel(), (this._enable = t), this;
						},
					},
					{
						key: 'setEnable',
						value: function (t) {
							return void 0 === t && (t = !0), (this.enable = t), this;
						},
					},
					{
						key: 'toggleEnable',
						value: function () {
							return this.setEnable(!this.enable), this;
						},
					},
					{
						key: 'onPointerDown',
						value: function (t) {
							if (
								this.enable &&
								2 !== this.pointers.length &&
								(!this.bounds || this.bounds.contains(t.x, t.y)) &&
								-1 === this.pointers.indexOf(t)
							)
								switch (
									((this.movedState[t.id] = !1),
									this.pointers.push(t),
									this.tracerState)
								) {
									case uf:
										(this.tracerState = cf), this.onDrag1Start();
										break;
									case cf:
										(this.tracerState = df), this.onDrag2Start();
								}
						},
					},
					{
						key: 'onPointerUp',
						value: function (t) {
							if (
								this.enable &&
								(!this.bounds || this.bounds.contains(t.x, t.y))
							) {
								var e = this.pointers.indexOf(t);
								if (-1 !== e)
									switch (
										(delete this.movedState[t.id],
										rf(this.pointers, e),
										this.tracerState)
									) {
										case cf:
											(this.tracerState = uf), this.onDrag1End();
											break;
										case df:
											(this.tracerState = cf),
												this.onDrag2End(),
												this.onDrag1Start();
									}
							}
						},
					},
					{
						key: 'onPointerMove',
						value: function (t) {
							if (this.enable && t.isDown) {
								var e = !this.bounds || this.bounds.contains(t.x, t.y),
									i = -1 !== this.pointers.indexOf(t);
								if (i || !e)
									if (i && !e) this.onPointerUp(t);
									else if (
										(this.movedState[t.id] ||
											(this.movedState[t.id] =
												t.x !== t.downX || t.y !== t.downY),
										this.movedState[t.id])
									)
										switch (this.tracerState) {
											case cf:
												this.onDrag1();
												break;
											case df:
												this.onDrag2();
										}
							}
						},
					},
					{
						key: 'dragCancel',
						value: function () {
							return (
								this.tracerState === df && this.onDrag2End(),
								(this.pointers.length = 0),
								vt(this.movedState),
								(this.tracerState = uf),
								this
							);
						},
					},
					{
						key: 'onDrag1Start',
						value: function () {
							this.emit('drag1start', this);
						},
					},
					{
						key: 'onDrag1End',
						value: function () {
							this.emit('drag1end', this);
						},
					},
					{
						key: 'onDrag1',
						value: function () {
							this.emit('drag1', this);
						},
					},
					{
						key: 'onDrag2Start',
						value: function () {
							this.emit('drag2start', this);
						},
					},
					{
						key: 'onDrag2End',
						value: function () {
							this.emit('drag2end', this);
						},
					},
					{
						key: 'onDrag2',
						value: function () {
							this.emit('drag2', this);
						},
					},
					{
						key: 'distanceBetween',
						get: function () {
							if (this.tracerState !== df) return 0;
							var t = this.pointers[0],
								e = this.pointers[1];
							return of(t.x, t.y, e.x, e.y);
						},
					},
					{
						key: 'angleBetween',
						get: function () {
							if (this.tracerState !== df) return 0;
							var t = this.pointers[0],
								e = this.pointers[1];
							return hf(t.x, t.y, e.x, e.y);
						},
					},
					{
						key: 'drag1Vector',
						get: function () {
							var t = this.pointers[0];
							if (t && this.movedState[t.id]) {
								var e = t.position,
									i = t.prevPosition;
								(lf.x = e.x - i.x), (lf.y = e.y - i.y);
							} else (lf.x = 0), (lf.y = 0);
							return lf;
						},
					},
					{
						key: 'centerX',
						get: function () {
							if (this.tracerState !== df) return 0;
							var t = this.pointers[0].position,
								e = this.pointers[1].position;
							return (t.x + e.x) / 2;
						},
					},
					{
						key: 'centerY',
						get: function () {
							if (this.tracerState !== df) return 0;
							var t = this.pointers[0].position,
								e = this.pointers[1].position;
							return (t.y + e.y) / 2;
						},
					},
					{
						key: 'prevCenterX',
						get: function () {
							if (this.tracerState !== df) return 0;
							var t = this.movedState[this.pointers[0].id]
									? this.pointers[0].prevPosition
									: this.pointers[0].position,
								e = this.movedState[this.pointers[1].id]
									? this.pointers[1].prevPosition
									: this.pointers[1].position;
							return (t.x + e.x) / 2;
						},
					},
					{
						key: 'prevCenterY',
						get: function () {
							if (this.tracerState !== df) return 0;
							var t = this.movedState[this.pointers[0].id]
									? this.pointers[0].prevPosition
									: this.pointers[0].position,
								e = this.movedState[this.pointers[1].id]
									? this.pointers[1].prevPosition
									: this.pointers[1].position;
							return (t.y + e.y) / 2;
						},
					},
					{
						key: 'movementCenterX',
						get: function () {
							return this.centerX - this.prevCenterX;
						},
					},
					{
						key: 'movementCenterY',
						get: function () {
							return this.centerY - this.prevCenterY;
						},
					},
					{
						key: 'setRecongizedStateObject',
						value: function (t) {
							return (this.recongizedState = t), this;
						},
					},
					{
						key: 'state',
						get: function () {
							return this.recongizedState.state;
						},
						set: function (t) {
							this.recongizedState.state = t;
						},
					},
					{
						key: 'cancel',
						value: function () {
							return (this.state = ff), this;
						},
					},
				]),
				n
			);
		})();
	Object.assign(af.prototype, vr);
	var lf = {},
		uf = 0,
		cf = 1,
		df = 2,
		ff = 'IDLE',
		vf = Phaser.Utils.Objects.GetValue,
		pf = (function () {
			b(o, af);
			var r = w(o);
			function o(t, e) {
				var i;
				B(this, o);
				var n = E((i = r.call(this, t, e))),
					s = {
						states: {
							IDLE: {
								enter: function () {
									(n.prevDistance = void 0), (n.scaleFactor = 1);
								},
							},
							BEGIN: {},
							RECOGNIZED: {
								enter: function () {
									n.emit('pinchstart', n);
								},
								exit: function () {
									n.emit('pinchend', n);
								},
							},
						},
						init: function () {
							this.state = gf;
						},
						eventEmitter: !1,
					};
				return i.setRecongizedStateObject(new Al(s)), i;
			}
			return (
				m(o, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								C(x(o.prototype), 'resetFromJSON', this).call(this, t),
								this.setDragThreshold(vf(t, 'threshold', 0)),
								this
							);
						},
					},
					{
						key: 'onDrag2Start',
						value: function () {
							(this.scaleFactor = 1),
								(this.prevDistance = this.distanceBetween),
								(this.state = yf),
								0 === this.dragThreshold && (this.state = kf);
						},
					},
					{
						key: 'onDrag2End',
						value: function () {
							this.state = gf;
						},
					},
					{
						key: 'onDrag2',
						value: function () {
							switch (this.state) {
								case yf:
									if (
										this.pointers[0].getDistance() >= this.dragThreshold &&
										this.pointers[1].getDistance() >= this.dragThreshold
									) {
										var t = this.distanceBetween;
										(this.scaleFactor = t / this.prevDistance),
											(this.prevDistance = t),
											(this.state = kf);
									}
									break;
								case kf:
									t = this.distanceBetween;
									(this.scaleFactor = t / this.prevDistance),
										this.emit('pinch', this),
										(this.prevDistance = t);
							}
						},
					},
					{
						key: 'isPinch',
						get: function () {
							return this.state === kf;
						},
					},
					{
						key: 'setDragThreshold',
						value: function (t) {
							return (this.dragThreshold = t), this;
						},
					},
				]),
				o
			);
		})(),
		gf = 'IDLE',
		yf = 'BEGIN',
		kf = 'RECOGNIZED';
	u.register('pinch', function (t) {
		return new pf(this.scene, t);
	}),
		G(window, 'RexPlugins.UI.Pinch', pf);
	function mf(t, e, i, n) {
		return bf(t, e, i, n), (t.rotation += n), t;
	}
	var bf = Phaser.Math.RotateAround,
		xf = {},
		Cf = Phaser.Utils.Objects.GetValue,
		wf = Phaser.Math.Angle.WrapDegrees,
		Sf = Phaser.Math.Angle.ShortestBetween,
		Pf = Phaser.Math.RadToDeg,
		Of = Phaser.Math.DegToRad,
		Tf = (function () {
			b(o, af);
			var r = w(o);
			function o(t, e) {
				var i;
				B(this, o);
				var n = E((i = r.call(this, t, e))),
					s = {
						states: {
							IDLE: {
								enter: function () {
									(n.prevAngle = void 0), (n.angle = 0);
								},
							},
							BEGIN: {},
							RECOGNIZED: {
								enter: function () {
									n.emit('rotatestart', n);
								},
								exit: function () {
									n.emit('rotateend', n);
								},
							},
						},
						init: function () {
							this.state = _f;
						},
						eventEmitter: !1,
					};
				return i.setRecongizedStateObject(new Al(s)), i;
			}
			return (
				m(o, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								C(x(o.prototype), 'resetFromJSON', this).call(this, t),
								this.setDragThreshold(Cf(t, 'threshold', 0)),
								this
							);
						},
					},
					{
						key: 'onDrag2Start',
						value: function () {
							(this.prevAngle = wf(Pf(this.angleBetween))),
								(this.state = zf),
								0 === this.dragThreshold && (this.state = Bf);
						},
					},
					{
						key: 'onDrag2End',
						value: function () {
							this.state = _f;
						},
					},
					{
						key: 'onDrag2',
						value: function () {
							switch (this.state) {
								case zf:
									if (
										this.pointers[0].getDistance() >= this.dragThreshold &&
										this.pointers[1].getDistance() >= this.dragThreshold
									) {
										var t = wf(Pf(this.angleBetween));
										(this.angle = Sf(this.prevAngle, t)),
											(this.prevAngle = t),
											(this.state = Bf);
									}
									break;
								case Bf:
									t = wf(Pf(this.angleBetween));
									(this.angle = Sf(this.prevAngle, t)),
										(this.prevAngle = t),
										this.emit('rotate', this);
							}
						},
					},
					{
						key: 'isRotation',
						get: function () {
							return this.state === Bf;
						},
					},
					{
						key: 'rotation',
						get: function () {
							return Of(this.angle);
						},
					},
					{
						key: 'setDragThreshold',
						value: function (t) {
							return (this.dragThreshold = t), this;
						},
					},
				]),
				o
			);
		})(),
		Mf = {
			spinObject: function (t, e) {
				if (!this.isRotation) return this;
				void 0 === e && (e = this.pointers[0].camera);
				var i = this.movementCenterX,
					n = this.movementCenterY;
				e.getWorldPoint(this.centerX, this.centerY, xf);
				var s = xf.x,
					r = xf.y,
					o = this.rotation;
				if (Array.isArray(t))
					for (var h = t, a = 0, l = h.length; a < l; a++)
						((t = h[a]).x += i), (t.y += n), mf(t, s, r, o);
				else (t.x += i), (t.y += n), mf(t, s, r, o);
				return this;
			},
		};
	Object.assign(Tf.prototype, Mf);
	var _f = 'IDLE',
		zf = 'BEGIN',
		Bf = 'RECOGNIZED';
	u.register('rotate', function (t) {
		return new Tf(this.scene, t);
	}),
		G(window, 'RexPlugins.UI.Rotate', Tf);
	function Ef(e, i, t) {
		var n;
		if (void 0 === e) (e = t.texture.key), (i = t.frame.name);
		else if (Df(e)) {
			var s = e;
			(e = jf(s, 'key', t.texture.key)), (i = jf(s, 'frame', t.frame.name));
		} else 'string' == typeof e || (n = e);
		return (
			void 0 === n &&
				(n = function (t) {
					t.setTexture(e, i);
				}),
			n
		);
	}
	var Df = Phaser.Utils.Objects.IsPlainObject,
		jf = Phaser.Utils.Objects.GetValue,
		Rf = Phaser.Utils.Objects.GetValue,
		Lf = Phaser.Utils.Objects.GetAdvancedValue,
		Yf = (function () {
			b(s, kr);
			var n = w(s);
			function s(t, e) {
				var i;
				return (
					B(this, s),
					((i = n.call(this, t, {eventEmitter: !0})).gameObject = t),
					i.resetFromJSON(e),
					i
				);
			}
			return (
				m(s, [
					{
						key: 'resetFromJSON',
						value: function (t) {
							return (
								this.setOrientation(Rf(t, 'orientation', 0)),
								this.setDelay(Lf(t, 'delay', 0)),
								this.setDuration(Lf(t, 'duration', 500)),
								this.setEase(Rf(t, 'ease', 'Sine')),
								this.setFrontFace(Rf(t, 'front', void 0)),
								this.setBackFace(Rf(t, 'back', void 0)),
								this.setFace(Rf(t, 'face', 0)),
								this
							);
						},
					},
					{
						key: 'shutdown',
						value: function () {
							return (
								C(x(s.prototype), 'shutdown', this).call(this),
								(this.gameObject = void 0),
								this
							);
						},
					},
					{
						key: 'setOrientation',
						value: function (t) {
							return (
								'string' == typeof t && (t = If[t]),
								(this.orientation = t),
								this
							);
						},
					},
					{
						key: 'setDelay',
						value: function (t) {
							return (this.delay = t), this;
						},
					},
					{
						key: 'setDuration',
						value: function (t) {
							return (this.duration = t), this;
						},
					},
					{
						key: 'setEase',
						value: function (t) {
							return void 0 === t && (t = 'Linear'), (this.ease = t), this;
						},
					},
					{
						key: 'face',
						get: function () {
							return this._face;
						},
						set: function (t) {
							'string' == typeof t && (t = Af[t]),
								0 === (this._face = t) && this.frontFaceCallback
									? this.frontFaceCallback(this.gameObject)
									: 1 === t &&
									  this.backFaceCallback &&
									  this.backFaceCallback(this.gameObject);
						},
					},
					{
						key: 'setFace',
						value: function (t) {
							return (this.face = t), this;
						},
					},
					{
						key: 'toggleFace',
						value: function () {
							var t = 0 === this.face ? 1 : 0;
							return this.setFace(t), this;
						},
					},
					{
						key: 'setFrontFace',
						value: function (t, e) {
							return (this.frontFaceCallback = Ef(t, e, this.gameObject)), this;
						},
					},
					{
						key: 'setBackFace',
						value: function (t, e) {
							return (this.backFaceCallback = Ef(t, e, this.gameObject)), this;
						},
					},
					{
						key: 'start',
						value: function () {
							if (this.isRunning) return this;
							var t = {
								targets: this.gameObject,
								delay: this.delay,
								duration: this.duration / 2,
								ease: this.ease,
								yoyo: !0,
								repeat: 0,
								onYoyo: this.toggleFace,
								onYoyoScope: this,
							};
							return (
								(t[0 === this.orientation ? 'scaleX' : 'scaleY'] = {
									start: 1,
									to: 0,
								}),
								C(x(s.prototype), 'start', this).call(this, t),
								this
							);
						},
					},
					{
						key: 'flip',
						value: function (t) {
							return (
								this.isRunning ||
									(void 0 !== t && this.setDuration(t), this.start()),
								this
							);
						},
					},
				]),
				s
			);
		})(),
		If = {x: 0, horizontal: 0, y: 1, vertical: 1},
		Af = {front: 0, back: 1};
	u.register('flip', function (t, e) {
		return new Yf(t, e);
	}),
		G(window, 'RexPlugins.UI.Flip', Yf);
	function Ff(t) {
		var e = t.gameObjects,
			i = t.renderTexture;
		if (0 === e.length) return i && i.setSize(1, 1).clear(), i;
		var n,
			s,
			r = av(t, 'x', void 0),
			o = av(t, 'y', void 0),
			h = av(t, 'width', void 0),
			a = av(t, 'height', void 0),
			l = av(t, 'originX', 0),
			u = av(t, 'originY', 0);
		if (void 0 === h || void 0 === a || void 0 === r || void 0 === o) {
			var c = (function (t, e) {
				var i;
				void 0 === e
					? (e = new ov())
					: !0 === e && (void 0 === Hf && (Hf = new ov()), (e = Hf));
				for (var n = !0, s = 0, r = t.length; s < r; s++)
					(i = t[s]).getBounds &&
						((Wf = i.getBounds(Wf)),
						n
							? (e.setTo(Wf.x, Wf.y, Wf.width, Wf.height), (n = !1))
							: hv(Wf, e, e));
				return e;
			})(e, !0);
			(u = l =
				void 0 !== r && void 0 !== o
					? ((h = 2 * Math.max(r - c.left, c.right - r)),
					  (a = 2 * Math.max(o - c.top, c.bottom - o)),
					  0.5)
					: ((r = c.x), (o = c.y), (h = c.width), (a = c.height), 0)),
				(n = c.x),
				(s = c.y);
		} else (n = r + (0 - l) * h), (s = o + (0 - u) * a);
		return (
			i
				? (i.setPosition(r, o),
				  (i.width === h && i.height === a) || i.setSize(h, a))
				: (i = e[0].scene.add.renderTexture(r, o, h, a)),
			i.setOrigin(l, u),
			i.camera.setScroll(n, s),
			(e = (function (t, e) {
				if (0 === t.length) return t;
				void 0 === e && (e = !1);
				var i = t[0].scene.sys.displayList;
				return (
					i.depthSort(),
					e
						? t.sort(function (t, e) {
								return i.getIndex(e) - i.getIndex(t);
						  })
						: t.sort(function (t, e) {
								return i.getIndex(t) - i.getIndex(e);
						  }),
					t
				);
			})(pt(e))),
			i.draw(e),
			i
		);
	}
	var Wf,
		Hf,
		Xf = Phaser.Math.Vector3,
		Vf = Phaser.Math.Matrix4,
		Gf = new Xf(),
		Uf = new Xf(),
		Nf = new Vf(),
		Jf = Phaser.GameObjects.Mesh,
		Kf = Phaser.Utils.Objects.IsPlainObject,
		Zf = Phaser.Utils.Objects.GetValue,
		qf = Phaser.Geom.Mesh.GenerateGridVerts,
		$f = Phaser.Math.RadToDeg,
		Qf = Phaser.Math.DegToRad,
		tv = 1 + 1 / Math.sin(Qf(45)),
		ev = (function () {
			b(u, Jf);
			var l = w(u);
			function u(t, e, i, n, s, r) {
				var o;
				B(this, u),
					Kf(e) &&
						((e = Zf((r = e), 'x', 0)),
						(i = Zf(r, 'y', 0)),
						(n = Zf(r, 'key', null)),
						(s = Zf(r, 'frame', null))),
					((o = l.call(this, t, e, i, n, s)).type = 'rexPerspectiveImage'),
					o.setSizeToFrame(),
					o.resetPerspective(),
					o.panZ(tv),
					(o.hideCCW = Zf(r, 'hideCCW', !0));
				var h = Zf(r, 'gridWidth', 32),
					a = Zf(r, 'girdHeight', h);
				return o.resetVerts(h, a), o;
			}
			return (
				m(u, [
					{
						key: 'resetPerspective',
						value: function () {
							return this.setPerspective(this.width, this.height, 45), this;
						},
					},
					{
						key: 'resetVerts',
						value: function (t, e) {
							if (
								(void 0 !== t && (this.girdWidth = t),
								void 0 !== e && (this.girdHeight = e),
								this.clear(),
								(this.dirtyCache[9] = -1),
								0 === this.width || 0 === this.height)
							)
								return this;
							var i = this.frame.cutWidth,
								n = this.frame.cutHeight;
							return (
								qf({
									mesh: this,
									texture: this.texture.key,
									frame: this.frame.name,
									width: i / this.height,
									height: n / this.height,
									widthSegments: Math.ceil(i / this.girdWidth),
									heightSegments: Math.ceil(n / this.girdHeight),
									flipY: this.frame.source.isRenderTexture,
								}),
								this
							);
						},
					},
					{
						key: 'syncSize',
						value: function () {
							return (
								this.setSizeToFrame(),
								this.resetPerspective(),
								this.resetVerts(),
								this
							);
						},
					},
					{
						key: 'rotationX',
						get: function () {
							return this.modelRotation.x;
						},
						set: function (t) {
							this.modelRotation.x = t;
						},
					},
					{
						key: 'angleX',
						get: function () {
							return $f(this.rotationX);
						},
						set: function (t) {
							this.rotationX = Qf(t);
						},
					},
					{
						key: 'rotationY',
						get: function () {
							return this.modelRotation.y;
						},
						set: function (t) {
							this.modelRotation.y = t;
						},
					},
					{
						key: 'angleY',
						get: function () {
							return $f(this.rotationY);
						},
						set: function (t) {
							this.rotationY = Qf(t);
						},
					},
					{
						key: 'rotationZ',
						get: function () {
							return this.modelRotation.z;
						},
						set: function (t) {
							this.modelRotation.z = t;
						},
					},
					{
						key: 'angleZ',
						get: function () {
							return $f(this.rotationZ);
						},
						set: function (t) {
							this.rotationZ = Qf(t);
						},
					},
					{
						key: 'transformVerts',
						value: function (t, e, i, n, s, r) {
							return (
								(function (t, e, i, n, s, r, o) {
									void 0 === e && (e = 0),
										void 0 === i && (i = 0),
										void 0 === n && (n = 0),
										void 0 === s && (s = 0),
										void 0 === r && (r = 0),
										void 0 === o && (o = 0),
										Gf.set(e, i, n),
										Uf.set(s, r, o),
										Nf.fromRotationXYTranslation(Uf, Gf, !0);
									for (var h = 0, a = t.vertices.length; h < a; h++)
										t.vertices[h].transformMat4(Nf);
								})(this, t, e, i, n, s, r),
								this
							);
						},
					},
					{
						key: 'forceUpdate',
						value: function () {
							return (this.dirtyCache[10] = 1), this;
						},
					},
				]),
				u
			);
		})(),
		iv = Phaser.GameObjects.RenderTexture,
		nv = Phaser.Utils.Objects.IsPlainObject,
		sv = Phaser.Utils.Objects.GetValue,
		rv = (function () {
			b(l, ev);
			var a = w(l);
			function l(t, e, i, n, s, r) {
				var o;
				B(this, l),
					nv(e) &&
						((e = sv((r = e), 'x', 0)),
						(i = sv(r, 'y', 0)),
						(n = sv(r, 'width', 32)),
						(s = sv(r, 'height', 32)));
				var h = new iv(t, e, i, n, s).setOrigin(0.5);
				return (
					((o = a.call(this, t, e, i, h.texture.key, null, r)).type =
						'rexPerspectiveRenderTexture'),
					(o.rt = h),
					o
				);
			}
			return (
				m(l, [
					{
						key: 'destroy',
						value: function (t) {
							C(x(l.prototype), 'destroy', this).call(this, t),
								this.rt.destroy(t),
								(this.rt = null);
						},
					},
				]),
				l
			);
		})(),
		ov = Phaser.Geom.Rectangle,
		hv = Phaser.Geom.Rectangle.Union,
		av = Phaser.Utils.Objects.GetValue,
		lv = Vi.prototype.add,
		uv = Phaser.Utils.Objects.GetValue,
		cv = (function () {
			b(r, rv);
			var s = w(r);
			function r(t, e) {
				var i;
				B(this, r);
				var n = t.scene;
				return (
					(i = s.call(this, n, t.x, t.y, 1, 1, e)),
					n.add.existing(E(i)),
					i.setVisible(!1),
					lv.call(t, E(i)),
					(i.visibleSibling = []),
					(i.perspectiveState = !1),
					(i.useParentBounds = uv(e, 'useParentBounds', !1)),
					i.boot(),
					i
				);
			}
			return (
				m(r, [
					{
						key: 'boot',
						value: function () {
							this.rexContainer.parent.on('destroy', this.destroy, this);
						},
					},
					{
						key: 'destroy',
						value: function (t) {
							this.exit(), C(x(r.prototype), 'destroy', this).call(this, t);
						},
					},
					{
						key: 'enter',
						value: function () {
							this.exit();
							var e = this.rexContainer.parent;
							return (
								Ff({
									gameObjects: e.getAllVisibleChildren(),
									renderTexture: this.rt,
									x: this.x,
									y: this.y,
									width: this.useParentBounds ? e.displayWidth : void 0,
									height: this.useParentBounds ? e.displayHeighth : void 0,
									originX: this.useParentBounds ? e.originX : void 0,
									originY: this.useParentBounds ? e.originY : void 0,
								}),
								this.syncSize(),
								e.setChildVisible(this, !0),
								e.children.forEach(function (t) {
									t !== this &&
										(e.setChildVisible(t, !1), this.visibleSibling.push(t));
								}, this),
								(this.perspectiveState = !0),
								this
							);
						},
					},
					{
						key: 'exit',
						value: function () {
							var e = this.rexContainer.parent;
							return (
								this.visibleSibling.forEach(function (t) {
									e.setChildVisible(t, !0);
								}, this),
								(this.visibleSibling.length = 0),
								e.setChildVisible(this, !1),
								(this.perspectiveState = !1),
								this
							);
						},
					},
				]),
				r
			);
		})();
	u.register('perspective', function (t, e) {
		return new cv(t, e);
	}),
		G(window, 'RexPlugins.UI.Perspective', cv);
	function dv(t, e, i) {
		var n, s;
		for (var r in (void 0 === i && (i = {}), t))
			(n = t[r]), void 0 !== (s = gv(e, r, n[1])) && (i[n[0]] = s);
		return i;
	}
	function fv(i, t, n) {
		function e(e) {
			t[n[e]] = function (t) {
				i.emit(e, i, t);
			};
		}
		for (var s in n) e(s);
	}
	var vv = gi,
		pv = yi,
		gv = Phaser.Utils.Objects.GetValue,
		yv = function (t) {
			t.stopPropagation();
		},
		kv = Phaser.GameObjects.DOMElement,
		mv = Phaser.Utils.Objects.IsPlainObject,
		bv = Phaser.Utils.Objects.GetValue,
		xv = (function () {
			b(v, kv);
			var f = w(v);
			function v(t, e, i, n, s, r) {
				var o, h;
				B(this, v),
					mv(e)
						? ((e = bv((r = e), 'x', 0)),
						  (i = bv(r, 'y', 0)),
						  (n = bv(r, 'width', 0)),
						  (s = bv(r, 'height', 0)))
						: mv(n) &&
						  ((n = bv((r = n), 'width', 0)), (s = bv(r, 'height', 0))),
					void 0 === r && (r = {});
				var a = bv(r, 'type', 'text');
				'textarea' === a
					? ((h = document.createElement('textarea')).style.resize = 'none')
					: ((h = document.createElement('input')).type = a),
					dv(Pv, r, h);
				var l = bv(r, 'style', void 0);
				l = dv(Ov, r, l);
				var u,
					c = h.style;
				for (var d in r) d in Pv || d in Ov || (d in c && (l[d] = r[d]));
				return (
					(l['box-sizing'] = 'border-box'),
					((o = f.call(this, t, e, i, h, l)).type = 'rexInputText'),
					o.resize(n, s),
					fv(E(o), h, Tv),
					(u = h).addEventListener('touchstart', yv, !1),
					u.addEventListener('touchmove', yv, !1),
					u.addEventListener('touchend', yv, !1),
					u.addEventListener('mousedown', yv, !1),
					u.addEventListener('mouseup', yv, !1),
					u.addEventListener('mousemove', yv, !1),
					bv(r, 'selectAll', !1) && o.selectAll(),
					o
				);
			}
			return (
				m(v, [
					{
						key: 'text',
						get: function () {
							return this.node.value;
						},
						set: function (t) {
							this.node.value = t;
						},
					},
					{
						key: 'setText',
						value: function (t) {
							return (this.text = t), this;
						},
					},
					{
						key: 'maxLength',
						get: function () {
							return this.node.maxLength;
						},
						set: function (t) {
							this.node.maxLength = t;
						},
					},
					{
						key: 'setMaxLength',
						value: function (t) {
							return (this.maxLength = t), this;
						},
					},
					{
						key: 'minLength',
						get: function () {
							return this.node.minLength;
						},
						set: function (t) {
							this.node.minLength = t;
						},
					},
					{
						key: 'setMinLength',
						value: function (t) {
							return (this.minLength = t), this;
						},
					},
					{
						key: 'placeholder',
						get: function () {
							return this.node.placeholder;
						},
						set: function (t) {
							this.node.placeholder = t;
						},
					},
					{
						key: 'setPlaceholder',
						value: function (t) {
							return (this.placeholder = t), this;
						},
					},
					{
						key: 'selectText',
						value: function () {
							return this.node.select(), this;
						},
					},
					{
						key: 'tooltip',
						get: function () {
							return this.node.title;
						},
						set: function (t) {
							this.node.title = t;
						},
					},
					{
						key: 'setTooltip',
						value: function (t) {
							return (this.tooltip = t), this;
						},
					},
					{
						key: 'setTextChangedCallback',
						value: function (t) {
							return (this.onTextChanged = t), this;
						},
					},
					{
						key: 'readOnly',
						get: function () {
							return this.node.readOnly;
						},
						set: function (t) {
							this.node.readOnly = t;
						},
					},
					{
						key: 'setReadOnly',
						value: function (t) {
							return void 0 === t && (t = !0), (this.readOnly = t), this;
						},
					},
					{
						key: 'spellCheck',
						get: function () {
							return this.node.spellcheck;
						},
						set: function (t) {
							this.node.spellcheck = t;
						},
					},
					{
						key: 'setSpellCheck',
						value: function (t) {
							return (this.spellCheck = t), this;
						},
					},
					{
						key: 'fontColor',
						get: function () {
							return this.node.style.color;
						},
						set: function (t) {
							this.node.style.color = t;
						},
					},
					{
						key: 'setFontColor',
						value: function (t) {
							return (this.fontColor = t), this;
						},
					},
					{
						key: 'setStyle',
						value: function (t, e) {
							return (this.node.style[t] = e), this;
						},
					},
					{
						key: 'getStyle',
						value: function (t) {
							return this.node.style[t];
						},
					},
					{
						key: 'scrollToBottom',
						value: function () {
							return (this.node.scrollTop = this.node.scrollHeight), this;
						},
					},
					{
						key: 'setEnabled',
						value: function (t) {
							return void 0 === t && (t = !0), (this.node.disabled = !t), this;
						},
					},
					{
						key: 'setBlur',
						value: function () {
							return this.node.blur(), this;
						},
					},
					{
						key: 'setFocus',
						value: function () {
							return this.node.focus(), this;
						},
					},
					{
						key: 'selectAll',
						value: function () {
							return this.node.select(), this;
						},
					},
				]),
				v
			);
		})(),
		Cv = {
			resize: function (t, e) {
				if (
					(this.scene.scale.autoRound &&
						((t = Math.floor(t)), (e = Math.floor(e))),
					this.width === t && this.height === e)
				)
					return this;
				var i = this.node.style;
				return (
					(i.width = ''.concat(t, 'px')),
					(i.height = ''.concat(e, 'px')),
					this.updateSize(),
					this
				);
			},
		};
	Object.assign(xv.prototype, Cv);
	function wv(t, e, i) {
		for (var n, s = 0, r = t.length; s < r; s++)
			if (((n = t[s]), Tr(n, e, i))) return n.pointToChild(e, i);
		return null;
	}
	function Sv(t, e, i, n, s, r) {
		var o;
		(o = void 0 === s ? n : wv(i, n, s)) && t.emit(e, o, r);
	}
	var Pv = {
			id: ['id', void 0],
			text: ['value', void 0],
			maxLength: ['maxLength', void 0],
			minLength: ['minLength', void 0],
			placeholder: ['placeholder', void 0],
			tooltip: ['title', void 0],
			readOnly: ['readOnly', !1],
			spellCheck: ['spellcheck', !1],
			autoComplete: ['autocomplete', 'off'],
		},
		Ov = {
			align: ['textAlign', void 0],
			paddingLeft: ['padding-left', void 0],
			paddingRight: ['padding-right', void 0],
			paddingTop: ['padding-top', void 0],
			paddingBottom: ['padding-bottom', void 0],
			fontFamily: ['fontFamily', void 0],
			fontSize: ['font-size', void 0],
			color: ['color', '#ffffff'],
			backgroundColor: ['backgroundColor', 'transparent'],
			border: ['border', 0],
			borderColor: ['borderColor', 'transparent'],
			outline: ['outline', 'none'],
		},
		Tv = {
			textchange: 'oninput',
			click: 'onclick',
			dblclick: 'ondblclick',
			focus: 'onfocus',
			blur: 'onblur',
		},
		Mv = Phaser.Utils.Objects.GetValue,
		_v = function (t) {
			return t.hasOwnProperty('align')
				? t.align
				: t.hasOwnProperty('halign')
				? t.halign
				: 'left';
		},
		zv = Phaser.Utils.Objects.GetValue,
		Bv = (function () {
			function e(t) {
				B(this, e),
					(this.gameObject = t),
					(this.scene = tr(t)),
					(this.inputText = void 0),
					(this.onClose = void 0),
					(this.delayCall = void 0),
					this.boot();
			}
			return (
				m(e, [
					{
						key: 'boot',
						value: function () {
							return this.gameObject.on('destroy', this.destroy, this), this;
						},
					},
					{
						key: 'shutdown',
						value: function () {
							return (
								this.close(),
								(this.gameObject = void 0),
								(this.scene = void 0),
								Ev === this && (Ev = void 0),
								this
							);
						},
					},
					{
						key: 'destroy',
						value: function () {
							return this.shutdown(), this;
						},
					},
					{
						key: 'open',
						value: function (t, e) {
							void 0 !== Ev && Ev.close(),
								(Ev = this),
								Or(t) && ((e = t), (t = void 0)),
								void 0 === e && (e = zv(t, 'onClose', void 0));
							var i = zv(t, 'onOpen', void 0),
								n = zv(t, 'onTextChanged', void 0);
							return (
								(this.inputText = (function (t, e) {
									void 0 === e && (e = {});
									var i = t.scene,
										n = t.style,
										s = Mv(e, 'backgroundColor', n.backgroundColor);
									null === s && (s = 'transparent'),
										(e.text = Mv(e, 'text', t.text)),
										(e.fontFamily = Mv(e, 'fontFamily', n.fontFamily)),
										(e.fontSize = Mv(e, 'fontSize', n.fontSize)),
										(e.color = Mv(e, 'color', n.color)),
										(e.backgroundColor = s),
										(e.align = Mv(e, 'align', _v(n)));
									var r = new xv(
										i,
										t.x,
										t.y,
										Mv(e, 'width', t.width),
										Mv(e, 'height', t.height),
										e
									);
									return (
										r.setOrigin(t.originX, t.originY), i.add.existing(r), r
									);
								})(this.gameObject, t)
									.on(
										'textchange',
										function (t) {
											var e = t.text;
											n ? n(this.gameObject, e) : (this.gameObject.text = e);
										},
										this
									)
									.setFocus()),
								this.gameObject.setVisible(!1),
								(this.onClose = e),
								zv(t, 'enterClose', !0) &&
									this.scene.input.keyboard.once(
										'keydown-ENTER',
										this.close,
										this
									),
								(this.delayCall = this.scene.time.delayedCall(
									0,
									function () {
										this.scene.input.once('pointerdown', this.close, this),
											i && i(this.gameObject);
									},
									[],
									this
								)),
								this
							);
						},
					},
					{
						key: 'close',
						value: function () {
							return (
								(Ev = void 0),
								this.inputText &&
									(this.gameObject.setVisible(!0),
									this.inputText.destroy(),
									(this.inputText = void 0),
									this.delayCall &&
										(this.delayCall.remove(), (this.delayCall = void 0)),
									this.scene.input.keyboard.off(
										'keydown-ENTER',
										this.close,
										this
									),
									this.scene.input.off('pointerdown', this.close, this),
									this.onClose && this.onClose(this.gameObject)),
								this
							);
						},
					},
					{
						key: 'isOpened',
						get: function () {
							return void 0 !== this.inputText;
						},
					},
					{
						key: 'text',
						get: function () {
							return this.isOpened ? this.inputText.text : this.gameObject.text;
						},
					},
				]),
				e
			);
		})(),
		Ev = void 0,
		Dv = Phaser.Utils.Objects.GetValue,
		jv = Phaser.Utils.Objects.GetValue,
		Rv = function (t) {
			var e = wv(this.input.targetSizers, t.x, t.y),
				i = this.input.lastOverChild;
			(e && i && e === i) ||
				((this.input.lastOverChild = e),
				Sv(
					this.eventEmitter,
					''.concat(this.input.eventNamePrefix, 'out'),
					this.input.targetSizers,
					i,
					void 0,
					t
				),
				Sv(
					this.eventEmitter,
					''.concat(this.input.eventNamePrefix, 'over'),
					this.input.targetSizers,
					e,
					void 0,
					t
				));
		},
		Lv = function (t) {
			var e = this.input.lastOverChild;
			(this.input.lastOverChild = null),
				Sv(
					this.eventEmitter,
					''.concat(this.input.eventNamePrefix, 'out'),
					this.input.targetSizers,
					e,
					void 0,
					t
				);
		},
		Yv = Phaser.Utils.Objects.GetValue,
		Iv = Phaser.Utils.Objects.GetValue,
		Av = Phaser.Utils.Objects.GetValue,
		Fv = Phaser.Utils.Objects.GetValue,
		Wv = (function () {
			b(s, Phaser.Plugins.ScenePlugin);
			var n = w(s);
			function s(t, e) {
				var i;
				return B(this, s), ((i = n.call(this, t, e)).add = new u(t)), i;
			}
			return (
				m(s, [
					{
						key: 'start',
						value: function () {
							this.scene.events.on('destroy', this.destroy, this);
						},
					},
					{
						key: 'isInTouching',
						value: function (t, e, i, n) {
							return !!t.visible && Pr(t, e, i, n);
						},
					},
					{
						key: 'viewport',
						get: function () {
							return $s(this.scene, !0);
						},
					},
				]),
				s
			);
		})(),
		Hv = {
			getParentSizer: vv,
			getTopmostSizer: pv,
			hide: Cr,
			show: xr,
			isShown: wr,
			edit: function (t, e, i) {
				return t._edit || (t._edit = new Bv(t)), t._edit.open(e, i), t._edit;
			},
			wrapExpandText: function (t, e) {
				var s, i, n;
				return (
					void 0 === e && (e = 0),
					(t.minWidth = e),
					(t.runWidthWrap =
						t instanceof Bn
							? ((n = t),
							  function (t) {
									return n.setFixedSize(t, 0).runWordWrap(), n;
							  })
							: _c(t)
							? ((i = t),
							  function (t) {
									return i.setMaxWidth(t), i;
							  })
							: ((s = t),
							  function (t) {
									var e = s.padding,
										i = t - e.left - e.right,
										n = s.style;
									return (
										Mc(s)
											? (n.wordWrapWidth = i)
											: (0 === n.wrapMode && (n.wrapMode = 1),
											  (n.wrapWidth = i)),
										(n.maxLines = 0),
										s.setFixedSize(t, 0),
										s
									);
							  })),
					t
				);
			},
			waitEvent: mr,
			waitComplete: br,
			setChildrenInteractive: function (t, e) {
				return (
					t.setInteractive(),
					(t.eventEmitter = Fv(e, 'eventEmitter', t)),
					(t.input.targetSizers = Fv(e, 'targets', [t])),
					(t.input.eventNamePrefix = Fv(e, 'inputEventPrefix', 'child.')),
					function (t) {
						var e = Dv(t, 'click', void 0);
						!1 !== e &&
							(void 0 === e && (e = {}),
							e.hasOwnProperty('threshold') || (e.threshold = 10),
							(this._click = new ga(this, e)),
							this._click.on(
								'click',
								function (t, e, i) {
									Sv(
										this.eventEmitter,
										''.concat(this.input.eventNamePrefix, 'click'),
										this.input.targetSizers,
										i.x,
										i.y,
										i
									);
								},
								this
							));
					}.call(t, e),
					function (t) {
						!1 !== jv(t, 'over', void 0) &&
							this.on('pointermove', Rv, this)
								.on('pointerover', Rv, this)
								.on('pointerout', Lv, this);
					}.call(t, e),
					function (t) {
						var e = Yv(t, 'tap', void 0);
						!1 !== e &&
							((this._tap = new Gu(this, e)),
							this._tap.on(
								'tap',
								function (t, e, i) {
									Sv(
										this.eventEmitter,
										''
											.concat(this.input.eventNamePrefix)
											.concat(t.tapsCount, 'tap'),
										this.input.targetSizers,
										t.x,
										t.y,
										i
									);
								},
								this
							));
					}.call(t, e),
					function (t) {
						var e = Iv(t, 'press', void 0);
						!1 !== e &&
							((this._press = new qu(this, e)),
							this._press
								.on(
									'pressstart',
									function (t, e, i) {
										Sv(
											this.eventEmitter,
											''.concat(this.input.eventNamePrefix, 'pressstart'),
											this.input.targetSizers,
											t.x,
											t.y,
											i
										);
									},
									this
								)
								.on(
									'pressend',
									function (t, e, i) {
										Sv(
											this.eventEmitter,
											''.concat(this.input.eventNamePrefix, 'pressend'),
											this.input.targetSizers,
											t.x,
											t.y,
											i
										);
									},
									this
								));
					}.call(t, e),
					function (t) {
						var e = Av(t, 'swipe', void 0);
						!1 !== e &&
							(void 0 === e && (e = {}),
							(e.dir = '4dir'),
							(this._swipe = new lc(this, e)),
							this._swipe.on(
								'swipe',
								function (t, e, i) {
									var n = t.left
										? 'left'
										: t.right
										? 'right'
										: t.up
										? 'up'
										: 'down';
									Sv(
										this.eventEmitter,
										''.concat(this.input.eventNamePrefix, 'swipe').concat(n),
										this.input.targetSizers,
										t.x,
										t.y,
										i
									);
								},
								this
							));
					}.call(t, e),
					t
				);
			},
		};
	return Object.assign(Wv.prototype, Hv), Wv;
});
