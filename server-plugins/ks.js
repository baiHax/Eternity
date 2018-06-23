/*
 * KickServer created by Maaff / SnakeRL, fantasmano and wonderchoose
 */
 exports.commands = {
     ks: 'kickserver',
     kickserver: function (target, room, user) {
         if (!this.can('ban')) return this.errorReply("/kickserver [nombre de usuario] - Acceso Denegado.");
         if (!target) return this.parse('/help kickserver');
         target = this.splitTarget(target);
         let targetUser = this.targetUser;
         if (target.length > 19) return this.errorReply("' Usuario" + this.targetUsername + "' no encontrado.");
         if (!targetUser) return this.errorReply("Usuario '" + this.targetUsername + "'no encontrando.");
         this.addModAction(targetUser.name + " was kicked from the server by " + user.name + ".");
         targetUser.disconnectAll();
     },
     kickserverhelp: ["/kickserver o /ks [nombre de usuario] - kickea a un usuario. Requiere: @ & ~"],
 };