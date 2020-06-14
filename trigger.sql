CREATE TRIGGER `Insert_Diff` AFTER INSERT ON `maintable`
 FOR EACH ROW CALL Insert_Diff()